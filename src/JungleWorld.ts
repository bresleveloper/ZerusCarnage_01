import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import { Minimap } from './minimap';
import { ControlPanel, ControlCallbacks } from './ControlPanel';
import { Drone } from './enemies/drone';
import { Zergling } from './enemies/zergling';
import { BaseUnit } from './units/BaseUnit';
import { EnemyInteraction, GameOverCallbacks } from './interactions/enemy';
import { Larvae } from './units/Larvae';

export default class JungleWorld {
	private renderer!: THREE.WebGLRenderer;
	private scene!: THREE.Scene;
	private camera!: THREE.OrthographicCamera;
	private clock!: THREE.Clock;

	private stats!: any;

	private ground!: THREE.Mesh;
	private trees: THREE.Group[] = [];
	private bushes: THREE.Group[] = [];
	private larvae!: Larvae;
	private minimap!: Minimap;
	private controlPanel!: ControlPanel;
	private enemies: BaseUnit[] = [];
	private enemyInteraction!: EnemyInteraction;
	private gameOverUI!: HTMLElement;

	private movement = {
		left: false,
		right: false,
		up: false,
		down: false,
		speed: 50
	};

	private cameraBounds = {
		minX: -480,
		maxX: 480,
		minY: -480,
		maxY: 480
	};

	constructor() {
		this.initScene();
		this.initStats();
		this.initListeners();
		this.setupControlPanel();
		this.setupEnemySystem();
		this.animate();
	}

	initStats() {
		this.stats = new (Stats as any)();
		document.body.appendChild(this.stats.dom);
	}

	initScene() {
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0x87CEEB);
		this.clock = new THREE.Clock();

		this.camera = new THREE.OrthographicCamera(
			window.innerWidth / -2,
			window.innerWidth / 2,
			window.innerHeight / 2,
			window.innerHeight / -2,
			1,
			1000
		);
		this.camera.position.z = 10;
		this.camera.zoom = 8;
		this.camera.updateProjectionMatrix();

		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);

		document.body.appendChild(this.renderer.domElement);

		const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
		this.scene.add(ambientLight);

		this.createJungleEnvironment();
		this.createLarvae();
		this.minimap = new Minimap(this.scene, this.larvae.getModel());
		this.minimap.updateObjects(this.trees, this.bushes);
	}

	createJungleEnvironment() {
		const groundGeometry = new THREE.PlaneGeometry(1000, 1000);
		const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });
		this.ground = new THREE.Mesh(groundGeometry, groundMaterial);
		this.ground.position.z = -1;
		this.scene.add(this.ground);

		for (let i = 0; i < 300; i++) {
			let x, y;
			do {
				x = (Math.random() - 0.5) * 940;
				y = (Math.random() - 0.5) * 940;
			} while (Math.sqrt(x * x + y * y) < 10);

			this.createTree(x, y);
		}

		for (let i = 0; i < 720; i++) {
			let x, y;
			do {
				x = (Math.random() - 0.5) * 940;
				y = (Math.random() - 0.5) * 940;
			} while (Math.sqrt(x * x + y * y) < 10);

			this.createBush(x, y);
		}
	}

	createTree(x: number, y: number) {
		const treeGroup = new THREE.Group();

		const trunkGeometry = new THREE.CylinderGeometry(0.5, 0.8, 4, 8);
		const trunkMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
		const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
		trunk.position.y = 2;
		trunk.rotation.x = Math.PI / 2;

		const canopyGeometry = new THREE.SphereGeometry(3, 8, 6);
		const canopyMaterial = new THREE.MeshBasicMaterial({ color: 0x006400 });
		const canopy = new THREE.Mesh(canopyGeometry, canopyMaterial);
		canopy.position.y = 4.5;

		treeGroup.add(trunk);
		treeGroup.add(canopy);
		treeGroup.position.x = x;
		treeGroup.position.y = y;

		this.trees.push(treeGroup);
		this.scene.add(treeGroup);
	}

	createBush(x: number, y: number) {
		const bushGroup = new THREE.Group();

		const bushGeometry = new THREE.SphereGeometry(1 + Math.random() * 0.5, 6, 4);

		const colorChoice = Math.random();
		let hue: number;
		let mineralValue: number;
		if (colorChoice < 0.33) {
			hue = 0.55 + Math.random() * 0.1;
			mineralValue = 1;
		} else if (colorChoice < 0.66) {
			hue = 0.7 + Math.random() * 0.15;
			mineralValue = 2;
		} else {
			hue = 0.85 + Math.random() * 0.15;
			mineralValue = 5;
		}

		const bushMaterial = new THREE.MeshBasicMaterial({
			color: new THREE.Color().setHSL(hue, 0.7, 0.4 + Math.random() * 0.3)
		});
		const bush = new THREE.Mesh(bushGeometry, bushMaterial);
		bush.position.y = 0.5;

		bushGroup.add(bush);
		bushGroup.position.x = x;
		bushGroup.position.y = y;

		// Store mineral value in userData
		bushGroup.userData = { minerals: mineralValue };

		this.bushes.push(bushGroup);
		this.scene.add(bushGroup);
	}

	createLarvae() {
		this.larvae = new Larvae(new THREE.Vector3(0, 0, 0));
		this.scene.add(this.larvae.getModel());
	}

	initListeners() {
		window.addEventListener('resize', this.onWindowResize.bind(this), false);

		window.addEventListener('keydown', (event) => {
			const { key } = event;

			switch (key.toLowerCase()) {
				case 'w':
				case 'arrowup':
					this.movement.up = true;
					break;
				case 's':
				case 'arrowdown':
					this.movement.down = true;
					break;
				case 'a':
				case 'arrowleft':
					this.movement.left = true;
					break;
				case 'd':
				case 'arrowright':
					this.movement.right = true;
					break;
				case 'e':
					const win = window.open('', 'Canvas Image');

					const { domElement } = this.renderer;

					this.renderer.render(this.scene, this.camera);

					const src = domElement.toDataURL();

					if (!win) return;

					win.document.write(`<img src='${src}' width='${domElement.width}' height='${domElement.height}'>`);
					break;

				default:
					break;
			}
		});

		window.addEventListener('keyup', (event) => {
			const { key } = event;

			switch (key.toLowerCase()) {
				case 'w':
				case 'arrowup':
					this.movement.up = false;
					break;
				case 's':
				case 'arrowdown':
					this.movement.down = false;
					break;
				case 'a':
				case 'arrowleft':
					this.movement.left = false;
					break;
				case 'd':
				case 'arrowright':
					this.movement.right = false;
					break;
				default:
					break;
			}
		});
	}

	onWindowResize() {
		this.camera.left = window.innerWidth / -2;
		this.camera.right = window.innerWidth / 2;
		this.camera.top = window.innerHeight / 2;
		this.camera.bottom = window.innerHeight / -2;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}

	checkCollision(position: THREE.Vector3): boolean {
		const larvaeRadius = 2;

		for (const tree of this.trees) {
			const trunkPosition = new THREE.Vector3(tree.position.x, tree.position.y + 2, tree.position.z);

			const trunkDistance = Math.sqrt(
				Math.pow(position.x - trunkPosition.x, 2) +
				Math.pow(position.y - trunkPosition.y, 2)
			);

			if (trunkDistance < larvaeRadius + 0.8) {
				return true;
			}
		}

		for (const bush of this.bushes) {
			// Skip collision for harvested bushes
			//if (bush.userData.minerals <= 0) continue;

			const distance = Math.sqrt(
				Math.pow(position.x - bush.position.x, 2) +
				Math.pow(position.y - bush.position.y, 2)
			);
			if (distance < larvaeRadius + 0.5) {
				return true;
			}
		}

		return false;
	}

	checkBushHarvesting() {
		const larvaePosition = this.larvae.getPosition();
		const larvaeRadius = 2;

		for (const bush of this.bushes) {
			// Skip if bush has already been harvested
			if (bush.userData.minerals <= 0) continue;

			const distance = Math.sqrt(
				Math.pow(larvaePosition.x - bush.position.x, 2) +
				Math.pow(larvaePosition.y - bush.position.y, 2)
			);

			if (distance < larvaeRadius + 1.5) {
				// Harvest the bush
				const mineralValue = bush.userData.minerals;
				const currentMinerals = this.larvae.getMinerals();
				this.larvae.setMinerals(currentMinerals + mineralValue);

				// Mark bush as harvested and change color to grey
				bush.userData.minerals = 0;
				const bushMesh = bush.children[0] as THREE.Mesh;
				if (bushMesh.material instanceof THREE.MeshBasicMaterial) {
					bushMesh.material.color.setHex(0x808080);
				}
			}
		}
	}

	updateCameraFollow() {
		const larvaePosition = this.larvae.getPosition();
		this.camera.position.x = larvaePosition.x;
		this.camera.position.y = larvaePosition.y;
	}

	updateMovement(deltaTime: number) {
		const moveDistance = this.movement.speed * deltaTime;
		const currentPos = this.larvae.getPosition();
		let newX = currentPos.x;
		let newY = currentPos.y;
		let movementVector = new THREE.Vector2(0, 0);

		if (this.movement.up) {
			newY = Math.min(currentPos.y + moveDistance, this.cameraBounds.maxY);
			movementVector.y += 1;
		}
		if (this.movement.down) {
			newY = Math.max(currentPos.y - moveDistance, this.cameraBounds.minY);
			movementVector.y -= 1;
		}
		if (this.movement.left) {
			newX = Math.max(currentPos.x - moveDistance, this.cameraBounds.minX);
			movementVector.x -= 1;
		}
		if (this.movement.right) {
			newX = Math.min(currentPos.x + moveDistance, this.cameraBounds.maxX);
			movementVector.x += 1;
		}

		const newPosition = new THREE.Vector3(newX, newY, currentPos.z);

		if (!this.checkCollision(newPosition)) {
			this.larvae.setPosition(newPosition);
			this.updateCameraFollow();

			if (movementVector.length() > 0) {
				const angle = Math.atan2(movementVector.y, movementVector.x);
				this.larvae.setRotation(angle);
			}
		}
	}

	animate() {
		requestAnimationFrame(() => {
			this.animate();
		});

		const deltaTime = this.clock.getDelta();

		if (!this.enemyInteraction?.isGameOver()) {
			this.updateMovement(deltaTime);
			this.updateEnemies(deltaTime);
			this.checkEnemyCollisions();
			this.checkBushHarvesting();
		}

		this.minimap.updateLarvaePosition();
		this.minimap.updateEnemyPositions(this.enemies);
		this.minimap.render();

		// Update resource display in control panel
		const resources = this.larvae.getResources();
		this.controlPanel.updateResources(resources.minerals, resources.gas);

		if (this.stats) this.stats.update();

		this.renderer.render(this.scene, this.camera);
	}

	setupControlPanel() {
		const callbacks: ControlCallbacks = {
			onZoomChange: (zoomDelta: number) => this.handleZoomChange(zoomDelta),
			onSpeedChange: (speed: number) => this.handleSpeedChange(speed)
		};

		this.controlPanel = new ControlPanel(callbacks);
	}

	handleZoomChange(zoomDelta: number) {
		const currentZoom = this.camera.zoom;
		const newZoom = zoomDelta > 0 ? currentZoom * 1.1 : currentZoom / 1.1;

		this.camera.zoom = Math.max(2, Math.min(20, newZoom));
		this.camera.updateProjectionMatrix();
	}

	handleSpeedChange(speed: number) {
		this.movement.speed = speed;
	}

	setupEnemySystem() {
		const callbacks: GameOverCallbacks = {
			onGameOver: () => this.handleGameOver()
		};

		this.enemyInteraction = new EnemyInteraction(callbacks);
		this.spawnEnemies();
		this.createGameOverUI();
	}

	spawnEnemies() {
		// Spawn 1 Drone
		const droneSpawnSide = Math.floor(Math.random() * 4);
		const dronePosition = Drone.getRandomEdgePosition();
		const drone = new Drone(dronePosition);
		this.enemies.push(drone);
		this.scene.add(drone.getModel());

		// Spawn 1 Zergling in a different corner
		const zerglingPosition = Zergling.getRandomEdgePosition(droneSpawnSide);
		const zergling = new Zergling(zerglingPosition);
		this.enemies.push(zergling);
		this.scene.add(zergling.getModel());
	}

	updateEnemies(deltaTime: number) {
		const worldBounds = {
			minX: -500,
			maxX: 500,
			minY: -500,
			maxY: 500
		};

		for (const enemy of this.enemies) {
			enemy.update(deltaTime, worldBounds, this.trees, this.bushes);
		}
	}

	checkEnemyCollisions() {
		const larvaeRadius = this.larvae.getRadius();
		this.enemyInteraction.checkCollisions(this.larvae.getPosition(), larvaeRadius, this.enemies);
	}

	createGameOverUI() {
		this.gameOverUI = document.createElement('div');
		this.gameOverUI.className = 'game-over-overlay';
		this.gameOverUI.style.display = 'none';

		const gameOverContent = document.createElement('div');
		gameOverContent.className = 'game-over-content';

		const gameOverTitle = document.createElement('h1');
		gameOverTitle.textContent = 'GAME OVER';
		gameOverTitle.className = 'game-over-title';

		const gameOverMessage = document.createElement('p');
		gameOverMessage.textContent = 'You have been EATEN!';
		gameOverMessage.className = 'game-over-message';

		const restartButton = document.createElement('button');
		restartButton.textContent = 'Restart Game';
		restartButton.className = 'restart-button';
		restartButton.addEventListener('click', () => {
			this.restartGame();
		});

		gameOverContent.appendChild(gameOverTitle);
		gameOverContent.appendChild(gameOverMessage);
		gameOverContent.appendChild(restartButton);
		this.gameOverUI.appendChild(gameOverContent);

		document.body.appendChild(this.gameOverUI);
	}

	handleGameOver() {
		console.log('Game Over!');
		this.gameOverUI.style.display = 'flex';

		// Red screen flash effect
		document.body.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
		setTimeout(() => {
			document.body.style.backgroundColor = '';
		}, 200);
	}

	restartGame() {
		// Reset game state
		this.enemyInteraction.resetGameState();
		this.gameOverUI.style.display = 'none';

		// Reset larvae position
		this.larvae.setPosition(new THREE.Vector3(0, 0, 0));
		this.updateCameraFollow();

		// Remove existing enemies
		for (const enemy of this.enemies) {
			this.scene.remove(enemy.getModel());
		}
		this.enemies = [];

		// Spawn new enemies
		this.spawnEnemies();
	}
}