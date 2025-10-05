/**
 * LevelManager - Abstract base interface for game level management
 *
 * This interface defines the contract that all level implementations must follow.
 * It provides a standardized way to initialize, run, clean up, and determine
 * win conditions for each level.
 */

export interface WinCondition {
	type: string; // e.g., 'minerals', 'kills', 'survival', 'combo', 'miniboss_kills', 'quest'
	target: number; // Target value to achieve
	current: number; // Current progress
	questId?: string; // Optional: specific quest ID to complete (when type='quest')
}

export interface LevelCallbacks {
	onWin: () => void; // Called when level win condition is met
	onLose?: () => void; // Optional callback for level failure
}

export interface ILevel {
	/**
	 * Initialize the level
	 * Sets up scene, entities, UI, and begins the game loop
	 */
	init(): void;

	/**
	 * Clean up all resources when level ends
	 * Must dispose: THREE.js resources, event listeners, DOM elements, animation frames
	 */
	cleanup(): void;

	/**
	 * Get current win condition status
	 * Returns progress toward victory
	 */
	getWinCondition(): WinCondition;

	/**
	 * Check if win condition has been met
	 */
	isWinConditionMet(): boolean;

	/**
	 * Set callbacks for level events
	 */
	setCallbacks(callbacks: LevelCallbacks): void;

	/**
	 * Get list of available unit types for morphing in this level
	 */
	getAvailableUnits(): string[];
}

/**
 * Abstract base class that provides common functionality for all levels
 */
export abstract class BaseLevel implements ILevel {
	protected callbacks?: LevelCallbacks;
	protected winCondition: WinCondition | null;
	protected availableUnits: string[];

	constructor(
		winConditionType: string | null,
		winConditionTarget: number | null,
		availableUnits: string[]
	) {
		if (winConditionType !== null && winConditionTarget !== null) {
			this.winCondition = {
				type: winConditionType,
				target: winConditionTarget,
				current: 0
			};
		} else {
			this.winCondition = null;
		}
		this.availableUnits = availableUnits;
	}

	abstract init(): void;
	abstract cleanup(): void;

	public setCallbacks(callbacks: LevelCallbacks): void {
		this.callbacks = callbacks;
	}

	public getWinCondition(): WinCondition {
		// Return a placeholder if no win condition is set
		if (this.winCondition === null) {
			return { type: 'none', target: 0, current: 0 };
		}
		return this.winCondition;
	}

	public isWinConditionMet(): boolean {
		// Always return false if no win condition is set
		if (this.winCondition === null) {
			return false;
		}
		return this.winCondition.current >= this.winCondition.target;
	}

	public getAvailableUnits(): string[] {
		return this.availableUnits;
	}

	/**
	 * Update win condition progress
	 * Automatically triggers win callback when target is reached
	 */
	protected updateWinProgress(newValue: number): void {
		// Do nothing if no win condition is set
		if (this.winCondition === null) {
			return;
		}

		this.winCondition.current = newValue;

		// Check if win condition is met
		if (this.isWinConditionMet() && this.callbacks?.onWin) {
			this.callbacks.onWin();
		}
	}
}