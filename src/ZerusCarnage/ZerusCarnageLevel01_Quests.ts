import type { Quest } from '../quests/QuestTypes';

/**
 * Quest configuration for Level 01
 * All quests are organized in a dictionary for easy lookup by quest ID
 */
export const LEVEL_01_QUESTS: Record<string, Quest> = {
	tutorial_hunt1: {
		id: 'tutorial_hunt1',
		title: 'First Evolution',
		description: 'You must Gather resources and evolve. Gather 25 minerals to evolve into a Zergling and prey on 3 larvae. It will also harden your jaws. (+1 dmg, +100 minerals)',
		objectives: [
			{
				type: 'kill' as const,
				description: 'Eat 3 Larvae',
				current: 0,
				target: 3,
				isCompleted: false,
				unitType: 'Larvae'
			},
			{
				type: 'gather' as const,
				description: 'Collect 25 minerals',
				resource: 'minerals' as const,
				current: 0,
				target: 25,
				isCompleted: false
			}
		],
		rewards: {
			minerals: 100,
			attackBonus: 1
		},
		isActive: false,
		isCompleted: false
	},
	tutorial_hunt2: {
		id: 'tutorial_hunt2',
		title: 'Eating Trees',
		description: 'Trees provide much more minerals than bushes, but only a Drone can harvest them. You should try it! Collect 300 mineral, it will be so faster from trees as a Drone. ( +200 minerals)',
		objectives: [
			{
				type: 'gather' as const,
				description: 'Collect 300 minerals',
				resource: 'minerals' as const,
				current: 0,
				target: 300,
				isCompleted: false
			}
		],
		rewards: {
			minerals: 200,
		},
		isActive: false,
		isCompleted: false
	},
	tutorial_hunt3: {
		id: 'tutorial_hunt3',
		title: 'Harvesting Gas',
		description: 'Standing on Vespene Geysers you will collect Gas per second but also lose life. A Larvae cant do it, but a Drone/Zergling can. Evolve and gather 300 Gas, so you can evolve your claws and carapace. Don\'t forget to heal yourself while gathering gas! (+200 gas)',
		objectives: [
			{
				type: 'gather' as const,
				description: 'Collect 300 gas',
				resource: 'gas' as const,
				current: 0,
				target: 300,
				isCompleted: false
			}
		],
		rewards: {
			gas: 200,
		},
		isActive: false,
		isCompleted: false
	},	
};
