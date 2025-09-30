import * as THREE from 'three';

export class VespeneGeyser {
	private model: THREE.Group;
	private position: THREE.Vector3;
	private smokeParticles: THREE.Mesh[] = [];
	private particleUpdateTime: number = 0;

	constructor(position: THREE.Vector3) {
		this.position = position.clone();
		this.model = this.createModel();
		this.model.position.copy(this.position);
	}

	private createModel(): THREE.Group {
		const geyserGroup = new THREE.Group();

		// Volcano cone base (brown/dark gray rock)
		const coneGeometry = new THREE.ConeGeometry(2, 3, 8);
		const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x4a4a4a });
		const cone = new THREE.Mesh(coneGeometry, coneMaterial);
		cone.position.y = 1.5;
		cone.rotation.x = Math.PI / 2;

		// Inner crater glow (green vespene gas glow)
		const craterGeometry = new THREE.CircleGeometry(1.2, 8);
		const craterMaterial = new THREE.MeshBasicMaterial({
			color: 0x00ff88,
			transparent: true,
			opacity: 0.6
		});
		const crater = new THREE.Mesh(craterGeometry, craterMaterial);
		crater.position.y = 1.5;
		crater.position.z = 1.6;

		// Create initial smoke particles
		for (let i = 0; i < 3; i++) {
			const particle = this.createSmokeParticle(i);
			this.smokeParticles.push(particle);
			geyserGroup.add(particle);
		}

		geyserGroup.add(cone);
		geyserGroup.add(crater);

		// Mark as vespene geyser in userData
		geyserGroup.userData.isVespeneGeyser = true;

		return geyserGroup;
	}

	private createSmokeParticle(index: number): THREE.Mesh {
		const size = 0.8 + Math.random() * 0.4;
		const particleGeometry = new THREE.PlaneGeometry(size, size);
		const particleMaterial = new THREE.MeshBasicMaterial({
			color: 0xaaaaaa,
			transparent: true,
			opacity: 0.3 + Math.random() * 0.2
		});
		const particle = new THREE.Mesh(particleGeometry, particleMaterial);

		// Stagger initial positions
		particle.position.y = 2 + index * 1.5;
		particle.position.x = (Math.random() - 0.5) * 0.5;
		particle.position.z = 3 + index * 0.5;

		// Store initial offset for animation
		particle.userData.offsetY = index * 1.5;
		particle.userData.offsetX = (Math.random() - 0.5) * 0.5;
		particle.userData.phase = Math.random() * Math.PI * 2;

		return particle;
	}

	public update(deltaTime: number): void {
		this.particleUpdateTime += deltaTime;

		// Animate smoke particles rising
		for (const particle of this.smokeParticles) {
			particle.userData.phase += deltaTime * 2;

			// Rising motion
			const baseY = 2 + particle.userData.offsetY + this.particleUpdateTime * 2;
			particle.position.y = baseY % 6 + 2; // Loop back down

			// Slight side-to-side drift
			particle.position.x = particle.userData.offsetX + Math.sin(particle.userData.phase) * 0.3;

			// Fade as it rises
			const material = particle.material as THREE.MeshBasicMaterial;
			const heightFactor = (particle.position.y - 2) / 6;
			material.opacity = 0.5 * (1 - heightFactor);
		}
	}

	public getModel(): THREE.Group {
		return this.model;
	}

	public getPosition(): THREE.Vector3 {
		return this.position.clone();
	}

	public getRadius(): number {
		return 2; // Collision radius (same as trees)
	}

	public dispose(): void {
		// Dispose smoke particles
		for (const particle of this.smokeParticles) {
			particle.geometry.dispose();
			(particle.material as THREE.Material).dispose();
		}
		this.smokeParticles = [];

		// Dispose all meshes in the model
		this.model.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				if (child.geometry) {
					child.geometry.dispose();
				}
				if (child.material) {
					if (Array.isArray(child.material)) {
						child.material.forEach(material => material.dispose());
					} else {
						child.material.dispose();
					}
				}
			}
		});
	}
}