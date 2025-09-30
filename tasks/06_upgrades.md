# Permanent Upgrade System Implementation Plan

## Overview
Implement a **permanent upgrade system** for Attack and Armor that persists across all unit morphs, plus a **Health Spending option** to heal missing HP. Players spend minerals and gas to permanently enhance their combat capabilities. Attack and Armor upgrades are player-wide and apply to the current unit regardless of morph changes.

## Key Requirements
- **2 Permanent Upgrades**: Attack, Armor (persist across morphs)
- **1 Spending Option**: Health (only heals missing HP, doesn't inflate max HP)
- **Combat Integration**: Every hit accounts for upgrade bonuses
- **UI Section**: New "Spending" panel under Resources section
- **Cost Scaling**:
  - **Attack**: 100M+100G for +1, 150M+150G for +2, 200M+200G for +3, etc. (+50 per level)
  - **Armor**: 150M+150G for +1, 200M+200G for +2, 250M+250G for +3, etc. (+50 per level)
  - **Health Spending**: 1 Mineral per 1 HP healed (no gas cost, can only heal up to max HP)

## Architecture Design

### 1. Player Upgrade State (`src/upgrades/PlayerUpgrades.ts`)
**New Class**: Central upgrade manager that stores permanent upgrades

```typescript
export class PlayerUpgrades {
  private attackLevel: number = 0;
  private armorLevel: number = 0;

  // Getters
  public getAttackLevel(): number
  public getArmorLevel(): number

  public getAttackBonus(): number {
    return this.attackLevel; // Each level = +1 damage
  }

  public getArmorBonus(): number {
    return this.armorLevel; // Each level = +1 armor
  }

  // Upgrade methods
  public upgradeAttack(): void
  public upgradeArmor(): void

  // Cost calculation
  public getAttackUpgradeCost(): { minerals: number; gas: number }
  public getArmorUpgradeCost(): { minerals: number; gas: number }
}
```

**Cost Formulas**:
- Attack: `{ minerals: 100 + (level * 50), gas: 100 + (level * 50) }`
- Armor: `{ minerals: 150 + (level * 50), gas: 150 + (level * 50) }`

### 2. Integrate with PlayerUnit (`src/units/PlayerUnit.ts`)
**Add to PlayerUnit class**:
```typescript
export class PlayerUnit {
  private upgrades: PlayerUpgrades; // NEW: Store permanent upgrades

  constructor(initialUnit: BaseUnit, unitType: string) {
    // existing code...
    this.upgrades = new PlayerUpgrades();
  }

  // NEW: Upgrade accessors
  public getUpgrades(): PlayerUpgrades {
    return this.upgrades;
  }

  // NEW: Get effective stats (base + upgrades)
  public getEffectiveDamage(): number {
    return this.currentUnit.getDamage() + this.upgrades.getAttackBonus();
  }

  public getEffectiveArmor(): number {
    return this.currentUnit.getArmor() + this.upgrades.getArmorBonus();
  }

  public getCurrentHP(): number {
    return this.currentUnit.getCurrentHP();
  }

  public getMaxHP(): number {
    return this.currentUnit.getHitPoints(); // Natural max HP only, no bonuses
  }
}
```

**Critical**: When morphing (`morphInto()` method), the `upgrades` object is **NOT recreated**, so it persists automatically.

### 3. Update Combat System (`src/combat/CombatManager.ts`)

**Modify `calculateDamage()` method** (currently line 164-169):

```typescript
// BEFORE:
private calculateDamage(attacker: BaseUnit, defender: BaseUnit): number {
  const baseDamage = attacker.getDamage();
  const armor = defender.getArmor();
  const damage = Math.max(1, baseDamage - armor);
  return damage;
}

// AFTER:
private calculateDamage(
  attacker: BaseUnit,
  defender: BaseUnit,
  attackerUpgrades?: PlayerUpgrades,
  defenderUpgrades?: PlayerUpgrades
): number {
  const baseDamage = attacker.getDamage();
  const attackBonus = attackerUpgrades?.getAttackBonus() ?? 0;

  const baseArmor = defender.getArmor();
  const armorBonus = defenderUpgrades?.getArmorBonus() ?? 0;

  const damage = Math.max(1, (baseDamage + attackBonus) - (baseArmor + armorBonus));
  return damage;
}
```

**Update all `calculateDamage()` calls** in `update()` method:
- When player attacks: Pass `playerUnit.getUpgrades()` for attacker
- When enemy attacks: Pass `playerUnit.getUpgrades()` for defender
- Enemies don't have upgrades (pass `undefined`)

### 4. Health Spending Implementation

**Concept**: Health spending is NOT an upgrade - it only heals missing HP

**Characteristics**:
- Does NOT increase max HP
- Can only heal up to the unit's natural max HP
- Cost: 1 Mineral per 1 HP healed
- Button disabled when at full health

**Implementation**:
```typescript
// In ZerusCarnageLevel01.ts
private handleHealthSpending(): void {
  const currentUnit = this.playerUnit.getCurrentUnit();
  const currentHP = currentUnit.getCurrentHP();
  const maxHP = currentUnit.getHitPoints(); // Natural max HP (no bonus)
  const missingHP = maxHP - currentHP;

  if (missingHP <= 0) {
    // Already at full health, do nothing
    return;
  }

  // Cost is 1M per HP
  const currentMinerals = this.playerUnit.getMinerals();
  if (currentMinerals >= 1) {
    // Heal all missing HP if player has enough minerals
    const healAmount = Math.min(missingHP, currentMinerals);

    // Deduct minerals
    this.playerUnit.setMinerals(currentMinerals - healAmount);

    // Heal unit (negative damage = heal)
    currentUnit.takeDamage(-healAmount);
  }
}
```


### 5. UI Implementation (`src/ui/SpendingPanel.ts`)

**New Component**: Spending Panel with 3 upgrade buttons

```typescript
export interface SpendingCallbacks {
  onUpgradeAttack: () => void;
  onUpgradeArmor: () => void;
  onSpendHealth: () => void;
}

export class SpendingPanel {
  private container: HTMLElement;
  private callbacks: SpendingCallbacks;

  // Button elements
  private attackButton: HTMLButtonElement;
  private armorButton: HTMLButtonElement;
  private healButton: HTMLButtonElement;

  constructor(callbacks: SpendingCallbacks) {
    this.callbacks = callbacks;
    this.setupSpendingPanel();
  }

  private setupSpendingPanel(): void {
    // Create section under Resources in ControlPanel
    // Title: "Spending"
    // 3 buttons with icons:
    //   - Attack: ⚔️ or 🗡️ (claw icon)
    //   - Armor: 🛡️ (carapace icon)
    //   - Heal: ❤️ (heal icon, only enabled when damaged)
  }

  public updateButtons(
    currentMinerals: number,
    currentGas: number,
    upgrades: PlayerUpgrades,
    currentHP: number,
    maxHP: number
  ): void {
    // Calculate costs for next level
    const attackCost = upgrades.getAttackUpgradeCost();
    const armorCost = upgrades.getArmorUpgradeCost();
    const missingHP = maxHP - currentHP;

    // Update button text to show level and cost
    // Example: "⚔️ +1 ATK (100M/100G)" or "⚔️ +2 ATK (150M/150G)"

    // Disable buttons if not enough resources
    this.attackButton.disabled = (currentMinerals < attackCost.minerals || currentGas < attackCost.gas);
    this.armorButton.disabled = (currentMinerals < armorCost.minerals || currentGas < armorCost.gas);

    // Disable heal button if at full HP or no minerals
    this.healButton.disabled = (missingHP <= 0 || currentMinerals < 1);
  }

  public dispose(): void {
    // Cleanup DOM elements
  }
}
```

**Visual Design**:
```
┌─ Resources ──────────────┐
│ ♦♦ 250  ●○ 150           │
├─ Spending ───────────────┤
│ [⚔️ +1 ATK]  100M / 100G │
│ [🛡️ +1 ARM]  150M / 150G │
│ [❤️ HEAL  ]   1M  /  HP  │
└──────────────────────────┘
```

### 6. Integrate into ControlPanel (`src/ControlPanel.ts`)

**Modify `createResourceSection()`**:
- After creating resource display, add spending panel
- Pass callbacks that call level's upgrade handlers

**Alternative**: Create separate section:
```typescript
private createSpendingSection(): HTMLElement {
  // Create spending panel
  return this.spendingPanel.getContainer();
}
```

### 7. Level Integration (`src/ZerusCarnage/ZerusCarnageLevel01.ts`)

**Add upgrade handlers**:
```typescript
export default class ZerusCarnageLevel01 extends BaseLevel {
  private spendingPanel!: SpendingPanel;

  // In init():
  this.setupSpendingPanel();

  private setupSpendingPanel() {
    const callbacks: SpendingCallbacks = {
      onUpgradeAttack: () => this.handleUpgradeAttack(),
      onUpgradeArmor: () => this.handleUpgradeArmor(),
      onSpendHealth: () => this.handleHealthSpending()
    };
    this.spendingPanel = new SpendingPanel(callbacks);
  }

  private handleUpgradeAttack(): void {
    const upgrades = this.playerUnit.getUpgrades();
    const cost = upgrades.getAttackUpgradeCost();

    // Check if player has enough resources
    if (this.playerUnit.getMinerals() >= cost.minerals &&
        this.playerUnit.getGas() >= cost.gas) {
      // Deduct resources
      this.playerUnit.setMinerals(this.playerUnit.getMinerals() - cost.minerals);
      this.playerUnit.setGas(this.playerUnit.getGas() - cost.gas);

      // Apply upgrade
      upgrades.upgradeAttack();

      // Play sound effect
      // this.audioManager.playUpgradeSound();

      // Update UI
      this.updateUpgradeUI();
    }
  }

  // Similar for handleUpgradeArmor()
  // Note: handleHealthSpending() is different - see Section 4

  private updateUpgradeUI(): void {
    const resources = this.playerUnit.getResources();
    const upgrades = this.playerUnit.getUpgrades();
    const currentHP = this.playerUnit.getCurrentHP();
    const maxHP = this.playerUnit.getMaxHP();
    this.spendingPanel.updateButtons(resources.minerals, resources.gas, upgrades, currentHP, maxHP);
  }

  // Call updateUpgradeUI() in animate() loop after resource updates
}
```

**Update Combat Manager Calls**:
```typescript
// In initCombatSystem() callbacks:
this.combatManager = new CombatManager(
  combatCallbacks,
  this.playerUnit.getUpgrades() // Pass player upgrades to combat manager
);

// Or pass upgrades in update() calls:
this.combatManager.update(
  deltaTime,
  this.playerUnit.getUpgrades() // Pass to combat system
);
```

## Implementation Steps (Priority Order)

### Phase 1: Core Upgrade System
1. ✅ Create `src/upgrades/PlayerUpgrades.ts` with upgrade state and cost formulas
2. ✅ Add `PlayerUpgrades` instance to `PlayerUnit.ts`
3. ✅ Add `getEffectiveDamage()`, `getEffectiveArmor()` to `PlayerUnit`

### Phase 2: Combat Integration
4. ✅ Modify `CombatManager.calculateDamage()` to accept and apply upgrade bonuses
5. ✅ Update all `calculateDamage()` call sites to pass player upgrades
6. ✅ Test combat damage with upgrades (+1 attack should increase damage by 1)
7. ✅ Test armor upgrades reduce incoming damage correctly

### Phase 3: Health Spending System
8. ✅ Implement health spending that heals missing HP
9. ✅ Ensure HP cannot exceed natural max HP
10. ✅ Disable heal button when at full health

### Phase 4: UI Implementation
11. ✅ Create `src/ui/SpendingPanel.ts` component
12. ✅ Design button layout with icons (⚔️ 🛡️ ❤️)
13. ✅ Show current level and next level cost on each button
14. ✅ Disable buttons when insufficient resources
15. ✅ Add tooltips explaining each upgrade

### Phase 5: Level Integration
16. ✅ Integrate `SpendingPanel` into `ControlPanel` or as separate section
17. ✅ Add upgrade handler methods to `ZerusCarnageLevel01`
18. ✅ Deduct resources on upgrade purchase
19. ✅ Update UI every frame to reflect current resources/levels
20. ✅ Add sound effects for upgrades (optional)

### Phase 6: Testing & Polish
21. ✅ Test upgrade persistence across morphs (Larvae → Drone → Zergling)
22. ✅ Verify combat damage calculations with various upgrade levels
23. ✅ Test edge cases (not enough resources, healing at full HP, healing during combat)
24. ✅ Balance cost scaling (ensure progression feels good)
25. ✅ Add visual feedback (flash, particle effect on upgrade purchase)

## Persistence Verification Test Case

**Test Scenario**:
1. Start as Larvae (25 HP, 0 damage, 0 armor)
2. Buy +1 Attack (100M/100G) → Player has +1 attack
3. Morph to Drone (40 HP, 5 damage, 0 armor)
   - **Expected**: Drone has 6 damage (5 base + 1 upgrade) ✅
4. Buy +1 Armor (150M/150G) → Player has +1 attack, +1 armor
5. Morph to Zergling (35 HP, 10 damage, 0 armor)
   - **Expected**: Zergling has 11 damage, 1 armor ✅
6. Take damage in combat (35 HP → 20 HP)
7. Buy healing (15M) → Heal back to 35 HP (max for Zergling)
8. Morph back to Drone
   - **Expected**: Drone has 6 damage, 1 armor, 40 HP (natural max) ✅

## Combat Calculation Examples

**Example 1: Player with +2 Attack vs Enemy with 0 Armor**
- Player Zergling: 10 base damage + 2 upgrade = **12 total damage**
- Enemy Drone: 0 armor
- Damage dealt: `max(1, 12 - 0)` = **12 damage** ✅

**Example 2: Enemy with 5 Damage vs Player with +3 Armor**
- Enemy Zergling: 10 damage
- Player Drone: 0 base armor + 3 upgrade = **3 total armor**
- Damage taken: `max(1, 10 - 3)` = **7 damage** ✅

**Example 3: Player with +2 Attack vs Enemy with 2 Armor, Player has +1 Armor**
- Player attacks enemy:
  - Player damage: 10 base + 2 upgrade = 12
  - Enemy armor: 2
  - Damage dealt: `max(1, 12 - 2)` = **10 damage** ✅
- Enemy attacks player:
  - Enemy damage: 10
  - Player armor: 0 base + 1 upgrade = 1
  - Damage taken: `max(1, 10 - 1)` = **9 damage** ✅

## UI/UX Considerations

### Visual Feedback on Upgrade
- ✨ Flash effect on player unit when upgrade purchased
- 📊 Briefly show "+1 ATK" floating text above player
- 🔊 Satisfying "level up" sound effect
- ⚡ Green glow animation on upgrade button when clicked

### Button States
- **Enabled**: Green glow, clickable
- **Disabled**: Grayed out, shows cost in red
- **Hover**: Scale up slightly, show tooltip
- **Click**: Satisfying click animation, particle burst

### Information Display
```
┌─ Spending ─────────────────────────┐
│ ⚔️  Attack Lv.2  [+1] 150M / 150G  │
│     Next: +1 damage per hit        │
│                                    │
│ 🛡️  Armor Lv.1   [+1] 200M / 200G  │
│     Next: -1 damage taken per hit  │
│                                    │
│ ❤️  Heal [READY]  1M / HP          │
│     Current: 28 / 40 HP            │
└────────────────────────────────────┘
```

## CSS Styling (`src/style.scss`)

```scss
.spending-section {
  margin-top: 10px;
  padding: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  .upgrade-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    margin: 5px 0;
    background: rgba(0, 200, 0, 0.2);
    border: 2px solid rgba(0, 255, 0, 0.5);
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover:not(:disabled) {
      background: rgba(0, 255, 0, 0.3);
      transform: scale(1.05);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      border-color: rgba(255, 0, 0, 0.5);
    }

    .upgrade-icon {
      font-size: 20px;
      margin-right: 8px;
    }

    .upgrade-cost {
      font-size: 12px;
      color: #aaa;
    }
  }
}
```

## Success Criteria
✅ Upgrades persist through all morphs (Larvae → Drone → Zergling → Drone)
✅ Combat damage correctly applies attack and armor upgrades
✅ Health spending heals player up to max HP (no inflation)
✅ UI clearly shows current level, cost, and effects
✅ Resource costs scale appropriately with level
✅ System is performant (no lag in combat calculations)
✅ Player can purchase upgrades at any time (not just when morphing)

## File Structure
```
src/
  upgrades/
    PlayerUpgrades.ts         (NEW: upgrade state manager)
  ui/
    SpendingPanel.ts          (NEW: upgrade UI component)
  units/
    PlayerUnit.ts             (MODIFY: add upgrades instance)
  combat/
    CombatManager.ts          (MODIFY: apply upgrades in damage calc)
  ControlPanel.ts             (MODIFY: integrate spending panel)
  ZerusCarnageLevel01.ts      (MODIFY: add upgrade handlers)
  style.scss                  (MODIFY: add upgrade button styles)
```

## Notes
- This system is designed to be **easily extensible** for future upgrades (speed, range, etc.)
- **Performance**: Upgrade calculations are cached, not recalculated every frame
- **Testing**: Use browser console to test: `window.playerUnit.getUpgrades().upgradeAttack()`