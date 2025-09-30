import { BaseUnit } from '../units/BaseUnit';
import { PlayerUpgrades } from '../upgrades/PlayerUpgrades';

export interface CombatPair {
	player: BaseUnit;
	enemy: BaseUnit;
	isActive: boolean;
}

export interface CombatCallbacks {
	onEnemyDeath: (enemy: BaseUnit, reward: { minerals: number; gas: number; essence: number }) => void;
	onPlayerDeath: () => void;
	onDamageDealt: (attacker: BaseUnit, defender: BaseUnit, damage: number) => void;
}

export class CombatManager {
	private activeFights: CombatPair[] = [];
	private callbacks: CombatCallbacks;
	private playerUpgrades: PlayerUpgrades | null = null;

	constructor(callbacks: CombatCallbacks) {
		this.callbacks = callbacks;
	}

	// Set player upgrades reference (call from level)
	public setPlayerUpgrades(upgrades: PlayerUpgrades): void {
		this.playerUpgrades = upgrades;
	}

	/**
	 * Check if player should start fighting with an enemy
	 * Returns true if combat was initiated
	 */
	public checkCombatInitiation(
		player: BaseUnit,
		enemies: BaseUnit[],
		shouldFight: (playerType: string, enemyType: string) => boolean
	): boolean {
		// Check if player is already in combat
		if (player.getIsInCombat()) {
			return false;
		}

		const playerPos = player.getPosition();
		const playerRadius = player.getRadius();
		const playerType = player.getUnitTypeName();

		// Check each enemy for combat range
		for (const enemy of enemies) {
			// Skip if enemy is already in combat or dead
			if (enemy.getIsInCombat() || !enemy.isAlive()) {
				continue;
			}

			const enemyPos = enemy.getPosition();
			const enemyRadius = enemy.getRadius();
			const enemyType = enemy.getUnitTypeName();

			// Calculate distance
			const distance = Math.sqrt(
				Math.pow(playerPos.x - enemyPos.x, 2) +
				Math.pow(playerPos.y - enemyPos.y, 2)
			);

			// Check if in combat range and should fight
			const combatRange = playerRadius + enemyRadius;
			if (distance < combatRange && shouldFight(playerType, enemyType)) {
				// Start combat
				this.startCombat(player, enemy);
				return true;
			}
		}

		return false;
	}

	/**
	 * Start combat between player and enemy
	 */
	private startCombat(player: BaseUnit, enemy: BaseUnit): void {
		player.setIsInCombat(true);
		enemy.setIsInCombat(true);

		this.activeFights.push({
			player,
			enemy,
			isActive: true
		});

		console.log(`Combat started: ${player.getUnitTypeName()} vs ${enemy.getUnitTypeName()}`);
	}

	/**
	 * Update all active fights
	 */
	public update(deltaTime: number): void {
		for (let i = this.activeFights.length - 1; i >= 0; i--) {
			const fight = this.activeFights[i];

			if (!fight.isActive) {
				continue;
			}

			// Update attack timers
			fight.player.updateAttackTimer(deltaTime);
			fight.enemy.updateAttackTimer(deltaTime);

			// Check if units are still in range
			const playerPos = fight.player.getPosition();
			const enemyPos = fight.enemy.getPosition();
			const distance = Math.sqrt(
				Math.pow(playerPos.x - enemyPos.x, 2) +
				Math.pow(playerPos.y - enemyPos.y, 2)
			);

			const combatRange = fight.player.getRadius() + fight.enemy.getRadius() + 2; // +2 for some leeway

			// If units separated, end combat
			if (distance > combatRange) {
				this.endCombat(fight);
				this.activeFights.splice(i, 1);
				continue;
			}

			// Player attacks enemy
			if (fight.player.canAttack()) {
				const rawDamage = this.calculateRawDamage(fight.player, true);
				const enemyArmor = this.calculateTotalArmor(fight.enemy, false);
				fight.enemy.takeDamage(rawDamage, enemyArmor);
				fight.player.resetAttackTimer();

				// Callback for visual feedback (show raw damage)
				this.callbacks.onDamageDealt(fight.player, fight.enemy, rawDamage);

				// Check if enemy died
				if (!fight.enemy.isAlive()) {
					const reward = {
						minerals: fight.enemy.getCostMinerals(),
						gas: fight.enemy.getCostVespene(),
						essence: fight.enemy.getUnitTypeName() === 'Larvae' ? 0 : 1
					};
					this.callbacks.onEnemyDeath(fight.enemy, reward);
					this.endCombat(fight);
					this.activeFights.splice(i, 1);
					continue;
				}
			}

			// Enemy attacks player
			if (fight.enemy.canAttack()) {
				const rawDamage = this.calculateRawDamage(fight.enemy, false);
				const playerArmor = this.calculateTotalArmor(fight.player, true);
				fight.player.takeDamage(rawDamage, playerArmor);
				fight.enemy.resetAttackTimer();

				// Callback for visual feedback (show raw damage)
				this.callbacks.onDamageDealt(fight.enemy, fight.player, rawDamage);

				// Check if player died
				if (!fight.player.isAlive()) {
					this.callbacks.onPlayerDeath();
					this.endCombat(fight);
					this.activeFights.splice(i, 1);
					continue;
				}
			}
		}
	}

	/**
	 * Calculate raw damage (base + attack upgrades) without armor reduction
	 * Armor is applied separately in BaseUnit.takeDamage() after damage absorb
	 */
	private calculateRawDamage(
		attacker: BaseUnit,
		isPlayerAttacking: boolean
	): number {
		const baseDamage = attacker.getDamage();

		// Apply attack upgrade bonuses
		const attackBonus = isPlayerAttacking
			? (this.playerUpgrades?.getAttackBonus() ?? 0) // Player upgrade
			: attacker.getAttackUpgrade(); // Enemy upgrade

		return baseDamage + attackBonus;
	}

	/**
	 * Calculate total armor (base + armor upgrades)
	 */
	private calculateTotalArmor(
		defender: BaseUnit,
		isPlayerDefending: boolean
	): number {
		const baseArmor = defender.getArmor();

		const armorBonus = isPlayerDefending
			? (this.playerUpgrades?.getArmorBonus() ?? 0) // Player armor upgrade
			: defender.getArmorUpgrade(); // Enemy armor upgrade

		return baseArmor + armorBonus;
	}

	/**
	 * End combat between two units
	 */
	private endCombat(fight: CombatPair): void {
		fight.player.setIsInCombat(false);
		fight.enemy.setIsInCombat(false);
		fight.isActive = false;

		console.log(`Combat ended: ${fight.player.getUnitTypeName()} vs ${fight.enemy.getUnitTypeName()}`);
	}

	/**
	 * Get all active fights
	 */
	public getActiveFights(): CombatPair[] {
		return this.activeFights.filter(f => f.isActive);
	}

	/**
	 * Clear all fights (for cleanup)
	 */
	public clearAll(): void {
		for (const fight of this.activeFights) {
			this.endCombat(fight);
		}
		this.activeFights = [];
	}
}