import ZerusCarnageLevel01 from './ZerusCarnageLevel01';
import { ILevel, LevelCallbacks } from './LevelManager';

/**
 * Initialize and return Level 01 instance
 * This factory function is called by the main level manager
 */
export function initLevel01(callbacks: LevelCallbacks): ILevel {
	const level = new ZerusCarnageLevel01();
	level.setCallbacks(callbacks);
	level.init();
	return level;
}
