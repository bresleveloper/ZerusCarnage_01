export interface ControlCallbacks {
	onZoomChange: (zoomDelta: number) => void;
	onSpeedChange: (speed: number) => void;
}

export class ControlPanel {
	private controlContainer!: HTMLElement;
	private callbacks: ControlCallbacks;

	// Resource display elements
	private mineralsDisplay!: HTMLElement;
	private gasDisplay!: HTMLElement;

	private readonly SPEED_OPTIONS = {
		'Slow': 30,
		'Normal': 50,
		'Fast': 90,
		'Lightning': 180
	};

	constructor(callbacks: ControlCallbacks) {
		this.callbacks = callbacks;
		this.setupControlPanel();
	}

	private setupControlPanel() {
		this.controlContainer = document.createElement('div');
		this.controlContainer.className = 'control-panel';

		const resourceSection = this.createResourceSection();
		const zoomSection = this.createZoomSection();
		const speedSection = this.createSpeedSection();

		this.controlContainer.appendChild(resourceSection);
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

		resourceDisplay.appendChild(mineralsContainer);
		resourceDisplay.appendChild(gasContainer);

		resourceSection.appendChild(resourceLabel);
		resourceSection.appendChild(resourceDisplay);

		return resourceSection;
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

	// Public method to update resource display
	public updateResources(minerals: number, gas: number): void {
		this.mineralsDisplay.textContent = minerals.toString();
		this.gasDisplay.textContent = gas.toString();
	}
}