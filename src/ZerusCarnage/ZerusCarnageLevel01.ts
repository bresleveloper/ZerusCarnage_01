import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import { Minimap } from '../minimap';
import { ControlPanel, ControlCallbacks } from '../ControlPanel';
import { GameTitle } from '../GameTitle';
import { Drone } from '../enemies/drone';
import { Zergling } from '../enemies/zergling';
import { BaseUnit } from '../units/BaseUnit';
import { EnemyInteraction, GameOverCallbacks } from '../interactions/enemy';
import { PlayerUnit } from '../units/PlayerUnit';
import { Larvae } from '../enemies/larvae';
import { Egg } from '../units/Egg';
import { CombatRulesEngine } from '../interactions/CombatRules';
import { BaseLevel, LevelCallbacks, WinCondition } from './LevelManager';
import { restartCurrentLevel } from '../main';
import { AudioManager } from '../AudioManager';
import { CombatManager, CombatCallbacks } from '../combat/CombatManager';
import { CombatVisuals } from '../combat/CombatVisuals';
import { UnitVisuals } from '../units/UnitVisuals';
import { VespeneGeyser } from '../environment/VespeneGeyser';
import { VespeneExtraction, VespeneExtractionCallbacks } from '../interactions/VespeneExtraction';
import { SpendingPanel, SpendingCallbacks } from '../ui/SpendingPanel';
import { EvolutionsPanel, EvolutionCallbacks } from '../ui/EvolutionsPanel';
import { MessageSystem } from '../ui/MessageSystem';
import { QuestManager } from '../quests/QuestManager';
import { QuestGiverManager } from '../quests/QuestGiverManager';
import { QuestInteraction } from '../quests/QuestInteraction';
import { QuestTrackerHUD } from '../quests/ui/QuestTrackerHUD';
import { showQuestDetail, showQuestLog } from '../quests/ui/QuestHelpers';
import { QuestCompletionNotification } from '../quests/ui/QuestCompletionNotification';
import { LEVEL_01_QUESTS } from './ZerusCarnageLevel01_Quests';
import JungleMusic from '../../resources/sound/Jungle.mp3';
import EatSound from '../../resources/sound/eat fruit.mp3';
import BoneCrackSound from '../../resources/sound/Bone crack.mp3';
import EggCrackSound from '../../resources/sound/Egg cracking.mp3';

export default class ZerusCarnageLevel01 extends BaseLevel {
	private renderer!: THREE.WebGLRenderer;
	private scene!: THREE.Scene;
	private camera!: THREE.OrthographicCamera;
	private clock!: THREE.Clock;

	private stats!: any;

	private ground!: THREE.Mesh;
	private trees: THREE.Group[] = [];
	private bushes: THREE.Group[] = [];
	private vespeneGeysers: VespeneGeyser[] = [];
	private playerUnit!: PlayerUnit;
	private minimap!: Minimap;
	private controlPanel!: ControlPanel;
	private gameTitle!: GameTitle;
	private enemies: BaseUnit[] = [];
	private enemyInteraction!: EnemyInteraction;
	private gameOverUI!: HTMLElement;
	private victoryUI!: HTMLElement;
	private morphingEgg: Egg | null = null;
	private combatRules!: CombatRulesEngine;
	private combatManager!: CombatManager;
	private combatVisuals!: CombatVisuals;
	private unitVisuals!: UnitVisuals;
	private vespeneExtraction!: VespeneExtraction;
	private spendingPanel!: SpendingPanel;
	private evolutionsPanel!: EvolutionsPanel;
	private hasWon: boolean = false;
	private oldUnitRadius: number = 0;
	private audioManager!: AudioManager;
	private minibossKills: number = 0;

	// Quest System
	private messageSystem!: MessageSystem;
	private questManager!: QuestManager;
	private questGiverManager!: QuestGiverManager;
	private questInteraction!: QuestInteraction;
	private questTrackerHUD!: QuestTrackerHUD;
	private nearestBushToOrigin: THREE.Group | null = null;
	private questBushSprite: THREE.Sprite | null = null;
	private nearestTreeToOrigin: THREE.Group | null = null;
	private questTreeSprite: THREE.Sprite | null = null;
	private nearestGeyserToOrigin: VespeneGeyser | null = null;
	private questGeyserSprite: THREE.Sprite | null = null;

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

	private animationFrameId: number | null = null;
	private keydownHandler!: (event: KeyboardEvent) => void;
	private keyupHandler!: (event: KeyboardEvent) => void;
	private resizeHandler!: () => void;

	constructor(callbacks: LevelCallbacks) {
		// Initialize with win condition: Kill 1 miniboss
		// Available units for Level 01: Larvae, Drone, Zergling
		super('miniboss_kills', 1, ['Larvae', 'Drone', 'Zergling']);

		this.combatRules = new CombatRulesEngine();

		// Set callbacks and initialize level
		this.setCallbacks(callbacks);
		this.init();
	}

	private initCombatSystem() {
		// Initialize combat callbacks
		const combatCallbacks: CombatCallbacks = {
			onEnemyDeath: (enemy, reward) => {
				console.log(`Enemy ${enemy.getUnitTypeName()} defeated! Reward: ${reward.minerals}M ${reward.gas}G ${reward.essence}E`);

				// Track enemy kill for quest objectives
				this.questInteraction.onEnemyKilled(enemy.getUnitTypeName());

				// Award resources
				const currentMinerals = this.playerUnit.getMinerals();
				const currentGas = this.playerUnit.getGas();
				const currentEssence = this.playerUnit.getEssence();
				this.playerUnit.setMinerals(currentMinerals + reward.minerals);
				this.playerUnit.setGas(currentGas + reward.gas);
				this.playerUnit.setEssence(currentEssence + reward.essence);

				// Track essence gathering for quest objectives (if any essence gained)
				if (reward.essence > 0) {
					this.questInteraction.onResourceGathered('essence', reward.essence);
				}

				// Log essence if gained
				if (reward.essence > 0) {
					console.log(`Gained ${reward.essence} essence from consuming ${enemy.getUnitTypeName()}!`);
				}

				// Untrack unit (removes HP bar and other visuals)
				this.unitVisuals.untrackUnit(enemy);

				// Remove enemy from scene
				this.scene.remove(enemy.getModel());
				enemy.dispose();
				const index = this.enemies.indexOf(enemy);
				if (index > -1) {
					this.enemies.splice(index, 1);
				}

				// Check if killed enemy was a miniboss (sizeMultiplier > 1)
				if (enemy.getSizeMultiplier() > 1) {
					this.minibossKills++;
					console.log(`Miniboss defeated! Total: ${this.minibossKills}`);
					this.updateWinProgress(this.minibossKills);
				}

				// Play bone crack sound
				this.audioManager.playBoneCrackSound();
			},
			onPlayerDeath: () => {
				console.log('Player died in combat!');
				this.handleGameOver();
			},
			onDamageDealt: (_attacker, defender, damage) => {
				// Create damage number
				this.combatVisuals.createDamageNumber(defender.getPosition(), damage);

				// Create hit flash
				this.combatVisuals.createHitFlash(defender);
			}
		};

		this.combatManager = new CombatManager(combatCallbacks);
		this.combatVisuals = new CombatVisuals(this.scene, this.camera);

		// Set player upgrades reference in combat manager
		this.combatManager.setPlayerUpgrades(this.playerUnit.getUpgrades());
	}

	private initVespeneExtractionSystem() {
		const extractionCallbacks: VespeneExtractionCallbacks = {
			onDamage: (unit, damage) => {
				unit.takeDamage(damage);
				// Create damage number visual
				this.combatVisuals.createDamageNumber(unit.getPosition(), damage);
			},
			onGasGained: (unit, gas) => {
				// Only award gas to player unit
				if (unit === this.playerUnit.getCurrentUnit()) {
					const currentGas = this.playerUnit.getGas();
					this.playerUnit.setGas(currentGas + gas);

					// Track gas gathering for quest objectives
					this.questInteraction.onResourceGathered('gas', gas);
				}
			},
			onUnitDeath: (unit) => {
				// If player died from geyser
				if (unit === this.playerUnit.getCurrentUnit()) {
					console.log('Player died from vespene geyser damage!');
					this.handleGameOver();
				}
			},
			onVisualFeedback: (unit) => {
				// White glow effect (same as combat damage)
				this.combatVisuals.createHitFlash(unit);
			}
		};

		this.vespeneExtraction = new VespeneExtraction(extractionCallbacks);
	}

	private initQuestSystem() {
		// Initialize MessageSystem with pause/resume callbacks
		this.messageSystem = new MessageSystem(
			() => {
				// Pause callback - stop animation loop
				if (this.animationFrameId) {
					cancelAnimationFrame(this.animationFrameId);
					this.animationFrameId = null;
				}
			},
			() => {
				// Resume callback - restart animation loop
				this.animate();
			}
		);

		// Initialize quest managers
		this.questManager = new QuestManager();
		this.questGiverManager = new QuestGiverManager();
		this.questInteraction = new QuestInteraction(this.questManager, this.questGiverManager);

		// Initialize quest tracker HUD
		this.questTrackerHUD = new QuestTrackerHUD(this.questManager);

		// Subscribe to quest events
		this.questManager.on('quest_completed', (quest: any) => {
			console.log(`Quest completed: ${quest.title}`);
			// Show completion notification
			QuestCompletionNotification.show(quest.title, quest.rewards);
			// Quest tracker HUD will update automatically
		});

		// Subscribe to quest rewards event
		this.questManager.on('quest_rewards_granted', (event: any) => {
			console.log(`Quest rewards granted: ${event.questTitle}`, event.rewards);

			// Apply resource rewards
			if (event.rewards.minerals) {
				const currentMinerals = this.playerUnit.getMinerals();
				this.playerUnit.setMinerals(currentMinerals + event.rewards.minerals);
			}
			if (event.rewards.gas) {
				const currentGas = this.playerUnit.getGas();
				this.playerUnit.setGas(currentGas + event.rewards.gas);
			}
			if (event.rewards.essence) {
				const currentEssence = this.playerUnit.getEssence();
				this.playerUnit.setEssence(currentEssence + event.rewards.essence);
			}

			// Apply stat upgrade rewards
			// TODO: Fix PlayerUpgrades to support direct bonus additions from quest rewards
			// Temporarily commented out to allow build to succeed
			/*
			const upgrades = this.playerUnit.getUpgrades();
			if (event.rewards.attackBonus) {
				upgrades.addAttackBonus(event.rewards.attackBonus);
				console.log(`+${event.rewards.attackBonus} Attack granted!`);
			}
			if (event.rewards.armorBonus) {
				upgrades.addArmorBonus(event.rewards.armorBonus);
				console.log(`+${event.rewards.armorBonus} Armor granted!`);
			}
			if (event.rewards.attackSpeedBonus) {
				upgrades.addAttackSpeedBonus(event.rewards.attackSpeedBonus);
				console.log(`+${event.rewards.attackSpeedBonus}% Attack Speed granted!`);
			}
			*/

			// Show quest completion message
			this.messageSystem.show({
				type: 'success',
				title: 'QUEST COMPLETE!',
				content: `${event.questTitle}\n\nRewards granted!`,
				buttons: [
					{
						label: 'OK',
						onClick: () => {},
						style: 'primary'
					}
				]
			});
		});

		// Setup example quests
		this.setupExampleQuests();
	}

	private setupExampleQuests() {
		// Example Quest 1: Tutorial Hunt (given by a bush)
		const tutorialQuest = LEVEL_01_QUESTS.tutorial_hunt1;

		this.questManager.addQuest(tutorialQuest);

		// Register nearest bush to origin as quest giver (if exists)
		if (this.nearestBushToOrigin) {
			const questBush = this.nearestBushToOrigin;
			const questBushId = 'quest_bush_tutorial';
			questBush.userData.questGiverId = questBushId;
			this.questGiverManager.registerQuestGiver(
				questBushId,
				'obstacle',
				'tutorial_hunt1',
				false
			);
			console.log('Tutorial quest registered with nearest bush to origin');

			// Create and add quest icon sprite to the bush
			this.questBushSprite = this.createQuestIconSprite();
			questBush.add(this.questBushSprite);
		}

		// Quest 2: Eating Trees (given by a tree)
		const treeQuest = LEVEL_01_QUESTS.tutorial_hunt2;

		this.questManager.addQuest(treeQuest);

		// Register nearest tree to origin as quest giver (if exists)
		if (this.nearestTreeToOrigin) {
			const questTree = this.nearestTreeToOrigin;
			const questTreeId = 'quest_tree_tutorial';
			questTree.userData.questGiverId = questTreeId;
			this.questGiverManager.registerQuestGiver(
				questTreeId,
				'obstacle',
				'tutorial_hunt2',
				false
			);
			console.log('Tree quest registered with nearest tree to origin');

			// Create and add quest icon sprite to the tree
			this.questTreeSprite = this.createQuestIconSprite();
			questTree.add(this.questTreeSprite);
			// Adjust Y position to be above canopy (canopy extends to Y=7.5)
			this.questTreeSprite.position.y = 9;
		}

		// Quest 3: Harvesting Gas (given by a geyser)
		const geyserQuest = LEVEL_01_QUESTS.tutorial_hunt3;

		this.questManager.addQuest(geyserQuest);

		// Register nearest geyser to origin as quest giver (if exists)
		if (this.nearestGeyserToOrigin) {
			const questGeyser = this.nearestGeyserToOrigin;
			const questGeyserId = 'quest_geyser_tutorial';
			questGeyser.getModel().userData.questGiverId = questGeyserId;
			this.questGiverManager.registerQuestGiver(
				questGeyserId,
				'obstacle',
				'tutorial_hunt3',
				false
			);
			console.log('Geyser quest registered with nearest geyser to origin');

			// Create and add quest icon sprite to the geyser
			this.questGeyserSprite = this.createQuestIconSprite();
			questGeyser.getModel().add(this.questGeyserSprite);
		}
	}

	/**
	 * Create a quest icon sprite using Q_Large.png image for non-unit quest givers
	 */
	private createQuestIconSprite(): THREE.Sprite {
		// Load quest icon image
		const textureLoader = new THREE.TextureLoader();
		const texture = textureLoader.load('resources/Q_Large.png');

		// Create sprite from texture
		const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
			map: texture,
			transparent: true
		}));

		// Position above bush (bush radius is ~0.5, add offset)
		sprite.position.set(0, 4, 1);

		// Scale inversely with camera zoom to maintain constant screen size
		// baseScale = desiredScale * initialZoom = 4 * 8 = 32
		const baseScale = 32;
		const zoomAdjustedScale = baseScale / this.camera.zoom;
		sprite.scale.set(zoomAdjustedScale, zoomAdjustedScale, 1);

		return sprite;
	}

	// Initialize level - called by level manager
	init() {
		this.initScene();
		this.initStats();
		this.initListeners();
		this.setupGameTitle();
		this.setupControlPanel();
		this.setupSpendingPanel();
		this.setupEvolutionsPanel();
		this.setupEnemySystem();
		this.initCombatSystem();
		this.initVespeneExtractionSystem();
		this.initQuestSystem();
		this.animate();
		this.initAudio();
	}

	initStats() {
		this.stats = new (Stats as any)();
		// Position stats monitor in bottom-right corner
		this.stats.dom.style.position = 'fixed';
		this.stats.dom.style.bottom = '0px';
		this.stats.dom.style.right = '0px';
		this.stats.dom.style.top = 'auto';
		this.stats.dom.style.left = 'auto';
		document.body.appendChild(this.stats.dom);
	}

	initAudio() {
		// Initialize audio manager with camera
		this.audioManager = new AudioManager(this.camera);

		// Load and play jungle background music at 15% volume
		this.audioManager.loadBackgroundMusic(JungleMusic, 0.15, true);

		// Load eating sound effect at 40% volume
		this.audioManager.loadEatSound(EatSound, 0.3);

		// Load bone crack sound effect at 30% volume
		this.audioManager.loadBoneCrackSound(BoneCrackSound, 0.25);

		// Load egg cracking sound effect at 50% volume
		this.audioManager.loadEggCrackSound(EggCrackSound, 0.5);
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

		// Initialize unit visuals early (before creating any units)
		this.unitVisuals = new UnitVisuals(this.scene, this.camera);

		this.createJungleEnvironment();
		this.createPlayerUnit();

		// Set player reference after player is created
		this.unitVisuals.setPlayerUnit(this.playerUnit);

		this.minimap = new Minimap(this.scene, this.playerUnit);
		this.minimap.updateObjects(this.trees, this.bushes, this.vespeneGeysers);
	}

	createJungleEnvironment() {
		const groundGeometry = new THREE.PlaneGeometry(1000, 1000);
		const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });
		this.ground = new THREE.Mesh(groundGeometry, groundMaterial);
		this.ground.position.z = -1;
		this.scene.add(this.ground);

		for (let i = 0; i < 200; i++) {
			let x, y;
			do {
				x = (Math.random() - 0.5) * 940;
				y = (Math.random() - 0.5) * 940;
			} while (Math.sqrt(x * x + y * y) < 10);

			this.createTree(x, y);
		}

		// Find nearest tree to origin (0,0,0) for quest registration
		let nearestTreeDistance = Infinity;
		for (const tree of this.trees) {
			const distance = Math.sqrt(tree.position.x ** 2 + tree.position.y ** 2);
			if (distance < nearestTreeDistance) {
				nearestTreeDistance = distance;
				this.nearestTreeToOrigin = tree;
			}
		}

		for (let i = 0; i < 520; i++) {
			let x, y;
			do {
				x = (Math.random() - 0.5) * 940;
				y = (Math.random() - 0.5) * 940;
			} while (Math.sqrt(x * x + y * y) < 10);

			this.createBush(x, y);
		}

		// Find nearest bush to origin (0,0,0) for quest registration
		let nearestDistance = Infinity;
		for (const bush of this.bushes) {
			const distance = Math.sqrt(bush.position.x ** 2 + bush.position.y ** 2);
			if (distance < nearestDistance) {
				nearestDistance = distance;
				this.nearestBushToOrigin = bush;
			}
		}

		// Create 150 vespene geysers
		for (let i = 0; i < 50; i++) {
			let x, y;
			do {
				x = (Math.random() - 0.5) * 940;
				y = (Math.random() - 0.5) * 940;
			} while (Math.sqrt(x * x + y * y) < 10);

			this.createVespeneGeyser(x, y);
		}

		// Find nearest geyser to origin (0,0,0) for quest registration
		let nearestGeyserDistance = Infinity;
		for (const geyser of this.vespeneGeysers) {
			const geyserPos = geyser.getPosition();
			const distance = Math.sqrt(geyserPos.x ** 2 + geyserPos.y ** 2);
			if (distance < nearestGeyserDistance) {
				nearestGeyserDistance = distance;
				this.nearestGeyserToOrigin = geyser;
			}
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

	createVespeneGeyser(x: number, y: number) {
		const geyser = new VespeneGeyser(new THREE.Vector3(x, y, 0));
		this.vespeneGeysers.push(geyser);
		this.scene.add(geyser.getModel());
	}

	createPlayerUnit() {
		const initialLarvae = new Larvae(new THREE.Vector3(0, 0, 0), true); // true = player larvae (blue-tinted)
		this.playerUnit = new PlayerUnit(initialLarvae, 'Larvae');
		this.scene.add(this.playerUnit.getModel());
		this.unitVisuals.trackUnit(initialLarvae);
	}

	initListeners() {
		this.resizeHandler = this.onWindowResize.bind(this);
		window.addEventListener('resize', this.resizeHandler, false);

		this.keydownHandler = (event) => {
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

				case 'j':
					// Toggle quest log
					if (!this.messageSystem.isVisible()) {
						showQuestLog(this.questManager, this.messageSystem);
					}
					break;

				case '+':
				case '=':
					// Zoom in
					this.handleZoomChange(0.1);
					break;

				case '-':
					// Zoom out
					this.handleZoomChange(-0.1);
					break;

				default:
					break;
			}
		};
		window.addEventListener('keydown', this.keydownHandler);

		this.keyupHandler = (event) => {
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
		};
		window.addEventListener('keyup', this.keyupHandler);
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
		const playerRadius = 2;

		for (const tree of this.trees) {
			const trunkPosition = new THREE.Vector3(tree.position.x, tree.position.y + 2, tree.position.z);

			const trunkDistance = Math.sqrt(
				Math.pow(position.x - trunkPosition.x, 2) +
				Math.pow(position.y - trunkPosition.y, 2)
			);

			if (trunkDistance < playerRadius + 0.8) {
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
			if (distance < playerRadius + 0.5) {
				return true;
			}
		}

		return false;
	}

	checkResourceHarvesting() {
		const playerPosition = this.playerUnit.getPosition();
		const playerRadius = 2;
		const playerType = this.playerUnit.getUnitType();

		// Check quest giver collision (bushes can be quest givers)
		for (const bush of this.bushes) {
			const questGiverId = bush.userData.questGiverId;
			if (questGiverId) {
				const distance = Math.sqrt(
					Math.pow(playerPosition.x - bush.position.x, 2) +
					Math.pow(playerPosition.y - bush.position.y, 2)
				);

				const questGiver = this.questInteraction.checkQuestGiverCollision(
					playerPosition,
					playerRadius,
					questGiverId,
					new THREE.Vector3(bush.position.x, bush.position.y, 0),
					5.0 // Larger radius to trigger quest BEFORE bush can be eaten (eating radius is 4.15)
				);

				if (questGiver) {
					const questId = this.questGiverManager.getQuestForEntity(questGiverId);
					const quest = this.questManager.getQuest(questId!);
					if (quest && !quest.isActive && !quest.isCompleted) {
						// Show quest detail screen
						showQuestDetail(quest, this.messageSystem, this.questManager);
						// Remove quest giver flag so quest is only offered once
						delete bush.userData.questGiverId;
						// Remove quest icon sprite from bush
						if (this.questBushSprite) {
							bush.remove(this.questBushSprite);
							this.questBushSprite.material.map?.dispose();
							this.questBushSprite.material.dispose();
							this.questBushSprite = null;
						}
					}
				}
			}
		}

		// Check quest giver collision (trees can be quest givers)
		for (const tree of this.trees) {
			const questGiverId = tree.userData.questGiverId;
			if (questGiverId) {
				const distance = Math.sqrt(
					Math.pow(playerPosition.x - tree.position.x, 2) +
					Math.pow(playerPosition.y - tree.position.y, 2)
				);

				const questGiver = this.questInteraction.checkQuestGiverCollision(
					playerPosition,
					playerRadius,
					questGiverId,
					//the +4 is to mitigate the fact that tree.position is the trunc
					new THREE.Vector3(tree.position.x, tree.position.y +4, 0),
					6.0 // Larger radius to trigger quest BEFORE tree can be eaten
				);

				if (questGiver) {
					const questId = this.questGiverManager.getQuestForEntity(questGiverId);
					const quest = this.questManager.getQuest(questId!);
					if (quest && !quest.isActive && !quest.isCompleted) {
						// Show quest detail screen
						showQuestDetail(quest, this.messageSystem, this.questManager);
						// Remove quest giver flag so quest is only offered once
						delete tree.userData.questGiverId;
						// Remove quest icon sprite from tree
						if (this.questTreeSprite) {
							tree.remove(this.questTreeSprite);
							this.questTreeSprite.material.map?.dispose();
							this.questTreeSprite.material.dispose();
							this.questTreeSprite = null;
						}
					}
				}
			}
		}

		// Check quest giver collision (geysers can be quest givers)
		for (const geyser of this.vespeneGeysers) {
			const questGiverId = geyser.getModel().userData.questGiverId;
			if (questGiverId) {
				const geyserPos = geyser.getPosition();
				const distance = Math.sqrt(
					Math.pow(playerPosition.x - geyserPos.x, 2) +
					Math.pow(playerPosition.y - geyserPos.y, 2)
				);

				const questGiver = this.questInteraction.checkQuestGiverCollision(
					playerPosition,
					playerRadius,
					questGiverId,
					geyserPos,
					8.0 // Larger radius to trigger quest from a distance
				);

				if (questGiver) {
					const questId = this.questGiverManager.getQuestForEntity(questGiverId);
					const quest = this.questManager.getQuest(questId!);
					if (quest && !quest.isActive && !quest.isCompleted) {
						// Show quest detail screen
						showQuestDetail(quest, this.messageSystem, this.questManager);
						// Remove quest giver flag so quest is only offered once
						delete geyser.getModel().userData.questGiverId;
						// Remove quest icon sprite from geyser
						if (this.questGeyserSprite) {
							geyser.getModel().remove(this.questGeyserSprite);
							this.questGeyserSprite.material.map?.dispose();
							this.questGeyserSprite.material.dispose();
							this.questGeyserSprite = null;
						}
					}
				}
			}
		}

		// Check bush harvesting (Larvae and Drones can harvest bushes)
		if (this.combatRules.canEat(playerType, 'Bush')) {
			// Use BIGGER bushEatingDistance threshold for Larvae to make eating more reliable
			const bushEatingDistance = playerType === 'Larvae' ? playerRadius + 2.15 : playerRadius + 1.5;

			for (const bush of this.bushes) {
				// Skip if bush has already been harvested
				if (bush.userData.minerals <= 0) continue;

				const distance = Math.sqrt(
					Math.pow(playerPosition.x - bush.position.x, 2) +
					Math.pow(playerPosition.y - bush.position.y, 2)
				);

				if (distance < bushEatingDistance) {
					// Harvest the bush
					const mineralValue = bush.userData.minerals;

					// Track mineral gathering for quest objectives
					this.questInteraction.onResourceGathered('minerals', mineralValue);
					const currentMinerals = this.playerUnit.getMinerals();
					this.playerUnit.setMinerals(currentMinerals + mineralValue);

					// Play eating sound
					this.audioManager.playEatSound();

					// Mark bush as harvested and change color to grey
					bush.userData.minerals = 0;
					const bushMesh = bush.children[0] as THREE.Mesh;
					if (bushMesh.material instanceof THREE.MeshBasicMaterial) {
						bushMesh.material.color.setHex(0x808080);
					}
				}
			}
		}

		// Check tree harvesting (Only Drones can harvest trees for 20 minerals)
		if (this.combatRules.canEat(playerType, 'Tree')) {
			for (const tree of this.trees) {
				// Skip if tree has already been harvested
				if (tree.userData.harvested) continue;

				// Calculate distance to trunk center (matches collision check at tree.position.y + 2)
				const distance = Math.sqrt(
					Math.pow(playerPosition.x - tree.position.x, 2) +
					Math.pow(playerPosition.y - (tree.position.y + 2), 2)
				);

				if (distance < playerRadius + 2.5) {
					// Harvest the tree
					const reward = this.combatRules.getReward(playerType, 'Tree');
					const currentMinerals = this.playerUnit.getMinerals();
					this.playerUnit.setMinerals(currentMinerals + reward);

					// Track mineral gathering for quest objectives
					this.questInteraction.onResourceGathered('minerals', reward);

					// Play eating sound
					this.audioManager.playEatSound();

					// Mark tree as harvested and change color to grey
					tree.userData.harvested = true;
					tree.children.forEach(child => {
						if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
							child.material.color.setHex(0x808080);
						}
					});
				}
			}
		}
	}

	updateCameraFollow() {
		const playerPosition = this.playerUnit.getPosition();
		this.camera.position.x = playerPosition.x;
		this.camera.position.y = playerPosition.y;
	}

	updateMovement(deltaTime: number) {
		const moveDistance = this.movement.speed * deltaTime;
		const currentPos = this.playerUnit.getPosition();
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
			this.playerUnit.setPosition(newPosition);
			this.updateCameraFollow();

			if (movementVector.length() > 0) {
				const angle = Math.atan2(movementVector.y, movementVector.x);
				this.playerUnit.setRotation(angle);
			}
		}
	}

	animate() {
		this.animationFrameId = requestAnimationFrame(() => {
			this.animate();
		});

		const deltaTime = this.clock.getDelta();

		if (!this.enemyInteraction?.isGameOver() && !this.hasWon) {
			// Only update movement if not morphing
			if (!this.playerUnit.getIsMorphing()) {
				this.updateMovement(deltaTime);
				this.checkEnemyCollisions();
				this.checkResourceHarvesting();
			}

			// Always update enemies
			this.updateEnemies(deltaTime);

			// Update combat system
			this.combatManager.update(deltaTime);

			// Update combat visuals (damage numbers, hit flashes)
			this.combatVisuals.update(deltaTime);

			// Update unit visuals (HP bars, etc.)
			this.unitVisuals.update(deltaTime);

			// Update vespene extraction for player unit
			this.vespeneExtraction.update(deltaTime, this.playerUnit.getCurrentUnit(), this.vespeneGeysers);

			// Update vespene geyser animations (smoke particles)
			for (const geyser of this.vespeneGeysers) {
				geyser.update(deltaTime);
			}

			// Update morphing egg
			if (this.morphingEgg) {
				this.morphingEgg.update(deltaTime);
				if (this.morphingEgg.isMorphComplete()) {
					this.completeMorphing(this.morphingEgg.getTargetUnitType());
				}
			}

			// Only update minimap positions when game is active (prevents expensive loops after game over)
			this.minimap.updatePlayerUnitPosition();
			this.minimap.updateEnemyPositions(this.enemies);

			// Update resource display in control panel
			const resources = this.playerUnit.getResources();
			const upgrades = this.playerUnit.getUpgrades();
			const currentHP = this.playerUnit.getCurrentHP();
			const maxHP = this.playerUnit.getMaxHP();
			this.controlPanel.updateResources(resources.minerals, resources.gas, resources.essence, currentHP, maxHP);

			// Update spending panel UI
			const currentAbsorb = this.playerUnit.getDamageAbsorb();
			this.spendingPanel.updateButtons(resources.minerals, resources.gas, resources.essence, upgrades, currentHP, maxHP, currentAbsorb);

			// Update evolutions panel with current resources
			this.evolutionsPanel.updateMutations(
				this.playerUnit.getUnitType(),
				resources.minerals,
				resources.gas
			);
		}

		// Always render minimap (but don't update positions after game over)
		this.minimap.render();

		if (this.stats) this.stats.update();

		this.renderer.render(this.scene, this.camera);
	}

	setupGameTitle() {
		this.gameTitle = new GameTitle();
	}

	setupControlPanel() {
		const callbacks: ControlCallbacks = {
			onZoomChange: (zoomDelta: number) => this.handleZoomChange(zoomDelta),
			onSpeedChange: (speed: number) => this.handleSpeedChange(speed),
			onMorphUnit: (unitType: string) => this.handleMorph(unitType)
		};

		this.controlPanel = new ControlPanel(callbacks);

		// Set available units for this level
		this.controlPanel.setAvailableUnits(this.getAvailableUnits());
	}

	handleZoomChange(zoomDelta: number) {
		const currentZoom = this.camera.zoom;
		const newZoom = zoomDelta > 0 ? currentZoom * 1.1 : currentZoom / 1.1;

		this.camera.zoom = Math.max(2, Math.min(20, newZoom));
		this.camera.updateProjectionMatrix();

		// Update quest icon sprite scales to maintain constant screen size
		// baseScale = desiredScale * initialZoom = 4 * 8 = 32
		const baseScale = 32;
		const zoomAdjustedScale = baseScale / this.camera.zoom;

		if (this.questBushSprite) {
			this.questBushSprite.scale.set(zoomAdjustedScale, zoomAdjustedScale, 1);
		}
		if (this.questTreeSprite) {
			this.questTreeSprite.scale.set(zoomAdjustedScale, zoomAdjustedScale, 1);
		}
		if (this.questGeyserSprite) {
			this.questGeyserSprite.scale.set(zoomAdjustedScale, zoomAdjustedScale, 1);
		}
	}

	handleSpeedChange(speed: number) {
		this.movement.speed = speed;
	}

	setupSpendingPanel() {
		const callbacks: SpendingCallbacks = {
			onUpgradeAttack: () => this.handleUpgradeAttack(),
			onUpgradeArmor: () => this.handleUpgradeArmor(),
			onSpendHealth: () => this.handleHealthSpending(),
			onPurchaseAbsorb: () => this.handlePurchaseAbsorb()
		};

		this.spendingPanel = new SpendingPanel(callbacks);

		// Append spending panel to control panel
		const controlContainer = document.querySelector('.control-panel');
		if (controlContainer) {
			controlContainer.appendChild(this.spendingPanel.getContainer());
		}
	}

	setupEvolutionsPanel() {
		const callbacks: EvolutionCallbacks = {
			onSelectMutation: (mutationName: string) => this.handleMutationSelect(mutationName)
		};

		this.evolutionsPanel = new EvolutionsPanel(callbacks);

		// Append evolutions panel to control panel
		const controlContainer = document.querySelector('.control-panel');
		if (controlContainer) {
			controlContainer.appendChild(this.evolutionsPanel.getContainer());
		}
	}

	handleMutationSelect(mutationName: string) {
		// TODO: Implement mutation selection logic
		console.log(`Selected mutation: ${mutationName}`);
	}

	handleUpgradeAttack() {
		const upgrades = this.playerUnit.getUpgrades();
		const cost = upgrades.getAttackUpgradeCost();

		// Check if player has enough resources
		if (this.playerUnit.getMinerals() >= cost.minerals &&
			this.playerUnit.getGas() >= cost.gas) {
			// Deduct resources
			this.playerUnit.setMinerals(this.playerUnit.getMinerals() - cost.minerals);
			this.playerUnit.setGas(this.playerUnit.getGas() - cost.gas);

			// Apply upgrade
			upgrades.upgradeAttack();

			// Update visual display
			this.unitVisuals.updateUpgradeIndicator(this.playerUnit.getCurrentUnit());

			console.log(`Attack upgraded to level ${upgrades.getAttackLevel()}`);
		}
	}

	handleUpgradeArmor() {
		const upgrades = this.playerUnit.getUpgrades();
		const cost = upgrades.getArmorUpgradeCost();

		// Check if player has enough resources
		if (this.playerUnit.getMinerals() >= cost.minerals &&
			this.playerUnit.getGas() >= cost.gas) {
			// Deduct resources
			this.playerUnit.setMinerals(this.playerUnit.getMinerals() - cost.minerals);
			this.playerUnit.setGas(this.playerUnit.getGas() - cost.gas);

			// Apply upgrade
			upgrades.upgradeArmor();

			// Update visual display
			this.unitVisuals.updateUpgradeIndicator(this.playerUnit.getCurrentUnit());

			console.log(`Armor upgraded to level ${upgrades.getArmorLevel()}`);
		}
	}

	handleHealthSpending() {
		const currentUnit = this.playerUnit.getCurrentUnit();
		const currentHP = currentUnit.getCurrentHP();
		const maxHP = currentUnit.getHitPoints();
		const missingHP = maxHP - currentHP;

		if (missingHP <= 0) {
			// Already at full health
			return;
		}

		// Cost is 1M per HP
		const currentMinerals = this.playerUnit.getMinerals();
		if (currentMinerals >= 1) {
			// Heal all missing HP if player has enough minerals
			const healAmount = Math.min(missingHP, currentMinerals);

			// Deduct minerals
			this.playerUnit.setMinerals(currentMinerals - healAmount);

			// Heal unit (negative damage = heal)
			currentUnit.takeDamage(-healAmount);

			console.log(`Healed ${healAmount} HP`);
		}
	}

	handlePurchaseAbsorb() {
		const essenceCost = 1;
		const absorbGain = 10;

		// Check if player has enough essence
		if (this.playerUnit.getEssence() >= essenceCost) {
			const purchased = this.playerUnit.purchaseDamageAbsorb(essenceCost, absorbGain);
			if (purchased) {
				//this.audioManager.playSelectSound();
				console.log(`Purchased ${absorbGain} damage absorb for ${essenceCost} essence. Current absorb: ${this.playerUnit.getDamageAbsorb()}`);
			}
		}
	}

	setupEnemySystem() {
		const callbacks: GameOverCallbacks = {
			onGameOver: () => this.handleGameOver()
		};

		this.enemyInteraction = new EnemyInteraction(callbacks);
		this.spawnEnemies();
		this.createGameOverUI();

		// Only create victory UI if win condition exists
		if (this.winCondition !== null) {
			this.createVictoryUI();
		}
	}

	private isTooCloseToOtherEnemies(position: THREE.Vector3, minDistance: number): boolean {
		for (const enemy of this.enemies) {
			const enemyPos = enemy.getPosition();
			const distance = Math.sqrt(
				Math.pow(position.x - enemyPos.x, 2) +
				Math.pow(position.y - enemyPos.y, 2)
			);
			if (distance < minDistance) {
				return true;
			}
		}
		return false;
	}

	spawnEnemies() {
		const minSpawnDistance = 20; // Minimum distance between enemies

		// Spawn 4 Drones at edge positions
		for (let i = 0; i < 4; i++) {
			let dronePosition: THREE.Vector3;
			do {
				dronePosition = Drone.getRandomEdgePosition();
			} while (this.isTooCloseToOtherEnemies(dronePosition, minSpawnDistance));

			const drone = new Drone(dronePosition, false);
			drone.setAttackUpgrade(Math.floor(Math.random() * 4)); // Random 0-3
			drone.setArmorUpgrade(Math.floor(Math.random() * 4)); // Random 0-3
			this.enemies.push(drone);
			this.scene.add(drone.getModel());
			this.unitVisuals.trackUnit(drone);
		}

		// Spawn 3 Zerglings at edge positions, ensuring spacing from Drones
		for (let i = 0; i < 3; i++) {
			let zerglingPosition: THREE.Vector3;
			do {
				zerglingPosition = Zergling.getRandomEdgePosition();
			} while (this.isTooCloseToOtherEnemies(zerglingPosition, minSpawnDistance));

			const zergling = new Zergling(zerglingPosition, false);
			zergling.setAttackUpgrade(Math.floor(Math.random() * 4)); // Random 0-3
			zergling.setArmorUpgrade(Math.floor(Math.random() * 4)); // Random 0-3
			this.enemies.push(zergling);
			this.scene.add(zergling.getModel());
			this.unitVisuals.trackUnit(zergling);
		}

		// Spawn 18 passive enemy larvae around the map (not near 0,0,0 or other enemies)
		for (let i = 0; i < 18; i++) {
			let x: number, y: number;
			let larvaePosition: THREE.Vector3;
			do {
				// Random position across the map
				x = (Math.random() - 0.5) * 900; // -450 to 450
				y = (Math.random() - 0.5) * 900; // -450 to 450
				larvaePosition = new THREE.Vector3(x, y, 0);
			} while (
				Math.sqrt(x * x + y * y) < 30 || // Exclude center area within 30 units
				this.isTooCloseToOtherEnemies(larvaePosition, minSpawnDistance) // Ensure spacing from other enemies
			);

			const larvae = new Larvae(larvaePosition, false); // false = enemy larvae (purple)
			this.enemies.push(larvae);
			this.scene.add(larvae.getModel());
			this.unitVisuals.trackUnit(larvae);
		}

		// Spawn 1 Drone miniboss at edge position (yellow-gold, 3x size, 400 HP, +10/+10 attack/armor)
		let minibossPosition: THREE.Vector3;
		do {
			minibossPosition = Drone.getRandomEdgePosition();
		} while (this.isTooCloseToOtherEnemies(minibossPosition, minSpawnDistance * 2)); // Extra spacing for large miniboss

		const miniboss = new Drone(
			minibossPosition,
			false, // Not player unit
			{ hitPoints: 600, damage: 26, armor: 24 }, // +10 attack (5 → 15), +10 armor (0 → 10), 400 HP
			0xFFD700, // Gold color
			3 // 3x size multiplier
		);
		miniboss.setAttackUpgrade(21); // 26 - 5 base = +21 attack
		miniboss.setArmorUpgrade(24); // 24 - 0 base = +24 armor
		this.enemies.push(miniboss);
		this.scene.add(miniboss.getModel());
		this.unitVisuals.trackUnit(miniboss);

		// Spawn 1 Zergling miniboss at edge position (deep gold-yellow, 2.5x size, 150 HP, 10 damage, 5 armor)
		let zerglingMinibossPosition: THREE.Vector3;
		do {
			zerglingMinibossPosition = Zergling.getRandomEdgePosition();
		} while (this.isTooCloseToOtherEnemies(zerglingMinibossPosition, minSpawnDistance * 2)); // Extra spacing for miniboss

		const zerglingMiniboss = new Zergling(
			zerglingMinibossPosition,
			false, // Not player unit
			{ hitPoints: 150, damage: 10, armor: 6 }, // 150 HP, 10 damage (5 base + 5 bonus), 6 armor
			0xDAA520, // Deep gold-yellow (goldenrod)
			2.5 // 2.5x size multiplier
		);
		zerglingMiniboss.setAttackUpgrade(5); // 10 - 5 base = +5 attack
		zerglingMiniboss.setArmorUpgrade(6); // 6 - 0 base = +6 armor
		this.enemies.push(zerglingMiniboss);
		this.scene.add(zerglingMiniboss.getModel());
		this.unitVisuals.trackUnit(zerglingMiniboss);
	}

	updateEnemies(deltaTime: number) {
		const worldBounds = {
			minX: -500,
			maxX: 500,
			minY: -500,
			maxY: 500
		};

		// Get player position for miniboss tracking
		const playerPos = this.playerUnit.getPosition();

		for (const enemy of this.enemies) {
			// Check if enemy has an update method (all enemy units should)
			if ('update' in enemy && typeof (enemy as any).update === 'function') {
				(enemy as any).update(deltaTime, worldBounds, this.trees, this.bushes, playerPos);
			}
		}
	}

	checkEnemyCollisions() {
		const playerRadius = this.playerUnit.getRadius();
		const playerType = this.playerUnit.getUnitType();
		const playerUnit = this.playerUnit.getCurrentUnit();

		// First, check if we should initiate combat with evolved units
		const combatStarted = this.combatManager.checkCombatInitiation(
			playerUnit,
			this.enemies,
			(p, e) => this.combatRules.shouldFight(p, e)
		);

		// If player is in combat, don't check for instant kill/eat (combat takes priority)
		if (playerUnit.getIsInCombat()) {
			return;
		}

		// Check if player can eat any enemies (for non-combat units like Larvae)
		const eatenEnemy = this.enemyInteraction.checkEatingEnemies(
			this.playerUnit.getPosition(),
			playerRadius,
			playerType,
			this.enemies,
			(_enemy, reward) => {
				// Award minerals
				const currentMinerals = this.playerUnit.getMinerals();
				this.playerUnit.setMinerals(currentMinerals + reward);

				// Play bone crack sound
				this.audioManager.playBoneCrackSound();
			}
		);

		// Remove eaten enemy from scene and array
		if (eatenEnemy) {
			// Track enemy kill for quest objectives
			this.questInteraction.onEnemyKilled(eatenEnemy.getUnitTypeName());

			this.unitVisuals.untrackUnit(eatenEnemy);
			this.scene.remove(eatenEnemy.getModel());
			eatenEnemy.dispose(); // Clean up resources
			const index = this.enemies.indexOf(eatenEnemy);
			if (index > -1) {
				this.enemies.splice(index, 1);
			}
			// Don't check for collision damage if we ate an enemy
			return;
		}

		// Only check if enemies can kill player if we didn't eat anything and not in combat
		this.enemyInteraction.checkCollisions(this.playerUnit.getPosition(), playerRadius, playerType, this.enemies);
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
			// Reload page for clean restart (acts exactly like browser refresh)
			window.location.reload();
		});

		gameOverContent.appendChild(gameOverTitle);
		gameOverContent.appendChild(gameOverMessage);
		gameOverContent.appendChild(restartButton);
		this.gameOverUI.appendChild(gameOverContent);

		document.body.appendChild(this.gameOverUI);
	}

	createVictoryUI() {
		this.victoryUI = document.createElement('div');
		this.victoryUI.className = 'game-over-overlay'; // Reuse same styling
		this.victoryUI.style.display = 'none';

		const victoryContent = document.createElement('div');
		victoryContent.className = 'game-over-content';

		const victoryTitle = document.createElement('h1');
		victoryTitle.textContent = 'VICTORY!';
		victoryTitle.className = 'game-over-title';
		victoryTitle.style.color = '#00ff00'; // Green color for victory

		const victoryMessage = document.createElement('p');
		victoryMessage.textContent = `Level 01 Complete! You defeated a miniboss!`;
		victoryMessage.className = 'game-over-message';

		const continueButton = document.createElement('button');
		continueButton.textContent = 'Continue to Next Level';
		continueButton.className = 'restart-button';
		continueButton.addEventListener('click', () => {
			// Trigger win callback to level manager
			if (this.callbacks?.onWin) {
				this.callbacks.onWin();
			}
		});

		victoryContent.appendChild(victoryTitle);
		victoryContent.appendChild(victoryMessage);
		victoryContent.appendChild(continueButton);
		this.victoryUI.appendChild(victoryContent);

		document.body.appendChild(this.victoryUI);
	}

	handleGameOver() {
		console.log('Game Over!');

		// Red screen flash effect
		document.body.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
		setTimeout(() => {
			document.body.style.backgroundColor = '';
		}, 200);

		// Show game over message via MessageSystem
		this.messageSystem.show({
			type: 'error',
			title: 'GAME OVER',
			content: 'You have been EATEN!',
			buttons: [
				{
					label: 'Restart',
					onClick: () => restartCurrentLevel(),
					style: 'danger'
				}
			]
		});
	}

	restartGame() {
		// Instead of resetting in-place, dispose entire level and recreate fresh
		restartCurrentLevel();
	}

	// Get unit cost from control panel options
	private getUnitCost(unitType: string): { minerals: number; gas: number } {
		const costs: { [key: string]: { minerals: number; gas: number } } = {
			'Larvae': { minerals: 0, gas: 0 },
			'Drone': { minerals: 50, gas: 0 },
			'Zergling': { minerals: 25, gas: 0 },
			//not available for level 1
			/*'Baneling': { minerals: 25, gas: 25 },
			'Overlord': { minerals: 100, gas: 0 },
			'Roach': { minerals: 75, gas: 25 },
			'Hydralisk': { minerals: 100, gas: 50 },
			'Mutalisk': { minerals: 100, gas: 100 },
			'Queen': { minerals: 150, gas: 0 },
			'Ultralisk': { minerals: 275, gas: 200 }*/
		};

		return costs[unitType] || { minerals: 0, gas: 0 };
	}

	handleMorph(unitType: string) {
		// Prevent morphing during game over or existing morph
		if (this.enemyInteraction.isGameOver() || this.playerUnit.getIsMorphing()) {
			return;
		}

		// Check if player has enough resources
		const cost = this.getUnitCost(unitType);
		const currentMinerals = this.playerUnit.getMinerals();
		const currentGas = this.playerUnit.getGas();

		if (currentMinerals < cost.minerals || currentGas < cost.gas) {
			console.log('Not enough resources to morph');
			return;
		}

		// Deduct resources
		this.playerUnit.setMinerals(currentMinerals - cost.minerals);
		this.playerUnit.setGas(currentGas - cost.gas);

		// Start morphing process
		this.startMorphing(unitType);
	}

	startMorphing(unitType: string) {
		// Set morphing state
		this.playerUnit.setMorphing(true);

		// Store current unit radius for zoom calculation
		this.oldUnitRadius = this.playerUnit.getRadius();

		// Store current position
		const currentPosition = this.playerUnit.getPosition();

		// Untrack old unit (removes HP bar)
		this.unitVisuals.untrackUnit(this.playerUnit.getCurrentUnit());

		// Remove player model from scene
		this.scene.remove(this.playerUnit.getModel());

		// Create morphing egg
		this.morphingEgg = new Egg(currentPosition, unitType, 3);
		this.scene.add(this.morphingEgg.getModel());

		// Play egg cracking sound
		this.audioManager.playEggCrackSound();
	}

	completeMorphing(unitType: string) {
		if (!this.morphingEgg) return;

		// Remove egg from scene and dispose
		const eggPosition = this.morphingEgg.getPosition();
		this.scene.remove(this.morphingEgg.getModel());
		this.morphingEgg.dispose(); // Clean up egg resources

		// Create new unit based on type
		let newUnit: BaseUnit;
		switch (unitType) {
			case 'Larvae':
				newUnit = new Larvae(eggPosition, true); // true = player unit
				break;
			case 'Drone':
				newUnit = new Drone(eggPosition, true); // true = player unit
				break;
			case 'Zergling':
				newUnit = new Zergling(eggPosition, true); // true = player unit
				break;
			// Add other unit types as they are implemented
			default:
				console.warn(`Unit type ${unitType} not yet implemented, defaulting to Larvae`);
				newUnit = new Larvae(eggPosition, true);
		}

		// Morph player unit
		this.playerUnit.morphInto(newUnit, unitType);

		// Add new model to scene
		this.scene.add(this.playerUnit.getModel());

		// Track new unit for visuals (HP bar, etc.)
		this.unitVisuals.trackUnit(newUnit);

		// Update minimap reference to track new model (this will also update the dot size)
		this.minimap.updatePlayerUnitRef(this.playerUnit);

		// Auto-zoom-out if new unit is larger
		const newUnitRadius = this.playerUnit.getRadius();
		const radiusDifference = newUnitRadius - this.oldUnitRadius;

		if (radiusDifference > 0) {
			// Calculate zoom-out clicks: 1 click per 2 units of radius difference (rounded up)
			//changed from x/2 to x*3
			const zoomOutClicks = Math.ceil(radiusDifference * 3);

			// Apply zoom-out (negative delta zooms out)
			for (let i = 0; i < zoomOutClicks; i++) {
				this.handleZoomChange(-0.1);
			}
		}

		// Clear morphing egg reference
		this.morphingEgg = null;

		// Update evolutions panel with new unit's mutations
		this.evolutionsPanel.updateMutations(
			unitType,
			this.playerUnit.getMinerals(),
			this.playerUnit.getGas()
		);
	}

	/**
	 * Override updateWinProgress to show victory UI
	 */
	protected updateWinProgress(newValue: number): void {
		// Do nothing if no win condition
		if (this.winCondition === null) {
			return;
		}

		const wasNotWon = !this.isWinConditionMet();

		// Call parent to update progress
		super.updateWinProgress(newValue);

		// Check if we just won
		if (wasNotWon && this.isWinConditionMet() && !this.hasWon) {
			this.hasWon = true;
			this.handleVictory();
		}
	}

	handleVictory() {
		console.log('Victory! Level 01 Complete!');

		// Green screen flash effect
		document.body.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
		setTimeout(() => {
			document.body.style.backgroundColor = '';
		}, 200);

		// Show victory message via MessageSystem
		this.messageSystem.show({
			type: 'success',
			title: 'VICTORY!',
			content: 'Level Complete!',
			buttons: [
				{
					label: 'Continue',
					onClick: () => {
						if (this.callbacks?.onWin) {
							this.callbacks.onWin();
						}
					},
					style: 'primary'
				}
			]
		});
	}

	/**
	 * Cleanup all resources when level ends
	 * Must be called before transitioning to next level
	 */
	cleanup() {
		console.log('Cleaning up Level 01...');

		// Stop animation loop
		if (this.animationFrameId !== null) {
			cancelAnimationFrame(this.animationFrameId);
			this.animationFrameId = null;
		}

		// Remove event listeners
		if (this.resizeHandler) {
			window.removeEventListener('resize', this.resizeHandler);
		}
		if (this.keydownHandler) {
			window.removeEventListener('keydown', this.keydownHandler);
		}
		if (this.keyupHandler) {
			window.removeEventListener('keyup', this.keyupHandler);
		}

		// Dispose player unit
		if (this.playerUnit) {
			this.playerUnit.getCurrentUnit().dispose();
		}

		// Dispose morphing egg if exists
		if (this.morphingEgg) {
			this.morphingEgg.dispose();
		}

		// Dispose all enemies
		for (const enemy of this.enemies) {
			this.unitVisuals.untrackUnit(enemy);
			this.scene.remove(enemy.getModel());
			enemy.dispose();
		}
		this.enemies = [];

		// Dispose environment objects
		for (const tree of this.trees) {
			tree.children.forEach(child => {
				if (child instanceof THREE.Mesh) {
					child.geometry.dispose();
					if (Array.isArray(child.material)) {
						child.material.forEach(mat => mat.dispose());
					} else {
						child.material.dispose();
					}
				} else if (child instanceof THREE.Sprite) {
					// Dispose sprites (quest icons, etc.)
					if (child.material.map) {
						child.material.map.dispose();
					}
					child.material.dispose();
				}
			});
			this.scene.remove(tree);
		}
		this.trees = [];
		this.questTreeSprite = null;

		for (const bush of this.bushes) {
			bush.children.forEach(child => {
				if (child instanceof THREE.Mesh) {
					child.geometry.dispose();
					if (Array.isArray(child.material)) {
						child.material.forEach(mat => mat.dispose());
					} else {
						child.material.dispose();
					}
				} else if (child instanceof THREE.Sprite) {
					// Dispose sprites (quest icons, etc.)
					if (child.material.map) {
						child.material.map.dispose();
					}
					child.material.dispose();
				}
			});
			this.scene.remove(bush);
		}
		this.bushes = [];
		this.questBushSprite = null;

		// Dispose vespene geysers
		for (const geyser of this.vespeneGeysers) {
			// Dispose quest sprite if attached to this geyser
			const geyserModel = geyser.getModel();
			geyserModel.children.forEach(child => {
				if (child instanceof THREE.Sprite) {
					// Dispose sprites (quest icons, etc.)
					if (child.material.map) {
						child.material.map.dispose();
					}
					child.material.dispose();
				}
			});
			this.scene.remove(geyserModel);
			geyser.dispose();
		}
		this.vespeneGeysers = [];
		this.questGeyserSprite = null;

		// Dispose ground
		if (this.ground) {
			this.ground.geometry.dispose();
			if (Array.isArray(this.ground.material)) {
				this.ground.material.forEach(mat => mat.dispose());
			} else {
				this.ground.material.dispose();
			}
			this.scene.remove(this.ground);
		}

		// Cleanup minimap
		if (this.minimap) {
			this.minimap.dispose();
		}

		// Cleanup game title
		if (this.gameTitle) {
			this.gameTitle.dispose();
		}

		// Cleanup control panel
		if (this.controlPanel) {
			this.controlPanel.dispose();
		}

		// Cleanup spending panel
		if (this.spendingPanel) {
			this.spendingPanel.dispose();
		}

		// Remove stats
		if (this.stats && this.stats.dom) {
			document.body.removeChild(this.stats.dom);
		}

		// Cleanup audio
		if (this.audioManager) {
			this.audioManager.dispose();
		}

		// Cleanup combat systems
		if (this.combatManager) {
			this.combatManager.clearAll();
		}
		if (this.combatVisuals) {
			this.combatVisuals.dispose();
		}

		// Cleanup unit visuals
		if (this.unitVisuals) {
			this.unitVisuals.dispose();
		}

		// Cleanup vespene extraction system
		if (this.vespeneExtraction) {
			this.vespeneExtraction.clearAll();
		}

		// Remove game over UI
		if (this.gameOverUI && this.gameOverUI.parentElement) {
			document.body.removeChild(this.gameOverUI);
		}

		// Remove victory UI
		if (this.victoryUI && this.victoryUI.parentElement) {
			document.body.removeChild(this.victoryUI);
		}

		// Remove renderer
		if (this.renderer && this.renderer.domElement && this.renderer.domElement.parentElement) {
			document.body.removeChild(this.renderer.domElement);
			this.renderer.dispose();
		}

		// Clear scene
		if (this.scene) {
			this.scene.clear();
		}

		// Cleanup quest system
		if (this.messageSystem) {
			this.messageSystem.dispose();
		}
		if (this.questManager) {
			this.questManager.dispose();
		}
		if (this.questGiverManager) {
			this.questGiverManager.dispose();
		}
		if (this.questInteraction) {
			this.questInteraction.dispose();
		}
		if (this.questTrackerHUD) {
			this.questTrackerHUD.dispose();
		}

		console.log('Level 01 cleanup complete');
	}
}