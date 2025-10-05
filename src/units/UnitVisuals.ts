import * as THREE from 'three';
import { BaseUnit } from './BaseUnit';
import { PlayerUnit } from './PlayerUnit';

interface HPBar {
	unit: BaseUnit;
	background: THREE.Mesh;
	foreground: THREE.Mesh;
	upgradeText?: THREE.Sprite;
}

/**
 * Manages all visual UI elements attached to units (HP bars, selection rings, status icons, etc.)
 * This class handles persistent unit visualizations, separate from combat effects.
 */
export class UnitVisuals {
	private static instance: UnitVisuals | null = null;

	private scene: THREE.Scene;
	private camera: THREE.Camera;
	private hpBars: Map<BaseUnit, HPBar>;
	private playerUnit: PlayerUnit | null = null;

	constructor(scene: THREE.Scene, camera: THREE.Camera, playerUnit?: PlayerUnit) {
		this.scene = scene;
		this.camera = camera;
		this.hpBars = new Map();
		this.playerUnit = playerUnit || null;
		UnitVisuals.instance = this;
	}

	static getInstance(): UnitVisuals | null {
		return UnitVisuals.instance;
	}

	/**
	 * Update player unit reference (called after player morphs)
	 */
	public setPlayerUnit(playerUnit: PlayerUnit): void {
		this.playerUnit = playerUnit;
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
	 * Get color for upgrade level
	 */
	private getUpgradeColor(level: number): string {
		switch (level) {
			case 0: return '#CCCCCC'; // Bright Gray
			case 1: return '#00BFFF'; // Bright Blue
			case 2: return '#DA70D6'; // Bright Purple
			case 3: return '#FF0000'; // Bright Red
			default: return '#FFD700'; // Bright Yellow-Gold
		}
	}

	/**
	 * Create upgrade indicator sprite showing ATK/ARM levels (and HP for minibosses)
	 */
	private createUpgradeIndicator(unit: BaseUnit): THREE.Sprite {
		// Check if this is the player's current unit
		let attackUpgrade: number;
		let armorUpgrade: number;

		if (this.playerUnit && unit === this.playerUnit.getCurrentUnit()) {
			// Player unit: read from PlayerUpgrades
			attackUpgrade = this.playerUnit.getUpgrades().getAttackBonus();
			armorUpgrade = this.playerUnit.getUpgrades().getArmorBonus();
		} else {
			// Enemy unit: read from BaseUnit
			attackUpgrade = unit.getAttackUpgrade();
			armorUpgrade = unit.getArmorUpgrade();
		}

		// Check if miniboss (larger canvas needed for HP display)
		const isMiniboss = unit.getSizeMultiplier() > 1;
		const canvas = document.createElement('canvas');
		canvas.width = isMiniboss ? 512 : 384;
		canvas.height = 192;
		const context = canvas.getContext('2d')!;

		// Clear canvas
		context.clearRect(0, 0, canvas.width, canvas.height);

		// Draw attack value (left side)
		context.font = 'bold 96px Arial';
		context.fillStyle = this.getUpgradeColor(attackUpgrade);
		context.fillText(attackUpgrade.toString(), 60, 120);

		// Draw separator
		context.fillStyle = '#FFFFFF';
		context.fillText('/', 156, 120);

		// Draw armor value (middle)
		context.fillStyle = this.getUpgradeColor(armorUpgrade);
		context.fillText(armorUpgrade.toString(), 225, 120);

		// Draw HP for minibosses
		if (isMiniboss) {
			// Draw separator
			context.fillStyle = '#FFFFFF';
			context.fillText('/', 294, 120);

			// Draw max HP value (right side)
			context.fillStyle = '#FFFFFF';
			context.fillText(unit.getHitPoints().toString(), 363, 120);
		}

		// Create sprite from canvas
		const texture = new THREE.CanvasTexture(canvas);
		const material = new THREE.SpriteMaterial({ map: texture });
		const sprite = new THREE.Sprite(material);
		const scale = unit.getSizeMultiplier() > 1 ? 1 : 0.5;
		sprite.scale.set((isMiniboss ? 56 : 42) * scale, 21 * scale, 1);

		return sprite;
	}

	/**
	 * Update upgrade indicator for a unit (call when upgrades change)
	 */
	public updateUpgradeIndicator(unit: BaseUnit): void {
		const hpBar = this.hpBars.get(unit);
		if (!hpBar || !hpBar.upgradeText) {
			return; // No HP bar or upgrade text to update
		}

		// Get current upgrade values
		let attackUpgrade: number;
		let armorUpgrade: number;

		if (this.playerUnit && unit === this.playerUnit.getCurrentUnit()) {
			// Player unit: read from PlayerUpgrades
			attackUpgrade = this.playerUnit.getUpgrades().getAttackBonus();
			armorUpgrade = this.playerUnit.getUpgrades().getArmorBonus();
		} else {
			// Enemy unit: read from BaseUnit
			attackUpgrade = unit.getAttackUpgrade();
			armorUpgrade = unit.getArmorUpgrade();
		}

		// Check if miniboss (larger canvas needed for HP display)
		const isMiniboss = unit.getSizeMultiplier() > 1;
		const canvas = document.createElement('canvas');
		canvas.width = isMiniboss ? 512 : 384;
		canvas.height = 192;
		const context = canvas.getContext('2d')!;

		// Clear canvas
		context.clearRect(0, 0, canvas.width, canvas.height);

		// Draw attack value (left side)
		context.font = 'bold 96px Arial';
		context.fillStyle = this.getUpgradeColor(attackUpgrade);
		context.fillText(attackUpgrade.toString(), 60, 120);

		// Draw separator
		context.fillStyle = '#FFFFFF';
		context.fillText('/', 156, 120);

		// Draw armor value (middle)
		context.fillStyle = this.getUpgradeColor(armorUpgrade);
		context.fillText(armorUpgrade.toString(), 225, 120);

		// Draw HP for minibosses
		if (isMiniboss) {
			// Draw separator
			context.fillStyle = '#FFFFFF';
			context.fillText('/', 294, 120);

			// Draw max HP value (right side)
			context.fillStyle = '#FFFFFF';
			context.fillText(unit.getHitPoints().toString(), 363, 120);
		}

		// Update sprite texture
		const newTexture = new THREE.CanvasTexture(canvas);
		const material = hpBar.upgradeText.material as THREE.SpriteMaterial;

		// Dispose old texture
		if (material.map) {
			material.map.dispose();
		}

		// Set new texture
		material.map = newTexture;
		material.needsUpdate = true;

		// Update sprite scale if needed (in case unit size changed)
		const scale = unit.getSizeMultiplier() > 1 ? 1 : 0.5;
		hpBar.upgradeText.scale.set((isMiniboss ? 56 : 42) * scale, 21 * scale, 1);
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
		const yOffset = unit.getRadius() + 2 + (unit.getSizeMultiplier() > 1 ? 15 : 0); // Position above unit, extra spacing for minibosses

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

		// Add upgrade indicator (above HP bar)
		const upgradeText = this.createUpgradeIndicator(unit);
		upgradeText.position.set(0, yOffset + 2, 1.2);

		// Add to unit's model
		const unitModel = unit.getModel();
		unitModel.add(background);
		unitModel.add(foreground);
		unitModel.add(upgradeText);

		this.hpBars.set(unit, {
			unit,
			background,
			foreground,
			upgradeText
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

		// Dispose upgrade text
		if (hpBar.upgradeText) {
			unitModel.remove(hpBar.upgradeText);
			hpBar.upgradeText.material.map?.dispose();
			hpBar.upgradeText.material.dispose();
		}

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