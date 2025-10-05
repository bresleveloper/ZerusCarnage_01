/**
 * Quest Manager
 *
 * Central controller for quest system:
 * - Quest lifecycle management
 * - Objective tracking and updating
 * - Reward system
 * - Event emission for UI reactivity
 */

import { Quest, QuestObjective, QuestReward, QuestRewardsGrantedEvent } from './QuestTypes';

export class QuestManager {
	private quests: Map<string, Quest> = new Map();
	private eventListeners: Map<string, Function[]> = new Map();

	/**
	 * Add a quest to the system
	 */
	public addQuest(quest: Quest): void {
		this.quests.set(quest.id, quest);
		console.log(`Quest added: ${quest.id} - ${quest.title}`);
	}

	/**
	 * Activate a quest (start tracking objectives)
	 */
	public activateQuest(questId: string): void {
		const quest = this.quests.get(questId);
		if (!quest) {
			console.error(`Quest not found: ${questId}`);
			return;
		}

		if (quest.isActive) {
			console.warn(`Quest already active: ${questId}`);
			return;
		}

		quest.isActive = true;
		this.emit('quest_activated', quest);
		console.log(`Quest activated: ${quest.title}`);
	}

	/**
	 * Complete quest and grant rewards
	 */
	public completeQuest(questId: string): void {
		const quest = this.quests.get(questId);
		if (!quest || quest.isCompleted) return;

		quest.isCompleted = true;

		// Grant rewards if quest has them
		if (quest.rewards) {
			const rewardsEvent: QuestRewardsGrantedEvent = {
				questId: quest.id,
				questTitle: quest.title,
				rewards: quest.rewards
			};
			this.emit('quest_rewards_granted', rewardsEvent);
		}

		this.emit('quest_completed', quest);
		console.log(`Quest completed: ${quest.title}`);
	}

	/**
	 * Update kill objective for a specific unit type
	 */
	public updateKillObjective(questId: string, unitType: string): void {
		const quest = this.quests.get(questId);
		if (!quest || !quest.isActive || quest.isCompleted) return;

		let objectiveUpdated = false;

		quest.objectives.forEach((objective, index) => {
			if (objective.type === 'kill' && (objective as any).unitType === unitType) {
				if (objective.current < objective.target) {
					objective.current++;
					objective.isCompleted = objective.current >= objective.target;
					objectiveUpdated = true;
					this.emit('objective_updated', { questId, objectiveIndex: index, objective });
				}
			}
		});

		if (objectiveUpdated) {
			this.checkQuestCompletion(questId);
		}
	}

	/**
	 * Update kill boss objective
	 */
	public updateKillBossObjective(questId: string, bossId: string): void {
		const quest = this.quests.get(questId);
		if (!quest || !quest.isActive || quest.isCompleted) return;

		let objectiveUpdated = false;

		quest.objectives.forEach((objective, index) => {
			if (objective.type === 'kill_boss' && (objective as any).bossId === bossId) {
				if (objective.current < objective.target) {
					objective.current++;
					objective.isCompleted = objective.current >= objective.target;
					objectiveUpdated = true;
					this.emit('objective_updated', { questId, objectiveIndex: index, objective });
				}
			}
		});

		if (objectiveUpdated) {
			this.checkQuestCompletion(questId);
		}
	}

	/**
	 * Update gather objective for a specific resource type
	 */
	public updateGatherObjective(questId: string, resource: string, amount: number): void {
		const quest = this.quests.get(questId);
		if (!quest || !quest.isActive || quest.isCompleted) return;

		let objectiveUpdated = false;

		quest.objectives.forEach((objective, index) => {
			if (objective.type === 'gather' && (objective as any).resource === resource) {
				const newCurrent = Math.min(objective.current + amount, objective.target);
				if (newCurrent > objective.current) {
					objective.current = newCurrent;
					objective.isCompleted = objective.current >= objective.target;
					objectiveUpdated = true;
					this.emit('objective_updated', { questId, objectiveIndex: index, objective });
				}
			}
		});

		if (objectiveUpdated) {
			this.checkQuestCompletion(questId);
		}
	}

	/**
	 * Check if all objectives are completed, and if so, complete the quest
	 */
	private checkQuestCompletion(questId: string): void {
		const quest = this.quests.get(questId);
		if (!quest || !quest.isActive || quest.isCompleted) return;

		const allObjectivesComplete = quest.objectives.every(obj => obj.isCompleted);

		if (allObjectivesComplete) {
			this.completeQuest(questId);
		}
	}

	/**
	 * Get all active quests
	 */
	public getActiveQuests(): Quest[] {
		const activeQuests: Quest[] = [];
		this.quests.forEach(quest => {
			if (quest.isActive && !quest.isCompleted) {
				activeQuests.push(quest);
			}
		});
		return activeQuests;
	}

	/**
	 * Get a specific quest by ID
	 */
	public getQuest(questId: string): Quest | null {
		return this.quests.get(questId) || null;
	}

	/**
	 * Check if quest is completed
	 */
	public isQuestCompleted(questId: string): boolean {
		const quest = this.quests.get(questId);
		return quest ? quest.isCompleted : false;
	}

	/**
	 * Subscribe to event
	 */
	public on(event: string, callback: Function): void {
		if (!this.eventListeners.has(event)) {
			this.eventListeners.set(event, []);
		}
		this.eventListeners.get(event)!.push(callback);
	}

	/**
	 * Emit event
	 */
	public emit(event: string, data: any): void {
		const listeners = this.eventListeners.get(event);
		if (listeners) {
			listeners.forEach(callback => callback(data));
		}
	}

	/**
	 * Cleanup
	 */
	public dispose(): void {
		this.quests.clear();
		this.eventListeners.clear();
	}
}
