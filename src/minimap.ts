import * as THREE from 'three';
import { Drone } from './enemies/drone';

export class Minimap {
	private minimapRenderer: THREE.WebGLRenderer;
	private minimapCamera: THREE.OrthographicCamera;
	private minimapScene: THREE.Scene;
	private larvaeRef: THREE.Group;
	private larvaeDot: THREE.Mesh;
	private enemyDots: THREE.Mesh[] = [];
	private minimapContainer: HTMLElement;

	private readonly MINIMAP_SIZE = 150;
	private readonly MAP_SIZE = 1000;

	constructor(mainScene: THREE.Scene, larvaeRef: THREE.Group) {
		this.larvaeRef = larvaeRef;
		this.initMinimap();
		this.createMinimapScene(mainScene);
		this.createLarvaeDot();
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

	private createLarvaeDot() {
		const larvaeGeometry = new THREE.PlaneGeometry(80, 80);
		const larvaeMaterial = new THREE.MeshBasicMaterial({ color: /*0xFF0000*/ 0x000 });
		this.larvaeDot = new THREE.Mesh(larvaeGeometry, larvaeMaterial);
		this.larvaeDot.position.z = 1;
		this.minimapScene.add(this.larvaeDot);
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

	updateLarvaePosition() {
		if (this.larvaeRef && this.larvaeDot) {
			this.larvaeDot.position.x = this.larvaeRef.position.x;
			this.larvaeDot.position.y = this.larvaeRef.position.y;
		}
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

	updateEnemyPositions(drones: Drone[]) {
		// Remove existing enemy dots
		for (const enemyDot of this.enemyDots) {
			this.minimapScene.remove(enemyDot);
		}
		this.enemyDots = [];

		// Create new enemy dots
		for (const drone of drones) {
			const dronePosition = drone.getPosition();
			const enemyGeometry = new THREE.PlaneGeometry(40, 40); // Half the size of larvae dot (80x80)
			const enemyMaterial = new THREE.MeshBasicMaterial({ color: 0x8B0000 }); // Deep red
			const enemyDot = new THREE.Mesh(enemyGeometry, enemyMaterial);

			enemyDot.position.copy(dronePosition);
			enemyDot.position.z = 0.5; // Between ground (-1) and larvae (1)

			this.enemyDots.push(enemyDot);
			this.minimapScene.add(enemyDot);
		}
	}
}