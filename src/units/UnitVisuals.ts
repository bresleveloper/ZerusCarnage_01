import * as THREE from 'three';
import { BaseUnit } from './BaseUnit';

interface HPBar {
	unit: BaseUnit;
	background: THREE.Mesh;
	foreground: THREE.Mesh;
}

/**
 * Manages all visual UI elements attached to units (HP bars, selection rings, status icons, etc.)
 * This class handles persistent unit visualizations, separate from combat effects.
 */
export class UnitVisuals {
	private scene: THREE.Scene;
	private camera: THREE.Camera;
	private hpBars: Map<BaseUnit, HPBar>;

	constructor(scene: THREE.Scene, camera: THREE.Camera) {
		this.scene = scene;
		this.camera = camera;
		this.hpBars = new Map();
	}

	/**
	 * Start tracking a unit - creates HP bar and any other visual elements
	 */
	public trackUnit(unit: BaseUnit): void {
		// Exception: Larvae don't show HP bars (too weak/cluttered)
		if (unit.getUnitTypeName() !== 'Larvae') {
			this.createHPBar(unit);
		}
		// Future: Add selection ring, status icon container, etc.
	}

	/**
	 * Stop tracking a unit - removes all visual elements and cleans up resources
	 */
	public untrackUnit(unit: BaseUnit): void {
		this.removeHPBar(unit);
		// Future: Remove selection ring, status icons, etc.
	}

	/**
	 * Create HP bar for a unit
	 */
	private createHPBar(unit: BaseUnit): void {
		if (this.hpBars.has(unit)) {
			return; // Already has HP bar
		}

		const barWidth = 8;
		const barHeight = 0.8;
		const yOffset = unit.getRadius() + 2; // Position above unit

		// Background (red)
		const bgGeometry = new THREE.PlaneGeometry(barWidth, barHeight);
		const bgMaterial = new THREE.MeshBasicMaterial({ color: 0x8B0000 }); // Dark red
		const background = new THREE.Mesh(bgGeometry, bgMaterial);
		background.position.set(0, yOffset, 1);

		// Foreground (green)
		const fgGeometry = new THREE.PlaneGeometry(barWidth, barHeight);
		const fgMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 }); // Bright green
		const foreground = new THREE.Mesh(fgGeometry, fgMaterial);
		foreground.position.set(0, yOffset, 1.1);

		// Add to unit's model
		const unitModel = unit.getModel();
		unitModel.add(background);
		unitModel.add(foreground);

		this.hpBars.set(unit, {
			unit,
			background,
			foreground
		});
	}

	/**
	 * Remove HP bar from a unit
	 */
	private removeHPBar(unit: BaseUnit): void {
		const hpBar = this.hpBars.get(unit);
		if (!hpBar) {
			return;
		}

		// Remove from unit's model
		const unitModel = unit.getModel();
		unitModel.remove(hpBar.background);
		unitModel.remove(hpBar.foreground);

		// Dispose geometries and materials
		hpBar.background.geometry.dispose();
		(hpBar.background.material as THREE.Material).dispose();
		hpBar.foreground.geometry.dispose();
		(hpBar.foreground.material as THREE.Material).dispose();

		this.hpBars.delete(unit);
	}

	/**
	 * Update all HP bars
	 */
	private updateHPBars(): void {
		this.hpBars.forEach((hpBar) => {
			const currentHP = hpBar.unit.getCurrentHP();
			const maxHP = hpBar.unit.getHitPoints();
			const hpPercentage = currentHP / maxHP;

			// Update foreground width based on HP percentage
			const barWidth = 8;
			hpBar.foreground.scale.x = hpPercentage;

			// Adjust position to keep left-aligned
			const offset = (barWidth * (1 - hpPercentage)) / 2;
			hpBar.foreground.position.x = -offset;

			// Change color based on HP
			const material = hpBar.foreground.material as THREE.MeshBasicMaterial;
			if (hpPercentage > 0.6) {
				material.color.setHex(0x00FF00); // Green
			} else if (hpPercentage > 0.3) {
				material.color.setHex(0xFFFF00); // Yellow
			} else {
				material.color.setHex(0xFF0000); // Red
			}
		});
	}

	/**
	 * Update all unit visuals (called every frame)
	 */
	public update(_deltaTime: number): void {
		this.updateHPBars();
		// Future: Update selection rings, status icons, etc.
	}

	/**
	 * Get number of tracked units
	 */
	public getTrackedUnitCount(): number {
		return this.hpBars.size;
	}

	/**
	 * Check if a unit is being tracked
	 */
	public isTracking(unit: BaseUnit): boolean {
		return this.hpBars.has(unit);
	}

	/**
	 * Cleanup all visual effects
	 */
	public dispose(): void {
		// Remove all HP bars
		this.hpBars.forEach((hpBar) => {
			this.removeHPBar(hpBar.unit);
		});
		this.hpBars.clear();
	}
}