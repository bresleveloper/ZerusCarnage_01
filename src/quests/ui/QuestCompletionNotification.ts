/**
 * Quest Completion Notification
 *
 * Independent UI component that shows a celebratory notification
 * when a quest is completed. Auto-displays for 5 seconds with
 * animated colors and text effects.
 *
 * Usage:
 *   QuestCompletionNotification.show(questTitle, questRewards);
 */

import { QuestReward } from '../QuestTypes';

export class QuestCompletionNotification {
	private container: HTMLElement | null = null;
	private colorInterval: number | null = null;
	private removalTimeout: number | null = null;
	private currentColorIndex: number = 0;

	// Coastal palette colors: yellow → light aqua → teal → blue
	private static readonly COLORS = [
		'#F9D171', // Sandy Yellow (0-1.25s)
		'#A8DADC', // Light Aqua (1.25-2.5s)
		'#52B788', // Teal/Green (2.5-3.75s)
		'#5390D9' // Ocean Blue (3.75-5s)
	];

	private static readonly DISPLAY_DURATION = 5000; // 5 seconds
	private static readonly COLOR_CHANGE_INTERVAL = 1250; // 1.25 seconds

	/**
	 * Static method to show notification
	 * Creates, displays, and auto-disposes the notification
	 */
	public static show(questTitle: string, rewards?: QuestReward): void {
		const notification = new QuestCompletionNotification();
		notification.display(questTitle, rewards);
	}

	/**
	 * Format rewards into readable string with icons
	 */
	private formatRewards(rewards?: QuestReward): string {
		if (!rewards) return 'None';

		const parts: string[] = [];

		if (rewards.minerals) parts.push(`💎 ${rewards.minerals} Minerals`);
		if (rewards.gas) parts.push(`💨 ${rewards.gas} Gas`);
		if (rewards.essence) parts.push(`✨ ${rewards.essence} Essence`);
		if (rewards.attackBonus) parts.push(`⚔️ +${rewards.attackBonus} Attack`);
		if (rewards.armorBonus) parts.push(`🛡️ +${rewards.armorBonus} Armor`);
		if (rewards.attackSpeedBonus) parts.push(`⚡ +${rewards.attackSpeedBonus}% Speed`);

		return parts.length > 0 ? parts.join(', ') : 'None';
	}

	/**
	 * Create and display the notification
	 */
	private display(questTitle: string, rewards?: QuestReward): void {
		// Create container
		this.container = document.createElement('div');
		this.container.className = 'quest-completion-notification';

		// Create text content
		const title = document.createElement('div');
		title.className = 'quest-completion-title';
		title.textContent = `Quest Completed: ${questTitle}`;
		this.container.appendChild(title);

		const rewardText = document.createElement('div');
		rewardText.className = 'quest-completion-rewards';
		rewardText.textContent = `Your reward: ${this.formatRewards(rewards)}`;
		this.container.appendChild(rewardText);

		// Add to DOM
		document.body.appendChild(this.container);

		// Set initial color
		this.container.style.backgroundColor = QuestCompletionNotification.COLORS[0];

		// Start color animation
		this.startColorAnimation();

		// Schedule removal
		this.removalTimeout = window.setTimeout(() => {
			this.dispose();
		}, QuestCompletionNotification.DISPLAY_DURATION);
	}

	/**
	 * Start color cycling animation
	 */
	private startColorAnimation(): void {
		if (!this.container) return;

		// Change color every 1.25 seconds
		this.colorInterval = window.setInterval(() => {
			this.currentColorIndex++;
			if (this.currentColorIndex < QuestCompletionNotification.COLORS.length && this.container) {
				this.container.style.backgroundColor =
					QuestCompletionNotification.COLORS[this.currentColorIndex];
			}
		}, QuestCompletionNotification.COLOR_CHANGE_INTERVAL);
	}

	/**
	 * Clean up and remove notification
	 */
	private dispose(): void {
		// Clear timers
		if (this.colorInterval !== null) {
			clearInterval(this.colorInterval);
			this.colorInterval = null;
		}
		if (this.removalTimeout !== null) {
			clearTimeout(this.removalTimeout);
			this.removalTimeout = null;
		}

		// Add fade-out class
		if (this.container) {
			this.container.classList.add('quest-completion-notification--fadeout');

			// Remove from DOM after fade animation
			setTimeout(() => {
				if (this.container && this.container.parentElement) {
					document.body.removeChild(this.container);
					this.container = null;
				}
			}, 300); // Match CSS fade-out duration
		}
	}
}
