/**
 * Message System
 *
 * Centralized system for all IN-GAME full-screen overlay messages
 * (game over, victory, quest detail, quest log)
 *
 * NOTE: This is separate from StoryScreen which runs between levels
 * with full-screen images. MessageSystem uses semi-transparent overlays
 * for in-game paused states.
 */

export type MessageType =
	| 'error'      // Red styling (game over)
	| 'success'    // Green styling (victory, quest complete)
	| 'info'       // Blue/neutral styling (quest detail)
	| 'log';       // List styling (quest log)

export interface MessageButton {
	label: string;
	onClick: () => void;
	style?: 'primary' | 'secondary' | 'danger';
}

export interface MessageConfig {
	type: MessageType;
	title: string;
	content: string | HTMLElement; // Plain text or custom HTML element
	buttons?: MessageButton[];
	dismissOnEsc?: boolean;
	dismissCallback?: () => void;
	customClass?: string; // Additional CSS class for styling
}

export class MessageSystem {
	private overlayElement: HTMLElement | null = null;
	private pauseCallback: () => void;
	private resumeCallback: () => void;
	private escHandler: ((e: KeyboardEvent) => void) | null = null;

	constructor(pauseCallback: () => void, resumeCallback: () => void) {
		this.pauseCallback = pauseCallback;
		this.resumeCallback = resumeCallback;
	}

	/**
	 * Show a message overlay
	 * Automatically pauses game
	 */
	public show(config: MessageConfig): void {
		// Don't show if already showing
		if (this.overlayElement) {
			console.warn('MessageSystem: Already showing a message');
			return;
		}

		// Pause game
		this.pauseCallback();

		// Create overlay
		this.overlayElement = document.createElement('div');
		this.overlayElement.className = 'message-overlay';

		// Add type-specific class
		this.overlayElement.setAttribute('data-type', config.type);
		if (config.customClass) {
			this.overlayElement.classList.add(config.customClass);
		}

		// Create content container
		const contentContainer = document.createElement('div');
		contentContainer.className = 'message-content';

		// Title
		const title = document.createElement('h1');
		title.className = 'message-title';
		title.textContent = config.title;
		contentContainer.appendChild(title);

		// Content (string or HTMLElement)
		const contentBody = document.createElement('div');
		contentBody.className = 'message-body';
		if (typeof config.content === 'string') {
			contentBody.textContent = config.content;
		} else {
			contentBody.appendChild(config.content);
		}
		contentContainer.appendChild(contentBody);

		// Buttons
		if (config.buttons && config.buttons.length > 0) {
			const buttonContainer = document.createElement('div');
			buttonContainer.className = 'message-buttons';

			config.buttons.forEach(btn => {
				const button = document.createElement('button');
				button.className = `message-button ${btn.style || 'primary'}`;
				button.textContent = btn.label;
				button.addEventListener('click', () => {
					btn.onClick();
					this.hide();
				});
				buttonContainer.appendChild(button);
			});

			contentContainer.appendChild(buttonContainer);
		}

		// ESC hint (always show in bottom right when dismissOnEsc is true)
		if (config.dismissOnEsc) {
			const escHint = document.createElement('div');
			escHint.className = 'message-esc-hint';
			escHint.textContent = 'Press ESC to close';
			contentContainer.appendChild(escHint);
		}

		this.overlayElement.appendChild(contentContainer);
		document.body.appendChild(this.overlayElement);

		// Setup ESC handler
		if (config.dismissOnEsc) {
			this.escHandler = (e: KeyboardEvent) => {
				if (e.key === 'Escape') {
					if (config.dismissCallback) {
						config.dismissCallback();
					}
					this.hide();
				}
			};
			window.addEventListener('keydown', this.escHandler);
		}
	}

	/**
	 * Hide the message overlay
	 * Automatically resumes game
	 */
	public hide(): void {
		if (this.overlayElement && this.overlayElement.parentElement) {
			document.body.removeChild(this.overlayElement);
			this.overlayElement = null;
		}

		if (this.escHandler) {
			window.removeEventListener('keydown', this.escHandler);
			this.escHandler = null;
		}

		// Resume game
		this.resumeCallback();
	}

	/**
	 * Check if a message is currently displayed
	 */
	public isVisible(): boolean {
		return this.overlayElement !== null;
	}

	/**
	 * Cleanup
	 */
	public dispose(): void {
		this.hide();
	}
}
