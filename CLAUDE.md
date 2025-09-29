# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Instructions

you are an expert game developer that masters the THREE.js application built with TypeScript and Vite trio platform. you also always try to develop in a very modular way to simplify future development.


## Project Overview

**Zerus Carnage** is a 2D top-down action game built with THREE.js and TypeScript that combines GTA 1/2 gameplay mechanics with StarCraft 2 Zerg lore. Players start as a Larvae on the jungle world of Zerus and evolve by consuming resources and enemies.

Based on the PRD in `rag/prd_gta.md`, this is a web-based real-time action shooter/figher where players navigate evolutionary progression through combat and resource collection.

## Common Commands

```bash
# Development
npm install              # Install dependencies
npm run start            # Start dev server with hot reload (hosts on network)
npm run serve            # Preview production build (hosts on network)

# Build & Deploy
npm run build            # TypeScript compile + Vite build (outputs to dist/)
npm run pretty           # Format code with Prettier

```

## Build System

- **Vite 7.1.7**: Fast dev server with HMR
- **TypeScript 4.3.2**: Strict mode enabled, null checks disabled
- Entry point: `src/main.ts` → loaded by `index.html`

## Architecture

### Game Structure

**Level Management System** (`src/main.ts` + `src/ZerusCarnage/LevelManager.ts`):
- `GameManager` orchestrates level lifecycle (load, win/lose, restart, transitions)
- `BaseLevel` abstract class provides common level functionality
- `ILevel` interface defines level contract: `init()`, `cleanup()`, `getWinCondition()`, `isWinConditionMet()`
- Current levels: `ZerusCarnageLevel01` (tutorial/early game)
- Win/lose callbacks trigger level transitions with 2s delay
- Export `restartCurrentLevel()` function for global level restart

**Core Game Loop** (`src/ZerusCarnage/ZerusCarnageLevel01.ts`):
- THREE.js scene with orthographic camera (top-down 2D view)
- 60 FPS animation loop with `requestAnimationFrame`
- Stats.js monitor (bottom-right corner)
- Jungle environment: ground plane + procedurally placed trees/bushes
- Player unit with WASD movement (bounded to ±480 units)
- Enemy AI system with collision detection
- Minimap with viewport tracking
- Audio system with spatial positioning

### Unit System

**Base Architecture** (`src/units/BaseUnit.ts`):
- All units inherit from `BaseUnit` abstract class
- Units have SC2-accurate stats: `supply`, `costMinerals`, `costVespene`, `hitPoints`, `armor`, `damage`, `attributes`
- THREE.js `Group` model + position tracking
- Abstract `createModel()` for visual representation
- Abstract `getRadius()` for collision detection
- Proper disposal of THREE.js resources

**Player Unit** (`src/units/PlayerUnit.ts`):
- Extends `BaseUnit` with morphing capabilities
- Evolution chain: Larvae → Drone → Zergling (via `Egg` morphing)
- Tracks current minerals/vespene
- Mineral display shows current/required for next evolution

**Enemy Units** (`src/enemies/`):
- `Larvae`, `Drone`, `Zergling` - AI-controlled units
- Stats sourced from `rag/rules.md` (SC2 unit tables)
- Color coding: Larvae (yellow), Drone (green), Zergling (purple)

**Evolution System** (`src/units/Egg.ts`):
- Temporary unit spawned during morphing
- 10-second morph timer with progress bar
- Replaces old unit model, then spawns new unit type
- Audio feedback on completion

### Combat & Interaction System

**Combat Rules Engine** (`src/interactions/CombatRules.ts`):
- Rule-based system defining unit interactions
- Properties: `canKill` (causes game over), `canEat` (harvest/consume), `reward` (minerals)
- Rules examples:
  - Larvae: Can eat bushes only, dies to Drones
  - Drone: Can eat bushes + trees, immune to Larvae/Drone
  - Zergling: Can eat Larvae (25M) + Drones (50M), immune to Zerglings

**Enemy Interaction** (`src/interactions/enemy.ts`):
- Collision detection using unit radius + position
- Checks `CombatRules` on collision
- Game over callback if player killed
- Resource collection with audio feedback
- Removes consumed units/resources from scene

### UI Components

- **ControlPanel** (`src/ControlPanel.ts`): Morph buttons, mineral counter, unit info
- **Minimap** (`src/minimap.ts`): Top-right tactical map showing units, resources, camera viewport
- **GameTitle** (`src/GameTitle.ts`): Title screen with start button
- **AudioManager** (`src/AudioManager.ts`): THREE.js audio system with spatial positioning

## Key Design Patterns

1. **Interface-Based Levels**: All levels implement `ILevel`, called by `GameManager`
2. **Rule-Based Combat**: Centralized `CombatRulesEngine` defines all interaction logic
3. **Callback Architecture**: Levels use callbacks (`onWin`, `onLose`) to communicate with manager
4. **Resource Cleanup**: All classes implement `cleanup()`/`dispose()` for THREE.js memory management
5. **Stats from SC2**: Unit statistics pulled from `rag/rules.md` (StarCraft 2 complete rules)

## StarCraft 2 Reference Data

- **Complete Rules**: `rag/rules.md` - Full SC2 mechanics, unit stats, abilities, upgrade trees
- **Evolution System**: Heart of the Swarm evolution mechanics detailed in `rag/rules.md` (lines 321-475)
- **PRD**: `rag/prd_gta.md` - Game design document with zones, progression, features

When adding new units, reference the unit tables in `rag/rules.md` for accurate stats.

## Code Style

- **TypeScript**: Strict mode, no implicit returns, unused parameters flagged
- **Formatting**: Prettier configured (use `npm run pretty`)
- **THREE.js**: Always dispose geometries, materials, and remove from scene on cleanup
- **Naming**: `camelCase` for variables/methods, `PascalCase` for classes/interfaces

