import * as THREE from 'three';
import { BaseUnit, UnitStats } from '../units/BaseUnit';

export class Drone extends BaseUnit {
	private direction: THREE.Vector2;
	private speed: number = 20;
	private directionChangeTimer: number = 0;
	private directionChangeInterval: number = 3 + Math.random() * 2; // 3-5 seconds
	private isPlayerUnit: boolean = false;

	constructor(spawnPosition: THREE.Vector3, isPlayerUnit: boolean = false) {
		// Drone stats from StarCraft 2 rules.md:
		// Supply: 1, Cost: 50M, HP: 40, Armor: 0, Damage: 5
		const droneStats: UnitStats = {
			supply: 1,
			costMinerals: 50,
			costVespene: 0,
			hitPoints: 40,
			armor: 0,
			damage: 5,
			attributes: ['Biological'] // Can construct and burrow
		};

		super(droneStats, spawnPosition, 'Drone');

		this.isPlayerUnit = isPlayerUnit;
		// Recreate model with correct color after setting isPlayerUnit
		this.model = this.createDroneModel();
		this.model.position.copy(this.position); // Sync model position after creation
		this.direction = this.getRandomDirection();
		this.updateRotation();
	}

	protected createModel(): THREE.Group {
		// Initial model creation by BaseUnit constructor (will be replaced)
		return this.createDroneModel();
	}

	private createDroneModel(): THREE.Group {
		const droneGroup = new THREE.Group();
		const scale = 3; // 300% larger than larvae

		// Main body - horizontal oval (wider than tall) - bright pink/magenta for enemy, deep pink for player
		const bodyColor = this.isPlayerUnit ? 0xFF1493 : 0xFF69B4;
		const bodyGeometry = new THREE.SphereGeometry(1.2 * scale, 12, 8);
		bodyGeometry.scale(1.5, 1.0, 1.0); // Horizontal orientation: wider than tall
		const bodyMaterial = new THREE.MeshBasicMaterial({ color: bodyColor });
		const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
		body.position.set(0, 0.6 * scale, 0);

		// Eyes - simple black ovals on front
		const eyeGeometry = new THREE.SphereGeometry(0.12 * scale, 6, 4);
		eyeGeometry.scale(0.6, 1.2, 1.0); // Oval shape
		const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Black
		const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
		leftEye.position.set(-0.4 * scale, 0.8 * scale, 1.6 * scale);
		const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
		rightEye.position.set(0.4 * scale, 0.8 * scale, 1.6 * scale);

		// Simple side wings - light pink/white appendages
		const leftWingGeometry = new THREE.SphereGeometry(0.6 * scale, 8, 6);
		leftWingGeometry.scale(0.8, 0.6, 1.2);
		const wingMaterial = new THREE.MeshBasicMaterial({ color: 0xFFB6C1 }); // Light pink
		const leftWing = new THREE.Mesh(leftWingGeometry, wingMaterial);
		leftWing.position.set(-1.8 * scale, 0.4 * scale, 0);

		const rightWingGeometry = new THREE.SphereGeometry(0.6 * scale, 8, 6);
		rightWingGeometry.scale(0.8, 0.6, 1.2);
		const rightWing = new THREE.Mesh(rightWingGeometry, wingMaterial);
		rightWing.position.set(1.8 * scale, 0.4 * scale, 0);

		droneGroup.add(body);
		droneGroup.add(leftEye);
		droneGroup.add(rightEye);
		droneGroup.add(leftWing);
		droneGroup.add(rightWing);

		// Simple floating effect - slight elevation above ground
		droneGroup.position.y = 0.3 * scale;

		return droneGroup;
	}

	private getRandomDirection(): THREE.Vector2 {
		const angle = Math.random() * Math.PI * 2;
		return new THREE.Vector2(Math.cos(angle), Math.sin(angle));
	}

	private updateRotation() {
		if (this.direction.length() > 0) {
			const angle = Math.atan2(this.direction.y, this.direction.x);
			this.model.rotation.z = angle;
		}
	}

	public static getRandomEdgePosition(): THREE.Vector3 {
		const mapSize = 500; // Half of 1000x1000 map
		const side = Math.floor(Math.random() * 4);
		let x: number, y: number;

		switch (side) {
			case 0: // Top edge
				x = (Math.random() - 0.5) * (mapSize * 2);
				y = mapSize;
				break;
			case 1: // Bottom edge
				x = (Math.random() - 0.5) * (mapSize * 2);
				y = -mapSize;
				break;
			case 2: // Left edge
				x = -mapSize;
				y = (Math.random() - 0.5) * (mapSize * 2);
				break;
			case 3: // Right edge
				x = mapSize;
				y = (Math.random() - 0.5) * (mapSize * 2);
				break;
			default:
				x = 0;
				y = mapSize;
		}

		return new THREE.Vector3(x, y, 0);
	}

	public update(deltaTime: number, worldBounds: { minX: number, maxX: number, minY: number, maxY: number }, trees: THREE.Group[], bushes: THREE.Group[]) {
		// Update direction change timer
		this.directionChangeTimer += deltaTime;
		if (this.directionChangeTimer >= this.directionChangeInterval) {
			this.direction = this.getRandomDirection();
			this.directionChangeTimer = 0;
			this.directionChangeInterval = 3 + Math.random() * 2; // Reset interval
			this.updateRotation();
		}

		// Calculate new position
		const moveDistance = this.speed * deltaTime;
		let newX = this.position.x + this.direction.x * moveDistance;
		let newY = this.position.y + this.direction.y * moveDistance;
		const newPosition = new THREE.Vector3(newX, newY, 0);
		const droneRadius = this.getRadius();

		// Check obstacle collisions (trees and bushes)
		let collisionDetected = false;

		// Check tree collisions (same logic as larvae)
		for (const tree of trees) {
			const trunkPosition = new THREE.Vector3(tree.position.x, tree.position.y + 2, tree.position.z);
			const trunkDistance = Math.sqrt(
				Math.pow(newPosition.x - trunkPosition.x, 2) +
				Math.pow(newPosition.y - trunkPosition.y, 2)
			);

			if (trunkDistance < droneRadius + 0.8) {
				collisionDetected = true;
				break;
			}
		}

		// Check bush collisions (same logic as larvae)
		if (!collisionDetected) {
			for (const bush of bushes) {
				const distance = Math.sqrt(
					Math.pow(newPosition.x - bush.position.x, 2) +
					Math.pow(newPosition.y - bush.position.y, 2)
				);

				if (distance < droneRadius + 1.5) {
					collisionDetected = true;
					break;
				}
			}
		}

		// If collision detected, reverse direction and get new random direction
		if (collisionDetected) {
			this.direction.x *= -1;
			this.direction.y *= -1;
			// Add slight randomization to avoid getting stuck
			this.direction.x += (Math.random() - 0.5) * 0.5;
			this.direction.y += (Math.random() - 0.5) * 0.5;
			// Normalize direction
			const length = Math.sqrt(this.direction.x * this.direction.x + this.direction.y * this.direction.y);
			this.direction.x /= length;
			this.direction.y /= length;
			this.updateRotation();
			return; // Don't update position
		}

		// Bounce off world boundaries
		const margin = 10; // Small margin from edge
		if (newX <= worldBounds.minX + margin || newX >= worldBounds.maxX - margin) {
			this.direction.x *= -1;
			newX = Math.max(worldBounds.minX + margin, Math.min(worldBounds.maxX - margin, newX));
		}
		if (newY <= worldBounds.minY + margin || newY >= worldBounds.maxY - margin) {
			this.direction.y *= -1;
			newY = Math.max(worldBounds.minY + margin, Math.min(worldBounds.maxY - margin, newY));
		}

		// Update position
		this.position.set(newX, newY, 0);
		this.model.position.copy(this.position);

		// Update rotation if direction changed due to bouncing
		this.updateRotation();
	}

	public getRadius(): number {
		return 5; // Collision radius for the larger drone
	}
}