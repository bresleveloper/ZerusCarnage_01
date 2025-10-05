import * as THREE from 'three';
import { BaseUnit } from './BaseUnit';
import { PlayerUnit } from './PlayerUnit';

// Display mode for unit visual indicators
export type UnitDisplayMode =
	| 'healthbar'    // Default: HP bar + upgrade stats
	| 'quest'        // Quest available: "!" icon
	| 'help'         // Help/tutorial: "?" icon
	| 'shop'         // Shop/vendor: "💰" icon
	| 'hide';        // No visual indicator

// Extended visual element interface (replaces HPBar)
interface UnitVisualElement {
	unit: BaseUnit;
	displayMode: UnitDisplayMode;

	// Health bar components (when mode = 'healthbar')
	background?: THREE.Mesh;
	foreground?: THREE.Mesh;
	upgradeText?: THREE.Sprite;

	// Icon sprite (when mode = 'quest' | 'help' | 'shop')
	iconSprite?: THREE.Sprite;
}

/**
 * Manages all visual UI elements attached to units (HP bars, selection rings, status icons, etc.)
 * This class handles persistent unit visualizations, separate from combat effects.
 */
export class UnitVisuals {
	private static instance: UnitVisuals | null = null;

	private scene: THREE.Scene;
	private camera: THREE.Camera;
	private visualElements: Map<BaseUnit, UnitVisualElement>;
	private playerUnit: PlayerUnit | null = null;

	constructor(scene: THREE.Scene, camera: THREE.Camera, playerUnit?: PlayerUnit) {
		this.scene = scene;
		this.camera = camera;
		this.visualElements = new Map();
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
	 * Dynamically change unit's visual display mode
	 * Useful for switching from quest icon to health bar after quest accepted
	 */
	public setDisplayMode(unit: BaseUnit, newMode: UnitDisplayMode): void {
		const currentVisual = this.visualElements.get(unit);

		if (!currentVisual) {
			// Unit not tracked yet, just track with new mode
			this.trackUnit(unit, newMode);
			return;
		}

		if (currentVisual.displayMode === newMode) {
			return; // Already in this mode, no change needed
		}

		// Remove current visual
		this.untrackUnit(unit);

		// Create new visual with new mode
		this.trackUnit(unit, newMode);
	}

	/**
	 * Start tracking a unit with specified display mode
	 * @param unit - Unit to track
	 * @param displayMode - Visual display type (default: 'healthbar')
	 */
	public trackUnit(unit: BaseUnit, displayMode: UnitDisplayMode = 'healthbar'): void {
		// Exception: Larvae don't show any visuals (too cluttered)
		if (unit.getUnitTypeName() === 'Larvae') {
			return;
		}

		// Create appropriate visual based on mode
		if (displayMode === 'healthbar') {
			this.createHPBar(unit);
		} else if (displayMode !== 'hide') {
			this.createIconDisplay(unit, displayMode);
		}
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
	 * Get icon character for display mode
	 */
	private getIconCharacter(iconType: UnitDisplayMode): string {
		switch (iconType) {
			case 'quest': return '!';
			case 'help': return '?';
			case 'shop': return '💰';
			default: return '!';
		}
	}

	/**
	 * Get icon color for display mode
	 */
	private getIconColor(iconType: UnitDisplayMode): string {
		switch (iconType) {
			case 'quest': return '#FFFF00';  // Bright yellow (quest)
			case 'help': return '#00BFFF';   // Blue (help/tutorial)
			case 'shop': return '#FFD700';   // Gold (shop/vendor)
			default: return '#FFFFFF';       // White (fallback)
		}
	}

	/**
	 * Create icon sprite for quest givers, help NPCs, etc.
	 */
	private createIconSprite(iconType: UnitDisplayMode, unit: BaseUnit): THREE.Sprite {
		const canvas = document.createElement('canvas');
		canvas.width = 256;
		canvas.height = 256;
		const ctx = canvas.getContext('2d')!;

		// Clear canvas
		ctx.clearRect(0, 0, 256, 256);

		// Draw icon based on type
		ctx.font = 'bold 200px Arial';
		ctx.fillStyle = this.getIconColor(iconType);
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';

		const iconChar = this.getIconCharacter(iconType);
		ctx.fillText(iconChar, 128, 128);

		// Create sprite from canvas
		const texture = new THREE.CanvasTexture(canvas);
		const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
			map: texture,
			transparent: true
		}));

		// Position above unit (same Y offset as health bar)
		const yOffset = unit.getRadius() + 3;
		sprite.position.set(0, yOffset, 1);
		sprite.scale.set(4, 4, 1); // Icon size

		return sprite;
	}

	/**
	 * Create icon display for quest givers, NPCs, etc.
	 */
	private createIconDisplay(unit: BaseUnit, iconType: UnitDisplayMode): void {
		if (this.visualElements.has(unit)) {
			return; // Already tracked
		}

		const iconSprite = this.createIconSprite(iconType, unit);
		unit.getModel().add(iconSprite);

		this.visualElements.set(unit, {
			unit,
			displayMode: iconType,
			iconSprite
		});
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
		const visual = this.visualElements.get(unit);
		if (!visual || !visual.upgradeText) {
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
		const material = visual.upgradeText.material as THREE.SpriteMaterial;

		// Dispose old texture
		if (material.map) {
			material.map.dispose();
		}

		// Set new texture
		material.map = newTexture;
		material.needsUpdate = true;

		// Update sprite scale if needed (in case unit size changed)
		const scale = unit.getSizeMultiplier() > 1 ? 1 : 0.5;
		visual.upgradeText.scale.set((isMiniboss ? 56 : 42) * scale, 21 * scale, 1);
	}

	/**
	 * Create HP bar for a unit
	 */
	private createHPBar(unit: BaseUnit): void {
		if (this.visualElements.has(unit)) {
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

		this.visualElements.set(unit, {
			unit,
			displayMode: 'healthbar',
			background,
			foreground,
			upgradeText
		});
	}

	/**
	 * Remove HP bar from a unit
	 */
	private removeHPBar(unit: BaseUnit): void {
		const visual = this.visualElements.get(unit);
		if (!visual) {
			return;
		}

		const unitModel = unit.getModel();

		// Remove health bar components (if present)
		if (visual.background) {
			unitModel.remove(visual.background);
			visual.background.geometry.dispose();
			(visual.background.material as THREE.Material).dispose();
		}
		if (visual.foreground) {
			unitModel.remove(visual.foreground);
			visual.foreground.geometry.dispose();
			(visual.foreground.material as THREE.Material).dispose();
		}
		if (visual.upgradeText) {
			unitModel.remove(visual.upgradeText);
			visual.upgradeText.material.map?.dispose();
			visual.upgradeText.material.dispose();
		}

		// Remove icon sprite (if present)
		if (visual.iconSprite) {
			unitModel.remove(visual.iconSprite);
			visual.iconSprite.material.map?.dispose();
			visual.iconSprite.material.dispose();
		}

		this.visualElements.delete(unit);
	}

	/**
	 * Update all HP bars
	 */
	private updateHPBars(): void {
		this.visualElements.forEach((visual) => {
			// Only update health bars (skip icon displays)
			if (visual.displayMode !== 'healthbar' || !visual.foreground) {
				return;
			}

			const currentHP = visual.unit.getCurrentHP();
			const maxHP = visual.unit.getHitPoints();
			const hpPercentage = currentHP / maxHP;

			// Update foreground width based on HP percentage
			const barWidth = 8;
			visual.foreground.scale.x = hpPercentage;

			// Adjust position to keep left-aligned
			const offset = (barWidth * (1 - hpPercentage)) / 2;
			visual.foreground.position.x = -offset;

			// Change color based on HP
			const material = visual.foreground.material as THREE.MeshBasicMaterial;
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
		return this.visualElements.size;
	}

	/**
	 * Check if a unit is being tracked
	 */
	public isTracking(unit: BaseUnit): boolean {
		return this.visualElements.has(unit);
	}

	/**
	 * Cleanup all visual effects
	 */
	public dispose(): void {
		// Remove all visual elements
		this.visualElements.forEach((visual) => {
			this.removeHPBar(visual.unit);
		});
		this.visualElements.clear();
	}
}