import * as THREE from 'three';
import { BaseUnit } from './BaseUnit';

export class PlayerUnit {
	// The actual unit this player is controlling (Larvae, Drone, Zergling, etc.)
	private currentUnit: BaseUnit;
	private unitType: string;

	// Movement and rotation properties
	private speed: number = 50;
	private rotationZ: number = 0;

	// Resource properties
	private minerals: number = 0;
	private gas: number = 0;

	constructor(initialUnit: BaseUnit, unitType: string) {
		this.currentUnit = initialUnit;
		this.unitType = unitType;
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
		return 2; // Collision radius
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

	public getResources(): { minerals: number; gas: number } {
		return {
			minerals: this.minerals,
			gas: this.gas
		};
	}

	// Unit type management
	public getUnitType(): string {
		return this.unitType;
	}

	public getCurrentUnit(): BaseUnit {
		return this.currentUnit;
	}

	// Future: Method to morph player unit into a different type
	public morphInto(newUnit: BaseUnit, newUnitType: string): void {
		// Remove old model from scene (parent will handle this)
		// Store old position and resources
		const oldPosition = this.getPosition();
		const oldMinerals = this.minerals;
		const oldGas = this.gas;

		// Switch to new unit
		this.currentUnit = newUnit;
		this.unitType = newUnitType;

		// Restore position and resources
		this.setPosition(oldPosition);
		this.minerals = oldMinerals;
		this.gas = oldGas;
	}
}