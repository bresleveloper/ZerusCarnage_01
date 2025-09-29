import * as THREE from 'three';
import { BaseUnit, UnitStats } from './BaseUnit';

export class Larvae extends BaseUnit {
	// Movement and rotation properties
	private speed: number = 50;
	private rotationZ: number = 0;

	// Resource properties
	private minerals: number = 0;
	private gas: number = 0;

	constructor(initialPosition: THREE.Vector3) {
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

		super(larvaeStats, initialPosition);
	}

	protected createModel(): THREE.Group {
		const larvaeGroup = new THREE.Group();
		const scale = 1; // Base scale for larvae

		// Main body - oval with purple color scheme
		const bodyGeometry = new THREE.SphereGeometry(1.2 * scale, 8, 6);
		bodyGeometry.scale(1.5, 0.8, 1);
		const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0xAA55AA });
		const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
		body.position.y = 0.6 * scale;

		// Head - smaller rounded head
		const headGeometry = new THREE.SphereGeometry(0.6 * scale, 6, 4);
		const headMaterial = new THREE.MeshBasicMaterial({ color: 0xDD77DD });
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
		const segmentMaterial = new THREE.MeshBasicMaterial({ color: 0x9944AA });

		for (let i = 0; i < 3; i++) {
			const segment = new THREE.Mesh(segmentGeometry, segmentMaterial);
			segment.position.set(-0.8 * scale - i * 0.6 * scale, 0.4 * scale, 0);
			segment.scale.set(0.8 - i * 0.1, 0.6, 0.8 - i * 0.1);
			larvaeGroup.add(segment);
		}

		// Tentacles
		const tentacleGeometry = new THREE.CylinderGeometry(0.05 * scale, 0.1 * scale, 0.8 * scale, 4);
		const tentacleMaterial = new THREE.MeshBasicMaterial({ color: 0x7733AA });

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
		this.model.rotation.z = angle;
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
}