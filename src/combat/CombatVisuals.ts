import * as THREE from 'three';
import { BaseUnit } from '../units/BaseUnit';

interface DamageNumber {
	sprite: THREE.Sprite;
	lifetime: number;
	velocity: THREE.Vector3;
}

/**
 * Manages combat-specific visual effects (damage numbers, hit flashes, blood splatters, etc.)
 * For persistent unit UI like HP bars, use UnitVisuals instead.
 */
export class CombatVisuals {
	private scene: THREE.Scene;
	private camera: THREE.Camera;
	private damageNumbers: DamageNumber[];

	constructor(scene: THREE.Scene, camera: THREE.Camera) {
		this.scene = scene;
		this.camera = camera;
		this.damageNumbers = [];
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
	 * Update all combat visual effects
	 */
	public update(deltaTime: number): void {
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