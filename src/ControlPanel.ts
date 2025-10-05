import { UnitMorphOption, UnitMutations } from './units/Mutations';

export interface ControlCallbacks {
	onZoomChange: (zoomDelta: number) => void;
	onSpeedChange: (speed: number) => void;
	onMorphUnit: (unitType: string) => void;
}

export class ControlPanel {
	private controlContainer!: HTMLElement;
	private callbacks: ControlCallbacks;

	// Resource display elements
	private mineralsDisplay!: HTMLElement;
	private gasDisplay!: HTMLElement;
	private essenceDisplay!: HTMLElement;
	private hpDisplay!: HTMLElement;

	// Morph selection element
	private morphSelect!: HTMLSelectElement;

	private readonly SPEED_OPTIONS = {
		'Slow': 30,
		'Normal': 50,
		'Fast': 90,
		'Lightning': 180
	};

	// Zerg unit morph options - now sourced from units/Mutations.ts
	// Includes all unit morph costs and their 5 mutations (3 temporary + 2 evolution strains)
	private readonly UNIT_MORPH_OPTIONS: UnitMorphOption[] = UnitMutations.UNIT_MORPH_OPTIONS;

	constructor(callbacks: ControlCallbacks) {
		this.callbacks = callbacks;
		this.setupControlPanel();
	}

	private setupControlPanel() {
		this.controlContainer = document.createElement('div');
		this.controlContainer.className = 'control-panel';

		const resourceSection = this.createResourceSection();
		const morphSection = this.createMorphSection();
		const zoomSection = this.createZoomSection();
		const speedSection = this.createSpeedSection();

		this.controlContainer.appendChild(resourceSection);
		this.controlContainer.appendChild(morphSection);
		this.controlContainer.appendChild(zoomSection);
		this.controlContainer.appendChild(speedSection);

		document.body.appendChild(this.controlContainer);
	}

	private createResourceSection(): HTMLElement {
		const resourceSection = document.createElement('div');
		resourceSection.className = 'control-section resource-section';

		const resourceLabel = document.createElement('div');
		resourceLabel.className = 'control-label resource-label';
		resourceLabel.textContent = 'Resources';

		const resourceDisplay = document.createElement('div');
		resourceDisplay.className = 'resource-display';

		// Minerals display with cute blue crystals
		const mineralsContainer = document.createElement('div');
		mineralsContainer.className = 'resource-item minerals';

		const mineralsIcon = document.createElement('span');
		mineralsIcon.className = 'resource-icon minerals-icon';
		mineralsIcon.textContent = '♦♦';

		this.mineralsDisplay = document.createElement('span');
		this.mineralsDisplay.className = 'resource-value';
		this.mineralsDisplay.textContent = '0';

		mineralsContainer.appendChild(mineralsIcon);
		mineralsContainer.appendChild(this.mineralsDisplay);

		// Gas display with cute green goo balloon
		const gasContainer = document.createElement('div');
		gasContainer.className = 'resource-item gas';

		const gasIcon = document.createElement('span');
		gasIcon.className = 'resource-icon gas-icon';
		gasIcon.textContent = '●○';

		this.gasDisplay = document.createElement('span');
		this.gasDisplay.className = 'resource-value';
		this.gasDisplay.textContent = '0';

		gasContainer.appendChild(gasIcon);
		gasContainer.appendChild(this.gasDisplay);

		// Essence display with orange snail shell
		const essenceContainer = document.createElement('div');
		essenceContainer.className = 'resource-item essence';

		const essenceIcon = document.createElement('span');
		essenceIcon.className = 'resource-icon essence-icon';
		essenceIcon.textContent = '🐚'; // Orange snail shell

		this.essenceDisplay = document.createElement('span');
		this.essenceDisplay.className = 'resource-value';
		this.essenceDisplay.textContent = '0';

		essenceContainer.appendChild(essenceIcon);
		essenceContainer.appendChild(this.essenceDisplay);

		// HP display with heart icon
		const hpContainer = document.createElement('div');
		hpContainer.className = 'resource-item hp';

		const hpIcon = document.createElement('span');
		hpIcon.className = 'resource-icon hp-icon';
		hpIcon.textContent = '♥';

		this.hpDisplay = document.createElement('span');
		this.hpDisplay.className = 'resource-value';
		this.hpDisplay.textContent = '0/0';

		hpContainer.appendChild(hpIcon);
		hpContainer.appendChild(this.hpDisplay);

		resourceDisplay.appendChild(mineralsContainer);
		resourceDisplay.appendChild(gasContainer);
		resourceDisplay.appendChild(essenceContainer);
		resourceDisplay.appendChild(hpContainer);

		resourceSection.appendChild(resourceLabel);
		resourceSection.appendChild(resourceDisplay);

		return resourceSection;
	}

	private createMorphSection(): HTMLElement {
		const morphSection = document.createElement('div');
		morphSection.className = 'control-section';

		this.morphSelect = document.createElement('select');
		this.morphSelect.className = 'morph-select';

		// Add placeholder option
		const placeholderOption = document.createElement('option');
		placeholderOption.value = '';
		placeholderOption.textContent = 'Morph Into (Select)';
		placeholderOption.disabled = true;
		placeholderOption.selected = true;
		this.morphSelect.appendChild(placeholderOption);

		// Add unit options
		this.UNIT_MORPH_OPTIONS.forEach(unit => {
			const option = document.createElement('option');
			option.value = unit.name;

			// Format: "Zergling (25M)" or "Baneling (25M/25G)"
			let costText = '';
			if (unit.mineralCost > 0 || unit.gasCost > 0) {
				costText = ' (';
				if (unit.mineralCost > 0) {
					costText += `${unit.mineralCost}M`;
				}
				if (unit.gasCost > 0) {
					costText += unit.mineralCost > 0 ? `/${unit.gasCost}G` : `${unit.gasCost}G`;
				}
				costText += ')';
			}

			option.textContent = `${unit.name}${costText}`;
			option.dataset.minerals = unit.mineralCost.toString();
			option.dataset.gas = unit.gasCost.toString();

			this.morphSelect.appendChild(option);
		});

		this.morphSelect.addEventListener('change', (event) => {
			const target = event.target as HTMLSelectElement;
			const selectedUnit = target.value;

			if (selectedUnit) {
				this.callbacks.onMorphUnit(selectedUnit);
				// Reset to placeholder
				target.value = '';
			}

			// Remove focus to prevent arrow keys from changing select options
			target.blur();
		});

		// Prevent arrow keys from being handled by the select element
		this.morphSelect.addEventListener('keydown', (event) => {
			if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
				event.preventDefault();
				event.stopPropagation();
				this.morphSelect.blur();
			}
		});

		morphSection.appendChild(this.morphSelect);

		return morphSection;
	}

	private createZoomSection(): HTMLElement {
		const zoomSection = document.createElement('div');
		zoomSection.className = 'control-section';

		const zoomControls = document.createElement('div');
		zoomControls.className = 'zoom-controls';

		const zoomLabel = document.createElement('span');
		zoomLabel.className = 'zoom-label';
		zoomLabel.textContent = 'Zoom';

		const zoomOutBtn = document.createElement('button');
		zoomOutBtn.className = 'zoom-btn';
		zoomOutBtn.textContent = '-';
		zoomOutBtn.addEventListener('click', () => {
			this.callbacks.onZoomChange(-0.1);
		});

		const zoomInBtn = document.createElement('button');
		zoomInBtn.className = 'zoom-btn';
		zoomInBtn.textContent = '+';
		zoomInBtn.addEventListener('click', () => {
			this.callbacks.onZoomChange(0.1);
		});

		zoomControls.appendChild(zoomLabel);
		zoomControls.appendChild(zoomOutBtn);
		zoomControls.appendChild(zoomInBtn);

		zoomSection.appendChild(zoomControls);

		return zoomSection;
	}

	private createSpeedSection(): HTMLElement {
		const speedSection = document.createElement('div');
		speedSection.className = 'control-section';

		const speedSelect = document.createElement('select');
		speedSelect.className = 'speed-select';

		// Add placeholder that shows current selection
		const placeholderOption = document.createElement('option');
		placeholderOption.value = '';
		placeholderOption.textContent = 'Speed (Normal)';
		placeholderOption.disabled = true;
		placeholderOption.selected = true;
		placeholderOption.hidden = true;
		speedSelect.appendChild(placeholderOption);

		Object.entries(this.SPEED_OPTIONS).forEach(([label, value]) => {
			const option = document.createElement('option');
			option.value = value.toString();
			option.textContent = label;
			speedSelect.appendChild(option);
		});

		speedSelect.addEventListener('change', (event) => {
			const target = event.target as HTMLSelectElement;
			const speed = parseInt(target.value);
			const selectedLabel = target.options[target.selectedIndex].text;

			// Update placeholder text to show current selection
			placeholderOption.textContent = `Speed (${selectedLabel})`;

			// Reset to placeholder to show the label
			target.value = '';

			this.callbacks.onSpeedChange(speed);
			// Remove focus to prevent arrow keys from changing select options
			target.blur();
		});

		// Prevent arrow keys from being handled by the select element
		speedSelect.addEventListener('keydown', (event) => {
			if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
				event.preventDefault();
				event.stopPropagation();
				// Blur the select to ensure focus returns to game controls
				speedSelect.blur();
			}
		});

		speedSection.appendChild(speedSelect);

		return speedSection;
	}

	// Set available units for the current level (filters morph options)
	public setAvailableUnits(availableUnitNames: string[]): void {
		// Clear existing unit options (keep placeholder)
		const options = Array.from(this.morphSelect.querySelectorAll('option'));
		options.forEach(option => {
			if (option.value !== '') {
				this.morphSelect.removeChild(option);
			}
		});

		// Add only available units from master list
		this.UNIT_MORPH_OPTIONS.forEach(unit => {
			if (availableUnitNames.includes(unit.name)) {
				const option = document.createElement('option');
				option.value = unit.name;

				// Format: "Zergling (25M)" or "Baneling (25M/25G)"
				let costText = '';
				if (unit.mineralCost > 0 || unit.gasCost > 0) {
					costText = ' (';
					if (unit.mineralCost > 0) {
						costText += `${unit.mineralCost}M`;
					}
					if (unit.gasCost > 0) {
						costText += unit.mineralCost > 0 ? `/${unit.gasCost}G` : `${unit.gasCost}G`;
					}
					costText += ')';
				}

				option.textContent = `${unit.name}${costText}`;
				option.dataset.minerals = unit.mineralCost.toString();
				option.dataset.gas = unit.gasCost.toString();

				this.morphSelect.appendChild(option);
			}
		});
	}

	// Public method to update resource display and enable/disable morph options
	public updateResources(minerals: number, gas: number, essence: number, currentHP: number, maxHP: number): void {
		this.mineralsDisplay.textContent = minerals.toString();
		this.gasDisplay.textContent = gas.toString();
		this.essenceDisplay.textContent = essence.toString();
		this.hpDisplay.textContent = `${currentHP}/${maxHP}`;

		// Update morph select options based on available resources
		const options = this.morphSelect.querySelectorAll('option');
		options.forEach(option => {
			if (option.value === '') return; // Skip placeholder

			const requiredMinerals = parseInt(option.dataset.minerals || '0');
			const requiredGas = parseInt(option.dataset.gas || '0');

			const canAfford = minerals >= requiredMinerals && gas >= requiredGas;
			option.disabled = !canAfford;
		});
	}

	// Cleanup method to remove DOM element
	public dispose(): void {
		if (this.controlContainer && this.controlContainer.parentElement) {
			document.body.removeChild(this.controlContainer);
		}
	}
}