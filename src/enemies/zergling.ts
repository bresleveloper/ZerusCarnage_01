import * as THREE from 'three';
import { BaseUnit, UnitStats } from '../units/BaseUnit';

export class Zergling extends BaseUnit {
	private direction: THREE.Vector2;
	private speed: number = 22; // Slightly faster than Drone (20)
	private directionChangeTimer: number = 0;
	private directionChangeInterval: number = 2 + Math.random() * 2; // 2-4 seconds (faster than drone)
	private isPlayerUnit: boolean = false;
	private customBodyColor?: number;

	constructor(
		spawnPosition: THREE.Vector3,
		isPlayerUnit: boolean = false,
		statOverrides?: Partial<UnitStats>,
		customBodyColor?: number,
		sizeMultiplier: number = 1
	) {
		// Zergling stats from StarCraft 2 rules.md:
		// Supply: 0.5, Cost: 25M, HP: 35, Armor: 0, Damage: 5, Speed: 2.25, Size: 38 pixels
		const zerglingStats: UnitStats = {
			supply: 0.5,
			costMinerals: 25,
			costVespene: 0,
			hitPoints: 35,
			armor: 0,
			damage: 5,
			attackCooldown: 0.61, // Attack cooldown from rules.md (fast attacker)
			attributes: ['Light', 'Biological'], // Can burrow, fast melee attacker
			...statOverrides // Apply any stat overrides
		};

		super(zerglingStats, spawnPosition, 'Zergling', sizeMultiplier);

		this.isPlayerUnit = isPlayerUnit;
		this.customBodyColor = customBodyColor;
		// Recreate model with correct color after setting isPlayerUnit
		this.model = this.createZerglingModel();
		this.model.position.copy(this.position); // Sync model position after creation
		this.direction = this.getRandomDirection();
		this.updateRotation();
	}

	protected createModel(): THREE.Group {
		// Initial model creation by BaseUnit constructor (will be replaced)
		return this.createZerglingModel();
	}

	private createZerglingModel(): THREE.Group {
		const zerglingGroup = new THREE.Group();
		const scale = 2.5 * this.sizeMultiplier; // Smaller than Drone (3), larger than Larvae (1), scaled by multiplier

		// Main body - simple blob, slightly wider than tall
		const bodyColor = this.customBodyColor ?? (this.isPlayerUnit ? 0xA855FF : 0xD896FF);
		const bodyGeometry = new THREE.SphereGeometry(1.2 * scale, 12, 8);
		bodyGeometry.scale(1.3, 1.0, 1.1); // Slightly wider
		const bodyMaterial = new THREE.MeshBasicMaterial({ color: bodyColor });
		const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
		body.position.set(0, 1.2 * scale, 0);

		// Large mouth opening - dark semicircle at bottom front
		const mouthGeometry = new THREE.SphereGeometry(1.0 * scale, 12, 8, 0, Math.PI * 2, 0, Math.PI / 1.8);
		const mouthMaterial = new THREE.MeshBasicMaterial({ color: 0x4A1A4A }); // Very dark purple/black
		const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
		mouth.position.set(0.3 * scale, 0.8 * scale, 0);
		mouth.rotation.z = Math.PI / 6; // Tilt for zigzag effect

		// Zigzag teeth edge - create jagged appearance
		const toothMaterial = new THREE.MeshBasicMaterial({ color: 0x4A1A4A });
		const teeth: THREE.Mesh[] = [];
		for (let i = 0; i < 5; i++) {
			const toothGeometry = new THREE.ConeGeometry(0.15 * scale, 0.3 * scale, 4);
			const tooth = new THREE.Mesh(toothGeometry, toothMaterial);
			tooth.position.set(
				(i - 2) * 0.35 * scale,
				1.0 * scale,
				0.8 * scale
			);
			tooth.rotation.x = Math.PI; // Point upward
			teeth.push(tooth);
			zerglingGroup.add(tooth);
		}

		// Eyes - big cute black dots
		const eyeGeometry = new THREE.SphereGeometry(0.35 * scale, 8, 6);
		const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Pure black
		const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
		leftEye.position.set(-0.4 * scale, 1.6 * scale, 1.0 * scale);
		const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
		rightEye.position.set(0.4 * scale, 1.6 * scale, 1.0 * scale);

		// Tiny stubby legs - barely visible under body
		const legGeometry = new THREE.CylinderGeometry(0.15 * scale, 0.2 * scale, 0.5 * scale, 6);
		const legMaterial = new THREE.MeshBasicMaterial({ color: 0xC77DFF }); // Medium purple

		const frontLeftLeg = new THREE.Mesh(legGeometry, legMaterial);
		frontLeftLeg.position.set(-0.5 * scale, 0.25 * scale, 0.7 * scale);

		const frontRightLeg = new THREE.Mesh(legGeometry, legMaterial);
		frontRightLeg.position.set(0.5 * scale, 0.25 * scale, 0.7 * scale);

		const backLeftLeg = new THREE.Mesh(legGeometry, legMaterial);
		backLeftLeg.position.set(-0.6 * scale, 0.25 * scale, -0.5 * scale);

		const backRightLeg = new THREE.Mesh(legGeometry, legMaterial);
		backRightLeg.position.set(0.6 * scale, 0.25 * scale, -0.5 * scale);

		// Double tail - curved appendages at back
		const tailGeometry = new THREE.CylinderGeometry(0.2 * scale, 0.35 * scale, 1.5 * scale, 8);
		const tailMaterial = new THREE.MeshBasicMaterial({ color: 0xB565D8 }); // Purple tail

		const leftTail = new THREE.Mesh(tailGeometry, tailMaterial);
		leftTail.position.set(-0.3 * scale, 1.3 * scale, -1.3 * scale);
		leftTail.rotation.x = Math.PI / 3; // Curve backward and up
		leftTail.rotation.z = -Math.PI / 8;

		const rightTail = new THREE.Mesh(tailGeometry, tailMaterial);
		rightTail.position.set(0.3 * scale, 1.3 * scale, -1.3 * scale);
		rightTail.rotation.x = Math.PI / 3; // Curve backward and up
		rightTail.rotation.z = Math.PI / 8;

		zerglingGroup.add(body);
		zerglingGroup.add(mouth);
		zerglingGroup.add(leftEye);
		zerglingGroup.add(rightEye);
		zerglingGroup.add(frontLeftLeg);
		zerglingGroup.add(frontRightLeg);
		zerglingGroup.add(backLeftLeg);
		zerglingGroup.add(backRightLeg);
		zerglingGroup.add(leftTail);
		zerglingGroup.add(rightTail);

		// Ground level positioning - low and squat
		zerglingGroup.position.y = 0;

		return zerglingGroup;
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

	public update(deltaTime: number, worldBounds: { minX: number, maxX: number, minY: number, maxY: number }, trees: THREE.Group[], bushes: THREE.Group[], playerPosition?: THREE.Vector3) {
		// Check if should chase player (miniboss behavior)
		if (playerPosition) {
			const distanceToPlayer = Math.sqrt(
				Math.pow(this.position.x - playerPosition.x, 2) +
				Math.pow(this.position.y - playerPosition.y, 2)
			);

			if (distanceToPlayer <= 100) {
				// Chase player: set direction toward player
				const dx = playerPosition.x - this.position.x;
				const dy = playerPosition.y - this.position.y;
				const length = Math.sqrt(dx * dx + dy * dy);
				if (length > 0) {
					this.direction.set(dx / length, dy / length);
					this.updateRotation();
				}
			} else {
				// Too far: use random wandering behavior
				this.directionChangeTimer += deltaTime;
				if (this.directionChangeTimer >= this.directionChangeInterval) {
					this.direction = this.getRandomDirection();
					this.directionChangeTimer = 0;
					this.directionChangeInterval = 2 + Math.random() * 2; // Reset interval
					this.updateRotation();
				}
			}
		} else {
			// No player position: use random wandering behavior
			this.directionChangeTimer += deltaTime;
			if (this.directionChangeTimer >= this.directionChangeInterval) {
				this.direction = this.getRandomDirection();
				this.directionChangeTimer = 0;
				this.directionChangeInterval = 2 + Math.random() * 2; // Reset interval
				this.updateRotation();
			}
		}

		// Calculate new position
		const moveDistance = this.speed * deltaTime;
		let newX = this.position.x + this.direction.x * moveDistance;
		let newY = this.position.y + this.direction.y * moveDistance;
		const newPosition = new THREE.Vector3(newX, newY, 0);
		const zerglingRadius = this.getRadius();

		// Check obstacle collisions (trees and bushes)
		let collisionDetected = false;

		// Check tree collisions
		for (const tree of trees) {
			const trunkPosition = new THREE.Vector3(tree.position.x, tree.position.y + 2, tree.position.z);
			const trunkDistance = Math.sqrt(
				Math.pow(newPosition.x - trunkPosition.x, 2) +
				Math.pow(newPosition.y - trunkPosition.y, 2)
			);

			if (trunkDistance < zerglingRadius + 0.8) {
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

				if (distance < zerglingRadius + 1.5) {
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
		return 4 * this.sizeMultiplier; // Collision radius for zergling (smaller than drone's 5), scaled by multiplier
	}
}