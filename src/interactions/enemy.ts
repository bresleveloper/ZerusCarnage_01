import * as THREE from 'three';
import { Drone } from '../enemies/drone';

export interface GameOverCallbacks {
	onGameOver: () => void;
}

export class EnemyInteraction {
	private gameOver: boolean = false;
	private callbacks: GameOverCallbacks;

	constructor(callbacks: GameOverCallbacks) {
		this.callbacks = callbacks;
	}

	public checkCollisions(larvaePosition: THREE.Vector3, larvaeRadius: number, drones: Drone[]): void {
		if (this.gameOver) return;

		for (const drone of drones) {
			const dronePosition = drone.getPosition();
			const droneRadius = drone.getRadius();

			const distance = Math.sqrt(
				Math.pow(larvaePosition.x - dronePosition.x, 2) +
				Math.pow(larvaePosition.y - dronePosition.y, 2)
			);

			if (distance < larvaeRadius + droneRadius) {
				this.triggerGameOver();
				break;
			}
		}
	}

	private triggerGameOver(): void {
		if (this.gameOver) return;

		this.gameOver = true;
		this.callbacks.onGameOver();
	}

	public isGameOver(): boolean {
		return this.gameOver;
	}

	public resetGameState(): void {
		this.gameOver = false;
	}

	// Future extensions for damage system, power-ups, etc.
	public takeDamage(amount: number): void {
		// Future implementation for health system
	}

	public addEffect(effectType: string, duration: number): void {
		// Future implementation for temporary effects
	}

	public collectPowerUp(powerUpType: string): void {
		// Future implementation for power-ups
	}
}