import * as THREE from 'three';
import { BaseUnit, UnitStats } from '../units/BaseUnit';

export class Larvae extends BaseUnit {
	private direction: THREE.Vector2;
	private speed: number = 8; // Very slow movement
	private directionChangeTimer: number = 0;
	private directionChangeInterval: number = 4 + Math.random() * 3; // 4-7 seconds (slower than other units)
	private isPlayerUnit: boolean = false;

	constructor(spawnPosition: THREE.Vector3, isPlayerUnit: boolean = false) {
		// Larvae stats from StarCraft 2 rules.md:
		// Supply: 0, Cost: 0M/0G, HP: 25, Armor: 10, Damage: 0, Attributes: Light, Biological
		const larvaeStats: UnitStats = {
			supply: 0,
			costMinerals: 0,
			costVespene: 0,
			hitPoints: 25,
			armor: 10,
			damage: 0,
			attributes: ['Light', 'Biological']
		};

		super(larvaeStats, spawnPosition, 'Larvae');

		this.isPlayerUnit = isPlayerUnit;
		// Create model with appropriate color scheme
		this.model = this.createModelWithColor(isPlayerUnit);
		this.model.position.copy(this.position); // Sync model position after overwriting
		this.direction = this.getRandomDirection();
		this.updateRotation();
	}

	protected createModel(): THREE.Group {
		// This method is overridden - actual model creation happens in createModelWithColor
		return this.createModelWithColor(this.isPlayerUnit);
	}

	private createModelWithColor(isPlayerUnit: boolean = false): THREE.Group {
		const larvaeGroup = new THREE.Group();
		const scale = 1; // Base scale for larvae

		// Color scheme: purple for enemy larvae, blue-tinted for player larvae
		const bodyColor = isPlayerUnit ? 0x9955dd : 0xAA55AA;
		const headColor = 0xDD77DD;
		const segmentColor = 0x9944AA;
		const tentacleColor = 0x7733AA;

		// Main body - oval with color scheme
		const bodyGeometry = new THREE.SphereGeometry(1.2 * scale, 8, 6);
		bodyGeometry.scale(1.5, 0.8, 1);
		const bodyMaterial = new THREE.MeshBasicMaterial({ color: bodyColor });
		const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
		body.position.y = 0.6 * scale;

		// Head - smaller rounded head
		const headGeometry = new THREE.SphereGeometry(0.6 * scale, 6, 4);
		const headMaterial = new THREE.MeshBasicMaterial({ color: headColor });
		const head = new THREE.Mesh(headGeometry, headMaterial);
		head.position.set(1.2 * scale, 0.8 * scale, 0);

		// Eyes
		const eyeGeometry = new THREE.SphereGeometry(0.15 * scale, 4, 3);
		const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
		const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
		leftEye.position.set(1.6 * scale, 0.9 * scale, 0.3 * scale);
		const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
		rightEye.position.set(1.6 * scale, 0.9 * scale, -0.3 * scale);

		// Body segments
		const segmentGeometry = new THREE.SphereGeometry(0.4 * scale, 6, 4);
		const segmentMaterial = new THREE.MeshBasicMaterial({ color: segmentColor });

		for (let i = 0; i < 3; i++) {
			const segment = new THREE.Mesh(segmentGeometry, segmentMaterial);
			segment.position.set(-0.8 * scale - i * 0.6 * scale, 0.4 * scale, 0);
			segment.scale.set(0.8 - i * 0.1, 0.6, 0.8 - i * 0.1);
			larvaeGroup.add(segment);
		}

		// Tentacles
		const tentacleGeometry = new THREE.CylinderGeometry(0.05 * scale, 0.1 * scale, 0.8 * scale, 4);
		const tentacleMaterial = new THREE.MeshBasicMaterial({ color: tentacleColor });

		for (let i = 0; i < 4; i++) {
			const tentacle = new THREE.Mesh(tentacleGeometry, tentacleMaterial);
			const angle = (i / 4) * Math.PI * 2;
			tentacle.position.set(
				Math.cos(angle) * 0.6 * scale,
				0.2 * scale,
				Math.sin(angle) * 0.6 * scale
			);
			tentacle.rotation.z = Math.cos(angle) * 0.3;
			tentacle.rotation.x = Math.sin(angle) * 0.3;
			larvaeGroup.add(tentacle);
		}

		larvaeGroup.add(body);
		larvaeGroup.add(head);
		larvaeGroup.add(leftEye);
		larvaeGroup.add(rightEye);

		return larvaeGroup;
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

	public static getRandomEdgePosition(excludeCorner?: number): THREE.Vector3 {
		const mapSize = 500; // Half of 1000x1000 map
		let side = Math.floor(Math.random() * 4);

		// If excludeCorner is specified, pick a different corner
		if (excludeCorner !== undefined) {
			const availableSides = [0, 1, 2, 3].filter(s => s !== excludeCorner);
			side = availableSides[Math.floor(Math.random() * availableSides.length)];
		}

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
			this.directionChangeInterval = 4 + Math.random() * 3; // Reset interval
			this.updateRotation();
		}

		// Calculate new position
		const moveDistance = this.speed * deltaTime;
		let newX = this.position.x + this.direction.x * moveDistance;
		let newY = this.position.y + this.direction.y * moveDistance;
		const newPosition = new THREE.Vector3(newX, newY, 0);
		const larvaeRadius = this.getRadius();

		// Check obstacle collisions (trees and bushes)
		let collisionDetected = false;

		// Check tree collisions
		for (const tree of trees) {
			const trunkPosition = new THREE.Vector3(tree.position.x, tree.position.y + 2, tree.position.z);
			const trunkDistance = Math.sqrt(
				Math.pow(newPosition.x - trunkPosition.x, 2) +
				Math.pow(newPosition.y - trunkPosition.y, 2)
			);

			if (trunkDistance < larvaeRadius + 0.8) {
				collisionDetected = true;
				break;
			}
		}

		// Check bush collisions
		if (!collisionDetected) {
			for (const bush of bushes) {
				const distance = Math.sqrt(
					Math.pow(newPosition.x - bush.position.x, 2) +
					Math.pow(newPosition.y - bush.position.y, 2)
				);

				if (distance < larvaeRadius + 1.5) {
					collisionDetected = true;
					break;
				}
			}
		}

		// If collision detected, reverse direction and add randomization
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
		return 2; // Collision radius
	}
}