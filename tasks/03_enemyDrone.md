# Task 03: Enemy Drone Implementation

## Overview
Add a Zerg drone enemy that spawns at map edges, wanders randomly, and causes "game over" when it touches the larvae. Implement with modular architecture for future expansion.

## Architecture Design

### File Structure
- **`src/enemies/drone.ts`** - Drone enemy class and visual model
- **`src/interactions/enemy.ts`** - Enemy interaction system and game logic
- Integration in **`src/JungleWorld.ts`** - Main game coordination

## Technical Specifications

### Drone Characteristics (Based on StarCraft 2)
- **Health**: 40 HP (reference only, no health system yet)
- **Speed**: 20 units per second (slower than larvae's 50)
- **Size**: Larger than larvae (~300% scale)
- **Behavior**: Random wandering with periodic direction changes
- **Spawn**: Random position on map edges (perimeter)

### Visual Design - Cute Zerg Drone
- **Body**: Main oval segment ( #8b138bff)
- **Head**: Small rounded head with simple eyes
- **Appendages**: Small antennae and legs for worker aesthetic
- **Size**: Larger than larvae (~300% scale) to show hierarchy
- **Color Scheme**: Earth tones (browns, tans) with purples vs larvae's "pure" purples

## Implementation Plan

### 1. `src/enemies/drone.ts`
```typescript
export class Drone {
  private model: THREE.Group
  private position: THREE.Vector3
  private direction: THREE.Vector2
  private speed: number = 20
  private directionChangeTimer: number

  // Visual creation methods
  // Edge spawn positioning
  // Random wandering AI
  // Collision bounds
}
```

### 2. `src/interactions/enemy.ts`
```typescript
export class EnemyInteraction {
  private gameOver: boolean = false

  // Collision detection between larvae and enemies
  // Game over state management
  // Future: damage system, effects, power-ups
}
```

### 3. `src/JungleWorld.ts` Integration
- Import Drone and EnemyInteraction classes
- Add enemies array and interaction manager
- Spawn drone(s) at game start
- Update enemies in animate() loop
- Handle game over state with UI feedback

## Behavioral Logic

### Spawn System
- **Location**: Random position on map perimeter (-100 to 100 bounds)
- **Edges**: Top, bottom, left, right sides
- **Count**: Start with 1 drone, expandable

### AI Behavior
- **Movement**: Random direction vector, changes every 3-5 seconds
- **Boundaries**: Respect world bounds, bounce off edges
- **Obstacles**: Navigate around trees/bushes (optional for initial version)
- **Rotation**: Face movement direction like larvae

### Interaction System
- **Collision Detection**: Circular collision (drone radius + larvae radius)
- **Effect**: Instant game over on contact
- **Feedback**: Game over message, restart option
- **Future Extensions**: Health system, different enemy effects

## Game Over Implementation
- **Detection**: Check collision each frame in animate()
- **Response**: Pause game, display "Game Over" message
- **Options**: Restart game, return to menu (future)
- **Visual**: Red screen flash or overlay effect
