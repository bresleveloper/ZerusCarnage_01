import * as THREE from 'three';
import { BaseUnit } from '../units/BaseUnit';
import { VespeneGeyser } from '../environment/VespeneGeyser';

interface ExtractionState {
	geyserIndex: number;
	timer: number;
}

export interface VespeneExtractionCallbacks {
	onDamage: (unit: BaseUnit, damage: number) => void;
	onGasGained: (unit: BaseUnit, gas: number) => void;
	onUnitDeath: (unit: BaseUnit) => void;
	onVisualFeedback?: (unit: BaseUnit) => void;
}

export class VespeneExtraction {
	private callbacks: VespeneExtractionCallbacks;
	private extractionStates: Map<BaseUnit, ExtractionState> = new Map();
	private readonly EXTRACTION_INTERVAL = 1.0; // 1 second
	private readonly DAMAGE_PER_SECOND = 5;
	private readonly GAS_PER_SECOND = 10;
	private readonly EXTRACTION_RADIUS = 7.5; // Slightly larger than geyser radius

	constructor(callbacks: VespeneExtractionCallbacks) {
		this.callbacks = callbacks;
	}

	public update(deltaTime: number, unit: BaseUnit, geysers: VespeneGeyser[]): void {
		const unitPosition = unit.getPosition();
		let onGeyser = false;
		let geyserIndex = -1;

		// Check if unit is on any geyser
		for (let i = 0; i < geysers.length; i++) {
			const geyser = geysers[i];
			const geyserPosition = geyser.getPosition();
			const distance = Math.sqrt(
				Math.pow(unitPosition.x - geyserPosition.x, 2) +
				Math.pow(unitPosition.y - geyserPosition.y, 2)
			);

			if (distance < this.EXTRACTION_RADIUS) {
				onGeyser = true;
				geyserIndex = i;
				break;
			}
		}

		// If unit is on a geyser
		if (onGeyser) {
			// Get or create extraction state
			let state = this.extractionStates.get(unit);
			if (!state) {
				state = { geyserIndex, timer: 0 };
				this.extractionStates.set(unit, state);
			}

			// Update timer
			state.timer += deltaTime;

			// Check if extraction interval has passed
			if (state.timer >= this.EXTRACTION_INTERVAL) {
				state.timer -= this.EXTRACTION_INTERVAL;

				// Apply damage
				this.callbacks.onDamage(unit, this.DAMAGE_PER_SECOND);

				// Visual feedback for damage
				if (this.callbacks.onVisualFeedback) {
					this.callbacks.onVisualFeedback(unit);
				}

				// Check if unit died from damage
				if (!unit.isAlive()) {
					this.callbacks.onUnitDeath(unit);
					this.extractionStates.delete(unit);
					return;
				}

				// Award vespene gas
				this.callbacks.onGasGained(unit, this.GAS_PER_SECOND);
			}
		} else {
			// Unit left geyser, clear state
			this.extractionStates.delete(unit);
		}
	}

	public clearUnit(unit: BaseUnit): void {
		this.extractionStates.delete(unit);
	}

	public clearAll(): void {
		this.extractionStates.clear();
	}
}