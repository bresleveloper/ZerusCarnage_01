import { UnitMutations, UnitMutation } from '../units/Mutations';

export interface EvolutionCallbacks {
	onSelectMutation: (mutationName: string) => void;
}

export class EvolutionsPanel {
	private static instance: EvolutionsPanel | null = null;

	private container: HTMLElement;
	private callbacks: EvolutionCallbacks;

	// Button elements (5 mutations per unit)
	private mutationButtons: HTMLButtonElement[] = [];

	// Collapse/expand state
	private isExpanded: boolean = false;
	private contentContainer: HTMLElement;
	private collapseIndicator: HTMLElement;

	// Current unit type
	private currentUnitType: string = '';

	constructor(callbacks: EvolutionCallbacks) {
		this.callbacks = callbacks;
		this.container = this.createPanel();
		EvolutionsPanel.instance = this;
	}

	static getInstance(): EvolutionsPanel | null {
		return EvolutionsPanel.instance;
	}

	private createPanel(): HTMLElement {
		const panel = document.createElement('div');
		panel.className = 'spending-section'; // Reuse spending styles

		// Clickable header
		const header = document.createElement('div');
		header.className = 'spending-header';
		header.addEventListener('click', () => this.toggleCollapse());

		// Collapse indicator (arrow)
		this.collapseIndicator = document.createElement('span');
		this.collapseIndicator.className = 'collapse-indicator';
		this.collapseIndicator.textContent = '▶';

		// Title
		const title = document.createElement('span');
		title.className = 'control-label';
		title.textContent = 'Evolutions';

		header.appendChild(this.collapseIndicator);
		header.appendChild(title);
		panel.appendChild(header);

		// Content container for buttons (starts collapsed)
		this.contentContainer = document.createElement('div');
		this.contentContainer.className = 'spending-content collapsed';

		// Create 5 mutation buttons
		for (let i = 0; i < 5; i++) {
			const button = this.createMutationButton(i);
			this.mutationButtons.push(button);
			this.contentContainer.appendChild(button);
		}

		panel.appendChild(this.contentContainer);

		return panel;
	}

	private createMutationButton(index: number): HTMLButtonElement {
		const button = document.createElement('button');
		button.className = 'upgrade-button'; // Reuse upgrade button styles
		button.style.display = 'none'; // Hidden by default
		button.setAttribute('data-mutation-index', index.toString()); // Track index for tooltip positioning

		const iconSpan = document.createElement('span');
		iconSpan.className = 'upgrade-icon';
		iconSpan.textContent = '🧬'; // Default DNA icon

		const labelSpan = document.createElement('span');
		labelSpan.className = 'upgrade-label';
		labelSpan.textContent = '';

		const costSpan = document.createElement('span');
		costSpan.className = 'upgrade-cost';
		costSpan.textContent = '0M / 0G';

		// Info icon with tooltip
		const infoIcon = document.createElement('span');
		infoIcon.className = 'info-icon';
		infoIcon.textContent = 'ℹ️';

		const tooltip = document.createElement('div');
		tooltip.className = 'mutation-tooltip';
		tooltip.textContent = '';

		infoIcon.appendChild(tooltip);

		button.appendChild(iconSpan);
		button.appendChild(labelSpan);
		button.appendChild(costSpan);
		button.appendChild(infoIcon);

		return button;
	}

	private toggleCollapse(): void {
		this.isExpanded = !this.isExpanded;

		if (this.isExpanded) {
			this.contentContainer.classList.remove('collapsed');
			this.collapseIndicator.textContent = '▼';
		} else {
			this.contentContainer.classList.add('collapsed');
			this.collapseIndicator.textContent = '▶';
		}
	}

	/**
	 * Update the panel to show mutations for the given unit type
	 */
	public updateMutations(unitType: string, currentMinerals: number, currentGas: number): void {
		this.currentUnitType = unitType;
		const mutations = UnitMutations.getMutationsByUnitName(unitType);

		// Hide all buttons first
		this.mutationButtons.forEach(btn => btn.style.display = 'none');

		// If no mutations, keep panel collapsed
		if (mutations.length === 0) {
			if (this.isExpanded) {
				this.toggleCollapse();
			}
			return;
		}

		// Show and update buttons for each mutation
		mutations.forEach((mutation, index) => {
			if (index < 5) { // Safety check
				const button = this.mutationButtons[index];
				this.updateButton(button, mutation, currentMinerals, currentGas);
				button.style.display = 'flex';
			}
		});

		// Auto-expand panel if it was collapsed
		if (!this.isExpanded) {
			this.toggleCollapse();
		}
	}

	private updateButton(
		button: HTMLButtonElement,
		mutation: UnitMutation,
		currentMinerals: number,
		currentGas: number
	): void {
		const iconSpan = button.querySelector('.upgrade-icon') as HTMLSpanElement;
		const labelSpan = button.querySelector('.upgrade-label') as HTMLSpanElement;
		const costSpan = button.querySelector('.upgrade-cost') as HTMLSpanElement;
		const tooltip = button.querySelector('.mutation-tooltip') as HTMLDivElement;

		// Choose icon based on mutation bonuses
		let icon = '🧬'; // Default DNA
		if (mutation.bonusDmg > 0) icon = '⚔️';
		else if (mutation.bonusArmour > 0) icon = '🛡️';
		else if (mutation.bonusHP > 0) icon = '❤️';
		else if (mutation.bonusAttSpeed > 0) icon = '⚡';
		else if (mutation.bonusRegen > 0) icon = '💚';

		iconSpan.textContent = icon;
		labelSpan.textContent = mutation.name;
		costSpan.textContent = `${mutation.mineralCost}M / ${mutation.gasCost}G`;
		tooltip.textContent = mutation.panelDesc || '';

		// Check if player can afford
		const canAfford = currentMinerals >= mutation.mineralCost && currentGas >= mutation.gasCost;
		button.disabled = !canAfford;

		// Update click handler
		button.onclick = () => {
			if (canAfford) {
				this.callbacks.onSelectMutation(mutation.name);
			}
		};
	}

	public getContainer(): HTMLElement {
		return this.container;
	}

	public dispose(): void {
		if (this.container.parentNode) {
			this.container.parentNode.removeChild(this.container);
		}
	}
}
