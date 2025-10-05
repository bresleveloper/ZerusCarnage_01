/**
 * Quest Tracker HUD
 *
 * Persistent on-screen tracker for active quest objectives
 * - Shows up to 3 active quest objectives
 * - Real-time progress updates via QuestManager events
 * - Minimizable/expandable
 * - Auto-hides when no active quests
 */

import { QuestManager } from '../QuestManager';
import { Quest } from '../QuestTypes';

export class QuestTrackerHUD {
	private container: HTMLElement | null = null;
	private questManager: QuestManager;
	private isMinimized: boolean = false;
	private isVisible: boolean = false;

	constructor(questManager: QuestManager) {
		this.questManager = questManager;
		this.createHUD();
		this.setupEventListeners();
	}

	/**
	 * Create the HUD element
	 */
	private createHUD(): void {
		this.container = document.createElement('div');
		this.container.className = 'quest-tracker-hud';
		this.container.style.display = 'none'; // Hidden by default
		document.body.appendChild(this.container);
	}

	/**
	 * Subscribe to quest events
	 */
	private setupEventListeners(): void {
		// Update when quest is activated
		this.questManager.on('quest_activated', () => {
			this.refresh();
		});

		// Update when objective progresses
		this.questManager.on('objective_updated', () => {
			this.refresh();
		});

		// Update when quest completes
		this.questManager.on('quest_completed', () => {
			this.refresh();
		});
	}

	/**
	 * Refresh HUD content
	 */
	private refresh(): void {
		if (!this.container) return;

		const activeQuests = this.questManager.getActiveQuests();

		// Auto-hide if no active quests
		if (activeQuests.length === 0) {
			this.hide();
			return;
		}

		// Auto-show if there are active quests
		if (!this.isVisible) {
			this.show();
		}

		// Clear existing content
		this.container.innerHTML = '';

		// Create header
		const header = document.createElement('div');
		header.className = 'quest-tracker-header';

		const title = document.createElement('span');
		title.textContent = 'Active Quests (\'J\' to expand)';
		title.className = 'quest-tracker-title';
		header.appendChild(title);

		// Minimize/expand button
		const toggleButton = document.createElement('button');
		toggleButton.className = 'quest-tracker-toggle';
		toggleButton.textContent = this.isMinimized ? '+' : '−';
		toggleButton.addEventListener('click', () => this.toggleMinimize());
		header.appendChild(toggleButton);

		this.container.appendChild(header);

		// If minimized, stop here
		if (this.isMinimized) {
			return;
		}

		// Create content
		const content = document.createElement('div');
		content.className = 'quest-tracker-content';

		// Collect all objectives from active quests (up to 3)
		const allObjectives: { questTitle: string; objective: any }[] = [];

		activeQuests.forEach(quest => {
			quest.objectives.forEach(obj => {
				if (!obj.isCompleted) {
					allObjectives.push({ questTitle: quest.title, objective: obj });
				}
			});
		});

		// Show up to 3 objectives
		const objectivesToShow = allObjectives.slice(0, 3);

		if (objectivesToShow.length === 0) {
			// All objectives completed, but quest may still be active
			const emptyMessage = document.createElement('div');
			emptyMessage.className = 'quest-tracker-empty';
			emptyMessage.textContent = 'All objectives complete!';
			content.appendChild(emptyMessage);
		} else {
			objectivesToShow.forEach(({ questTitle, objective }) => {
				const objectiveItem = document.createElement('div');
				objectiveItem.className = 'quest-tracker-item';

				// Objective text
				const text = document.createElement('span');
				text.className = 'quest-tracker-objective-text';
				text.textContent = `• ${objective.description}: ${objective.current}/${objective.target}`;

				// Color code based on progress
				const progress = objective.current / objective.target;
				if (progress >= 1.0) {
					text.style.color = '#00ff00'; // Green
				} else if (progress > 0) {
					text.style.color = '#ffff00'; // Yellow
				} else {
					text.style.color = '#cccccc'; // Light gray
				}

				objectiveItem.appendChild(text);
				content.appendChild(objectiveItem);
			});

			// If there are more than 3 objectives, show a "... and N more" message
			if (allObjectives.length > 3) {
				const moreMessage = document.createElement('div');
				moreMessage.className = 'quest-tracker-more';
				moreMessage.textContent = `... and ${allObjectives.length - 3} more (press J for quest log)`;
				content.appendChild(moreMessage);
			}
		}

		this.container.appendChild(content);
	}

	/**
	 * Toggle minimize/expand state
	 */
	private toggleMinimize(): void {
		this.isMinimized = !this.isMinimized;
		this.refresh();
	}

	/**
	 * Show the HUD
	 */
	public show(): void {
		if (this.container) {
			this.container.style.display = 'block';
			this.isVisible = true;
		}
	}

	/**
	 * Hide the HUD
	 */
	public hide(): void {
		if (this.container) {
			this.container.style.display = 'none';
			this.isVisible = false;
		}
	}

	/**
	 * Check if HUD is visible
	 */
	public isShowing(): boolean {
		return this.isVisible;
	}

	/**
	 * Force refresh (call when needed)
	 */
	public update(): void {
		this.refresh();
	}

	/**
	 * Cleanup
	 */
	public dispose(): void {
		if (this.container && this.container.parentElement) {
			document.body.removeChild(this.container);
			this.container = null;
		}
	}
}
