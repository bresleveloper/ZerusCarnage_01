/**
 * Position options for the text box overlay
 */
export type TextBoxPosition = 'center' | 'top' | 'bottom' | 'left' | 'right';

/**
 * Configuration for the text box overlay styling
 */
export interface TextBoxConfig {
	position: TextBoxPosition; // Where to position the text box
	backgroundColor: string; // CSS color with opacity (e.g., 'rgba(50, 50, 50, 0.85)')
	textColor: string; // CSS color for text (e.g., '#ffffff')
	padding: string; // CSS padding (e.g., '40px')
	maxWidth: string; // CSS max-width (e.g., '800px')
	borderRadius?: string; // Optional: CSS border-radius (e.g., '12px')
	border?: string; // Optional: CSS border (e.g., '2px solid rgba(255, 255, 255, 0.3)')
}

/**
 * Complete configuration for a story screen
 */
export interface StoryScreenConfig {
	imagePath: string; // Path to background image (relative to public/)
	text: string; // Story text content (supports \n for line breaks)
	textBox: TextBoxConfig; // Text box styling configuration
	fadeInDuration?: number; // Optional: fade-in animation duration in ms (default: 500)
}
