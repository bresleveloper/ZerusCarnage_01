/**
 * Quest UI Helper Functions
 *
 * Helper functions for creating quest UI content
 * used with MessageSystem
 */

import { Quest, QuestObjective } from '../QuestTypes';
import { QuestManager } from '../QuestManager';
import { MessageSystem } from '../../ui/MessageSystem';

/**
 * Create quest detail content HTML
 * Shows quest description, objectives, and rewards
 */
export function createQuestDetailContent(quest: Quest): HTMLElement {
	const container = document.createElement('div');
	container.className = 'quest-detail-container';

	// Description
	const description = document.createElement('p');
	description.className = 'quest-description';
	description.textContent = quest.description;
	container.appendChild(description);

	// Objectives
	const objectivesTitle = document.createElement('h3');
	objectivesTitle.textContent = 'Objectives:';
	container.appendChild(objectivesTitle);

	const objectivesList = document.createElement('ul');
	objectivesList.className = 'quest-objectives-list';
	quest.objectives.forEach(obj => {
		const li = document.createElement('li');
		li.textContent = `• ${obj.description} (0/${obj.target})`;
		objectivesList.appendChild(li);
	});
	container.appendChild(objectivesList);

	// Rewards (if any)
	if (quest.rewards) {
		const rewardsTitle = document.createElement('h3');
		rewardsTitle.textContent = 'Rewards:';
		container.appendChild(rewardsTitle);

		const rewardsList = document.createElement('ul');
		rewardsList.className = 'quest-rewards-list';

		if (quest.rewards.minerals) {
			const li = document.createElement('li');
			li.innerHTML = `• <span class="resource-icon minerals-icon">💎</span> ${quest.rewards.minerals} Minerals`;
			rewardsList.appendChild(li);
		}
		if (quest.rewards.gas) {
			const li = document.createElement('li');
			li.innerHTML = `• <span class="resource-icon gas-icon">💨</span> ${quest.rewards.gas} Vespene Gas`;
			rewardsList.appendChild(li);
		}
		if (quest.rewards.essence) {
			const li = document.createElement('li');
			li.innerHTML = `• <span class="resource-icon essence-icon">✨</span> ${quest.rewards.essence} Essence`;
			rewardsList.appendChild(li);
		}
		if (quest.rewards.attackBonus) {
			const li = document.createElement('li');
			li.innerHTML = `• ⚔️ +${quest.rewards.attackBonus} Attack`;
			rewardsList.appendChild(li);
		}
		if (quest.rewards.armorBonus) {
			const li = document.createElement('li');
			li.innerHTML = `• 🛡️ +${quest.rewards.armorBonus} Armor`;
			rewardsList.appendChild(li);
		}
		if (quest.rewards.attackSpeedBonus) {
			const li = document.createElement('li');
			li.innerHTML = `• ⚡ +${quest.rewards.attackSpeedBonus}% Attack Speed`;
			rewardsList.appendChild(li);
		}

		container.appendChild(rewardsList);
	}

	return container;
}

/**
 * Show quest detail screen
 * Auto-accepts quest on close (ESC)
 */
export function showQuestDetail(
	quest: Quest,
	messageSystem: MessageSystem,
	questManager: QuestManager
): void {
	const content = createQuestDetailContent(quest);

	messageSystem.show({
		type: 'info',
		title: quest.title,
		content: content,
		dismissOnEsc: true,
		dismissCallback: () => {
			// Auto-accept quest on close
			questManager.activateQuest(quest.id);
		},
		customClass: 'quest-detail-screen'
	});
}

/**
 * Create progress bar HTML element
 */
export function createProgressBar(current: number, target: number): HTMLElement {
	const barContainer = document.createElement('div');
	barContainer.className = 'progress-bar-container';

	const barFill = document.createElement('div');
	barFill.className = 'progress-bar-fill';
	const percentage = Math.min((current / target) * 100, 100);
	barFill.style.width = `${percentage}%`;

	// Color based on percentage
	if (percentage === 100) {
		barFill.style.backgroundColor = '#00ff00'; // Green
	} else if (percentage > 0) {
		barFill.style.backgroundColor = '#ffff00'; // Yellow
	} else {
		barFill.style.backgroundColor = '#888888'; // Gray
	}

	barContainer.appendChild(barFill);
	return barContainer;
}

/**
 * Create quest log content HTML
 * Shows all active quests with progress
 */
export function createQuestLogContent(quests: Quest[]): HTMLElement {
	const container = document.createElement('div');
	container.className = 'quest-log-container';

	if (quests.length === 0) {
		const emptyMessage = document.createElement('p');
		emptyMessage.className = 'quest-log-empty';
		emptyMessage.textContent = 'No active quests';
		container.appendChild(emptyMessage);
		return container;
	}

	quests.forEach(quest => {
		const questBlock = document.createElement('div');
		questBlock.className = 'quest-log-item';

		// Quest title
		const title = document.createElement('h3');
		title.textContent = quest.title;
		questBlock.appendChild(title);

		// Objectives
		quest.objectives.forEach(obj => {
			const objectiveDiv = document.createElement('div');
			objectiveDiv.className = 'quest-objective';

			// Objective text
			const text = document.createElement('span');
			text.textContent = `→ ${obj.description}: ${obj.current}/${obj.target}`;

			// Color code based on completion
			if (obj.isCompleted) {
				text.style.color = '#00ff00'; // Green
			} else if (obj.current > 0) {
				text.style.color = '#ffff00'; // Yellow
			} else {
				text.style.color = '#888888'; // Gray
			}

			objectiveDiv.appendChild(text);

			// Progress bar
			const progressBar = createProgressBar(obj.current, obj.target);
			objectiveDiv.appendChild(progressBar);

			questBlock.appendChild(objectiveDiv);
		});

		// Rewards (if any)
		if (quest.rewards) {
			const rewardsDiv = document.createElement('div');
			rewardsDiv.className = 'quest-log-rewards';
			const rewardParts: string[] = [];

			if (quest.rewards.minerals) rewardParts.push(`${quest.rewards.minerals}M`);
			if (quest.rewards.gas) rewardParts.push(`${quest.rewards.gas}G`);
			if (quest.rewards.essence) rewardParts.push(`${quest.rewards.essence}E`);
			if (quest.rewards.attackBonus) rewardParts.push(`+${quest.rewards.attackBonus} ATK`);
			if (quest.rewards.armorBonus) rewardParts.push(`+${quest.rewards.armorBonus} ARM`);
			if (quest.rewards.attackSpeedBonus) rewardParts.push(`+${quest.rewards.attackSpeedBonus}% AS`);

			rewardsDiv.innerHTML = `💰 Rewards: ${rewardParts.join(', ')}`;
			questBlock.appendChild(rewardsDiv);
		}

		container.appendChild(questBlock);
	});

	return container;
}

/**
 * Show quest log screen
 * Opens with J key, closes with ESC
 */
export function showQuestLog(questManager: QuestManager, messageSystem: MessageSystem): void {
	const activeQuests = questManager.getActiveQuests();
	const content = createQuestLogContent(activeQuests);

	messageSystem.show({
		type: 'log',
		title: 'QUEST LOG',
		content: content,
		dismissOnEsc: true,
		customClass: 'quest-log-screen'
	});
}
