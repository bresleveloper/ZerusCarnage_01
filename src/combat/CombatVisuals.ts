import * as THREE from 'three';
import { BaseUnit } from '../units/BaseUnit';

interface DamageNumber {
	sprite: THREE.Sprite;
	lifetime: number;
	velocity: THREE.Vector3;
}

interface HPBar {
	unit: BaseUnit;
	background: THREE.Mesh;
	foreground: THREE.Mesh;
}

export class CombatVisuals {
	private scene: THREE.Scene;
	private camera: THREE.Camera;
	private hpBars: Map<BaseUnit, HPBar>;
	private damageNumbers: DamageNumber[];

	constructor(scene: THREE.Scene, camera: THREE.Camera) {
		this.scene = scene;
		this.camera = camera;
		this.hpBars = new Map();
		this.damageNumbers = [];
	}

	/**
	 * Create HP bar for a unit in combat
	 */
	public createHPBar(unit: BaseUnit): void {
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
	public removeHPBar(unit: BaseUnit): void {
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
	public updateHPBars(): void {
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
	 * Create floating damage number
	 */
	public createDamageNumber(position: THREE.Vector3, damage: number): void {
		// Create canvas for text
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		if (!context) return;

		canvas.width = 128;
		canvas.height = 64;

		// Draw text
		context.fillStyle = '#FF0000';
		context.font = 'Bold 48px Arial';
		context.textAlign = 'center';
		context.textBaseline = 'middle';
		context.fillText(`-${damage}`, 64, 32);

		// Create texture and sprite
		const texture = new THREE.CanvasTexture(canvas);
		const material = new THREE.SpriteMaterial({ map: texture });
		const sprite = new THREE.Sprite(material);

		sprite.position.copy(position);
		sprite.position.y += 2; // Start slightly above unit
		sprite.scale.set(4, 2, 1);

		this.scene.add(sprite);

		// Add to tracking array
		this.damageNumbers.push({
			sprite,
			lifetime: 1.0, // 1 second lifetime
			velocity: new THREE.Vector3(0, 10, 0) // Float upward
		});
	}

	/**
	 * Update all damage numbers
	 */
	public update(deltaTime: number): void {
		// Update HP bars
		this.updateHPBars();

		// Update damage numbers
		for (let i = this.damageNumbers.length - 1; i >= 0; i--) {
			const damageNum = this.damageNumbers[i];

			// Update position
			damageNum.sprite.position.add(
				damageNum.velocity.clone().multiplyScalar(deltaTime)
			);

			// Update lifetime
			damageNum.lifetime -= deltaTime;

			// Fade out
			const material = damageNum.sprite.material as THREE.SpriteMaterial;
			material.opacity = Math.max(0, damageNum.lifetime);

			// Remove if expired
			if (damageNum.lifetime <= 0) {
				this.scene.remove(damageNum.sprite);
				material.map?.dispose();
				material.dispose();
				this.damageNumbers.splice(i, 1);
			}
		}
	}

	/**
	 * Create hit flash effect on unit
	 */
	public createHitFlash(unit: BaseUnit): void {
		const model = unit.getModel();

		// Store original colors
		const originalColors = new Map<THREE.Mesh, number>();

		model.traverse((child) => {
			if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
				originalColors.set(child, child.material.color.getHex());
				child.material.color.setHex(0xFFFFFF); // Flash white
			}
		});

		// Restore colors after 100ms
		setTimeout(() => {
			originalColors.forEach((color, mesh) => {
				if (mesh.material instanceof THREE.MeshBasicMaterial) {
					mesh.material.color.setHex(color);
				}
			});
		}, 100);
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

		// Remove all damage numbers
		this.damageNumbers.forEach((damageNum) => {
			this.scene.remove(damageNum.sprite);
			const material = damageNum.sprite.material as THREE.SpriteMaterial;
			material.map?.dispose();
			material.dispose();
		});
		this.damageNumbers = [];
	}
}