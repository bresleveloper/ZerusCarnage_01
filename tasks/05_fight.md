# Fight Mechanism Implementation Plan (Real-Time Combat)

## Overview
Implement a **real-time** fight system where evolved Zerg units engage in combat by hitting each other continuously while moving. Damage is applied based on each unit's attack speed (attack cooldown), with proper damage calculation considering armor.

## Key Combat Rules from rules.md
- **Damage Formula**: `Final Damage = (Base Damage + Upgrades) - (Armor + Upgrades)`, Minimum = 1
- **Attack Speed**: Each unit has attack cooldown (e.g., Zergling: 0.61s, Hydralisk: 0.54s)
- **DPS Formula**: `DPS = Damage / Attack Cooldown`
- **Combat is continuous**: Units attack each other automatically when in range

## Implementation Tasks

### 1. Extend BaseUnit with Combat Properties (`src/units/BaseUnit.ts`)
- Add `currentHP: number` (tracks damage taken, starts at hitPoints)
- Add `attackCooldown: number` (from rules.md per unit type)
- Add `attackTimer: number` (tracks time until next attack)
- Add `isInCombat: boolean` (flag for combat state)
- Add methods:
  - `takeDamage(amount: number): void`
  - `canAttack(): boolean` (checks if timer ready)
  - `resetAttackTimer(): void`
  - `isAlive(): boolean`

### 2. Create Combat Manager (`src/combat/CombatManager.ts`)
- Manage active fights between player and enemies
- Track combat pairs (player vs enemy)
- Calculate damage using formula: `max(1, attacker.damage - defender.armor)`
- Apply damage when attack timer reaches zero
- Handle combat end (death/separation)
- Award resources on enemy death

### 3. Add Combat State to Units
Extract attack cooldowns from rules.md:
- **Zergling**: 0.61s cooldown, 5 damage
- **Drone**: 1.0s cooldown (estimated), 5 damage
- **Roach**: 1.43s cooldown, 16 damage
- **Hydralisk**: 0.54s cooldown, 12 damage
- **Mutalisk**: 1.09s cooldown, 9 damage
- **Ultralisk**: 0.86s cooldown, 35 damage

### 4. Update Combat Rules (`src/interactions/CombatRules.ts`)
- Add `shouldFight(unit1: string, unit2: string): boolean`
  - Returns `true` for evolved units (Drone vs Drone, Zergling vs Zergling, etc.)
  - Returns `false` for Larvae (instant eat)
- Keep existing `canKill()` and `canEat()` logic
- Fights only happen between evolved units

### 5. Integrate Real-Time Combat into Level
In `ZerusCarnageLevel01.ts`:
- When collision detected with evolved enemy → start fight
- During fight:
  - Both units continue moving (or optionally lock in place)
  - Update attack timers in game loop
  - When timer reaches 0 → apply damage, reset timer
  - Show damage numbers floating above units
  - Update HP bars above combatants
- Fight ends when:
  - One unit dies (HP ≤ 0)
  - Units separate beyond attack range
- On enemy death: award minerals/gas, play sound

### 6. Create Combat Visual Feedback (`src/combat/CombatVisuals.ts`)
- HP bars above units during combat (red bar, shows current/max HP)
- Floating damage numbers when hit (e.g., "-5" in red)
- Hit flash effect (briefly change unit color when damaged)
- Death animation when HP reaches 0

### 7. Update Enemy AI for Combat
- When in combat range → stop random movement, face opponent
- Continue attacking based on attack speed
- If player flees (moves away) → resume normal movement

## Combat Flow Example
```
Player Zergling (35 HP, 5 dmg, 0.61s cooldown)
  vs
Enemy Drone (40 HP, 5 dmg, 1.0s cooldown)

t=0.0s:  Both units collide, fight starts
t=0.61s: Zergling attacks → Drone takes 5 damage (40→35 HP)
t=1.0s:  Drone attacks → Zergling takes 5 damage (35→30 HP)
t=1.22s: Zergling attacks → Drone takes 5 damage (35→30 HP)
t=1.83s: Zergling attacks → Drone takes 5 damage (30→25 HP)
t=2.0s:  Drone attacks → Zergling takes 5 damage (30→25 HP)
...continues until one dies
```

## File Structure
```
src/
  combat/
    CombatManager.ts       (manages active fights)
    CombatVisuals.ts       (HP bars, damage numbers)
  units/
    BaseUnit.ts            (add combat stats)
  interactions/
    CombatRules.ts         (update fight rules)
```

## Success Criteria
- Evolved units fight each other in real-time
- Faster attack speed = more hits over time
- Damage formula correctly applies armor reduction
- HP bars show during combat
- Larvae still die instantly (no fight)
- Victory awards minerals based on enemy cost