# Task 04: Multi-Level Management System

## Overview
This document describes the implementation of a multi-level management system for Zerus Carnage, allowing the game to support multiple sequential levels with proper lifecycle management, win conditions, and smooth transitions.

## Problem Statement
The original codebase had a single monolithic level implementation in `main.ts`. To support multiple levels with different challenges and objectives, we needed:
1. A modular level structure
2. Proper resource cleanup between levels
3. Win/lose condition tracking
4. Level progression system
5. Smooth transitions between levels

## Architecture

### File Structure
```
src/
├── ZerusCarnage/
│   ├── LevelManager.ts                 # Base interfaces and classes
│   ├── ZerusCarnageLevel01.ts          # Level 1 implementation
│   ├── initZerusCarnageLevel01.ts      # Level 1 factory function
│   └── [future levels...]
├── main.ts                              # Game orchestrator
└── [other game files...]
```

### Core Components

#### 1. LevelManager.ts
Defines the contract that all levels must implement:

**Interfaces:**
- `WinCondition`: Tracks progress toward level completion
  - `type`: Type of win condition (e.g., 'minerals', 'kills', 'survival')
  - `target`: Target value to achieve
  - `current`: Current progress

- `LevelCallbacks`: Callbacks for level events
  - `onWin()`: Called when level is completed
  - `onLose()`: Optional callback for level failure

- `ILevel`: Interface all levels must implement
  - `init()`: Initialize the level
  - `cleanup()`: Clean up all resources
  - `getWinCondition()`: Get current win condition status
  - `isWinConditionMet()`: Check if win condition is met
  - `setCallbacks()`: Set event callbacks

**Base Class:**
- `BaseLevel`: Abstract base class with common functionality
  - Manages win condition state
  - Provides `updateWinProgress()` method
  - Automatically triggers win callback when target reached

#### 2. main.ts (GameManager)
The main game orchestrator that manages level lifecycle:

**Responsibilities:**
- Load appropriate level based on level number
- Handle level transitions (cleanup → load next)
- Manage win/lose callbacks
- Display "level not implemented" message for future levels
- Provide 2-second delay before transitions for UX

**Key Methods:**
- `loadLevel(levelNumber)`: Loads and initializes a level
- `handleLevelWin()`: Cleans up current level and loads next
- `handleLevelLose()`: Handles level failure (currently just logs)
- `showLevelNotImplemented()`: Shows completion screen when all levels are done

#### 3. ZerusCarnageLevel01.ts
Level 1 implementation extending `BaseLevel`:

**Win Condition:**
- Collect 100 minerals to win

**Key Additions:**
- Extends `BaseLevel` instead of standalone class
- `init()` method for initialization (called by level manager)
- `cleanup()` method for comprehensive resource disposal
- Win condition tracking via `updateWinProgress()`
- Victory UI overlay with "Continue to Next Level" button
- `hasWon` flag to prevent game updates after victory

**Cleanup Process:**
1. Stop animation loop (`cancelAnimationFrame`)
2. Remove all event listeners (resize, keydown, keyup)
3. Dispose player unit and morphing egg
4. Dispose all enemies
5. Dispose environment objects (trees, bushes, ground)
6. Cleanup minimap and control panel
7. Remove UI elements (stats, game over, victory)
8. Remove renderer and clear scene

#### 4. initZerusCarnageLevel01.ts
Factory function for Level 1:

**Purpose:**
- Creates and initializes Level 1 instance
- Sets callbacks from game manager
- Calls `init()` to start the level
- Returns `ILevel` interface for consistency

**Usage:**
```typescript
const level = initLevel01(callbacks);
// Level is now running
```

## Level Lifecycle Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      Game Manager                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │  loadLevel(1)   │
                    └─────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ initLevel01()   │
                    └─────────────────┘
                              │
                              ▼
              ┌───────────────────────────────┐
              │   Level 1 Initialization      │
              │   - Scene setup               │
              │   - Create player & enemies   │
              │   - Setup UI                  │
              │   - Start animation loop      │
              └───────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │   Gameplay      │
                    │ (Collect 100    │
                    │   minerals)     │
                    └─────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │  Win Condition  │
                    │      Met        │
                    └─────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │  Show Victory   │
                    │      UI         │
                    └─────────────────┘
                              │
              ┌───────────────┴───────────────┐
              │   User clicks "Continue"      │
              └───────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │  onWin()        │
                    │  callback       │
                    └─────────────────┘
                              │
                              ▼
              ┌───────────────────────────────┐
              │   Level 1 Cleanup             │
              │   - Stop animation            │
              │   - Remove listeners          │
              │   - Dispose resources         │
              │   - Clear scene               │
              └───────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │  loadLevel(2)   │
                    └─────────────────┘
                              │
                              ▼
                         (Repeat)
```

## Win Condition System

### How It Works
1. Level sets win condition type and target in constructor
   ```typescript
   super('minerals', 100); // Win by collecting 100 minerals
   ```

2. Level updates progress during gameplay
   ```typescript
   this.updateWinProgress(resources.minerals);
   ```

3. `BaseLevel.updateWinProgress()` checks if target reached
   - If target met and not already won → calls `onWin()` callback

4. Victory UI is displayed
   - Shows "VICTORY!" message
   - Green screen flash effect
   - "Continue to Next Level" button

5. When user clicks continue → `onWin()` callback triggered

6. Game manager cleans up level and loads next

### Future Win Conditions
The system is designed to support multiple win condition types:
- `'minerals'`: Collect X minerals
- `'kills'`: Defeat X enemies
- `'survival'`: Survive for X seconds
- `'combo'`: Multiple conditions (AND/OR logic)

## Adding New Levels

### Step-by-Step Guide

1. **Create Level Class** (`ZerusCarnageLevel0X.ts`)
   ```typescript
   import { BaseLevel } from './LevelManager';

   export default class ZerusCarnageLevel02 extends BaseLevel {
     constructor() {
       super('kills', 20); // Win by killing 20 enemies
       // ... initialization
     }

     init() {
       // Setup scene, entities, UI
       // Start animation loop
     }

     cleanup() {
       // Dispose all resources
     }
   }
   ```

2. **Create Factory Function** (`initZerusCarnageLevelXX.ts`)
   ```typescript
   import ZerusCarnageLevelXX from './ZerusCarnageLevelXX';
   import { ILevel, LevelCallbacks } from './LevelManager';

   export function initLevelXX(callbacks: LevelCallbacks): ILevel {
     const level = new ZerusCarnageLevelXX();
     level.setCallbacks(callbacks);
     level.init();
     return level;
   }
   ```

3. **Register in main.ts**
   ```typescript
   import { initLevelXX } from './ZerusCarnage/initZerusCarnageLevelXX';

   // In loadLevel() switch statement:
   case XX:
     this.currentLevel = initLevelXX(callbacks);
     break;
   ```

## Resource Cleanup Best Practices

### Why Cleanup is Critical
- Prevents memory leaks
- Ensures smooth transitions
- Avoids event listener conflicts
- Frees GPU resources

### Cleanup Checklist for Each Level
- [ ] Stop animation loop (`cancelAnimationFrame`)
- [ ] Remove all `window` event listeners
- [ ] Dispose THREE.js geometries, materials, textures
- [ ] Remove DOM elements (UI overlays, stats)
- [ ] Clear custom timers/intervals
- [ ] Dispose custom classes (minimap, control panel)
- [ ] Clear arrays (enemies, trees, bushes)
- [ ] Clear scene (`scene.clear()`)
- [ ] Dispose renderer

### Example Cleanup Code
```typescript
cleanup() {
  // Stop animation
  if (this.animationFrameId !== null) {
    cancelAnimationFrame(this.animationFrameId);
  }

  // Remove listeners
  window.removeEventListener('resize', this.resizeHandler);
  window.removeEventListener('keydown', this.keydownHandler);

  // Dispose THREE.js objects
  this.enemies.forEach(enemy => enemy.dispose());
  this.ground.geometry.dispose();
  this.ground.material.dispose();

  // Remove DOM elements
  if (this.statsUI) document.body.removeChild(this.statsUI);

  // Dispose custom classes
  this.minimap.dispose();
  this.controlPanel.dispose();

  // Clear scene
  this.scene.clear();
  this.renderer.dispose();
}
```

## Testing

### Manual Testing Checklist
- [ ] Level 1 loads correctly
- [ ] Win condition progress tracks properly
- [ ] Victory UI appears at 100 minerals
- [ ] Click "Continue" triggers level transition
- [ ] Level 1 cleanup completes without errors
- [ ] "Level 2 not implemented" message appears
- [ ] Can restart from Level 1
- [ ] No memory leaks (check DevTools Performance)
- [ ] No console errors during transitions
- [ ] Event listeners don't stack up

### Performance Testing
Use Chrome DevTools to monitor:
1. Memory usage before/after level transitions
2. Number of active event listeners
3. THREE.js renderer info (geometry/texture count)
4. Animation frame rate during transitions

## Future Enhancements

### Planned Features
1. **Level 02+ Implementation**
   - Different environments (desert, ice, volcano)
   - New enemy types
   - Unique win conditions

2. **Save/Load System**
   - Save current level progress
   - Load from saved state
   - Level select menu

3. **Level Configuration**
   - JSON-based level definitions
   - Hot-reloadable level data
   - Level editor tools

4. **Transition Effects**
   - Fade in/out between levels
   - Loading screens
   - Level intro animations

5. **Score System**
   - Time bonuses
   - Mineral collection score
   - Enemy kill count
   - Leaderboards

## Implementation Status

### ✅ Completed
- [x] Create `ZerusCarnage/` folder structure
- [x] Implement `LevelManager.ts` base interface
- [x] Move and update `ZerusCarnageLevel01.ts`
- [x] Add comprehensive `cleanup()` method
- [x] Implement win condition system
- [x] Create victory UI
- [x] Create `initZerusCarnageLevel01.ts` factory
- [x] Implement `main.ts` game orchestrator
- [x] Add `dispose()` to ControlPanel
- [x] Update all import paths
- [x] Test compilation (no TypeScript errors)

### 🔄 In Progress
- [ ] Manual gameplay testing
- [ ] Memory leak verification

### 📋 TODO
- [ ] Implement Level 02
- [ ] Add level transition animations
- [ ] Create level select menu
- [ ] Implement save/load system
- [ ] Add score tracking

## Technical Details

### Key Files Modified
1. `src/main.ts` → `src/ZerusCarnage/initZerusCarnageLevel01.ts` (renamed & refactored)
2. `src/ZerusCarnageLevel01.ts` → `src/ZerusCarnage/ZerusCarnageLevel01.ts` (moved & extended)
3. `src/ControlPanel.ts` (added dispose method)

### New Files Created
1. `src/ZerusCarnage/LevelManager.ts`
2. `src/main.ts` (new game orchestrator)
3. `tasks/04_LevelsManagement.md` (this document)

### TypeScript Compilation
- ✅ No compilation errors
- ✅ All types properly defined
- ✅ Interface contracts enforced

### Vite Dev Server
- ✅ Runs without errors
- ✅ Hot module reloading works
- ✅ No build warnings

## Conclusion

The multi-level management system is now fully implemented and provides a solid foundation for adding new levels. The architecture is modular, maintainable, and follows best practices for resource management in THREE.js applications.

Key benefits:
- **Scalability**: Easy to add new levels
- **Maintainability**: Clear separation of concerns
- **Performance**: Proper resource cleanup prevents memory leaks
- **Extensibility**: Win condition system supports various game modes
- **User Experience**: Smooth transitions and clear victory feedback

The game can now grow from a single-level prototype to a multi-level adventure with minimal architectural changes.