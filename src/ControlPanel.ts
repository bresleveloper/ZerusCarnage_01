export interface ControlCallbacks {
	onZoomChange: (zoomDelta: number) => void;
	onSpeedChange: (speed: number) => void;
	onMorphUnit: (unitType: string) => void;
}

export interface UnitMorphOption {
	name: string;
	mineralCost: number;
	gasCost: number;
}

export class ControlPanel {
	private controlContainer!: HTMLElement;
	private callbacks: ControlCallbacks;

	// Resource display elements
	private mineralsDisplay!: HTMLElement;
	private gasDisplay!: HTMLElement;
	private essenceDisplay!: HTMLElement;

	// Morph selection element
	private morphSelect!: HTMLSelectElement;

	private readonly SPEED_OPTIONS = {
		'Slow': 30,
		'Normal': 50,
		'Fast': 90,
		'Lightning': 180
	};

	// Zerg unit morph options from RAG/rules.md
	private readonly UNIT_MORPH_OPTIONS: UnitMorphOption[] = [
		{ name: 'Larvae', mineralCost: 0, gasCost: 0 },
		{ name: 'Drone', mineralCost: 50, gasCost: 0 },
		{ name: 'Zergling', mineralCost: 25, gasCost: 0 },
		{ name: 'Baneling', mineralCost: 25, gasCost: 25 },
		{ name: 'Overlord', mineralCost: 100, gasCost: 0 },
		{ name: 'Roach', mineralCost: 75, gasCost: 25 },
		{ name: 'Hydralisk', mineralCost: 100, gasCost: 50 },
		{ name: 'Mutalisk', mineralCost: 100, gasCost: 100 },
		{ name: 'Queen', mineralCost: 150, gasCost: 0 },
		{ name: 'Ultralisk', mineralCost: 275, gasCost: 200 }
	];

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

		resourceDisplay.appendChild(mineralsContainer);
		resourceDisplay.appendChild(gasContainer);
		resourceDisplay.appendChild(essenceContainer);

		resourceSection.appendChild(resourceLabel);
		resourceSection.appendChild(resourceDisplay);

		return resourceSection;
	}

	private createMorphSection(): HTMLElement {
		const morphSection = document.createElement('div');
		morphSection.className = 'control-section';

		const morphLabel = document.createElement('div');
		morphLabel.className = 'control-label';
		morphLabel.textContent = 'Morph Into';

		this.morphSelect = document.createElement('select');
		this.morphSelect.className = 'morph-select';

		// Add placeholder option
		const placeholderOption = document.createElement('option');
		placeholderOption.value = '';
		placeholderOption.textContent = '-- Select Unit --';
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

		morphSection.appendChild(morphLabel);
		morphSection.appendChild(this.morphSelect);

		return morphSection;
	}

	private createZoomSection(): HTMLElement {
		const zoomSection = document.createElement('div');
		zoomSection.className = 'control-section';

		const zoomLabel = document.createElement('div');
		zoomLabel.className = 'control-label';
		zoomLabel.textContent = 'Zoom';

		const zoomControls = document.createElement('div');
		zoomControls.className = 'zoom-controls';

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

		zoomControls.appendChild(zoomOutBtn);
		zoomControls.appendChild(zoomInBtn);

		zoomSection.appendChild(zoomLabel);
		zoomSection.appendChild(zoomControls);

		return zoomSection;
	}

	private createSpeedSection(): HTMLElement {
		const speedSection = document.createElement('div');
		speedSection.className = 'control-section';

		const speedLabel = document.createElement('div');
		speedLabel.className = 'control-label';
		speedLabel.textContent = 'Speed';

		const speedSelect = document.createElement('select');
		speedSelect.className = 'speed-select';

		Object.entries(this.SPEED_OPTIONS).forEach(([label, value]) => {
			const option = document.createElement('option');
			option.value = value.toString();
			option.textContent = label;
			if (value === 50) {
				option.selected = true;
			}
			speedSelect.appendChild(option);
		});

		speedSelect.addEventListener('change', (event) => {
			const target = event.target as HTMLSelectElement;
			const speed = parseInt(target.value);
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

		speedSection.appendChild(speedLabel);
		speedSection.appendChild(speedSelect);

		return speedSection;
	}

	// Public method to update resource display and enable/disable morph options
	public updateResources(minerals: number, gas: number, essence: number): void {
		this.mineralsDisplay.textContent = minerals.toString();
		this.gasDisplay.textContent = gas.toString();
		this.essenceDisplay.textContent = essence.toString();

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