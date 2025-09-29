export class GameTitle {
	private titleContainer!: HTMLElement;
	private readonly README_URL = 'https://github.com/bresleveloper/ZerusCarnage_01/blob/main/README.md';

	constructor() {
		this.setupGameTitle();
	}

	private setupGameTitle() {
		this.titleContainer = document.createElement('div');
		this.titleContainer.className = 'game-title';

		// Game title text
		const titleText = document.createElement('span');
		titleText.className = 'game-title-text';
		titleText.textContent = 'ZerusCarnage';

		// Info icon button
		const infoIcon = document.createElement('a');
		infoIcon.className = 'info-icon';
		infoIcon.href = this.README_URL;
		infoIcon.target = '_blank';
		infoIcon.rel = 'noopener noreferrer';
		infoIcon.textContent = 'ⓘ';
		infoIcon.title = 'View README';

		this.titleContainer.appendChild(titleText);
		this.titleContainer.appendChild(infoIcon);

		document.body.appendChild(this.titleContainer);
	}

	// Cleanup method to remove DOM element
	public dispose(): void {
		if (this.titleContainer && this.titleContainer.parentElement) {
			document.body.removeChild(this.titleContainer);
		}
	}
}