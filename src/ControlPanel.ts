export interface ControlCallbacks {
	onZoomChange: (zoomDelta: number) => void;
	onSpeedChange: (speed: number) => void;
}

export class ControlPanel {
	private controlContainer!: HTMLElement;
	private callbacks: ControlCallbacks;

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

		const zoomSection = this.createZoomSection();
		const speedSection = this.createSpeedSection();

		this.controlContainer.appendChild(zoomSection);
		this.controlContainer.appendChild(speedSection);

		document.body.appendChild(this.controlContainer);
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
		});

		speedSection.appendChild(speedLabel);
		speedSection.appendChild(speedSelect);

		return speedSection;
	}
}