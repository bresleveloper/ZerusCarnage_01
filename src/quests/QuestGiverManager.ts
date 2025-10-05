/**
 * Quest Giver Manager
 *
 * Manages quest-giving entities and peace flags:
 * - Register entities (enemies, obstacles) as quest givers
 * - Track peace flags to prevent combat
 * - Query quest giver status
 */

import { QuestGiver } from './QuestTypes';

export class QuestGiverManager {
	private questGivers: Map<string, QuestGiver> = new Map();

	/**
	 * Register an entity as a quest giver
	 */
	public registerQuestGiver(
		entityId: string,
		entityType: 'enemy' | 'obstacle' | 'boss',
		questId: string,
		isPeaceful: boolean = false
	): void {
		const questGiver: QuestGiver = {
			entityId,
			entityType,
			questId,
			isPeaceful,
			peacePersistent: isPeaceful
		};

		this.questGivers.set(entityId, questGiver);
		console.log(`Quest giver registered: ${entityId} (${entityType}) -> Quest: ${questId}`);
	}

	/**
	 * Check if an entity is a quest giver
	 */
	public isQuestGiver(entityId: string): boolean {
		return this.questGivers.has(entityId);
	}

	/**
	 * Get the quest ID for a specific entity
	 */
	public getQuestForEntity(entityId: string): string | null {
		const questGiver = this.questGivers.get(entityId);
		return questGiver ? questGiver.questId : null;
	}

	/**
	 * Check if an entity is peaceful (cannot engage in combat)
	 */
	public isPeaceful(entityId: string): boolean {
		const questGiver = this.questGivers.get(entityId);
		return questGiver ? questGiver.isPeaceful : false;
	}

	/**
	 * Set peace flag for an entity
	 */
	public setPeaceFlag(entityId: string, peaceful: boolean): void {
		const questGiver = this.questGivers.get(entityId);
		if (questGiver) {
			questGiver.isPeaceful = peaceful;
			console.log(`Peace flag set for ${entityId}: ${peaceful}`);
		}
	}

	/**
	 * Get entity ID for a quest
	 */
	public getEntityId(questId: string): string | null {
		for (const [entityId, questGiver] of this.questGivers.entries()) {
			if (questGiver.questId === questId) {
				return entityId;
			}
		}
		return null;
	}

	/**
	 * Unregister a quest giver
	 */
	public unregisterQuestGiver(entityId: string): void {
		this.questGivers.delete(entityId);
		console.log(`Quest giver unregistered: ${entityId}`);
	}

	/**
	 * Get all quest givers
	 */
	public getAllQuestGivers(): QuestGiver[] {
		return Array.from(this.questGivers.values());
	}

	/**
	 * Cleanup
	 */
	public dispose(): void {
		this.questGivers.clear();
	}
}
