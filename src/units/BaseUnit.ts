import * as THREE from 'three';

export interface UnitStats {
	supply: number;
	costMinerals: number;
	costVespene: number;
	hitPoints: number;
	armor: number;
	damage: number;
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
	protected readonly attributes: string[];
	protected readonly unitTypeName: string;

	// 3D Model and Position
	protected model: THREE.Group;
	protected position: THREE.Vector3;

	constructor(stats: UnitStats, initialPosition: THREE.Vector3, unitTypeName: string) {
		this.supply = stats.supply;
		this.costMinerals = stats.costMinerals;
		this.costVespene = stats.costVespene;
		this.hitPoints = stats.hitPoints;
		this.armor = stats.armor;
		this.damage = stats.damage;
		this.attributes = [...stats.attributes]; // Copy array
		this.unitTypeName = unitTypeName;

		this.position = initialPosition.clone();
		this.model = this.createModel();
		this.model.position.copy(this.position);
	}

	// Abstract method for each unit to implement their visual model
	protected abstract createModel(): THREE.Group;

	// Getters for unit statistics
	public getSupply(): number { return this.supply; }
	public getCostMinerals(): number { return this.costMinerals; }
	public getCostVespene(): number { return this.costVespene; }
	public getHitPoints(): number { return this.hitPoints; }
	public getArmor(): number { return this.armor; }
	public getDamage(): number { return this.damage; }
	public getAttributes(): string[] { return [...this.attributes]; }
	public getUnitTypeName(): string { return this.unitTypeName; }

	// Common 3D model methods
	public getModel(): THREE.Group { return this.model; }
	public getPosition(): THREE.Vector3 { return this.position.clone(); }
	public setPosition(newPosition: THREE.Vector3): void {
		this.position.copy(newPosition);
		this.model.position.copy(this.position);
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