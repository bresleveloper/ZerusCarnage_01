import * as THREE from 'three';
import { BaseUnit } from '../units/BaseUnit';
import { Larvae } from '../enemies/larvae';

export interface GameOverCallbacks {
	onGameOver: () => void;
}

export class EnemyInteraction {
	private gameOver: boolean = false;
	private callbacks: GameOverCallbacks;

	constructor(callbacks: GameOverCallbacks) {
		this.callbacks = callbacks;
	}

	public checkCollisions(playerPosition: THREE.Vector3, playerRadius: number, enemies: BaseUnit[]): void {
		if (this.gameOver) return;

		for (const enemy of enemies) {
			// Skip collision check for Larvae enemies (they are passive and harmless)
			if (enemy instanceof Larvae) {
				continue;
			}

			const enemyPosition = enemy.getPosition();
			// Use a default radius if getRadius is not available
			const enemyRadius = (enemy as any).getRadius ? (enemy as any).getRadius() : 3;

			const distance = Math.sqrt(
				Math.pow(playerPosition.x - enemyPosition.x, 2) +
				Math.pow(playerPosition.y - enemyPosition.y, 2)
			);

			if (distance < playerRadius + enemyRadius) {
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
	public takeDamage(_amount: number): void {
		// Future implementation for health system
	}

	public addEffect(_effectType: string, _duration: number): void {
		// Future implementation for temporary effects
	}

	public collectPowerUp(_powerUpType: string): void {
		// Future implementation for power-ups
	}
}