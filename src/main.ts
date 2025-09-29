import './style.scss';
import { ILevel, LevelCallbacks } from './ZerusCarnage/LevelManager';
import ZerusCarnageLevel01 from './ZerusCarnage/ZerusCarnageLevel01';

/**
 * Main Game Level Manager
 * Orchestrates level lifecycle: initialization, transitions, and cleanup
 */
class GameManager {
	private currentLevel: ILevel | null = null;
	private currentLevelNumber: number = 1;

	constructor() {
		this.loadLevel(this.currentLevelNumber);
	}

	/**
	 * Restart the current level by disposing and recreating it
	 */
	public restartLevel() {
		console.log(`Restarting Level ${this.currentLevelNumber}...`);

		// Cleanup current level
		if (this.currentLevel) {
			this.currentLevel.cleanup();
			this.currentLevel = null;
		}

		// Reload the same level
		this.loadLevel(this.currentLevelNumber);
	}

	/**
	 * Load a level by its number
	 */
	private loadLevel(levelNumber: number) {
		console.log(`Loading Level ${levelNumber}...`);

		const callbacks: LevelCallbacks = {
			onWin: () => this.handleLevelWin(),
			onLose: () => this.handleLevelLose()
		};

		// Initialize the appropriate level based on level number
		switch (levelNumber) {
			case 1:
				this.currentLevel = new ZerusCarnageLevel01(callbacks);
				break;
			// Future levels will be added here
			// case 2:
			//     this.currentLevel = new ZerusCarnageLevel02(callbacks);
			//     break;
			default:
				console.error(`Level ${levelNumber} not implemented yet!`);
				this.showLevelNotImplemented(levelNumber);
				return;
		}

		this.currentLevelNumber = levelNumber;
		console.log(`Level ${levelNumber} loaded successfully`);
	}

	/**
	 * Handle level completion (win)
	 */
	private handleLevelWin() {
		console.log(`Level ${this.currentLevelNumber} completed!`);

		const nextLevel = this.currentLevelNumber + 1;

		// Small delay before transition for better UX
		setTimeout(() => {
			// Cleanup current level
			if (this.currentLevel) {
				this.currentLevel.cleanup();
				this.currentLevel = null;
			}

			// Load next level
			this.loadLevel(nextLevel);
		}, 2000); // 2 second delay to show victory screen
	}

	/**
	 * Handle level failure (lose)
	 */
	private handleLevelLose() {
		console.log(`Level ${this.currentLevelNumber} failed!`);
		// For now, game over just restarts the same level
		// In future, could implement a game over screen or return to menu
	}

	/**
	 * Show a message when trying to load an unimplemented level
	 */
	private showLevelNotImplemented(levelNumber: number) {
		// Create overlay
		const overlay = document.createElement('div');
		overlay.className = 'game-over-overlay';
		overlay.style.display = 'flex';

		const content = document.createElement('div');
		content.className = 'game-over-content';

		const title = document.createElement('h1');
		title.textContent = 'CONGRATULATIONS!';
		title.className = 'game-over-title';
		title.style.color = '#00ff00';

		const message = document.createElement('p');
		message.textContent = `You've completed all available levels!\nLevel ${levelNumber} is coming soon...`;
		message.className = 'game-over-message';
		message.style.whiteSpace = 'pre-line';

		const restartButton = document.createElement('button');
		restartButton.textContent = 'Play Again from Level 1';
		restartButton.className = 'restart-button';
		restartButton.addEventListener('click', () => {
			document.body.removeChild(overlay);
			this.loadLevel(1);
		});

		content.appendChild(title);
		content.appendChild(message);
		content.appendChild(restartButton);
		overlay.appendChild(content);
		document.body.appendChild(overlay);
	}
}

// Global game manager instance for level restarts
let gameManagerInstance: GameManager | null = null;

// Initialize game when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
	gameManagerInstance = new GameManager();
});

// Export function to restart current level (called from level classes)
export function restartCurrentLevel() {
	if (gameManagerInstance) {
		gameManagerInstance.restartLevel();
	} else {
		console.error('GameManager not initialized yet!');
	}
}