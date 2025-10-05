/**
 * Quest Interaction System
 *
 * Handles quest-aware interactions:
 * - Detect collision between player and quest givers
 * - Prevent combat with peaceful quest givers
 * - Track objective progress (kills, resource gathering)
 * - Notify QuestManager of updates
 */

import * as THREE from 'three';
import { QuestManager } from './QuestManager';
import { QuestGiverManager } from './QuestGiverManager';
import { QuestGiver } from './QuestTypes';

export class QuestInteraction {
	private questManager: QuestManager;
	private questGiverManager: QuestGiverManager;

	constructor(questManager: QuestManager, questGiverManager: QuestGiverManager) {
		this.questManager = questManager;
		this.questGiverManager = questGiverManager;
	}

	/**
	 * Check quest giver collision with player
	 * Returns QuestGiver if collision detected with inactive quest
	 */
	public checkQuestGiverCollision(
		playerPosition: THREE.Vector3,
		playerRadius: number,
		entityId: string,
		entityPosition: THREE.Vector3,
		entityRadius: number
	): QuestGiver | null {
		// Check if entity is a quest giver
		if (!this.questGiverManager.isQuestGiver(entityId)) {
			return null;
		}

		// Calculate distance
		const distance = playerPosition.distanceTo(entityPosition);

		// Check collision
		if (distance < playerRadius + entityRadius) {
			// Get quest
			const questId = this.questGiverManager.getQuestForEntity(entityId);
			if (!questId) return null;

			const quest = this.questManager.getQuest(questId);

			// Only trigger if quest is inactive and not completed
			if (quest && !quest.isActive && !quest.isCompleted) {
				return this.questGiverManager.getAllQuestGivers().find(qg => qg.entityId === entityId) || null;
			}
		}

		return null;
	}

	/**
	 * Check if attack is allowed (respects peace flags)
	 * Returns false if target is a peaceful quest giver
	 */
	public canAttack(targetId: string): boolean {
		return !this.questGiverManager.isPeaceful(targetId);
	}

	/**
	 * Track enemy kill for quest objectives
	 */
	public onEnemyKilled(enemyType: string): void {
		const activeQuests = this.questManager.getActiveQuests();
		for (const quest of activeQuests) {
			this.questManager.updateKillObjective(quest.id, enemyType);
		}
	}

	/**
	 * Track boss kill for quest objectives
	 */
	public onBossKilled(bossId: string): void {
		const activeQuests = this.questManager.getActiveQuests();
		for (const quest of activeQuests) {
			this.questManager.updateKillBossObjective(quest.id, bossId);
		}
	}

	/**
	 * Track resource gathering for quest objectives
	 */
	public onResourceGathered(resource: 'minerals' | 'gas' | 'essence', amount: number): void {
		const activeQuests = this.questManager.getActiveQuests();
		for (const quest of activeQuests) {
			this.questManager.updateGatherObjective(quest.id, resource, amount);
		}
	}

	/**
	 * Cleanup
	 */
	public dispose(): void {
		// No cleanup needed
	}
}
