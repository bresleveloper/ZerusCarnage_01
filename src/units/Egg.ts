import * as THREE from 'three';
import { BaseUnit, UnitStats } from './BaseUnit';

export class Egg extends BaseUnit {
	private targetUnitType: string;
	private morphTimer: number;
	private morphDuration: number;
	private isComplete: boolean = false;

	constructor(position: THREE.Vector3, targetUnitType: string, morphDuration: number = 3) {
		// Egg has no combat stats
		const eggStats: UnitStats = {
			supply: 0,
			costMinerals: 0,
			costVespene: 0,
			hitPoints: 100,
			armor: 0,
			damage: 0,
			attributes: ['Biological']
		};

		super(eggStats, position, 'Egg');

		this.targetUnitType = targetUnitType;
		this.morphDuration = morphDuration;
		this.morphTimer = 0;
	}

	protected createModel(): THREE.Group {
		const eggGroup = new THREE.Group();
		const scale = 2;

		// Green mud base
		const mudGeometry = new THREE.CylinderGeometry(2 * scale, 2.2 * scale, 0.5 * scale, 16);
		const mudMaterial = new THREE.MeshBasicMaterial({ color: 0x4A7C3A }); // Dark green
		const mud = new THREE.Mesh(mudGeometry, mudMaterial);
		mud.position.y = 0.25 * scale;
		mud.rotation.x = Math.PI / 2;

		// Purple egg - oval shape
		const eggGeometry = new THREE.SphereGeometry(1.5 * scale, 16, 12);
		eggGeometry.scale(1, 1.3, 1); // Taller oval
		const eggMaterial = new THREE.MeshBasicMaterial({ color: 0x9955DD }); // Purple
		const egg = new THREE.Mesh(eggGeometry, eggMaterial);
		egg.position.y = 2 * scale;

		// Darker purple spots on egg
		for (let i = 0; i < 5; i++) {
			const spotGeometry = new THREE.SphereGeometry(0.3 * scale, 8, 6);
			const spotMaterial = new THREE.MeshBasicMaterial({ color: 0x7733AA });
			const spot = new THREE.Mesh(spotGeometry, spotMaterial);

			const angle = (i / 5) * Math.PI * 2;
			const radius = 1.2 * scale;
			spot.position.set(
				Math.cos(angle) * radius,
				1.5 * scale + Math.random() * scale,
				Math.sin(angle) * radius
			);

			eggGroup.add(spot);
		}

		eggGroup.add(mud);
		eggGroup.add(egg);

		return eggGroup;
	}

	public update(deltaTime: number): void {
		this.morphTimer += deltaTime;

		// Pulsing animation while morphing
		const pulseSpeed = 3;
		const pulseAmount = 0.1;
		const pulse = 1 + Math.sin(this.morphTimer * pulseSpeed) * pulseAmount;
		this.model.scale.set(pulse, pulse, pulse);

		// Check if morphing is complete
		if (this.morphTimer >= this.morphDuration) {
			this.isComplete = true;
		}
	}

	public isMorphComplete(): boolean {
		return this.isComplete;
	}

	public getTargetUnitType(): string {
		return this.targetUnitType;
	}

	public getMorphProgress(): number {
		return Math.min(this.morphTimer / this.morphDuration, 1);
	}

	public getRadius(): number {
		return 4; // Egg radius for collision detection
	}

	// Override dispose to clean up egg resources
	public dispose(): void {
		super.dispose();
	}
}