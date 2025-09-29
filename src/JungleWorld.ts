import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';

export default class JungleWorld {
	private renderer!: THREE.WebGLRenderer;
	private scene!: THREE.Scene;
	private camera!: THREE.OrthographicCamera;
	private clock!: THREE.Clock;

	private stats!: any;

	private ground!: THREE.Mesh;
	private trees: THREE.Group[] = [];
	private bushes: THREE.Group[] = [];
	private larvae!: THREE.Group;

	private movement = {
		left: false,
		right: false,
		up: false,
		down: false,
		speed: 50
	};

	private cameraBounds = {
		minX: -100,
		maxX: 100,
		minY: -100,
		maxY: 100
	};

	constructor() {
		this.initScene();
		this.initStats();
		this.initListeners();
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
		this.animate();
	}

	createJungleEnvironment() {
		const groundGeometry = new THREE.PlaneGeometry(250, 250);
		const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });
		this.ground = new THREE.Mesh(groundGeometry, groundMaterial);
		this.ground.position.z = -1;
		this.scene.add(this.ground);

		for (let i = 0; i < 25; i++) {
			let x, y;
			do {
				x = (Math.random() - 0.5) * 180;
				y = (Math.random() - 0.5) * 180;
			} while (Math.sqrt(x * x + y * y) < 10);

			this.createTree(x, y);
		}

		for (let i = 0; i < 60; i++) {
			let x, y;
			do {
				x = (Math.random() - 0.5) * 190;
				y = (Math.random() - 0.5) * 190;
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
		if (colorChoice < 0.33) {
			hue = 0.55 + Math.random() * 0.1;
		} else if (colorChoice < 0.66) {
			hue = 0.7 + Math.random() * 0.15;
		} else {
			hue = 0.85 + Math.random() * 0.15;
		}

		const bushMaterial = new THREE.MeshBasicMaterial({
			color: new THREE.Color().setHSL(hue, 0.7, 0.4 + Math.random() * 0.3)
		});
		const bush = new THREE.Mesh(bushGeometry, bushMaterial);
		bush.position.y = 0.5;

		bushGroup.add(bush);
		bushGroup.position.x = x;
		bushGroup.position.y = y;

		this.bushes.push(bushGroup);
		this.scene.add(bushGroup);
	}

	createLarvae() {
		this.larvae = new THREE.Group();

		const bodyGeometry = new THREE.SphereGeometry(1.2, 8, 6);
		bodyGeometry.scale(1.5, 0.8, 1);
		const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0xAA55AA });
		const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
		body.position.y = 0.6;

		const headGeometry = new THREE.SphereGeometry(0.6, 6, 4);
		const headMaterial = new THREE.MeshBasicMaterial({ color: 0xDD77DD });
		const head = new THREE.Mesh(headGeometry, headMaterial);
		head.position.set(1.2, 0.8, 0);

		const eyeGeometry = new THREE.SphereGeometry(0.15, 4, 3);
		const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
		const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
		leftEye.position.set(1.6, 0.9, 0.3);
		const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
		rightEye.position.set(1.6, 0.9, -0.3);

		const segmentGeometry = new THREE.SphereGeometry(0.4, 6, 4);
		const segmentMaterial = new THREE.MeshBasicMaterial({ color: 0x9944AA });

		for (let i = 0; i < 3; i++) {
			const segment = new THREE.Mesh(segmentGeometry, segmentMaterial);
			segment.position.set(-0.8 - i * 0.6, 0.4, 0);
			segment.scale.set(0.8 - i * 0.1, 0.6, 0.8 - i * 0.1);
			this.larvae.add(segment);
		}

		const tentacleGeometry = new THREE.CylinderGeometry(0.05, 0.1, 0.8, 4);
		const tentacleMaterial = new THREE.MeshBasicMaterial({ color: 0x7733AA });

		for (let i = 0; i < 4; i++) {
			const tentacle = new THREE.Mesh(tentacleGeometry, tentacleMaterial);
			const angle = (i / 4) * Math.PI * 2;
			tentacle.position.set(
				Math.cos(angle) * 0.6,
				0.2,
				Math.sin(angle) * 0.6
			);
			tentacle.rotation.z = Math.cos(angle) * 0.3;
			tentacle.rotation.x = Math.sin(angle) * 0.3;
			this.larvae.add(tentacle);
		}

		this.larvae.add(body);
		this.larvae.add(head);
		this.larvae.add(leftEye);
		this.larvae.add(rightEye);

		this.larvae.position.set(0, 0, 0);
		this.scene.add(this.larvae);
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
			const distance = Math.sqrt(
				Math.pow(position.x - bush.position.x, 2) +
				Math.pow(position.y - bush.position.y, 2)
			);
			if (distance < larvaeRadius + 1.5) {
				return true;
			}
		}

		return false;
	}

	updateCameraFollow() {
		this.camera.position.x = this.larvae.position.x;
		this.camera.position.y = this.larvae.position.y;
	}

	updateMovement(deltaTime: number) {
		const moveDistance = this.movement.speed * deltaTime;
		const currentPos = this.larvae.position.clone();
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
			this.larvae.position.copy(newPosition);
			this.updateCameraFollow();

			if (movementVector.length() > 0) {
				//const angle = Math.atan2(movementVector.x, movementVector.y);
				const angle = Math.atan2(movementVector.y, movementVector.x);
				this.larvae.rotation.z = angle;
			}
		}
	}

	animate() {
		requestAnimationFrame(() => {
			this.animate();
		});

		const deltaTime = this.clock.getDelta();
		this.updateMovement(deltaTime);

		if (this.stats) this.stats.update();

		this.renderer.render(this.scene, this.camera);
	}
}