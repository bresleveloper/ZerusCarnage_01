/**
 * Quest System Type Definitions
 *
 * Defines all interfaces and types for the quest system
 */

/**
 * Quest Reward Interface
 * Optional rewards given upon quest completion
 */
export interface QuestReward {
	// Resource rewards
	minerals?: number;
	gas?: number;
	essence?: number;

	// Stat upgrade rewards (permanent bonuses)
	attackBonus?: number;      // +N attack damage
	armorBonus?: number;       // +N armor
	attackSpeedBonus?: number; // +N% attack speed (e.g., 10 = 10% faster)
}

/**
 * Quest Objective Base Interface
 */
export interface QuestObjective {
	type: 'kill' | 'kill_boss' | 'gather';
	description: string;
	current: number;
	target: number;
	isCompleted: boolean;
}

/**
 * Kill Enemy Objective
 * Kill X amount of Y enemy type
 */
export interface KillEnemyObjective extends QuestObjective {
	type: 'kill';
	unitType: string; // e.g., 'Larvae', 'Drone', 'Zergling'
}

/**
 * Kill Boss Objective
 * Kill specific named boss
 */
export interface KillBossObjective extends QuestObjective {
	type: 'kill_boss';
	bossId: string; // Unique boss identifier
}

/**
 * Gather Resource Objective
 * Collect X amount of resource
 */
export interface GatherResourceObjective extends QuestObjective {
	type: 'gather';
	resource: 'minerals' | 'gas' | 'essence';
}

/**
 * Quest Interface
 * Represents a complete quest with objectives and optional rewards
 */
export interface Quest {
	id: string;
	title: string;
	description: string;
	objectives: QuestObjective[];
	isActive: boolean;
	isCompleted: boolean;
	questGiverId?: string; // Optional: ID of entity that gave quest
	rewards?: QuestReward; // Optional: Rewards given on quest completion
}

/**
 * Quest Giver Interface
 * Links entities (enemies, obstacles) to quests
 */
export interface QuestGiver {
	entityId: string; // Unique ID for enemy/obstacle
	entityType: 'enemy' | 'obstacle' | 'boss';
	questId: string;
	isPeaceful: boolean; // If true, no combat allowed
	peacePersistent: boolean; // Peace flag persists after quest completion
}

/**
 * Quest State Enum
 */
export enum QuestState {
	INACTIVE = 'inactive',
	ACTIVE = 'active',
	COMPLETED = 'completed'
}

/**
 * Quest Rewards Granted Event Data
 * Emitted when quest is completed and rewards are granted
 */
export interface QuestRewardsGrantedEvent {
	questId: string;
	questTitle: string;
	rewards: QuestReward;
}
