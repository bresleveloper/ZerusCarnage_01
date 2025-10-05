# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Zerus Carnage** is a Three.js + TypeScript game inspired by StarCraft 2 Zerg evolution mechanics. Players start as a Larvae on Zerus and evolve by gathering resources (minerals, gas, essence) and consuming other units. The game uses authentic StarCraft 2 unit statistics and combat formulas.

**Tech Stack**: Three.js (3D rendering), TypeScript, Vite (dev server + bundler), SCSS

## Development Commands

### Common Operations
- `npm start` - Start development server with hot reload (runs on all network interfaces)
- `npm run build` - Compile TypeScript and build production bundle
- `npm run serve` - Preview production build locally
- `npm run pretty` - Format all TypeScript, HTML, and SCSS files with Prettier


## Code Architecture

### Level System

The game uses an abstract level management system defined in `src/ZerusCarnage/LevelManager.ts`:

**Core Interfaces:**
- `ILevel`: Contract for all level implementations (init, cleanup, win conditions, available units)
- `BaseLevel`: Abstract class providing common functionality
- `LevelCallbacks`: Callbacks for level events (onWin, onLose)
- `WinCondition`: Flexible win condition system supporting multiple types (minerals, kills, miniboss_kills, quest)

**Level Lifecycle:**
1. `GameManager` (src/main.ts) orchestrates level transitions
2. Story screens can be shown before level initialization (via `getStoryScreenForLevel()`)
3. Level `init()` sets up scene, entities, UI, event handlers
4. Level runs its own animation loop
5. Win condition triggers `onWin` callback → level cleanup → next level loads
6. **Critical**: Each level MUST properly cleanup THREE.js resources, DOM elements, event listeners, and animation frames

**Current Implementation:**
- `ZerusCarnageLevel01`: Main level (miniboss kill win condition)
- Add new levels by implementing `ILevel` and registering in GameManager switch statement

### Unit System

All units inherit from `BaseUnit` (src/units/BaseUnit.ts) which implements authentic StarCraft 2 unit statistics:

**Unit Properties:**
- Stats: supply, costMinerals, costVespene, hitPoints, armor, damage, attackCooldown, attributes
- Combat state: currentHP, attackTimer, isInCombat, damageAbsorb
- Upgrades: attackUpgrade, armorUpgrade (for enemies with random bonuses)
- Visual: Three.js Group model, position, radius (for collision)

**Player System** (`src/units/PlayerUnit.ts`):
- Wraps current unit (controls a BaseUnit internally)
- Manages evolution: Larvae → Drone → Zergling (via `morphToUnit()`)
- Tracks resources: minerals, gas, essence (persist across morphs)
- Permanent upgrades: PlayerUpgrades class (attack, armor bonuses persist across evolutions)
- Morphing state: Becomes `Egg` during morph, immobile until complete

**Enemy Units:**
- `Larvae` (src/enemies/larvae.ts): Basic prey, 25 HP, can only be eaten by Larvae/Drone
- `Drone` (src/enemies/Drone.ts): Medium prey, 40 HP, drops minerals/gas
- `Zergling` (src/enemies/zergling.ts): Combat unit, 35 HP, can have random upgrades
  - Minibosses: 2x size, +2/+2 upgrades, tracked for win conditions

**Unit Creation Pattern:**
```typescript
const enemy = new Zergling(position, isMiniboss);
enemy.setAttackUpgrade(Math.floor(Math.random() * 3));
enemy.setArmorUpgrade(Math.floor(Math.random() * 3));
```

### Combat System

Combat uses authentic StarCraft 2 damage formulas across three interconnected systems:

**1. CombatRules** (`src/interactions/CombatRules.ts`):
- Defines which units can fight: `canKill(attackerType, targetType)`
- Larvae can't fight (only eat bushes)
- Drones can fight Larvae
- Zerglings+ can fight Larvae, Drones, and each other

**2. CombatManager** (`src/combat/CombatManager.ts`):
- Manages fight lifecycle: initiation, updates, damage application, death
- Turn-based: alternating attacks based on attack cooldown
- Damage formula: `(Base Damage + Attack Upgrades) - (Armor + Armor Upgrades)`, min 1
- Special mechanics: damageAbsorb applied before armor calculation
- Callbacks: onEnemyDeath (rewards), onPlayerDeath (game over), onDamageDealt (visuals)

**3. CombatVisuals** (`src/combat/CombatVisuals.ts`):
- Red flash on damage, screen shake on hits
- Visual feedback for combat events

**Integration Pattern:**
```typescript
combatManager.checkCombatInitiation(player, enemies, (p, e) => combatRules.canKill(p, e));
combatManager.updateCombat(deltaTime);
```

### Quest System (Recently Implemented)

Modular quest framework in `src/quests/` with optional rewards system:

**Core Components:**
- `QuestManager`: Lifecycle, objective tracking, reward granting
- `QuestGiverManager`: Register NPCs, peace flags (prevent combat)
- `QuestInteraction`: Collision detection, objective progress tracking
- `QuestTrackerHUD`: Persistent on-screen objective display

**Quest Structure:**
```typescript
interface Quest {
  id: string;
  title: string;
  description: string;
  objectives: QuestObjective[]; // kill, kill_boss, gather
  rewards?: QuestReward; // Optional: minerals, gas, essence, stat bonuses
  isActive: boolean;
  isCompleted: boolean;
}
```

**Reward System:**
- Resources: minerals, gas, essence (added to PlayerUnit)
- Stat upgrades: attackBonus, armorBonus, attackSpeedBonus (applied to PlayerUpgrades permanently)
- Quest completion emits `quest_rewards_granted` event
- Level subscribes and applies rewards to player

**UI System:**
- `MessageSystem` (`src/ui/MessageSystem.ts`): Unified in-game overlay for game over, victory, quest screens
  - Pauses game automatically, handles ESC dismissal, type-based styling
- `StoryScreen` (`src/ui/StoryScreen.ts`): Separate system for between-level narratives (full-screen images)
- Quest UI helpers in `src/quests/ui/QuestHelpers.ts` (detail screen, log screen, progress bars)

**Visual Indicators:**
- `UnitVisuals` supports display modes: 'healthbar', 'quest' (! icon), 'help' (? icon), 'shop' (💰 icon), 'hide'
- Quest givers show "!" icon instead of health bar via `setDisplayMode(unit, 'quest')`
- Mode can change dynamically (quest accepted → switch to health bar)

### Visual Systems

**UnitVisuals** (`src/units/UnitVisuals.ts` - Singleton):
- Manages health bars, upgrade indicators, quest icons above units
- Display modes: healthbar (HP + upgrades), quest/help/shop icons, or hide
- Canvas-based sprites for text/icons rendered as Three.js sprites
- Update pattern: `update()` called each frame to refresh HP bars based on unit state
- Cleanup: Must `untrackUnit()` when unit dies or level ends

**UnitVisuals Usage:**
```typescript
const visuals = UnitVisuals.getInstance();
visuals.trackUnit(enemy, 'healthbar'); // Default: health bar
visuals.trackUnit(questGiver, 'quest'); // Quest icon
visuals.setDisplayMode(unit, 'healthbar'); // Switch modes dynamically
visuals.update(); // Call each frame
visuals.untrackUnit(enemy); // Cleanup on death
```

**Minimap** (`src/minimap.ts`):
- Bottom-left corner overview of game world
- Shows player, enemies, resources

### UI Systems

**MessageSystem** (`src/ui/MessageSystem.ts`):
- Unified system for ALL in-game full-screen overlays (game over, victory, quest screens)
- Semi-transparent background (shows paused game map)
- Handles pause/resume via callbacks
- Supports text or custom HTML content, configurable buttons
- Type-based styling: error (red), success (green), info (blue), log (neutral)
- ESC key dismissal support

**StoryScreen** (`src/ui/StoryScreen.ts`):
- Separate system for between-level narratives
- Full-screen images with title/subtitle text
- Shows before level initialization (defined in `LevelStoryScreens.ts`)
- Different from MessageSystem (runs between levels, not in-game)

**Control Panels:**
- `SpendingPanel`: Resource upgrades (attack, armor, absorb)
- `EvolutionsPanel`: Unit evolution paths with resource costs and mutations

### Resource & Upgrade Systems

**Resource Types:**
- Minerals: From bushes (1), trees (5), enemies
- Vespene Gas: From geysers (-5 HP/second, +10 gas/second), enemies
- Essence: From enemy kills (required for advanced evolutions)

**PlayerUpgrades** (`src/upgrades/PlayerUpgrades.ts`):
- Permanent bonuses that persist across unit morphs
- Attack damage, armor, damage absorb (shields)
- Purchase with resources via SpendingPanel

**Mutations** (`src/units/Mutations.ts`):
- Unit-specific abilities (e.g., Zergling mutations)
- Purchased with essence via EvolutionsPanel

### Game Rules

Based on `rag/rules.md` (StarCraft 2 mechanics):

**Core Mechanics:**
- Larvae can only eat bushes
- Drones can eat bushes and trees
- Zerglings+ can't eat vegetation but can fight/eat weaker units
- Vespene geysers damage (-5 HP/s) while giving gas (+10/s)
- After combat victory, winner can "eat" loser for resources

**Combat Interaction Matrix (CombatRules):**
```
          Larvae  Drone  Zergling+
Larvae     ✗       ✗       ✗      (can't fight)
Drone      ✓       ✗       ✗      (can kill Larvae)
Zergling+  ✓       ✓       ✓      (can kill all)
```

**Damage Formula:**
```
finalDamage = (baseDamage + attackUpgrade) - (armor + armorUpgrade)
finalDamage = max(finalDamage, 1) // Minimum 1 damage
```

### Event Handling & Cleanup

**Critical Pattern**: Levels manage their own event listeners and MUST clean up properly:

```typescript
// In level init()
this.keydownHandler = (event: KeyboardEvent) => { /* ... */ };
this.keyupHandler = (event: KeyboardEvent) => { /* ... */ };
this.resizeHandler = () => { /* ... */ };

window.addEventListener('keydown', this.keydownHandler);
window.addEventListener('keyup', this.keyupHandler);
window.addEventListener('resize', this.resizeHandler);

// In level cleanup()
window.removeEventListener('keydown', this.keydownHandler);
window.removeEventListener('keyup', this.keyupHandler);
window.removeEventListener('resize', this.resizeHandler);

if (this.animationFrameId) {
  cancelAnimationFrame(this.animationFrameId);
}

// Dispose THREE.js resources
this.scene.traverse((object) => {
  if (object instanceof THREE.Mesh) {
    object.geometry.dispose();
    if (Array.isArray(object.material)) {
      object.material.forEach(m => m.dispose());
    } else {
      object.material.dispose();
    }
  }
});

// Cleanup UI
this.controlPanel?.dispose();
this.minimap?.dispose();
// etc.
```

### Audio System

**AudioManager** (`src/AudioManager.ts` - Singleton):
- Manages background music and sound effects
- Use `getInstance()` to access
- Common sounds: eat fruit, bone crack, egg cracking
- Background music: Jungle theme

### Important File Paths

**Core Game Logic:**
- `src/main.ts` - Game manager, level orchestration
- `src/ZerusCarnage/ZerusCarnageLevel01.ts` - Main level implementation
- `src/ZerusCarnage/LevelManager.ts` - Level interface and base class

**Unit System:**
- `src/units/BaseUnit.ts` - Abstract unit class with SC2 stats
- `src/units/PlayerUnit.ts` - Player wrapper with resources/upgrades
- `src/units/Egg.ts` - Morphing state unit
- `src/enemies/` - Enemy unit implementations

**Combat:**
- `src/combat/CombatManager.ts` - Fight lifecycle
- `src/interactions/CombatRules.ts` - Interaction rules
- `src/combat/CombatVisuals.ts` - Visual feedback

**Quests:**
- `src/quests/QuestManager.ts` - Quest lifecycle + rewards
- `src/quests/QuestGiverManager.ts` - NPC management
- `src/quests/QuestInteraction.ts` - Collision detection
- `src/quests/ui/` - Quest UI components

**UI:**
- `src/ui/MessageSystem.ts` - Unified in-game overlays
- `src/ui/StoryScreen.ts` - Between-level narratives
- `src/ui/SpendingPanel.ts` - Upgrade purchases
- `src/ui/EvolutionsPanel.ts` - Evolution paths
- `src/ControlPanel.ts` - Main HUD

**Visuals:**
- `src/units/UnitVisuals.ts` - Health bars, icons (singleton)
- `src/minimap.ts` - World overview

**Reference:**
- `rag/rules.md` - Complete StarCraft 2 mechanics and unit stats
- `tasks/` - Implementation task documentation

## Key Considerations

### When Adding New Features

1. **Level Integration**: Modify `ZerusCarnageLevel01.ts` and ensure proper cleanup
2. **Quest System**: Use MessageSystem for overlays, QuestManager for tracking
3. **Unit Creation**: Inherit from BaseUnit, implement createModel() and getRadius()
4. **Combat Changes**: Update CombatRules for new interaction patterns
5. **UI Elements**: Use MessageSystem for in-game overlays, StoryScreen for between-level content

### Common Pitfalls

- **Memory Leaks**: Always cleanup event listeners, THREE.js resources, animation frames
- **Quest Display**: Use `setDisplayMode()` to show quest icons, remember to switch back after acceptance
- **Combat Rules**: Check CombatRules.canKill() before allowing fight initiation
- **Singleton Access**: Use `getInstance()` for UnitVisuals, AudioManager, panel classes
- **Resource Persistence**: Resources and upgrades persist across morphs via PlayerUnit/PlayerUpgrades

### Testing Checklist for New Levels

- [ ] Proper init/cleanup implementation
- [ ] Win condition defined and tested
- [ ] Story screen configured (if needed)
- [ ] Event listeners properly removed on cleanup
- [ ] THREE.js resources disposed
- [ ] Animation frame cancelled
- [ ] UI elements disposed
- [ ] Level transitions work smoothly

## Project Context

This is an experimental game built with AI assistance (see `rag/` folder). The codebase follows StarCraft 2 unit balance and mechanics closely, using authentic statistics from the game. The evolution system is inspired by Heart of the Swarm campaign mechanics.
