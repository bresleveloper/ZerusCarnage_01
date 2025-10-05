import { StoryScreenConfig } from '../ui/StoryScreenConfig';

/**
 * Registry of story screens for each level
 * Key: Level number
 * Value: Story screen configuration
 *
 * To add a new story screen for a level, simply add a new entry to this Map:
 * [levelNumber, { imagePath: '...', text: '...', textBox: { ... } }]
 */
export const LEVEL_STORY_SCREENS: Map<number, StoryScreenConfig> = new Map([
	[
		1,
		{
			imagePath: '/resources/story/level01_zerus.jpg',
			text: 'I am Zagara, the queen of the swarm. You are a special agent i created for "Problem Solving".\n\nYou have independent thinking and are exceptionally resourceful, and packed with the DNA of all the swarm\'s strains.\n\nYour first task is in a little Moon where I feel the leader is in distress. Go find him and solve his problems, so the colony can grow.',
			textBox: {
				position: 'left',
				backgroundColor: 'rgba(30, 30, 30, 0.85)',
				textColor: '#ffffff',
				padding: '40px',
				maxWidth: '800px',
				borderRadius: '12px',
				border: '2px solid rgba(255, 255, 255, 0.3)'
			},
			fadeInDuration: 800
		}
	]
	// Future levels can be added here:
	// [2, {
	//   imagePath: '/resources/story/level02_evolution.jpg',
	//   text: 'The essence of your fallen prey flows through you...\n\nYou feel the change beginning.',
	//   textBox: {
	//     position: 'center',
	//     backgroundColor: 'rgba(40, 0, 60, 0.9)',
	//     textColor: '#ff00ff',
	//     padding: '50px',
	//     maxWidth: '700px'
	//   }
	// }]
]);

/**
 * Get story screen config for a specific level
 * @param levelNumber - The level number to get story for
 * @returns Story screen config or undefined if none exists
 */
export function getStoryScreenForLevel(levelNumber: number): StoryScreenConfig | undefined {
	return LEVEL_STORY_SCREENS.get(levelNumber);
}
