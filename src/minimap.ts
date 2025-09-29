import * as THREE from 'three';
import { BaseUnit } from './units/BaseUnit';

export class Minimap {
	private minimapRenderer!: THREE.WebGLRenderer;
	private minimapCamera!: THREE.OrthographicCamera;
	private minimapScene!: THREE.Scene;
	private playerUnitRef: THREE.Group;
	private playerUnitDot!: THREE.Mesh;
	private enemyDots: THREE.Mesh[] = [];
	private minimapContainer!: HTMLElement;

	private readonly MINIMAP_SIZE = 150;
	private readonly MAP_SIZE = 1000;

	constructor(mainScene: THREE.Scene, playerUnitRef: THREE.Group) {
		this.playerUnitRef = playerUnitRef;
		this.initMinimap();
		this.createMinimapScene(mainScene);
		this.createPlayerUnitDot();
		this.setupMinimapContainer();
	}

	private initMinimap() {
		this.minimapRenderer = new THREE.WebGLRenderer({ alpha: true });
		this.minimapRenderer.setSize(this.MINIMAP_SIZE, this.MINIMAP_SIZE);
		this.minimapRenderer.setClearColor(0x000000, 0.3);

		this.minimapCamera = new THREE.OrthographicCamera(
			-this.MAP_SIZE / 2,
			this.MAP_SIZE / 2,
			this.MAP_SIZE / 2,
			-this.MAP_SIZE / 2,
			1,
			1000
		);
		this.minimapCamera.position.z = 500;
		this.minimapCamera.lookAt(0, 0, 0);

		this.minimapScene = new THREE.Scene();
	}

	private createMinimapScene(mainScene: THREE.Scene) {
		const groundGeometry = new THREE.PlaneGeometry(this.MAP_SIZE, this.MAP_SIZE);
		const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });
		const ground = new THREE.Mesh(groundGeometry, groundMaterial);
		ground.position.z = -1;
		this.minimapScene.add(ground);

		mainScene.traverse((child) => {
			if (child.userData.isTree || child.userData.isBush) {
				const dotGeometry = new THREE.PlaneGeometry(8, 8);
				let dotMaterial: THREE.MeshBasicMaterial;

				if (child.userData.isTree) {
					dotMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
				} else {
					dotMaterial = new THREE.MeshBasicMaterial({ color: 0x9944AA });
				}

				const dot = new THREE.Mesh(dotGeometry, dotMaterial);
				dot.position.copy(child.position);
				dot.position.z = 0;
				this.minimapScene.add(dot);
			}
		});
	}

	private createPlayerUnitDot() {
		const playerUnitGeometry = new THREE.PlaneGeometry(80, 80);
		const playerUnitMaterial = new THREE.MeshBasicMaterial({ color: /*0xFF0000*/ 0x000 });
		this.playerUnitDot = new THREE.Mesh(playerUnitGeometry, playerUnitMaterial);
		this.playerUnitDot.position.z = 1;
		this.minimapScene.add(this.playerUnitDot);
	}

	private setupMinimapContainer() {
		this.minimapContainer = document.createElement('div');
		this.minimapContainer.style.position = 'fixed';
		this.minimapContainer.style.bottom = '20px';
		this.minimapContainer.style.left = '20px';
		this.minimapContainer.style.width = `${this.MINIMAP_SIZE}px`;
		this.minimapContainer.style.height = `${this.MINIMAP_SIZE}px`;
		this.minimapContainer.style.border = '2px solid #fff';
		this.minimapContainer.style.borderRadius = '8px';
		this.minimapContainer.style.overflow = 'hidden';
		this.minimapContainer.style.zIndex = '1000';
		this.minimapContainer.appendChild(this.minimapRenderer.domElement);
		document.body.appendChild(this.minimapContainer);
	}

	updatePlayerUnitPosition() {
		if (this.playerUnitRef && this.playerUnitDot) {
			this.playerUnitDot.position.x = this.playerUnitRef.position.x;
			this.playerUnitDot.position.y = this.playerUnitRef.position.y;
		}
	}

	// Update player unit reference after morphing
	updatePlayerUnitRef(newRef: THREE.Group) {
		this.playerUnitRef = newRef;
	}

	render() {
		this.minimapRenderer.render(this.minimapScene, this.minimapCamera);
	}

	updateObjects(trees: THREE.Group[], bushes: THREE.Group[]) {
		this.minimapScene.children = this.minimapScene.children.filter(child =>
			!(child.userData.isMinimapDot)
		);

		trees.forEach(tree => {
			const dotGeometry = new THREE.PlaneGeometry(8, 8);
			const dotMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
			const dot = new THREE.Mesh(dotGeometry, dotMaterial);
			dot.position.copy(tree.position);
			dot.position.z = 0;
			dot.userData.isMinimapDot = true;
			this.minimapScene.add(dot);
		});

		bushes.forEach(bush => {
			const dotGeometry = new THREE.PlaneGeometry(6, 6);
			const dotMaterial = new THREE.MeshBasicMaterial({ color: 0x9944AA });
			const dot = new THREE.Mesh(dotGeometry, dotMaterial);
			dot.position.copy(bush.position);
			dot.position.z = 0;
			dot.userData.isMinimapDot = true;
			this.minimapScene.add(dot);
		});
	}

	updateEnemyPositions(enemies: BaseUnit[]) {
		// Reuse existing dots or create new ones as needed
		const numEnemies = enemies.length;
		const numExistingDots = this.enemyDots.length;

		// If we have more dots than enemies, remove and dispose extras
		while (this.enemyDots.length > numEnemies) {
			const dot = this.enemyDots.pop()!;
			this.minimapScene.remove(dot);
			dot.geometry.dispose();
			(dot.material as THREE.Material).dispose();
		}

		// Update existing dots and create new ones if needed
		for (let i = 0; i < numEnemies; i++) {
			const enemy = enemies[i];
			const enemyPosition = enemy.getPosition();
			const unitRadius = (enemy as any).getRadius ? (enemy as any).getRadius() : 3;
			const dotSize = unitRadius * 10;

			if (i < numExistingDots) {
				// Reuse existing dot - just update position
				const enemyDot = this.enemyDots[i];
				enemyDot.position.copy(enemyPosition);
				enemyDot.position.z = 0.5;

				// Update scale if needed (in case enemy size changed)
				const currentScale = enemyDot.geometry.parameters.width;
				if (Math.abs(currentScale - dotSize) > 0.1) {
					enemyDot.scale.set(dotSize / currentScale, dotSize / currentScale, 1);
				}
			} else {
				// Create new dot only if we don't have enough
				const enemyGeometry = new THREE.PlaneGeometry(dotSize, dotSize);
				const enemyMaterial = new THREE.MeshBasicMaterial({ color: 0x8B0000 }); // Deep red
				const enemyDot = new THREE.Mesh(enemyGeometry, enemyMaterial);

				enemyDot.position.copy(enemyPosition);
				enemyDot.position.z = 0.5;

				this.enemyDots.push(enemyDot);
				this.minimapScene.add(enemyDot);
			}
		}
	}

	// Dispose method to clean up minimap resources
	public dispose(): void {
		// Dispose enemy dots
		for (const enemyDot of this.enemyDots) {
			this.minimapScene.remove(enemyDot);
			enemyDot.geometry.dispose();
			(enemyDot.material as THREE.Material).dispose();
		}
		this.enemyDots = [];

		// Dispose all scene objects (minimap dots for trees/bushes, ground, etc.)
		this.minimapScene.traverse((child) => {
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

		// Dispose renderer
		this.minimapRenderer.dispose();

		// Remove DOM element
		if (this.minimapContainer && this.minimapContainer.parentNode) {
			this.minimapContainer.parentNode.removeChild(this.minimapContainer);
		}
	}
}