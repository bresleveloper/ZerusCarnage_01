import * as THREE from 'three';
import { BaseUnit } from './BaseUnit';
import { PlayerUpgrades } from '../upgrades/PlayerUpgrades';
import { Larvae } from '../enemies/larvae';
import { Drone } from '../enemies/Drone';
import { Zergling } from '../enemies/zergling';
import { EvolutionsPanel } from '../ui/EvolutionsPanel';
import { UnitVisuals } from './UnitVisuals'; 

export class PlayerUnit {
	// The actual unit this player is controlling (Larvae, Drone, Zergling, etc.)
	private currentUnit: BaseUnit;
	private unitType: string;

	// Movement and rotation properties
	private speed: number = 50;
	private rotationZ: number = 0;

	// Resource properties
	private minerals: number = 1500;
	private gas: number = 1500;
	private essence: number = 10;

	// Permanent upgrades (persists across morphs)
	private upgrades: PlayerUpgrades;

	// Morphing state
	private isMorphing: boolean = false;

	constructor(initialUnit: BaseUnit, unitType: string) {
		const initialUnitType = 'zergling'; // Override: 'larvae' | 'drone' | 'zergling'

		if (initialUnitType === 'drone') {
			this.currentUnit = new Drone(initialUnit.getPosition(), true);
			this.unitType = 'Drone';
			UnitVisuals.getInstance()?.trackUnit(this.currentUnit);
		} else if (initialUnitType === 'zergling') {
			this.currentUnit = new Zergling(initialUnit.getPosition(), true);
			this.unitType = 'Zergling';

			setTimeout(() => {
				UnitVisuals.getInstance()?.trackUnit(this.currentUnit);
				EvolutionsPanel.getInstance()?.updateMutations(this.unitType, this.minerals, this.gas);
			}, 100);

		} else {
			this.currentUnit = initialUnit;
			this.unitType = unitType;
		}


		this.upgrades = new PlayerUpgrades();
	}

	// Delegate 3D model methods to current unit
	public getModel(): THREE.Group {
		return this.currentUnit.getModel();
	}

	public getPosition(): THREE.Vector3 {
		return this.currentUnit.getPosition();
	}

	public setPosition(newPosition: THREE.Vector3): void {
		this.currentUnit.setPosition(newPosition);
	}

	// Movement methods
	public getSpeed(): number {
		return this.speed;
	}

	public setSpeed(newSpeed: number): void {
		this.speed = newSpeed;
	}

	public getRotation(): number {
		return this.rotationZ;
	}

	public setRotation(angle: number): void {
		this.rotationZ = angle;
		this.currentUnit.getModel().rotation.z = angle;
	}

	// Collision radius for game mechanics
	public getRadius(): number {
		return this.currentUnit.getRadius(); // Delegate to current unit
	}

	// Resource management methods
	public getMinerals(): number {
		return this.minerals;
	}

	public setMinerals(amount: number): void {
		this.minerals = Math.max(0, amount);
	}

	public getGas(): number {
		return this.gas;
	}

	public setGas(amount: number): void {
		this.gas = Math.max(0, amount);
	}

	public getEssence(): number {
		return this.essence;
	}

	public setEssence(amount: number): void {
		this.essence = Math.max(0, amount);
	}

	public addEssence(amount: number): void {
		this.essence += amount;
		this.essence = Math.max(0, this.essence);
	}

	public getResources(): { minerals: number; gas: number; essence: number } {
		return {
			minerals: this.minerals,
			gas: this.gas,
			essence: this.essence
		};
	}

	// Unit type management
	public getUnitType(): string {
		return this.unitType;
	}

	public getCurrentUnit(): BaseUnit {
		return this.currentUnit;
	}

	// Method to morph player unit into a different type
	public morphInto(newUnit: BaseUnit, newUnitType: string): void {
		// Store old position and resources
		const oldPosition = this.getPosition();
		const oldMinerals = this.minerals;
		const oldGas = this.gas;
		const oldEssence = this.essence;

		// Dispose old unit resources
		const oldUnit = this.currentUnit;
		oldUnit.dispose();

		// Switch to new unit
		this.currentUnit = newUnit;
		this.unitType = newUnitType;

		// Restore position and resources
		this.setPosition(oldPosition);
		this.minerals = oldMinerals;
		this.gas = oldGas;
		this.essence = oldEssence;

		// Clear morphing state
		this.isMorphing = false;
	}

	// Morphing state management
	public setMorphing(morphing: boolean): void {
		this.isMorphing = morphing;
	}

	public getIsMorphing(): boolean {
		return this.isMorphing;
	}

	// Upgrade system accessors
	public getUpgrades(): PlayerUpgrades {
		return this.upgrades;
	}

	// Get effective stats (base + upgrade bonuses)
	public getEffectiveDamage(): number {
		return this.currentUnit.getDamage() + this.upgrades.getAttackBonus();
	}

	public getEffectiveArmor(): number {
		return this.currentUnit.getArmor() + this.upgrades.getArmorBonus();
	}

	public getCurrentHP(): number {
		return this.currentUnit.getCurrentHP();
	}

	public getMaxHP(): number {
		return this.currentUnit.getHitPoints(); // Natural max HP only, no bonuses
	}

	// Damage absorb management
	public getDamageAbsorb(): number {
		return this.currentUnit.getDamageAbsorb();
	}

	/**
	 * Purchase damage absorb with essence
	 * @param essenceCost - Amount of essence to spend
	 * @param absorbAmount - Amount of damage absorb to gain
	 * @returns true if purchase was successful, false if insufficient essence
	 */
	public purchaseDamageAbsorb(essenceCost: number, absorbAmount: number): boolean {
		if (this.essence >= essenceCost) {
			this.essence -= essenceCost;
			const currentAbsorb = this.currentUnit.getDamageAbsorb();
			this.currentUnit.setDamageAbsorb(currentAbsorb + absorbAmount);
			return true;
		}
		return false;
	}
}