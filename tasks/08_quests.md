# Quest System Implementation Plan

## Architecture Overview
A modular, independent quest system that integrates seamlessly with existing game architecture. Quest givers can be enemies, bosses, or environmental objects (bushes, geysers, obstacles). Touching a quest giver pauses the game and displays quest details. The system supports multiple concurrent quests with various objective types.

## Core Components

### 1. Quest Data Structures (`src/quests/QuestTypes.ts`)

**Quest Interface:**
```typescript
interface Quest {
  id: string;
  title: string;
  description: string;
  objectives: QuestObjective[];
  isActive: boolean;
  isCompleted: boolean;
  questGiverId?: string; // Optional: ID of entity that gave quest
  rewards?: QuestReward; // Optional: Rewards given on quest completion
}
```

**Quest Reward Interface:**
```typescript
interface QuestReward {
  // Resource rewards
  minerals?: number;
  gas?: number;
  essence?: number;

  // Stat upgrade rewards (permanent bonuses)
  attackBonus?: number;      // +N attack damage
  armorBonus?: number;       // +N armor
  attackSpeedBonus?: number; // +N% attack speed (e.g., 10 = 10% faster)
}
```

**Quest Objective Types:**
```typescript
interface QuestObjective {
  type: 'kill' | 'kill_boss' | 'gather';
  description: string;
  current: number;
  target: number;
  isCompleted: boolean;
}

interface KillEnemyObjective extends QuestObjective {
  type: 'kill';
  unitType: string; // e.g., 'Larvae', 'Drone', 'Zergling'
}

interface KillBossObjective extends QuestObjective {
  type: 'kill_boss';
  bossId: string; // Unique boss identifier
}

interface GatherResourceObjective extends QuestObjective {
  type: 'gather';
  resource: 'minerals' | 'gas' | 'essence';
}
```

**Quest Giver Interface:**
```typescript
interface QuestGiver {
  entityId: string; // Unique ID for enemy/obstacle
  entityType: 'enemy' | 'obstacle' | 'boss';
  questId: string;
  isPeaceful: boolean; // If true, no combat allowed
  peacePersistent: boolean; // Peace flag persists after quest completion
}
```

**Quest State:**
```typescript
enum QuestState {
  INACTIVE = 'inactive',
  ACTIVE = 'active',
  COMPLETED = 'completed'
}
```

---

### 2. Quest Manager (`src/quests/QuestManager.ts`)

Central controller for quest system:

**Core Methods:**
- `addQuest(quest: Quest): void` - Register new quest to the system
- `activateQuest(questId: string): void` - Start tracking quest objectives
- `completeQuest(questId: string): void` - Mark quest as completed
- `updateObjective(questId: string, objectiveIndex: number, progress: number): void` - Update objective progress
- `checkCompletion(questId: string): boolean` - Verify if all objectives met
- `getActiveQuests(): Quest[]` - Return all currently active quests
- `getQuest(questId: string): Quest | null` - Get specific quest by ID
- `isQuestCompleted(questId: string): boolean` - Check quest completion status

**Event System:**
- Emit events on quest state changes: `quest_activated`, `quest_completed`, `objective_updated`, `quest_rewards_granted`
- Allow UI components to subscribe to quest updates

**Reward System:**
- Automatically grants rewards when quest completes
- Emits `quest_rewards_granted` event with reward data
- Level handles applying rewards to player (resources + stat upgrades)

**Implementation Details:**
```typescript
export class QuestManager {
  private quests: Map<string, Quest> = new Map();
  private eventListeners: Map<string, Function[]> = new Map();

  public addQuest(quest: Quest): void { ... }
  public activateQuest(questId: string): void { ... }
  public updateKillObjective(questId: string, unitType: string): void { ... }
  public updateGatherObjective(questId: string, resource: string, amount: number): void { ... }
  public checkAllObjectives(questId: string): boolean { ... }

  /**
   * Complete quest and grant rewards
   */
  public completeQuest(questId: string): void {
    const quest = this.quests.get(questId);
    if (!quest || quest.isCompleted) return;

    quest.isCompleted = true;

    // Grant rewards if quest has them
    if (quest.rewards) {
      this.emit('quest_rewards_granted', {
        questId: quest.id,
        questTitle: quest.title,
        rewards: quest.rewards
      });
    }

    this.emit('quest_completed', quest);
  }

  // Event system
  public on(event: string, callback: Function): void { ... }
  public emit(event: string, data: any): void { ... }
}
```

---

### 3. Quest Giver System (`src/quests/QuestGiverManager.ts`)

Manages quest-giving entities and peace flags:

**Core Methods:**
- `registerQuestGiver(entityId: string, entityType: string, questId: string, peaceful: boolean): void`
- `isQuestGiver(entityId: string): boolean`
- `getQuestForEntity(entityId: string): string | null`
- `isPeaceful(entityId: string): boolean`
- `setPeaceFlag(entityId: string, peaceful: boolean): void`
- `unregisterQuestGiver(entityId: string): void`

**Peace Flag System:**
- When enemy/boss is quest giver with `isPeaceful: true`, combat is disabled
- Peace persists until level end unless manually cleared
- Overrides `CombatRulesEngine` - no damage dealt to/from peaceful entities
- Visual indicator on peaceful enemies (e.g., green aura/icon)

**Implementation:**
```typescript
export class QuestGiverManager {
  private questGivers: Map<string, QuestGiver> = new Map();

  public registerQuestGiver(
    entityId: string,
    entityType: 'enemy' | 'obstacle' | 'boss',
    questId: string,
    isPeaceful: boolean = false
  ): void {
    this.questGivers.set(entityId, {
      entityId,
      entityType,
      questId,
      isPeaceful,
      peacePersistent: isPeaceful
    });
  }

  public checkQuestGiverCollision(playerId: string, entities: any[]): QuestGiver | null {
    // Check collision with quest givers
    // Return quest giver if collision detected
  }
}
```

---

### 4. Unified Message System (`src/ui/MessageSystem.ts`)

**Purpose**: Centralized system for all **in-game** full-screen overlay messages (game over, victory, quest detail, quest log). Eliminates code duplication and provides consistent pause/resume behavior.

**⚠️ Note**: `StoryScreen` system remains **separate and unchanged**. Story screens run between levels with full-screen images (no game running), while MessageSystem is for in-game overlays with semi-transparent backgrounds (game paused but visible).

**Core Architecture:**

```typescript
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
```

**CSS Styling** (add to `src/style.scss`):

```scss
// MessageSystem - Semi-transparent in-game overlay (shows paused map underneath)
// NOTE: Different from StoryScreen which uses full-screen images between levels
.message-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85); // Semi-transparent to show map
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: fadeIn 0.3s;
}

.message-content {
  background: rgba(20, 20, 20, 0.95);
  border: 3px solid #fff;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  min-width: 400px;
  max-width: 800px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.message-title {
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  margin: 0 0 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  letter-spacing: 2px;
}

.message-body {
  color: #fff;
  font-size: 18px;
  margin: 0 0 30px 0;
  line-height: 1.6;
}

.message-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.message-button {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #fff;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 1px;

  &.primary {
    background: #0066ff;
    color: #fff;
    &:hover { background: #0052cc; box-shadow: 0 0 10px rgba(0, 102, 255, 0.8); }
  }

  &.secondary {
    background: #666;
    color: #fff;
    &:hover { background: #888; }
  }

  &.danger {
    background: #ff0000;
    color: #fff;
    &:hover { background: #cc0000; box-shadow: 0 0 10px rgba(255, 0, 0, 0.8); }
  }

  &:active { transform: translateY(1px); }
}

// Type-specific styling
.message-overlay[data-type="error"] .message-content {
  border-color: #ff0000;
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
}

.message-overlay[data-type="error"] .message-title {
  color: #ff0000;
}

.message-overlay[data-type="success"] .message-content {
  border-color: #00ff00;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
}

.message-overlay[data-type="success"] .message-title {
  color: #00ff00;
}

.message-overlay[data-type="info"] .message-content {
  border-color: #00bfff;
  box-shadow: 0 0 20px rgba(0, 191, 255, 0.5);
}

.message-overlay[data-type="info"] .message-title {
  color: #00bfff;
}
```

**Usage Examples:**

```typescript
// Game Over
messageSystem.show({
  type: 'error',
  title: 'GAME OVER',
  content: 'You have been EATEN!',
  buttons: [
    {
      label: 'Restart',
      onClick: () => restartLevel(),
      style: 'danger'
    }
  ]
});

// Victory
messageSystem.show({
  type: 'success',
  title: 'VICTORY!',
  content: 'Level Complete!',
  buttons: [
    {
      label: 'Continue',
      onClick: () => nextLevel(),
      style: 'primary'
    }
  ]
});

// Quest Detail (auto-accepts)
const questContent = createQuestContentElement(quest); // Custom HTML with objectives
messageSystem.show({
  type: 'info',
  title: quest.title,
  content: questContent,
  dismissOnEsc: true,
  dismissCallback: () => {
    questManager.activateQuest(quest.id); // Auto-accept on close
  }
});

// Quest Log
const questLogContent = createQuestLogElement(questManager.getActiveQuests());
messageSystem.show({
  type: 'log',
  title: 'QUEST LOG (ESC to close)',
  content: questLogContent,
  dismissOnEsc: true
});

// Quest Completion with Rewards
messageSystem.show({
  type: 'success',
  title: 'QUEST COMPLETE!',
  content: `${quest.title}\n\nRewards:\n+50 Minerals\n+2 Attack`,
  buttons: [
    {
      label: 'OK',
      onClick: () => {},
      style: 'primary'
    }
  ]
});
```

**Benefits:**
- ✅ **No Code Duplication**: All in-game overlays use same system
- ✅ **Consistent Behavior**: Pause/resume handled centrally
- ✅ **Easy to Use**: Simple `show()` call from anywhere
- ✅ **Flexible**: Supports text or custom HTML content
- ✅ **Type-Safe**: TypeScript ensures correct usage
- ✅ **Themeable**: Type-specific styling (error, success, info, log)
- ✅ **Separate from StoryScreen**: Story screens remain independent for between-level narratives

---

### 5. Quest UI Components (Using MessageSystem)

#### Quest Detail Screen (Using MessageSystem)

**No longer a separate class** - uses `MessageSystem.show()` with quest-specific content:

**Implementation:**

```typescript
// Helper function to create quest detail content
function createQuestDetailContent(quest: Quest): HTMLElement {
  const container = document.createElement('div');
  container.className = 'quest-detail-container';

  // Description
  const description = document.createElement('p');
  description.className = 'quest-description';
  description.textContent = quest.description;
  container.appendChild(description);

  // Objectives
  const objectivesTitle = document.createElement('h3');
  objectivesTitle.textContent = 'Objectives:';
  container.appendChild(objectivesTitle);

  const objectivesList = document.createElement('ul');
  objectivesList.className = 'quest-objectives-list';
  quest.objectives.forEach(obj => {
    const li = document.createElement('li');
    li.textContent = `${obj.description} (0/${obj.target})`;
    objectivesList.appendChild(li);
  });
  container.appendChild(objectivesList);

  // Rewards (if any)
  if (quest.rewards) {
    const rewardsTitle = document.createElement('h3');
    rewardsTitle.textContent = 'Rewards:';
    container.appendChild(rewardsTitle);

    const rewardsList = document.createElement('ul');
    rewardsList.className = 'quest-rewards-list';

    if (quest.rewards.minerals) {
      const li = document.createElement('li');
      li.innerHTML = `<span class="resource-icon minerals-icon">💎</span> ${quest.rewards.minerals} Minerals`;
      rewardsList.appendChild(li);
    }
    if (quest.rewards.gas) {
      const li = document.createElement('li');
      li.innerHTML = `<span class="resource-icon gas-icon">💨</span> ${quest.rewards.gas} Vespene Gas`;
      rewardsList.appendChild(li);
    }
    if (quest.rewards.essence) {
      const li = document.createElement('li');
      li.innerHTML = `<span class="resource-icon essence-icon">✨</span> ${quest.rewards.essence} Essence`;
      rewardsList.appendChild(li);
    }
    if (quest.rewards.attackBonus) {
      const li = document.createElement('li');
      li.innerHTML = `⚔️ +${quest.rewards.attackBonus} Attack`;
      rewardsList.appendChild(li);
    }
    if (quest.rewards.armorBonus) {
      const li = document.createElement('li');
      li.innerHTML = `🛡️ +${quest.rewards.armorBonus} Armor`;
      rewardsList.appendChild(li);
    }
    if (quest.rewards.attackSpeedBonus) {
      const li = document.createElement('li');
      li.innerHTML = `⚡ +${quest.rewards.attackSpeedBonus}% Attack Speed`;
      rewardsList.appendChild(li);
    }

    container.appendChild(rewardsList);
  }

  return container;
}

// Show quest detail screen
function showQuestDetail(quest: Quest, messageSystem: MessageSystem, questManager: QuestManager): void {
  const content = createQuestDetailContent(quest);

  messageSystem.show({
    type: 'info',
    title: quest.title,
    content: content,
    dismissOnEsc: true,
    dismissCallback: () => {
      // Auto-accept quest on close
      questManager.activateQuest(quest.id);
    },
    customClass: 'quest-detail-screen'
  });
}
```

**Features:**
- Pauses game when displayed (handled by MessageSystem)
- Shows quest title prominently
- Displays quest description (supports multi-line text)
- Lists all objectives with target counts
- **Shows rewards if quest has them**
- Always auto-accepts quest on close (ESC key)

---

#### Quest Log Screen (Using MessageSystem)

**No longer a separate class** - uses `MessageSystem.show()` with quest log content:

**Features:**
- Pauses game when open (handled by MessageSystem)
- Lists all active quests
- Shows progress bars for each objective
- Color-coded: green (completed), yellow (in-progress), gray (not started)
- ESC key to close and resume game
- Empty state message if no active quests

**Layout:**
```
╔══════════════════════════════════════╗
║           QUEST LOG (ESC)            ║
╠══════════════════════════════════════╣
║ [Quest 1 Title]                      ║
║   → Kill 3 Larvae: [▓▓▓░░] 2/3      ║
║   → Gather 50 minerals: [▓▓▓▓▓] 50/50║
║   💰 Rewards: 50M, +2 ATK            ║
║                                      ║
║ [Quest 2 Title]                      ║
║   → Defeat Boss: [░░░░░] 0/1        ║
║   💰 Rewards: 100M, 50G              ║
╚══════════════════════════════════════╝
```

**Implementation:**
```typescript
// Helper function to create quest log content
function createQuestLogContent(quests: Quest[]): HTMLElement {
  const container = document.createElement('div');
  container.className = 'quest-log-container';

  if (quests.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'quest-log-empty';
    emptyMessage.textContent = 'No active quests';
    container.appendChild(emptyMessage);
    return container;
  }

  quests.forEach(quest => {
    const questBlock = document.createElement('div');
    questBlock.className = 'quest-log-item';

    // Quest title
    const title = document.createElement('h3');
    title.textContent = quest.title;
    questBlock.appendChild(title);

    // Objectives
    quest.objectives.forEach(obj => {
      const objectiveDiv = document.createElement('div');
      objectiveDiv.className = 'quest-objective';

      // Progress bar
      const progressBar = createProgressBar(obj.current, obj.target);

      // Objective text
      const text = document.createElement('span');
      text.textContent = `→ ${obj.description}: ${obj.current}/${obj.target}`;

      // Color code based on completion
      if (obj.isCompleted) {
        text.style.color = '#00ff00'; // Green
      } else if (obj.current > 0) {
        text.style.color = '#ffff00'; // Yellow
      } else {
        text.style.color = '#888888'; // Gray
      }

      objectiveDiv.appendChild(text);
      objectiveDiv.appendChild(progressBar);
      questBlock.appendChild(objectiveDiv);
    });

    // Rewards (if any)
    if (quest.rewards) {
      const rewardsDiv = document.createElement('div');
      rewardsDiv.className = 'quest-log-rewards';
      const rewardParts: string[] = [];

      if (quest.rewards.minerals) rewardParts.push(`${quest.rewards.minerals}M`);
      if (quest.rewards.gas) rewardParts.push(`${quest.rewards.gas}G`);
      if (quest.rewards.essence) rewardParts.push(`${quest.rewards.essence}E`);
      if (quest.rewards.attackBonus) rewardParts.push(`+${quest.rewards.attackBonus} ATK`);
      if (quest.rewards.armorBonus) rewardParts.push(`+${quest.rewards.armorBonus} ARM`);
      if (quest.rewards.attackSpeedBonus) rewardParts.push(`+${quest.rewards.attackSpeedBonus}% AS`);

      rewardsDiv.innerHTML = `💰 Rewards: ${rewardParts.join(', ')}`;
      questBlock.appendChild(rewardsDiv);
    }

    container.appendChild(questBlock);
  });

  return container;
}

function createProgressBar(current: number, target: number): HTMLElement {
  const barContainer = document.createElement('div');
  barContainer.className = 'progress-bar-container';

  const barFill = document.createElement('div');
  barFill.className = 'progress-bar-fill';
  const percentage = Math.min((current / target) * 100, 100);
  barFill.style.width = `${percentage}%`;

  // Color based on percentage
  if (percentage === 100) {
    barFill.style.backgroundColor = '#00ff00'; // Green
  } else if (percentage > 0) {
    barFill.style.backgroundColor = '#ffff00'; // Yellow
  } else {
    barFill.style.backgroundColor = '#888888'; // Gray
  }

  barContainer.appendChild(barFill);
  return barContainer;
}

// Show quest log screen
function showQuestLog(questManager: QuestManager, messageSystem: MessageSystem): void {
  const activeQuests = questManager.getActiveQuests();
  const content = createQuestLogContent(activeQuests);

  messageSystem.show({
    type: 'log',
    title: 'QUEST LOG (ESC to close)',
    content: content,
    dismissOnEsc: true,
    customClass: 'quest-log-screen'
  });
}
```

---

#### Quest Tracker HUD (`src/quests/ui/QuestTrackerHUD.ts`)

Persistent on-screen tracker for active quest objectives:

**Features:**
- Small overlay (top-left corner by default)
- Shows up to 3 active quest objectives
- Real-time progress updates
- Minimizable/expandable
- Auto-hides when no active quests

**Visual Example:**
```
┌─ Active Quests ──────┐
│ • Kill Larvae: 2/3   │
│ • Minerals: 45/50    │
└──────────────────────┘
```

**Styling:**
- Semi-transparent background
- Compact font size
- Position: `top: 100px, left: 20px` (below game title)
- Z-index: 1000

---

### 5. Quest-Aware Interaction System (`src/quests/QuestInteraction.ts`)

Extends existing interaction logic to handle quest givers:

**Core Responsibilities:**
- Detect collision between player and quest givers
- Trigger `QuestDetailScreen` on first contact with quest giver
- Prevent combat with peaceful quest givers (integrates with `CombatRulesEngine`)
- Track objective progress:
  - Enemy kills → update kill objectives
  - Resource collection → update gather objectives
- Notify `QuestManager` of progress updates

**Integration with CombatRulesEngine:**
```typescript
export class QuestInteraction {
  private questManager: QuestManager;
  private questGiverManager: QuestGiverManager;
  private combatRules: CombatRulesEngine;

  // Check quest giver collision (called in game loop)
  public checkQuestGiverCollision(
    playerPosition: THREE.Vector3,
    playerRadius: number,
    entities: any[]
  ): QuestGiver | null {
    // Loop through entities
    // Check if entity is quest giver
    // Calculate distance
    // If collision, return quest giver
  }

  // Override combat rules for peaceful entities
  public canAttack(attackerId: string, targetId: string): boolean {
    if (this.questGiverManager.isPeaceful(targetId)) {
      return false; // No combat with peaceful quest givers
    }
    return this.combatRules.canKill(attackerId, targetId);
  }

  // Track enemy kills for quest objectives
  public onEnemyKilled(enemyType: string): void {
    const activeQuests = this.questManager.getActiveQuests();
    for (const quest of activeQuests) {
      quest.objectives.forEach((objective, index) => {
        if (objective.type === 'kill' && objective.unitType === enemyType) {
          this.questManager.updateObjective(quest.id, index, objective.current + 1);
        }
      });
    }
  }

  // Track resource collection for quest objectives
  public onResourceGathered(resource: string, amount: number): void {
    const activeQuests = this.questManager.getActiveQuests();
    for (const quest of activeQuests) {
      quest.objectives.forEach((objective, index) => {
        if (objective.type === 'gather' && objective.resource === resource) {
          this.questManager.updateObjective(quest.id, index, objective.current + amount);
        }
      });
    }
  }
}
```

---

### 6. Quest Giver Visual Indicators (UnitVisuals Extension)

#### Requirement
Quest givers must display a **"!" icon** instead of health bar to indicate they have a quest available. The system should be generic to support future indicators ("?", "💰", etc.).

#### Architecture: Display Mode System

**Core Concept**: Extend `UnitVisuals.ts` to support multiple display modes instead of only health bars.

**New Type Definition** (`src/units/UnitVisuals.ts`):
```typescript
// Display mode for unit visual indicators
export type UnitDisplayMode =
  | 'healthbar'    // Default: HP bar + upgrade stats
  | 'quest'        // Quest available: "!" icon
  | 'help'         // Help/tutorial: "?" icon
  | 'shop'         // Shop/vendor: "💰" icon
  | 'hide';        // No visual indicator

// Extended visual element interface (replaces HPBar)
interface UnitVisualElement {
  unit: BaseUnit;
  displayMode: UnitDisplayMode;

  // Health bar components (when mode = 'healthbar')
  background?: THREE.Mesh;
  foreground?: THREE.Mesh;
  upgradeText?: THREE.Sprite;

  // Icon sprite (when mode = 'quest' | 'help' | 'shop')
  iconSprite?: THREE.Sprite;
}
```

#### Implementation Details

**1. Icon Factory Method**:
```typescript
/**
 * Create icon sprite for quest givers, help NPCs, etc.
 */
private createIconSprite(iconType: UnitDisplayMode, unit: BaseUnit): THREE.Sprite {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  // Clear canvas
  ctx.clearRect(0, 0, 256, 256);

  // Draw icon based on type
  ctx.font = 'bold 200px Arial';
  ctx.fillStyle = this.getIconColor(iconType);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const iconChar = this.getIconCharacter(iconType);
  ctx.fillText(iconChar, 128, 128);

  // Create sprite from canvas
  const texture = new THREE.CanvasTexture(canvas);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: texture,
    transparent: true
  }));

  // Position above unit (same Y offset as health bar)
  const yOffset = unit.getRadius() + 3;
  sprite.position.set(0, yOffset, 1);
  sprite.scale.set(4, 4, 1); // Icon size

  return sprite;
}

private getIconCharacter(iconType: UnitDisplayMode): string {
  switch (iconType) {
    case 'quest': return '!';
    case 'help': return '?';
    case 'shop': return '💰';
    default: return '!';
  }
}

private getIconColor(iconType: UnitDisplayMode): string {
  switch (iconType) {
    case 'quest': return '#FFFF00';  // Bright yellow (quest)
    case 'help': return '#00BFFF';   // Blue (help/tutorial)
    case 'shop': return '#FFD700';   // Gold (shop/vendor)
    default: return '#FFFFFF';       // White (fallback)
  }
}
```

**2. Modified trackUnit() Method**:
```typescript
/**
 * Start tracking a unit with specified display mode
 * @param unit - Unit to track
 * @param displayMode - Visual display type (default: 'healthbar')
 */
public trackUnit(unit: BaseUnit, displayMode: UnitDisplayMode = 'healthbar'): void {
  // Exception: Larvae don't show any visuals (too cluttered)
  if (unit.getUnitTypeName() === 'Larvae') {
    return;
  }

  // Create appropriate visual based on mode
  if (displayMode === 'healthbar') {
    this.createHPBar(unit);
  } else if (displayMode !== 'hide') {
    this.createIconDisplay(unit, displayMode);
  }
}

/**
 * Create icon display for quest givers, NPCs, etc.
 */
private createIconDisplay(unit: BaseUnit, iconType: UnitDisplayMode): void {
  if (this.visualElements.has(unit)) {
    return; // Already tracked
  }

  const iconSprite = this.createIconSprite(iconType, unit);
  unit.getModel().add(iconSprite);

  this.visualElements.set(unit, {
    unit,
    displayMode: iconType,
    iconSprite
  });
}
```

**3. New setDisplayMode() Method**:
```typescript
/**
 * Dynamically change unit's visual display mode
 * Useful for switching from quest icon to health bar after quest accepted
 */
public setDisplayMode(unit: BaseUnit, newMode: UnitDisplayMode): void {
  const currentVisual = this.visualElements.get(unit);

  if (!currentVisual) {
    // Unit not tracked yet, just track with new mode
    this.trackUnit(unit, newMode);
    return;
  }

  if (currentVisual.displayMode === newMode) {
    return; // Already in this mode, no change needed
  }

  // Remove current visual
  this.untrackUnit(unit);

  // Create new visual with new mode
  this.trackUnit(unit, newMode);
}
```

**4. Updated Cleanup Method**:
```typescript
/**
 * Stop tracking a unit - removes all visual elements and cleans up resources
 */
public untrackUnit(unit: BaseUnit): void {
  const visual = this.visualElements.get(unit);
  if (!visual) return;

  const unitModel = unit.getModel();

  // Remove health bar components (if present)
  if (visual.background) {
    unitModel.remove(visual.background);
    visual.background.geometry.dispose();
    (visual.background.material as THREE.Material).dispose();
  }
  if (visual.foreground) {
    unitModel.remove(visual.foreground);
    visual.foreground.geometry.dispose();
    (visual.foreground.material as THREE.Material).dispose();
  }
  if (visual.upgradeText) {
    unitModel.remove(visual.upgradeText);
    visual.upgradeText.material.map?.dispose();
    visual.upgradeText.material.dispose();
  }

  // Remove icon sprite (if present)
  if (visual.iconSprite) {
    unitModel.remove(visual.iconSprite);
    visual.iconSprite.material.map?.dispose();
    visual.iconSprite.material.dispose();
  }

  this.visualElements.delete(unit);
}
```

**5. Rename Internal Map**:
```typescript
// Change from:
private hpBars: Map<BaseUnit, HPBar>;

// To:
private visualElements: Map<BaseUnit, UnitVisualElement>;
```

#### Integration with Quest System

**In QuestGiverManager.ts**:
```typescript
/**
 * Register quest giver and update visual to show "!" icon
 */
public registerQuestGiver(
  enemy: BaseUnit,
  questId: string,
  unitVisuals: UnitVisuals
): void {
  const entityId = enemy.userData.id;

  // Mark as quest giver
  this.questGivers.set(entityId, {
    entityId,
    entityType: 'enemy',
    questId,
    isPeaceful: true
  });

  // Change visual to show "!" icon instead of health bar
  unitVisuals.setDisplayMode(enemy, 'quest');
}

/**
 * Called when quest is accepted - change back to health bar
 */
public onQuestAccepted(enemy: BaseUnit, unitVisuals: UnitVisuals): void {
  // Option 1: Show health bar (if enemy becomes hostile)
  unitVisuals.setDisplayMode(enemy, 'healthbar');

  // Option 2: Hide indicator entirely (if quest giver remains peaceful)
  // unitVisuals.setDisplayMode(enemy, 'hide');
}
```

**In Level (ZerusCarnageLevel01.ts)**:
```typescript
// Example 1: Enemy as quest giver
private createQuestGiverEnemy(): void {
  const questBoss = new Zergling(new THREE.Vector3(100, 100, 0), true);
  questBoss.userData.id = 'quest_boss_01';
  this.enemies.push(questBoss);

  // Track with quest icon instead of health bar
  this.unitVisuals.trackUnit(questBoss, 'quest');

  // Register with quest system
  this.questGiverManager.registerQuestGiver(
    questBoss,
    'boss_challenge',
    this.unitVisuals
  );
}

// Example 2: After quest is accepted
private onQuestAccepted(questId: string): void {
  // Find quest giver enemy
  const questGiver = this.enemies.find(e =>
    e.userData.id === this.questGiverManager.getEntityId(questId)
  );

  if (questGiver) {
    // Change from "!" icon to health bar
    this.unitVisuals.setDisplayMode(questGiver, 'healthbar');

    // Or hide indicator if staying peaceful
    // this.unitVisuals.setDisplayMode(questGiver, 'hide');
  }
}
```

#### Visual Examples

**Quest Giver Icon**:
```
     !      <- Yellow "!" icon above unit
    ███
   ██ ██    <- Enemy unit model
    ███
```

**Help NPC Icon**:
```
     ?      <- Blue "?" icon above unit
    ███
```

**Shop Vendor Icon**:
```
     💰     <- Gold coin icon above unit
    ███
```

#### Benefits of This Approach

✅ **Minimal Changes**: Only extends `UnitVisuals.ts`, doesn't break existing functionality
✅ **Generic & Reusable**: Easy to add new icon types ("?", "💰", custom images)
✅ **Flexible**: Can change display mode at runtime (`setDisplayMode`)
✅ **Clean API**: `unitVisuals.setDisplayMode(unit, 'quest')` is intuitive
✅ **Backward Compatible**: Default mode is 'healthbar', existing code unchanged
✅ **Performance**: No overhead when using default health bars
✅ **Type-Safe**: TypeScript ensures only valid display modes used

#### Implementation Checklist

**UnitVisuals.ts Changes**:
- [ ] Add `UnitDisplayMode` type definition
- [ ] Change `HPBar` interface to `UnitVisualElement` with union types
- [ ] Rename `hpBars` map to `visualElements`
- [ ] Add `createIconSprite()` method
- [ ] Add `createIconDisplay()` method
- [ ] Add `getIconCharacter()` helper
- [ ] Add `getIconColor()` helper
- [ ] Add `setDisplayMode()` public method
- [ ] Update `trackUnit()` to accept optional `displayMode` parameter
- [ ] Update `untrackUnit()` to handle icon sprite cleanup
- [ ] Update all references from `hpBars` to `visualElements`

**Quest System Integration**:
- [ ] Update `QuestGiverManager.registerQuestGiver()` to call `setDisplayMode(unit, 'quest')`
- [ ] Update quest acceptance logic to call `setDisplayMode(unit, 'healthbar')` or `'hide'`
- [ ] Add visual mode change to level quest setup examples

#### Future Extensions

**Custom Image Icons** (future enhancement):
```typescript
// Support custom image URLs for special NPCs
unitVisuals.setDisplayMode(specialNPC, 'custom', {
  imagePath: '/icons/special_quest.png',
  scale: 5
});
```

**Animated Icons** (future enhancement):
```typescript
// Support animated sprites (pulsing, rotating)
private createIconSprite(iconType: UnitDisplayMode, unit: BaseUnit): THREE.Sprite {
  // ... existing code

  // Add animation userData
  sprite.userData.animationType = 'pulse'; // or 'rotate', 'bounce'
  sprite.userData.animationSpeed = 2.0;

  return sprite;
}

// In update() method
private updateIconAnimations(deltaTime: number): void {
  this.visualElements.forEach((visual) => {
    if (visual.iconSprite?.userData.animationType === 'pulse') {
      const scale = 4 + Math.sin(Date.now() * 0.003) * 0.5;
      visual.iconSprite.scale.set(scale, scale, 1);
    }
  });
}
```

---

### 7. Quest Win Condition Integration (`src/quests/QuestWinCondition.ts`)

Extends `WinCondition` interface to support quest-based level completion:

**Win Condition Extension:**
```typescript
// Extend existing WinCondition interface
export interface WinCondition {
  type: 'minerals' | 'kills' | 'survival' | 'combo' | 'quest';
  target: number | string; // string for quest ID
  current: number;
  questId?: string; // Optional: specific quest ID to complete
}
```

**Level Integration:**
```typescript
// In BaseLevel or Level01
constructor() {
  super('quest', 0, ['Larvae', 'Drone', 'Zergling']);
  this.winCondition = {
    type: 'quest',
    target: 1,
    current: 0,
    questId: 'main_quest_01' // Specific quest must be completed
  };
}

// Check quest completion
private checkWinCondition(): void {
  if (this.winCondition.type === 'quest') {
    const quest = this.questManager.getQuest(this.winCondition.questId);
    if (quest && quest.isCompleted) {
      this.updateWinProgress(1);
    }
  }
}
```

---

## Integration Points

### Level Integration (Example: `ZerusCarnageLevel01.ts`)

**Step 1: Import Quest System**
```typescript
import { QuestManager } from '../quests/QuestManager';
import { QuestGiverManager } from '../quests/QuestGiverManager';
import { QuestInteraction } from '../quests/QuestInteraction';
import { QuestLogScreen } from '../quests/ui/QuestLogScreen';
import { QuestTrackerHUD } from '../quests/ui/QuestTrackerHUD';
```

**Step 2: Initialize in Constructor**
```typescript
private questManager!: QuestManager;
private questGiverManager!: QuestGiverManager;
private questInteraction!: QuestInteraction;
private questLogScreen!: QuestLogScreen;
private questTrackerHUD!: QuestTrackerHUD;

constructor(callbacks: LevelCallbacks) {
  super('quest', 1, ['Larvae', 'Drone', 'Zergling']);

  this.questManager = new QuestManager();
  this.questGiverManager = new QuestGiverManager();
  this.questInteraction = new QuestInteraction(
    this.questManager,
    this.questGiverManager,
    this.combatRules
  );

  // UI components
  this.questLogScreen = new QuestLogScreen(this.questManager);
  this.questTrackerHUD = new QuestTrackerHUD(this.questManager);

  this.init();
}
```

**Step 3: Create and Register Quests**
```typescript
private setupQuests(): void {
  // Create main quest
  const mainQuest: Quest = {
    id: 'tutorial_hunt',
    title: 'First Hunt',
    description: 'Prove your hunting skills by defeating Larvae and gathering resources from the jungle.',
    objectives: [
      {
        type: 'kill',
        description: 'Kill 3 Larvae',
        unitType: 'Larvae',
        current: 0,
        target: 3,
        isCompleted: false
      },
      {
        type: 'gather',
        description: 'Gather 50 minerals',
        resource: 'minerals',
        current: 0,
        target: 50,
        isCompleted: false
      }
    ],
    isActive: false,
    isCompleted: false
  };

  this.questManager.addQuest(mainQuest);

  // Register a bush as quest giver
  const questBushId = 'quest_bush_01';
  this.questGiverManager.registerQuestGiver(
    questBushId,
    'obstacle',
    'tutorial_hunt',
    false // Not peaceful (it's just a bush)
  );

  // Store bush ID in userData when creating bush
  // this.bushes[0].userData.questGiverId = questBushId;
}
```

**Step 4: Handle Quest Giver Collisions in Game Loop**
```typescript
private handleQuestGiverInteraction(): void {
  const playerPos = this.playerUnit.getPosition();
  const playerRadius = this.playerUnit.getRadius();

  // Check collision with bushes (potential quest givers)
  for (const bush of this.bushes) {
    const bushId = bush.userData.questGiverId;
    if (bushId && this.questGiverManager.isQuestGiver(bushId)) {
      const distance = playerPos.distanceTo(new THREE.Vector3(bush.position.x, bush.position.y, 0));

      if (distance < playerRadius + 1) {
        const questId = this.questGiverManager.getQuestForEntity(bushId);
        const quest = this.questManager.getQuest(questId);

        if (quest && !quest.isActive && !quest.isCompleted) {
          // Show quest detail screen
          this.showQuestDetailScreen(quest);
          // Unregister so quest is only offered once
          this.questGiverManager.unregisterQuestGiver(bushId);
        }
      }
    }
  }

  // Check collision with enemies (peaceful quest givers)
  for (const enemy of this.enemies) {
    const enemyId = enemy.userData?.id;
    if (enemyId && this.questGiverManager.isQuestGiver(enemyId)) {
      if (this.questGiverManager.isPeaceful(enemyId)) {
        const distance = playerPos.distanceTo(enemy.getPosition());
        if (distance < playerRadius + enemy.getRadius()) {
          const questId = this.questGiverManager.getQuestForEntity(enemyId);
          const quest = this.questManager.getQuest(questId);

          if (quest && !quest.isActive && !quest.isCompleted) {
            this.showQuestDetailScreen(quest);
          }
        }
      }
    }
  }
}

private showQuestDetailScreen(quest: Quest): void {
  // Pause game
  this.animationFrameId && cancelAnimationFrame(this.animationFrameId);

  // Show quest detail screen
  const questDetailScreen = new QuestDetailScreen(
    quest,
    (questId: string) => {
      this.questManager.activateQuest(questId);
      questDetailScreen.dispose();
      this.animate(); // Resume game
    },
    () => {
      questDetailScreen.dispose();
      this.animate(); // Resume game
    }
  );
}
```

**Step 5: Track Objective Progress**
```typescript
// In combat callback when enemy dies
onEnemyDeath: (enemy, reward) => {
  const enemyType = enemy.getUnitTypeName();
  this.questInteraction.onEnemyKilled(enemyType);
  // ... existing reward logic
}

// In resource collection
private eatBush(bush: THREE.Group): void {
  const mineralValue = bush.userData.mineralValue || 1;
  this.playerUnit.addMinerals(mineralValue);

  // Notify quest system
  this.questInteraction.onResourceGathered('minerals', mineralValue);

  // ... existing bush eating logic
}
```

**Step 6: Keyboard Handler for Quest Log (J Key)**
```typescript
private setupKeyboardHandlers(): void {
  this.keydownHandler = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();

    // ... existing WASD handlers

    // Quest log toggle
    if (key === 'j') {
      this.toggleQuestLog();
    }

    // ... existing handlers
  };

  window.addEventListener('keydown', this.keydownHandler);
}

private toggleQuestLog(): void {
  if (this.questLogScreen.isVisible()) {
    this.questLogScreen.hide();
    this.animate(); // Resume game
  } else {
    // Pause game
    this.animationFrameId && cancelAnimationFrame(this.animationFrameId);
    this.questLogScreen.show();
  }
}
```

**Step 7: Check Quest Win Condition**
```typescript
private checkQuestWinCondition(): void {
  if (this.winCondition.type === 'quest' && this.winCondition.questId) {
    const quest = this.questManager.getQuest(this.winCondition.questId);

    if (quest && quest.isCompleted && !this.hasWon) {
      this.hasWon = true;
      this.updateWinProgress(1); // Trigger victory
    }
  }
}

// Call in animate loop
private animate(): void {
  // ... existing animation logic

  this.checkQuestWinCondition();

  // ... rest of animation loop
}
```

**Step 8: Cleanup**
```typescript
public cleanup(): void {
  // ... existing cleanup

  this.questManager?.dispose?.();
  this.questGiverManager?.dispose?.();
  this.questLogScreen?.dispose?.();
  this.questTrackerHUD?.dispose?.();
}
```

---

### Enemy Integration

**Peaceful Quest Giver Enemy Example:**
```typescript
// Create boss enemy as quest giver
const bossEnemy = new Zergling(new THREE.Vector3(100, 100, 0), true); // miniboss
bossEnemy.userData.id = 'boss_zergling_01';

// Register as peaceful quest giver
this.questGiverManager.registerQuestGiver(
  'boss_zergling_01',
  'boss',
  'defeat_the_champion',
  true // Peaceful until quest accepted
);

// In combat system, check peace flag
if (this.questGiverManager.isPeaceful(enemy.userData.id)) {
  return; // Skip combat logic
}
```

**Visual Peace Indicator:**
```typescript
// Add green aura to peaceful enemies
private addPeaceIndicator(enemy: BaseUnit): void {
  const auraGeometry = new THREE.RingGeometry(3, 3.5, 16);
  const auraMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide
  });
  const aura = new THREE.Mesh(auraGeometry, auraMaterial);
  aura.rotation.x = Math.PI / 2;
  enemy.getModel().add(aura);
}
```

---

### Resource Collection Integration

**Hook into Existing Collection Logic:**
```typescript
// Minerals
private collectMinerals(amount: number): void {
  this.playerUnit.addMinerals(amount);
  this.questInteraction.onResourceGathered('minerals', amount);
}

// Vespene gas
private collectGas(amount: number): void {
  this.playerUnit.addGas(amount);
  this.questInteraction.onResourceGathered('gas', amount);
}

// Essence (from kills)
private collectEssence(amount: number): void {
  this.playerUnit.addEssence(amount);
  this.questInteraction.onResourceGathered('essence', amount);
}
```

---

## Implementation Steps (Execution Order)

### Phase 1: Core Data Structures
1. Create `src/quests/QuestTypes.ts` - Define all interfaces and types (Quest, QuestReward, QuestObjective, QuestGiver, QuestState)
2. Create `src/quests/QuestManager.ts` - Implement quest tracking logic with reward system
3. Create `src/quests/QuestGiverManager.ts` - Implement quest giver registration and peace flags

### Phase 2: Unified Message System
4. **Create `src/ui/MessageSystem.ts`** - Centralized full-screen overlay system:
   - Implement MessageSystem class with pause/resume callbacks
   - Support multiple message types (error, success, info, log, story)
   - Add button system with configurable styles
   - ESC key handler for dismissible messages
5. **Add CSS styles to `src/style.scss`**:
   - `.message-overlay` and `.message-content` base styles
   - `.message-title`, `.message-body`, `.message-buttons` styles
   - Type-specific styling for error/success/info/log
   - Progress bar styles for quest objectives
   - Quest-specific styles (quest-detail-container, quest-log-container)

### Phase 3: Quest UI Helper Functions
6. Create quest UI helper functions (in `src/quests/ui/` folder):
   - `createQuestDetailContent()` - Builds quest detail HTML with objectives and rewards
   - `createQuestLogContent()` - Builds quest log HTML with progress bars and rewards
   - `createProgressBar()` - Creates progress bar elements
   - `showQuestDetail()` - Wrapper to show quest detail via MessageSystem
   - `showQuestLog()` - Wrapper to show quest log via MessageSystem
7. Create `src/quests/ui/QuestTrackerHUD.ts` - Persistent on-screen tracker (unchanged)

### Phase 4: Visual Indicators System
8. **Extend `src/units/UnitVisuals.ts`** - Quest giver icon support:
   - Add `UnitDisplayMode` type definition
   - Change `HPBar` to `UnitVisualElement` interface
   - Rename `hpBars` map to `visualElements`
   - Add `createIconSprite()`, `createIconDisplay()`, `getIconCharacter()`, `getIconColor()` methods
   - Add `setDisplayMode()` public method
   - Update `trackUnit()` to accept optional `displayMode` parameter
   - Update `untrackUnit()` to handle icon sprite cleanup
   - Update all internal references

### Phase 5: Interaction System
9. Create `src/quests/QuestInteraction.ts` - Collision detection and objective tracking
10. Extend `CombatRulesEngine` or create wrapper to respect peace flags

### Phase 6: Level Integration
11. **Initialize MessageSystem in Level**:
    - Create MessageSystem instance with pause/resume callbacks
    - Pass to quest UI helpers
12. **Replace existing game over/victory UI** with MessageSystem calls
13. Extend `WinCondition` interface in `src/ZerusCarnage/LevelManager.ts` to support quest type
14. Create example quests in `ZerusCarnageLevel01.ts` (with and without rewards)
15. Register quest givers (bush, enemy, boss examples) with visual indicators
16. Add quest giver collision detection in game loop
17. Wire up objective tracking to existing systems (combat, resource collection)
18. **Subscribe to `quest_rewards_granted` event** and apply rewards to player:
    - Add minerals/gas/essence to PlayerUnit
    - Apply stat bonuses to PlayerUpgrades (attack, armor, attack speed)
    - Show quest completion message with rewards via MessageSystem
19. Add 'J' key handler for quest log (calls `showQuestLog()`)
20. Implement quest-based win condition check
21. Wire up `setDisplayMode()` calls when quests are accepted/completed

### Phase 7: Testing & Polish
22. Test quest lifecycle: offer → accept → track → complete → rewards → win
23. Test peace flag system with enemy quest givers
24. Test multiple concurrent quests
25. Test quest log UI (J key toggle) with rewards display
26. Test quest giver "!" icon display and mode switching
27. Test quest rewards: resources and stat upgrades
28. Test MessageSystem with game over/victory screens
29. Visual polish: icon animations (optional), progress bars, transitions

---

## Example Quest Configurations

### Quest 1: Tutorial Hunt (Bush Quest Giver) - WITH REWARDS
```typescript
{
  id: 'tutorial_hunt',
  title: 'First Hunt',
  description: 'The jungle provides for those who prove worthy. Gather resources and defeat prey to begin your evolution.',
  objectives: [
    { type: 'kill', description: 'Defeat 3 Larvae', unitType: 'Larvae', target: 3, current: 0, isCompleted: false },
    { type: 'gather', description: 'Collect 50 minerals', resource: 'minerals', target: 50, current: 0, isCompleted: false }
  ],
  rewards: {
    minerals: 50,
    attackBonus: 1 // +1 attack permanently
  },
  isActive: false,
  isCompleted: false
}
```

### Quest 2: The Champion's Challenge (Boss Quest Giver) - WITH REWARDS
```typescript
{
  id: 'champion_challenge',
  title: 'The Champion\'s Challenge',
  description: 'A powerful Zergling challenges you to prove your strength. Evolve and face them in combat.',
  objectives: [
    { type: 'kill_boss', description: 'Defeat the Champion', bossId: 'boss_zergling_01', target: 1, current: 0, isCompleted: false }
  ],
  rewards: {
    minerals: 100,
    gas: 50,
    attackBonus: 2,
    armorBonus: 1
  },
  isActive: false,
  isCompleted: false,
  questGiverId: 'boss_zergling_01' // Same entity gives and is objective
}
```

### Quest 3: Resource Extraction (Geyser Quest Giver) - WITH REWARDS
```typescript
{
  id: 'vespene_extraction',
  title: 'Vespene Extraction',
  description: 'The geysers hold valuable gas. Extract vespene to fuel your evolution.',
  objectives: [
    { type: 'gather', description: 'Extract 100 vespene gas', resource: 'gas', target: 100, current: 0, isCompleted: false },
    { type: 'gather', description: 'Collect 20 essence', resource: 'essence', target: 20, current: 0, isCompleted: false }
  ],
  rewards: {
    attackSpeedBonus: 15 // +15% attack speed
  },
  isActive: false,
  isCompleted: false
}
```

### Quest 4: Simple Collection Quest - NO REWARDS
```typescript
{
  id: 'gather_basics',
  title: 'Gather Basic Resources',
  description: 'Collect minerals from the jungle to survive.',
  objectives: [
    { type: 'gather', description: 'Collect 25 minerals', resource: 'minerals', target: 25, current: 0, isCompleted: false }
  ],
  // No rewards field - quest has no rewards
  isActive: false,
  isCompleted: false
}
```

---

## File Structure Summary

```
src/ui/
├── MessageSystem.ts           # ⭐ NEW: Unified in-game overlay system
└── StoryScreen.ts             # ⚠️ UNCHANGED: Runs between levels (separate system)

src/quests/
├── QuestTypes.ts              # Core interfaces and types (Quest, QuestReward, etc.)
├── QuestManager.ts            # Quest lifecycle management + reward system
├── QuestGiverManager.ts       # Quest giver registration and peace flags
├── QuestInteraction.ts        # Collision detection and objective tracking
└── ui/
    ├── QuestHelpers.ts        # ⭐ NEW: Helper functions for quest UI
    │                          #   - createQuestDetailContent()
    │                          #   - createQuestLogContent()
    │                          #   - createProgressBar()
    │                          #   - showQuestDetail()
    │                          #   - showQuestLog()
    └── QuestTrackerHUD.ts     # Persistent on-screen objective tracker
```

**Integration files to modify:**
- `src/ui/MessageSystem.ts` - **⭐ NEW: Create unified in-game message overlay system**
- `src/units/UnitVisuals.ts` - **Add display mode system for quest giver icons**
- `src/ZerusCarnage/LevelManager.ts` - Extend WinCondition interface
- `src/ZerusCarnage/ZerusCarnageLevel01.ts` - Quest integration + reward handling
- `src/interactions/CombatRules.ts` - Respect peace flags (or create wrapper)
- `src/style.scss` - **Add MessageSystem + quest UI styles**

**⚠️ Files NOT to modify:**
- `src/ui/StoryScreen.ts` - **Leave unchanged** (separate system for between-level narratives)

---

## Design Principles

1. **Modularity**: Quest system is self-contained in `src/quests/` folder
2. **Independence**: Can be imported and used without modifying core game logic
3. **Extensibility**: Easy to add new objective types, quest giver types, or reward types
4. **⭐ UI Unification**: **MessageSystem eliminates code duplication** across all **in-game** full-screen overlays (game over, victory, quests)
5. **⚠️ UI Separation**: **StoryScreen remains separate** - it runs between levels with full-screen images, while MessageSystem is for in-game paused overlays
6. **Peace Flag System**: Clean separation between quest givers and combat targets
7. **Event-Driven**: Quest updates emit events for UI reactivity
8. **⭐ Optional Rewards**: Quests can have rewards (resources + stat upgrades) or no rewards
9. **Clean Integration**: Minimal changes to existing codebase (hooks in specific places)

---

## Technical Notes

### Collision Detection for Quest Givers
- Use same collision logic as existing enemy/resource interaction
- Check distance: `playerPos.distanceTo(entityPos) < playerRadius + entityRadius`
- Run check every frame in game loop
- Trigger quest screen on first collision, then unregister or mark as "seen"

### Pause/Resume Game
- Quest screens pause by calling `cancelAnimationFrame(this.animationFrameId)`
- Resume by calling `this.animate()` when screen closes
- Same pattern as existing game-over screen

### Multiple Quests
- Quest manager supports unlimited concurrent quests
- Quest tracker HUD shows top 3 active objectives
- Quest log (J key) shows all active quests

### Quest Persistence
- Currently: Quests reset on level restart (in-memory only)
- Future: Could use localStorage to persist quest state between sessions

### Performance Considerations
- Quest giver collision checks run every frame but early-exit on non-quest entities
- Peace flag lookup is O(1) Map lookup
- Objective updates are event-driven, not polled

### Quest Giver Visual Indicators
- Quest givers show "!" icon instead of health bar using `UnitVisuals.setDisplayMode(unit, 'quest')`
- Icon rendering uses canvas-based sprite (same technique as upgrade indicators)
- Display mode can change dynamically at runtime (quest accepted → switch to health bar)
- Generic system supports multiple icon types: "!" (quest), "?" (help), "💰" (shop)
- Zero performance impact when using default health bar mode (backward compatible)

### Quest Rewards System
- Rewards are optional (`rewards?: QuestReward`)
- Resources: minerals, gas, essence (added to PlayerUnit immediately)
- Stat upgrades: attackBonus, armorBonus, attackSpeedBonus (applied to PlayerUpgrades permanently)
- Quest completion emits `quest_rewards_granted` event with reward data
- Level subscribes to event and applies rewards to player
- MessageSystem shows quest completion message with reward details

### Unified Message System
- **Replaces in-game overlay UI** (game over, victory screens, quest screens)
- **Semi-transparent background** shows paused game map underneath
- Handles pause/resume automatically via callbacks
- Supports custom HTML content or plain text
- Type-based styling (error=red, success=green, info=blue, log=neutral)
- Configurable buttons with onClick handlers
- ESC key support for dismissible messages
- Can be called from anywhere in the game with simple `messageSystem.show()` call
- **⚠️ Does NOT replace StoryScreen** - story screens run between levels with full-screen images

---

## Success Criteria

### Core Quest System
✅ Quest can be offered by bush, enemy, or boss
✅ **Quest givers display "!" icon instead of health bar**
✅ **Display mode switches from icon to health bar when quest accepted**
✅ Touching quest giver opens full-screen quest detail overlay
✅ Quest detail screen pauses game and shows title, description, objectives
✅ Peace flag prevents combat with quest giver enemies
✅ Peace persists after quest completion until level end
✅ Multiple quests can be active simultaneously
✅ 'J' key opens quest log showing all active quests
✅ Quest log pauses game, ESC resumes
✅ Objectives track kills, boss kills, and resource gathering
✅ Level win condition can require specific quest completion
✅ Quest system is modular and independent from core codebase

### Visual Indicators
✅ **UnitVisuals display mode system is generic (supports "!", "?", "💰", etc.)**
✅ **Quest giver icon appears above unit, replacing health bar**
✅ **Icon color and symbol configurable per mode**

### Quest Rewards System
✅ **⭐ Quests can have optional rewards (minerals, gas, essence, stat upgrades)**
✅ **⭐ Quest detail screen shows potential rewards**
✅ **⭐ Quest log displays rewards for each quest**
✅ **⭐ Quest completion automatically grants rewards**
✅ **⭐ Resources added to PlayerUnit immediately**
✅ **⭐ Stat bonuses (attack, armor, attack speed) applied permanently**
✅ **⭐ Quest completion message shows granted rewards**

### Unified Message System
✅ **⭐ MessageSystem replaces game over/victory UI**
✅ **⭐ All full-screen overlays use unified system**
✅ **⭐ Pause/resume handled centrally**
✅ **⭐ Type-based styling (error, success, info, log)**
✅ **⭐ Supports custom HTML content and buttons**
✅ **⭐ ESC key dismissal works consistently**
✅ **⭐ Can be called from anywhere with single function call**



