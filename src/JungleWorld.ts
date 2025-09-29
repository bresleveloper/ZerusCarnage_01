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

	private movement = {
		left: false,
		right: false,
		up: false,
		down: false,
		speed: 150
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
		this.animate();
	}

	createJungleEnvironment() {
		const groundGeometry = new THREE.PlaneGeometry(250, 250);
		const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });
		this.ground = new THREE.Mesh(groundGeometry, groundMaterial);
		this.ground.position.z = -1;
		this.scene.add(this.ground);

		for (let i = 0; i < 25; i++) {
			this.createTree(
				(Math.random() - 0.5) * 180,
				(Math.random() - 0.5) * 180
			);
		}

		for (let i = 0; i < 60; i++) {
			this.createBush(
				(Math.random() - 0.5) * 190,
				(Math.random() - 0.5) * 190
			);
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
		const bushMaterial = new THREE.MeshBasicMaterial({
			color: new THREE.Color().setHSL(0.3, 0.7, 0.3 + Math.random() * 0.2)
		});
		const bush = new THREE.Mesh(bushGeometry, bushMaterial);
		bush.position.y = 0.5;

		bushGroup.add(bush);
		bushGroup.position.x = x;
		bushGroup.position.y = y;

		this.bushes.push(bushGroup);
		this.scene.add(bushGroup);
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

	updateMovement(deltaTime: number) {
		const moveDistance = this.movement.speed * deltaTime;

		if (this.movement.up) {
			this.camera.position.y = Math.min(this.camera.position.y + moveDistance, this.cameraBounds.maxY);
		}
		if (this.movement.down) {
			this.camera.position.y = Math.max(this.camera.position.y - moveDistance, this.cameraBounds.minY);
		}
		if (this.movement.left) {
			this.camera.position.x = Math.max(this.camera.position.x - moveDistance, this.cameraBounds.minX);
		}
		if (this.movement.right) {
			this.camera.position.x = Math.min(this.camera.position.x + moveDistance, this.cameraBounds.maxX);
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