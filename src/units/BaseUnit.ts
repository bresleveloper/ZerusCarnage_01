import * as THREE from 'three';

export interface UnitStats {
	supply: number;
	costMinerals: number;
	costVespene: number;
	hitPoints: number;
	armor: number;
	damage: number;
	attackCooldown: number; // Time in seconds between attacks
	attributes: string[];
}

export abstract class BaseUnit {
	// StarCraft 2 Unit Statistics
	protected readonly supply: number;
	protected readonly costMinerals: number;
	protected readonly costVespene: number;
	protected readonly hitPoints: number;
	protected readonly armor: number;
	protected readonly damage: number;
	protected readonly attackCooldown: number;
	protected readonly attributes: string[];
	protected readonly unitTypeName: string;

	// Combat State
	protected currentHP: number;
	protected attackTimer: number;
	protected isInCombat: boolean;
	protected damageAbsorb: number = 0; // Absorbs damage before armor calculation

	// Upgrade bonuses (for enemies with random upgrades)
	protected attackUpgrade: number = 0;
	protected armorUpgrade: number = 0;

	// Visual scaling (for minibosses)
	protected sizeMultiplier: number = 1;

	// 3D Model and Position
	protected model: THREE.Group;
	protected position: THREE.Vector3;

	constructor(stats: UnitStats, initialPosition: THREE.Vector3, unitTypeName: string, sizeMultiplier: number = 1) {
		this.supply = stats.supply;
		this.costMinerals = stats.costMinerals;
		this.costVespene = stats.costVespene;
		this.hitPoints = stats.hitPoints;
		this.armor = stats.armor;
		this.damage = stats.damage;
		this.attackCooldown = stats.attackCooldown;
		this.attributes = [...stats.attributes]; // Copy array
		this.unitTypeName = unitTypeName;
		this.sizeMultiplier = sizeMultiplier;

		// Initialize combat state
		this.currentHP = this.hitPoints;
		this.attackTimer = 0;
		this.isInCombat = false;

		this.position = initialPosition.clone();
		this.model = this.createModel();
		this.model.position.copy(this.position);
	}

	// Abstract method for each unit to implement their visual model
	protected abstract createModel(): THREE.Group;

	// Abstract method for collision/interaction radius
	public abstract getRadius(): number;

	// Getters for unit statistics
	public getSupply(): number { return this.supply; }
	public getCostMinerals(): number { return this.costMinerals; }
	public getCostVespene(): number { return this.costVespene; }
	public getHitPoints(): number { return this.hitPoints; }
	public getArmor(): number { return this.armor; }
	public getDamage(): number { return this.damage; }
	public getAttackCooldown(): number { return this.attackCooldown; }
	public getAttributes(): string[] { return [...this.attributes]; }
	public getUnitTypeName(): string { return this.unitTypeName; }

	// Combat state getters/setters
	public getCurrentHP(): number { return this.currentHP; }
	public getAttackTimer(): number { return this.attackTimer; }
	public getIsInCombat(): boolean { return this.isInCombat; }
	public setIsInCombat(value: boolean): void { this.isInCombat = value; }

	// Upgrade getters/setters (for enemies)
	public getAttackUpgrade(): number { return this.attackUpgrade; }
	public getArmorUpgrade(): number { return this.armorUpgrade; }
	public setAttackUpgrade(value: number): void { this.attackUpgrade = value; }
	public setArmorUpgrade(value: number): void { this.armorUpgrade = value; }

	// Size multiplier getter (for miniboss detection)
	public getSizeMultiplier(): number { return this.sizeMultiplier; }

	// Damage absorb getters/setters
	public getDamageAbsorb(): number { return this.damageAbsorb; }
	public setDamageAbsorb(value: number): void { this.damageAbsorb = Math.max(0, value); }

	// Common 3D model methods
	public getModel(): THREE.Group { return this.model; }
	public getPosition(): THREE.Vector3 { return this.position.clone(); }
	public setPosition(newPosition: THREE.Vector3): void {
		this.position.copy(newPosition);
		this.model.position.copy(this.position);
	}

	// Combat methods
	/**
	 * Apply damage to unit with proper order: absorb first, then armor
	 * Negative damage = healing (bypasses absorb and armor)
	 * @param rawDamage - The raw damage before any mitigation (negative = heal)
	 * @param totalArmor - The total armor value (base + upgrades)
	 */
	public takeDamage(rawDamage: number, totalArmor: number = this.armor): void {
		// Handle healing (negative damage)
		if (rawDamage < 0) {
			const healAmount = Math.abs(rawDamage);
			this.currentHP = Math.min(this.hitPoints, this.currentHP + healAmount);
			return;
		}

		// Step 1: Apply damage absorb first (consumes absorb, reduces incoming damage)
		let remainingDamage = rawDamage;
		if (this.damageAbsorb > 0) {
			const absorbed = Math.min(this.damageAbsorb, rawDamage);
			this.damageAbsorb -= absorbed;
			remainingDamage = rawDamage - absorbed;
		}

		// Step 2: If damage remains after absorb, apply armor reduction
		if (remainingDamage > 0) {
			const damageAfterArmor = Math.max(1, remainingDamage - totalArmor);
			this.currentHP = Math.max(0, this.currentHP - damageAfterArmor);
		}
	}

	public canAttack(): boolean {
		return this.attackTimer <= 0;
	}

	public resetAttackTimer(): void {
		this.attackTimer = this.attackCooldown;
	}

	public updateAttackTimer(deltaTime: number): void {
		if (this.attackTimer > 0) {
			this.attackTimer = Math.max(0, this.attackTimer - deltaTime);
		}
	}

	public isAlive(): boolean {
		return this.currentHP > 0;
	}

	// Unit information display
	public getUnitInfo(): string {
		return `${this.constructor.name} - ${this.costMinerals}M/${this.costVespene}G - HP:${this.hitPoints} Armor:${this.armor} Damage:${this.damage}`;
	}

	// Dispose method to clean up THREE.js resources
	public dispose(): void {
		this.model.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				if (child.geometry) {
					child.geometry.dispose();
				}
				if (child.material) {
					if (Array.isArray(child.material)) {
						child.material.forEach(material => material.dispose());
					} else {
						child.material.dispose();
					}
				}
			}
		});
	}
}