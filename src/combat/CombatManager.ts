import { BaseUnit } from '../units/BaseUnit';

export interface CombatPair {
	player: BaseUnit;
	enemy: BaseUnit;
	isActive: boolean;
}

export interface CombatCallbacks {
	onEnemyDeath: (enemy: BaseUnit, reward: { minerals: number; gas: number }) => void;
	onPlayerDeath: () => void;
	onDamageDealt: (attacker: BaseUnit, defender: BaseUnit, damage: number) => void;
}

export class CombatManager {
	private activeFights: CombatPair[] = [];
	private callbacks: CombatCallbacks;

	constructor(callbacks: CombatCallbacks) {
		this.callbacks = callbacks;
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
				const damage = this.calculateDamage(fight.player, fight.enemy);
				fight.enemy.takeDamage(damage);
				fight.player.resetAttackTimer();

				// Callback for visual feedback
				this.callbacks.onDamageDealt(fight.player, fight.enemy, damage);

				// Check if enemy died
				if (!fight.enemy.isAlive()) {
					const reward = {
						minerals: fight.enemy.getCostMinerals(),
						gas: fight.enemy.getCostVespene()
					};
					this.callbacks.onEnemyDeath(fight.enemy, reward);
					this.endCombat(fight);
					this.activeFights.splice(i, 1);
					continue;
				}
			}

			// Enemy attacks player
			if (fight.enemy.canAttack()) {
				const damage = this.calculateDamage(fight.enemy, fight.player);
				fight.player.takeDamage(damage);
				fight.enemy.resetAttackTimer();

				// Callback for visual feedback
				this.callbacks.onDamageDealt(fight.enemy, fight.player, damage);

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
	 * Calculate damage using StarCraft 2 formula:
	 * Final Damage = (Base Damage) - (Armor), Minimum = 1
	 */
	private calculateDamage(attacker: BaseUnit, defender: BaseUnit): number {
		const baseDamage = attacker.getDamage();
		const armor = defender.getArmor();
		const damage = Math.max(1, baseDamage - armor);
		return damage;
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