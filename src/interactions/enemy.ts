import * as THREE from 'three';
import { BaseUnit } from '../units/BaseUnit';
import { Larvae } from '../enemies/larvae';
import { CombatRulesEngine } from './CombatRules';

export interface GameOverCallbacks {
	onGameOver: () => void;
}

export interface EatenEnemyCallback {
	(enemy: BaseUnit, reward: number): void;
}

export class EnemyInteraction {
	private gameOver: boolean = false;
	private callbacks: GameOverCallbacks;
	private combatRules: CombatRulesEngine;

	constructor(callbacks: GameOverCallbacks) {
		this.callbacks = callbacks;
		this.combatRules = new CombatRulesEngine();
	}

	public checkCollisions(playerPosition: THREE.Vector3, playerRadius: number, playerType: string, enemies: BaseUnit[]): void {
		if (this.gameOver) return;

		for (const enemy of enemies) {
			const enemyPosition = enemy.getPosition();
			// Use a default radius if getRadius is not available
			const enemyRadius = (enemy as any).getRadius ? (enemy as any).getRadius() : 3;

			const distance = Math.sqrt(
				Math.pow(playerPosition.x - enemyPosition.x, 2) +
				Math.pow(playerPosition.y - enemyPosition.y, 2)
			);

			if (distance < playerRadius + enemyRadius) {
				// Use combat rules to determine if enemy can kill player
				const enemyType = enemy.getUnitTypeName();
				if (this.combatRules.canKill(enemyType, playerType)) {
					this.triggerGameOver();
					break;
				}
			}
		}
	}

	// Check if player can eat any nearby enemies
	public checkEatingEnemies(playerPosition: THREE.Vector3, playerRadius: number, playerType: string, enemies: BaseUnit[], callback: EatenEnemyCallback): BaseUnit | null {
		for (const enemy of enemies) {
			const enemyPosition = enemy.getPosition();
			const enemyRadius = (enemy as any).getRadius ? (enemy as any).getRadius() : 3;

			const distance = Math.sqrt(
				Math.pow(playerPosition.x - enemyPosition.x, 2) +
				Math.pow(playerPosition.y - enemyPosition.y, 2)
			);

			// Check if player is close enough to eat enemy
			if (distance < playerRadius + enemyRadius) {
				const enemyType = enemy.getUnitTypeName();

				// Check if player can eat this enemy type
				if (this.combatRules.canEat(playerType, enemyType)) {
					const reward = this.combatRules.getReward(playerType, enemyType);
					callback(enemy, reward);
					return enemy; // Return the eaten enemy
				}
			}
		}

		return null;
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