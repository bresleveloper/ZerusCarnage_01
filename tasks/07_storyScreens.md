# Task 07: Story Screen System

## Overview
This document describes the implementation of a story screen system for Zerus Carnage. Story screens display narrative content (full-screen images with text overlays) before levels load, enhancing storytelling and player immersion.

## Problem Statement
The game needs a mechanism to present story/narrative content at the beginning of each level. Requirements:
1. Display full-screen background image
2. Show semi-transparent text box overlay with story text
3. Wait for user input ("press any key to continue")
4. Only load level after user dismisses story screen
5. Easy configuration per level
6. Non-intrusive integration with existing level management system

## Architecture

### File Structure
```
src/
├── ui/
│   ├── StoryScreenConfig.ts         # Type definitions and interfaces
│   ├── StoryScreen.ts               # Story screen UI component
│   └── [existing UI files...]
├── ZerusCarnage/
│   ├── LevelStoryScreens.ts         # Registry of story screens per level
│   ├── LevelManager.ts              # (existing)
│   └── [level implementations...]
├── main.ts                           # (modify GameManager)
└── style.scss                        # (add story screen styles)

resources/
└── story/                            # New folder for story images
    ├── level01_zerus.jpg
    ├── level02_evolution.jpg
    └── [future story images...]
```

### Core Components

#### 1. StoryScreenConfig.ts
Type definitions for story screen configuration.

**Interfaces:**

```typescript
/**
 * Position options for the text box overlay
 */
export type TextBoxPosition = 'center' | 'top' | 'bottom' | 'left' | 'right';

/**
 * Configuration for the text box overlay styling
 */
export interface TextBoxConfig {
  position: TextBoxPosition;           // Where to position the text box
  backgroundColor: string;             // CSS color with opacity (e.g., 'rgba(50, 50, 50, 0.85)')
  textColor: string;                   // CSS color for text (e.g., '#ffffff')
  padding: string;                     // CSS padding (e.g., '40px')
  maxWidth: string;                    // CSS max-width (e.g., '800px')
  borderRadius?: string;               // Optional: CSS border-radius (e.g., '12px')
  border?: string;                     // Optional: CSS border (e.g., '2px solid rgba(255, 255, 255, 0.3)')
}

/**
 * Complete configuration for a story screen
 */
export interface StoryScreenConfig {
  imagePath: string;                   // Path to background image (relative to public/)
  text: string;                        // Story text content (supports \n for line breaks)
  textBox: TextBoxConfig;              // Text box styling configuration
  fadeInDuration?: number;             // Optional: fade-in animation duration in ms (default: 500)
}
```

**Purpose:**
- Centralized type definitions
- Type safety for story screen configuration
- Easy to extend with new properties

#### 2. StoryScreen.ts
UI component that renders and manages the story screen.

**Class Structure:**

```typescript
export class StoryScreen {
  private overlayElement: HTMLElement | null = null;
  private keydownHandler: ((e: KeyboardEvent) => void) | null = null;
  private clickHandler: ((e: MouseEvent) => void) | null = null;

  constructor(
    private config: StoryScreenConfig,
    private onDismiss: () => void
  ) {
    this.show();
  }

  private show(): void {
    // Create DOM structure
    // Load and display background image
    // Render text box overlay
    // Add "Press any key to continue" prompt
    // Attach event listeners
    // Apply fade-in animation
  }

  private handleDismiss(): void {
    // Remove event listeners
    // Cleanup DOM elements
    // Call onDismiss callback
  }

  public dispose(): void {
    // Public cleanup method (if needed externally)
  }
}
```

**DOM Structure:**
```html
<div class="story-screen-overlay">
  <div class="story-screen-image" style="background-image: url(...)">
    <div class="story-screen-textbox" data-position="center|top|bottom|left|right">
      <div class="story-screen-text">
        [Story text content with line breaks]
      </div>
      <div class="story-screen-prompt">
        Press any key to continue...
      </div>
    </div>
  </div>
</div>
```

**Key Methods:**

1. **`show()`**
   - Creates overlay DOM structure
   - Sets background image from config
   - Creates text box with configured styling
   - Positions text box based on config.textBox.position
   - Adds pulsing "Press any key" prompt
   - Attaches keydown and click listeners
   - Appends to document.body
   - Applies fade-in animation

2. **`handleDismiss()`**
   - Removes keydown listener
   - Removes click listener
   - Fades out overlay (optional)
   - Removes overlay from DOM
   - Calls onDismiss callback to proceed with level loading

3. **`dispose()`**
   - Public cleanup method for manual disposal
   - Ensures all listeners removed
   - Ensures DOM elements removed

**Event Handling:**
- Listen for ANY keydown event → dismiss
- Listen for click anywhere on overlay → dismiss
- Prevent multiple dismissals (flag to ensure onDismiss called only once)

**Error Handling:**
- If image fails to load, log error but still show text box
- Consider fallback background color if image unavailable

#### 3. LevelStoryScreens.ts
Registry that maps level numbers to their story screen configurations.

**Structure:**

```typescript
import { StoryScreenConfig } from '../ui/StoryScreenConfig';

/**
 * Registry of story screens for each level
 * Key: Level number
 * Value: Story screen configuration
 */
export const LEVEL_STORY_SCREENS: Map<number, StoryScreenConfig> = new Map([
  [1, {
    imagePath: '/resources/story/level01_zerus.jpg',
    text: 'You awaken as a Larvae on the primal world of Zerus.\n\nThe jungle pulses with life... and danger.\n\nSurvive. Evolve. Dominate.',
    textBox: {
      position: 'bottom',
      backgroundColor: 'rgba(30, 30, 30, 0.85)',
      textColor: '#ffffff',
      padding: '40px',
      maxWidth: '800px',
      borderRadius: '12px',
      border: '2px solid rgba(255, 255, 255, 0.3)'
    },
    fadeInDuration: 800
  }],
  // Future levels:
  // [2, { ... }],
  // [3, { ... }],
]);

/**
 * Get story screen config for a specific level
 * @param levelNumber - The level number to get story for
 * @returns Story screen config or undefined if none exists
 */
export function getStoryScreenForLevel(levelNumber: number): StoryScreenConfig | undefined {
  return LEVEL_STORY_SCREENS.get(levelNumber);
}
```

**Purpose:**
- Centralized story content management
- Easy to add/modify story screens for levels
- Clean separation of content from code logic
- Type-safe configuration

**Adding New Stories:**
Simply add new entries to the Map:
```typescript
[2, {
  imagePath: '/resources/story/level02_evolution.jpg',
  text: 'The essence of your fallen prey flows through you...\n\nYou feel the change beginning.',
  textBox: {
    position: 'center',
    backgroundColor: 'rgba(40, 0, 60, 0.9)',
    textColor: '#ff00ff',
    padding: '50px',
    maxWidth: '700px'
  }
}]
```

#### 4. style.scss Additions
CSS styling for story screen components.

**New Styles:**

```scss
/* Story Screen Overlay - Full screen container */
.story-screen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3000; /* Above all game UI */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

/* Fade-in animation */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Background image container */
.story-screen-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Text box overlay - positioned based on data-position attribute */
.story-screen-textbox {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
}

/* Position variants */
.story-screen-textbox[data-position="top"] {
  align-self: flex-start;
  margin-top: 80px;
}

.story-screen-textbox[data-position="bottom"] {
  align-self: flex-end;
  margin-bottom: 80px;
}

.story-screen-textbox[data-position="left"] {
  align-self: flex-start;
  margin-left: 80px;
}

.story-screen-textbox[data-position="right"] {
  align-self: flex-end;
  margin-right: 80px;
}

.story-screen-textbox[data-position="center"] {
  align-self: center;
}

/* Story text content */
.story-screen-text {
  font-size: 24px;
  line-height: 1.6;
  white-space: pre-line; /* Respects \n line breaks */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

/* "Press any key" prompt */
.story-screen-prompt {
  font-size: 16px;
  opacity: 0.7;
  animation: pulse 2s infinite;
  margin-top: 10px;
}

/* Pulsing animation for prompt */
@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
```

**Key Features:**
- Full viewport coverage (z-index 3000 to be above game UI)
- Flexbox positioning for text box variants
- Fade-in animation on appear
- Pulsing "press any key" indicator
- Support for pre-line text (respects `\n` characters)
- Semi-transparent backgrounds via inline styles from config

#### 5. main.ts Modifications (GameManager)
Integrate story screen system into level loading flow.

**Current Flow:**
```
loadLevel(levelNumber)
  → Initialize level class
  → Level.init() starts immediately
```

**New Flow:**
```
loadLevel(levelNumber)
  → Check if story screen exists for this level
  → If yes:
      → Show story screen
      → Wait for user to dismiss
      → Then initialize level
  → If no:
      → Initialize level immediately (current behavior)
```

**Code Changes:**

```typescript
import { StoryScreen } from './ui/StoryScreen';
import { getStoryScreenForLevel } from './ZerusCarnage/LevelStoryScreens';

class GameManager {
  // ... existing code ...

  /**
   * Load a level by its number
   * Shows story screen first if configured, then initializes level
   */
  private loadLevel(levelNumber: number) {
    console.log(`Loading Level ${levelNumber}...`);

    // Check if this level has a story screen
    const storyConfig = getStoryScreenForLevel(levelNumber);

    if (storyConfig) {
      // Show story screen first, then load level when dismissed
      console.log(`Showing story screen for Level ${levelNumber}...`);
      new StoryScreen(storyConfig, () => {
        this.initLevel(levelNumber);
      });
    } else {
      // No story screen, load level immediately
      this.initLevel(levelNumber);
    }
  }

  /**
   * Initialize the actual level (extracted from loadLevel)
   */
  private initLevel(levelNumber: number) {
    const callbacks: LevelCallbacks = {
      onWin: () => this.handleLevelWin(),
      onLose: () => this.handleLevelLose()
    };

    // Initialize the appropriate level based on level number
    switch (levelNumber) {
      case 1:
        this.currentLevel = new ZerusCarnageLevel01(callbacks);
        break;
      // Future levels...
      default:
        console.error(`Level ${levelNumber} not implemented yet!`);
        this.showLevelNotImplemented(levelNumber);
        return;
    }

    this.currentLevelNumber = levelNumber;
    console.log(`Level ${levelNumber} initialized successfully`);
  }

  // ... rest of existing code ...
}
```

**Key Changes:**
1. Split `loadLevel()` into two methods:
   - `loadLevel()`: Handles story screen check and display
   - `initLevel()`: Handles actual level initialization (existing logic)
2. Import story screen classes
3. Check for story config before level init
4. Pass callback to StoryScreen that triggers level init

**Benefits:**
- Minimal changes to existing code
- Levels remain completely unaware of story screens
- Story screen system is optional and non-breaking
- Easy to toggle stories on/off per level

## Implementation Flow

### Sequence Diagram

```
User                GameManager           StoryScreen           Level
  |                      |                     |                  |
  |--[Start Game]------->|                     |                  |
  |                      |                     |                  |
  |                [loadLevel(1)]              |                  |
  |                      |                     |                  |
  |                [getStoryConfig(1)]         |                  |
  |                      |                     |                  |
  |                [new StoryScreen(config, callback)]            |
  |                      |                     |                  |
  |                      |------[show()]------>|                  |
  |                      |                     |                  |
  |<---[Display story screen with image/text]--|                  |
  |                      |                     |                  |
  |                      |           [Wait for input...]          |
  |                      |                     |                  |
  |--[Press key/click]------------------>|     |                  |
  |                      |                     |                  |
  |                      |           [handleDismiss()]            |
  |                      |                     |                  |
  |                      |           [cleanup DOM]                |
  |                      |                     |                  |
  |                      |<---[onDismiss()]---|                  |
  |                      |                     |                  |
  |                [initLevel(1)]              |                  |
  |                      |                     |                  |
  |                      |------[new Level01(callbacks)]--------->|
  |                      |                     |                  |
  |                      |<---------[level.init()]----------------|
  |                      |                     |                  |
  |<---[Game starts]-----|                     |                  |
  |                      |                     |                  |
```

### Step-by-Step User Experience

1. **Game Start**
   - User launches game
   - GameManager calls `loadLevel(1)`

2. **Story Screen Check**
   - GameManager checks if Level 1 has story config
   - Config found in `LEVEL_STORY_SCREENS`

3. **Story Screen Display**
   - StoryScreen created with config + callback
   - Full-screen overlay appears with fade-in
   - Background image loads and displays
   - Text box appears at configured position
   - "Press any key to continue" pulses

4. **User Interaction**
   - User presses any key OR clicks anywhere
   - StoryScreen detects input

5. **Cleanup and Transition**
   - Event listeners removed
   - DOM elements removed
   - onDismiss callback triggered

6. **Level Loading**
   - GameManager.initLevel(1) called
   - Level 1 initializes normally
   - Game begins

## Usage Guide

### Adding Story Screen for a New Level

**Step 1: Create story image**
- Create/find appropriate background image
- Save to `resources/story/levelXX_name.jpg`
- Recommended resolution: 1920x1080 or higher

**Step 2: Add configuration**
In `LevelStoryScreens.ts`:
```typescript
[2, {
  imagePath: '/resources/story/level02_evolution.jpg',
  text: 'Your first evolution is complete.\n\nYou are no longer prey.',
  textBox: {
    position: 'center',
    backgroundColor: 'rgba(40, 40, 40, 0.9)',
    textColor: '#00ff00',
    padding: '50px',
    maxWidth: '600px',
    borderRadius: '8px'
  }
}]
```

**Step 3: Test**
- Run game: `npm run start`
- Navigate to the level
- Verify image loads, text displays correctly
- Test keyboard and mouse dismissal

### Customization Examples

**Dark overlay, bottom position:**
```typescript
textBox: {
  position: 'bottom',
  backgroundColor: 'rgba(10, 10, 10, 0.95)',
  textColor: '#ffffff',
  padding: '40px',
  maxWidth: '800px'
}
```

**Bright overlay, top position with border:**
```typescript
textBox: {
  position: 'top',
  backgroundColor: 'rgba(200, 200, 200, 0.7)',
  textColor: '#000000',
  padding: '30px',
  maxWidth: '700px',
  borderRadius: '15px',
  border: '3px solid rgba(0, 0, 0, 0.5)'
}
```

**Themed overlay (Zerg purple):**
```typescript
textBox: {
  position: 'center',
  backgroundColor: 'rgba(80, 20, 100, 0.85)',
  textColor: '#ff00ff',
  padding: '60px',
  maxWidth: '900px',
  borderRadius: '20px',
  border: '2px solid rgba(255, 0, 255, 0.6)'
}
```

## Testing Strategy

### Unit Testing Checklist
- [ ] StoryScreen creates DOM elements correctly
- [ ] StoryScreen applies config styling properly
- [ ] StoryScreen removes all listeners on dismiss
- [ ] StoryScreen calls onDismiss callback exactly once
- [ ] getStoryScreenForLevel returns correct config
- [ ] getStoryScreenForLevel returns undefined for non-existent levels

### Integration Testing Checklist
- [ ] Level with story screen shows screen before level loads
- [ ] Level without story screen loads immediately
- [ ] Story screen dismisses on any keypress
- [ ] Story screen dismisses on mouse click
- [ ] Level initializes correctly after story dismissal
- [ ] No DOM elements remain after dismissal
- [ ] No memory leaks (listeners properly removed)

### Edge Cases to Test
- [ ] Very long text (ensure scrolling or truncation)
- [ ] Image fails to load (ensure text still visible)
- [ ] Multiple rapid dismissal attempts (ensure single callback)
- [ ] Window resize during story screen display
- [ ] Non-existent image path (graceful degradation)
- [ ] Special characters in text (quotes, symbols)

## Performance Considerations

### Optimization Strategies

1. **Image Loading**
   - Use compressed images (optimize with tools)
   - Consider preloading story images during game init
   - Implement loading spinner if image takes time

2. **Memory Management**
   - Ensure all event listeners removed
   - Clear DOM references after cleanup
   - No lingering timers or intervals


## Implementation Checklist

### Phase 1: Core Implementation
- [ ] Create `StoryScreenConfig.ts` with type definitions
- [ ] Create `StoryScreen.ts` UI component class
- [ ] Add story screen styles to `style.scss`
- [ ] Create `LevelStoryScreens.ts` registry
- [ ] Modify `main.ts` GameManager for integration
- [ ] Create `resources/story/` folder
- [ ] TypeScript compilation check

### Phase 2: Content Creation
- [ ] Create/source Level 1 story image
- [ ] Write Level 1 story text
- [ ] Configure Level 1 story screen
- [ ] Test Level 1 story display

### Phase 3: Testing
- [ ] Test keyboard dismissal
- [ ] Test mouse dismissal
- [ ] Test level loading after dismissal
- [ ] Test level without story (direct load)
- [ ] Memory leak verification
- [ ] Cross-browser testing

## Technical Details

### Dependencies
- **THREE.js**: No direct dependency (story screen is pure HTML/CSS)
- **TypeScript**: Uses interfaces and types
- **Vite**: Asset loading via public folder

### Browser Compatibility
- Modern browsers (ES6+)
- CSS Grid and Flexbox support required
- Background-image CSS support
- KeyboardEvent and MouseEvent APIs

## Conclusion

The Story Screen System provides a clean, modular way to add narrative content to Zerus Carnage without disrupting the existing level management architecture. Key benefits:

- **Non-intrusive**: Levels remain completely unchanged
- **Modular**: Story screens are independent UI components
- **Flexible**: Easy to customize per level
- **Optional**: Levels without stories work normally
- **Maintainable**: Centralized configuration
- **Scalable**: Easy to add stories for new levels

The system integrates seamlessly with the existing `GameManager` and level lifecycle, showing story content before level initialization and waiting for user input before proceeding. This creates a polished, story-driven experience while maintaining clean code separation.
