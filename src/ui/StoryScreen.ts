import { StoryScreenConfig } from './StoryScreenConfig';

/**
 * StoryScreen - Displays a full-screen story/narrative screen before level loads
 *
 * Features:
 * - Full-screen background image
 * - Semi-transparent text box overlay with configurable position
 * - "Press any key to continue" prompt
 * - Dismisses on any keypress or mouse click
 * - Proper cleanup of DOM and event listeners
 */
export class StoryScreen {
	private overlayElement: HTMLElement | null = null;
	private keydownHandler: ((e: KeyboardEvent) => void) | null = null;
	private clickHandler: ((e: MouseEvent) => void) | null = null;
	private isDismissed: boolean = false; // Prevent multiple dismissals

	constructor(private config: StoryScreenConfig, private onDismiss: () => void) {
		this.show();
	}

	/**
	 * Create and display the story screen
	 */
	private show(): void {
		// Create main overlay container
		this.overlayElement = document.createElement('div');
		this.overlayElement.className = 'story-screen-overlay';

		// Set custom animation duration if specified
		if (this.config.fadeInDuration) {
			this.overlayElement.style.animationDuration = `${this.config.fadeInDuration}ms`;
		}

		// Create background image container
		const imageContainer = document.createElement('div');
		imageContainer.className = 'story-screen-image';
		imageContainer.style.backgroundImage = `url(${this.config.imagePath})`;

		// Create text box overlay
		const textBox = document.createElement('div');
		textBox.className = 'story-screen-textbox';
		textBox.setAttribute('data-position', this.config.textBox.position);

		// Apply text box styling from config
		textBox.style.backgroundColor = this.config.textBox.backgroundColor;
		textBox.style.color = this.config.textBox.textColor;
		textBox.style.padding = this.config.textBox.padding;
		textBox.style.maxWidth = this.config.textBox.maxWidth;

		if (this.config.textBox.borderRadius) {
			textBox.style.borderRadius = this.config.textBox.borderRadius;
		}

		if (this.config.textBox.border) {
			textBox.style.border = this.config.textBox.border;
		}

		// Create story text content
		const textContent = document.createElement('div');
		textContent.className = 'story-screen-text';
		textContent.textContent = this.config.text;

		// Create "Press any key" prompt
		const prompt = document.createElement('div');
		prompt.className = 'story-screen-prompt';
		prompt.textContent = 'Press any key to continue...';

		// Assemble DOM structure
		textBox.appendChild(textContent);
		textBox.appendChild(prompt);
		imageContainer.appendChild(textBox);
		this.overlayElement.appendChild(imageContainer);

		// Attach event listeners
		this.keydownHandler = () => this.handleDismiss();
		this.clickHandler = () => this.handleDismiss();

		window.addEventListener('keydown', this.keydownHandler);
		this.overlayElement.addEventListener('click', this.clickHandler);

		// Add to document
		document.body.appendChild(this.overlayElement);

		// Log for debugging
		console.log('Story screen displayed:', this.config);
	}

	/**
	 * Handle dismissal of the story screen
	 */
	private handleDismiss(): void {
		// Prevent multiple dismissals
		if (this.isDismissed) {
			return;
		}

		this.isDismissed = true;

		// Remove event listeners
		if (this.keydownHandler) {
			window.removeEventListener('keydown', this.keydownHandler);
			this.keydownHandler = null;
		}

		if (this.clickHandler && this.overlayElement) {
			this.overlayElement.removeEventListener('click', this.clickHandler);
			this.clickHandler = null;
		}

		// Remove DOM element
		if (this.overlayElement && this.overlayElement.parentElement) {
			document.body.removeChild(this.overlayElement);
			this.overlayElement = null;
		}

		// Call dismiss callback to proceed with level loading
		console.log('Story screen dismissed');
		this.onDismiss();
	}

	/**
	 * Public cleanup method (can be called externally if needed)
	 */
	public dispose(): void {
		this.handleDismiss();
	}
}
