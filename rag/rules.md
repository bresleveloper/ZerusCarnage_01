# StarCraft 2 Complete Game Rules and Mechanics

## Core Game Concepts

StarCraft 2 is a real-time strategy game featuring three distinct races: **Terrans**, **Protoss**, and **Zerg**. Each race has unique units, buildings, and mechanics that create asymmetric gameplay.

## Resource System

### Primary Resources

1. **Minerals**
   - Primary resource used by all races
   - Used to build most units and structures
   - More abundant than gas
   - Standard income: ~50-60 minerals per minute per worker on optimal patches

2. **Vespene Gas**
   - Secondary resource required for advanced units and upgrades
   - More scarce and valuable than minerals
   - Must construct race-specific buildings on geysers:
     - Terran: Refinery
     - Protoss: Assimilator
     - Zerg: Extractor
   - Standard income: ~61-163 gas per minute depending on worker count (1-3 workers)

3. **Supply**
   - Population cap system limiting total army size
   - Each race has different supply-providing structures:
     - Terran: Supply Depot (8 supply)
     - Protoss: Pylon (8 supply)
     - Zerg: Overlord (8 supply)
   - Different units consume different supply amounts (0.5 to 8 supply)

### Economy Mechanics

**Worker Efficiency:**
- Each mineral patch supports up to 3 workers optimally (24 total per base)
- Each vespene geyser supports up to 3 workers optimally
- Worker saturation formula: 16 workers on minerals + 6 workers on gas = 22 workers per base
- Diminishing returns occur beyond optimal saturation

**Economy Management:**
- Constant worker production is critical
- Never stop building workers (except in late game)
- Expand to new bases when current resources deplete
- Balance spending between army, technology, and economy

## Combat System

### Damage Calculation

**Base Damage Formula:**
```
Final Damage = (Base Damage + Bonus Damage + Upgrades) - (Armor + Upgrades)
Minimum Damage = 1 (cannot go below this)
```

**Damage Types:**
- Normal damage: Standard damage type
- Bonus damage: Extra damage vs specific unit attributes
- Spell damage: Special calculations, often ignores armor

**Unit Attributes:**
- **Light**: Small, fast units (Marines, Zerglings, etc.)
- **Armored**: Heavy, durable units (Tanks, Immortals, etc.)
- **Biological**: Living units (most Terran/Zerg units)
- **Mechanical**: Robotic units (Protoss robots, Terran vehicles)
- **Psionic**: Units with psionic abilities (Ghosts, High Templars)
- **Massive**: Largest units (Colossi, Carriers, etc.)

### Attack Types and Bonuses

**Example Bonus Damage:**
- Marauder: +10 damage vs Armored
- Immortal: +20 damage vs Armored
- Hellbat: +12 damage vs Light biological
- Viking (air mode): +14 damage vs Armored air

### Armor System

**Armor Types:**
1. **Base Armor**: Unit's natural damage reduction
2. **Upgrade Armor**: +1/+2/+3 from armor upgrades
3. **Shield Defense**: Protoss-specific for shield points

**Shield Mechanics (Protoss):**
- Shields absorb damage before hit points
- Shields regenerate automatically when not taking damage
- Both shield defense AND armor defense apply when shields are active

### Attack Speed and DPS

**Attack Cooldown System:**
- Each unit has a base attack cooldown (time between attacks)
- Attack upgrades reduce cooldown or increase damage
- DPS = (Damage × Attack Count) ÷ Attack Cooldown

**Stimpack Example (Terran):**
- Marine base: 0.61 attack cooldown
- With Stimpack: 0.37 attack cooldown (~65% increase in attack speed)
- Trade-off: Costs 10 HP to use

## Complete Unit Statistics

### Terran Units - Complete Roster

#### Worker Units
| Unit | Supply | Cost | HP | Armor | Damage | Range | Speed | Build Time | Size (pixels) | Abilities |
|------|--------|------|----|----|--------|-------|-------|------------|---------------|-----------|
| **SCV** | 1 | 50M | 45 | 0 | 5 | 1 | 2.81 | 17s |  | Repair, Construct |

#### Infantry Units
| Unit | Supply | Cost | HP | Armor | Damage | Range | Speed | Build Time | Size (pixels) | Attributes | Abilities |
|------|--------|------|----|----|--------|-------|-------|------------|---------------|------------|-----------|
| **Marine** | 1 | 50M | 45 | 0 | 6 | 5 | 2.25 | 25s |  | Light, Biological | Stimpack |
| **Marauder** | 2 | 100M/25G | 125 | 1 | 10 (+10 vs Armored) | 6 | 2.25 | 30s |  | Armored, Biological | Stimpack, Concussive Shells |
| **Reaper** | 1 | 50M/50G | 60 | 0 | 4 | 5 | 3.75 | 32s |  | Light, Biological | KD8 Charge, Cliff Jumping |
| **Ghost** | 2 | 150M/125G | 100 | 0 | 10 | 6 | 2.25 | 40s |  | Biological, Psionic | Snipe, EMP, Cloak, Nuke |

#### Mechanical Units
| Unit | Supply | Cost | HP | Armor | Damage | Range | Speed | Build Time | Size (pixels) | Attributes | Abilities |
|------|--------|------|----|----|--------|-------|-------|------------|---------------|------------|-----------|
| **Hellion** | 2 | 100M | 90 | 0 | 8 (+6 vs Light) | 5 | 4.13 | 30s |  | Light, Mechanical | Transform to Hellbat |
| **Hellbat** | 2 | 100M | 135 | 1 | 18 (+12 vs Light Bio) | 2 | 2.25 | 30s |  | Light, Mechanical | Transform to Hellion |
| **Widow Mine** | 2 | 75M/25G | 90 | 0 | 125 (+35 vs Shield) | 5 | 2.25 | 40s |  | Light, Mechanical | Burrow, Sentinel Missile |
| **Siege Tank** | 3 | 150M/125G | 175 | 1 | 15/35 (siege) | 7/13 | 2.25/0 | 32s |  | Armored, Mechanical | Siege/Tank Mode |
| **Thor** | 6 | 300M/200G | 400 | 1 | 30/6×4 | 7/10 | 1.88 | 43s |  | Armored, Mechanical, Massive | 250mm Cannon |
| **Cyclone** | 3 | 125M/50G | 180 | 1 | 18 | 6 | 4.13 | 32s |  | Armored, Mechanical | Lock On |

#### Air Units
| Unit | Supply | Cost | HP | Armor | Damage | Range | Speed | Build Time | Size (pixels) | Attributes | Abilities |
|------|--------|------|----|----|--------|-------|-------|------------|---------------|------------|-----------|
| **Viking** | 2 | 150M/75G | 125/135 | 0/1 | 10/12 | 9/6 | 3.85/2.25 | 30s |  | Armored, Mechanical | Assault/Fighter Mode |
| **Medivac** | 2 | 100M/100G | 150 | 1 | 0 | 4 | 3.5 | 30s |  | Armored, Mechanical | Heal, Transport, Afterburners |
| **Liberator** | 3 | 150M/150G | 180 | 0 | 5/75 | 5/15 | 3.5/0 | 43s |  | Armored, Mechanical | Fighter/Defender Mode |
| **Raven** | 2 | 100M/200G | 140 | 1 | 0 | 0 | 3.85 | 43s |  | Light, Mechanical, Psionic | Turret, Seeker Missile, Interference Matrix |
| **Banshee** | 3 | 150M/100G | 140 | 0 | 12×2 | 6 | 3.85 | 43s |  | Light, Mechanical | Cloak |
| **Battlecruiser** | 6 | 400M/300G | 550 | 3 | 8/6 | 6 | 2.62 | 64s |  | Armored, Mechanical, Massive | Yamato Cannon, Tactical Jump |

### Protoss Units - Complete Roster

#### Worker Units
| Unit | Supply | Cost | HP | Shields | Armor | Damage | Range | Speed | Build Time | Size (pixels) | Abilities |
|------|--------|------|----|---------|-------|--------|-------|-------|------------|---------------|-----------|
| **Probe** | 1 | 50M | 20 | 20 | 0 | 5 | 1 | 3.94 | 17s |  | Construct via Warp-in |

#### Ground Units
| Unit | Supply | Cost | HP | Shields | Armor | Damage | Range | Speed | Build Time | Size (pixels) | Attributes | Abilities |
|------|--------|------|----|---------|-------|--------|-------|-------|------------|---------------|------------|-----------|
| **Zealot** | 2 | 100M | 100 | 50 | 1 | 8×2 | 1 | 2.25 | 27s |  | Light, Biological | Charge |
| **Adept** | 2 | 100M/25G | 70 | 70 | 1 | 10 | 4 | 2.5 | 27s |  | Light, Biological | Psionic Transfer |
| **Stalker** | 2 | 125M/50G | 80 | 80 | 1 | 10 (+4 vs Armored) | 6 | 2.95 | 30s |  | Armored, Mechanical | Blink |
| **Sentry** | 2 | 50M/100G | 40 | 40 | 1 | 6 | 5 | 2.25 | 26s |  | Light, Mechanical, Psionic | Force Field, Guardian Shield, Hallucination |
| **High Templar** | 2 | 50M/150G | 40 | 40 | 0 | 0 | 0 | 2.25 | 39s |  | Light, Biological, Psionic | Psionic Storm, Feedback |
| **Dark Templar** | 2 | 125M/125G | 40 | 80 | 1 | 40 | 1 | 2.25 | 39s |  | Light, Biological | Permanent Cloak, Shadow Stride |
| **Archon** | 4 | Merge | 10 | 350 | 0 | 25 (+10 vs Bio) | 3 | 2.25 | 9s |  | Psionic, Massive | Splash Damage |

#### Robotic Units
| Unit | Supply | Cost | HP | Shields | Armor | Damage | Range | Speed | Build Time | Size (pixels) | Attributes | Abilities |
|------|--------|------|----|---------|-------|--------|-------|-------|------------|---------------|------------|-----------|
| **Observer** | 1 | 25M/75G | 40 | 20 | 0 | 0 | 0 | 2.63 | 21s |  | Light, Mechanical | Permanent Cloak, Detector |
| **Warp Prism** | 2 | 250M | 80 | 40 | 0 | 0 | 0 | 2.95 | 36s |  | Armored, Mechanical | Transport, Phasing Mode |
| **Immortal** | 4 | 250M/100G | 200 | 100 | 1 | 20 (+20 vs Armored) | 6 | 2.25 | 39s |  | Armored, Mechanical | Barrier |
| **Colossus** | 6 | 300M/200G | 200 | 150 | 1 | 12×2 | 7 | 2.25 | 54s |  | Armored, Mechanical, Massive | Cliff Walking, Splash |
| **Disruptor** | 3 | 150M/150G | 100 | 100 | 1 | 145 (Nova) | 13 | 2.25 | 36s |  | Armored, Mechanical | Purification Nova |

#### Air Units
| Unit | Supply | Cost | HP | Shields | Armor | Damage | Range | Speed | Build Time | Size (pixels) | Attributes | Abilities |
|------|--------|------|----|---------|-------|--------|-------|-------|------------|---------------|------------|-----------|
| **Phoenix** | 2 | 150M/100G | 120 | 60 | 0 | 5×2 (+10 vs Light) | 5 | 4.25 | 27s |  | Light, Mechanical | Graviton Beam |
| **Void Ray** | 4 | 250M/150G | 150 | 100 | 0 | 6 (+4 vs Armored) | 6 | 2.25 | 37s |  | Armored, Mechanical | Prismatic Alignment |
| **Oracle** | 3 | 150M/150G | 100 | 60 | 0 | 15×4 | 4 | 4.13 | 37s |  | Light, Mechanical, Psionic | Revelation, Stasis Ward |
| **Tempest** | 6 | 300M/200G | 150 | 125 | 1 | 30/22 | 10/14 | 2.63 | 43s |  | Armored, Mechanical, Massive | Disintegration |
| **Carrier** | 6 | 350M/250G | 300 | 150 | 2 | 5×8 (Interceptors) | 14 | 2.63 | 64s |  | Armored, Mechanical, Massive | Build Interceptor |
| **Mothership** | 8 | 400M/400G | 350 | 350 | 2 | 6×4 | 7 | 1.88 | 114s |  | Armored, Mechanical, Massive, Psionic | Cloaking Field, Mass Recall, Time Warp |

### Zerg Units - Complete Roster

#### Worker Units
| Unit | Supply | Cost | HP | Armor | Damage | Range | Speed | Build Time | Size (pixels) | Abilities |
|------|--------|------|----|----|--------|-------|-------|------------|---------------|-----------|
| **Drone** | 1 | 50M | 40 | 0 | 5 | 1 | 2.25 | 17s | 46 | Construct (by morphing), Burrow |

#### Basic Units
| Unit | Supply | Cost | HP | Armor | Damage | Range | Speed | Build Time | Size (pixels) | Attributes | Abilities |
|------|--------|------|----|----|--------|-------|-------|------------|---------------|------------|-----------|
| **Overlord** | 0 | 100M | 200 | 0 | 0 | 0 | 1.41 | 18s | 462 | Armored, Biological | Supply, Transport (upgrade), Generate Creep |
| **Larvae** | 0 | 0 | 25 | 10 | 0 | 0 | 0.79 | 11s | 6 | Light, Biological | Morph into Units |
| **Zergling** | 0.5 | 25M | 35 | 0 | 5 | 1 | 2.25 | 24s | 38 | Light, Biological | Burrow, Adrenal Glands |
| **Baneling** | 0.5 | 25M/25G | 30 | 0 | 16 (+20 vs Light) | 2.2 | 2.7 | 14s | 67 | Biological | Explode, Burrow |

#### Mid-Tier Units
| Unit | Supply | Cost | HP | Armor | Damage | Range | Speed | Build Time | Size (pixels) | Attributes | Abilities |
|------|--------|------|----|----|--------|-------|-------|------------|---------------|------------|-----------|
| **Roach** | 2 | 75M/25G | 145 | 1 | 16 | 4 | 2.25 | 19s | 79 | Armored, Biological | Burrow, Tunneling Claws |
| **Ravager** | 3 | 25M/75G | 120 | 1 | 16 | 6 | 2.95 | 9s |  | Biological | Corrosive Bile, Burrow |
| **Hydralisk** | 2 | 100M/50G | 90 | 0 | 12 | 5 | 2.25 | 24s | 132 | Light, Biological | Burrow, Grooved Spines |
| **Lurker** | 3 | 50M/100G | 200 | 1 | 20×3 | 9 | 2.25 | 18s |  | Armored, Biological | Burrow, Lurker Spines |
| **Queen** | 2 | 150M | 175 | 1 | 4/9 | 5/7 | 1.31 | 36s |  | Biological, Psionic | Spawn Larvae, Creep Tumor, Transfusion |

#### Advanced Units
| Unit | Supply | Cost | HP | Armor | Damage | Range | Speed | Build Time | Size (pixels) | Attributes | Abilities |
|------|--------|------|----|----|--------|-------|-------|------------|---------------|------------|-----------|
| **Infestor** | 2 | 100M/150G | 90 | 0 | 0 | 0 | 2.25 | 36s |  | Armored, Biological, Psionic | Neural Parasite, Fungal Growth, Burrow (move) |
| **Swarm Host** | 3 | 100M/75G | 160 | 1 | 0 | 0 | 2.25 | 29s |  | Armored, Biological | Spawn Locusts, Burrow |
| **Ultralisk** | 6 | 275M/200G | 500 | 2 | 35 | 1 | 2.25 | 39s | 816 | Armored, Biological, Massive | Chitinous Plating, Burrow |

#### Air Units
| Unit | Supply | Cost | HP | Armor | Damage | Range | Speed | Build Time | Size (pixels) | Attributes | Abilities |
|------|--------|------|----|----|--------|-------|-------|------------|---------------|------------|-----------|
| **Overseer** | 0 | 50M/50G | 200 | 1 | 0 | 0 | 1.88 | 12s |  | Armored, Biological | Detector, Changeling, Contaminate |
| **Mutalisk** | 2 | 100M/100G | 120 | 0 | 9 | 3 | 3.75 | 24s | 209 | Light, Biological | Glaive Wurm (bounce) |
| **Corruptor** | 2 | 150M/100G | 200 | 2 | 14 (+6 vs Massive) | 6 | 3.5 | 29s |  | Armored, Biological | Caustic Spray, Morph to Brood Lord |
| **Brood Lord** | 4 | 150M/150G | 225 | 1 | 20 | 9.5 | 1.97 | 24s |  | Armored, Biological, Massive | Spawn Broodlings |
| **Viper** | 3 | 100M/200G | 150 | 1 | 0 | 0 | 3.38 | 29s |  | Armored, Biological, Psionic | Parasitic Bomb, Blinding Cloud, Abduct, Consume |

## Complete Ability System

### Terran Abilities

#### Combat Abilities
| Ability | Unit | Energy Cost | Effect | Range | Duration | Cooldown |
|---------|------|-------------|--------|-------|----------|----------|
| **Stimpack** | Marine, Marauder | 0 (costs 10 HP) | +50% attack/move speed | Self | 15s | 0s |
| **Snipe** | Ghost | 25 | 170 damage vs Biological | 10 | Instant | 1.43s |
| **EMP Round** | Ghost | 75 | Remove 100 shields/energy | 10 | Instant | 0s |
| **Nuclear Strike** | Ghost | 0 | 300/500 damage (units/structures) | Global | 14.3s delay | 0s |
| **KD8 Charge** | Reaper | 0 | 5 damage + knockback | 5 | Instant | 14s |
| **Lock On** | Cyclone | 0 | Auto-attack for 14s | 7 | 14s | 14s |
| **250mm Cannon** | Thor | 0 | 35 damage vs ground | 7 | Instant | 0.71s |
| **Yamato Cannon** | Battlecruiser | 100 | 240 damage | 10 | Instant | 0s |
| **Tactical Jump** | Battlecruiser | 0 | Teleport to location | Global | 4s delay | 71s |

#### Support Abilities
| Ability | Unit | Energy Cost | Effect | Range | Duration | Cooldown |
|---------|------|-------------|--------|-------|----------|----------|
| **Heal** | Medivac | 1/s | Restore 3 HP/s to Bio units | 4 | Channeled | 0s |
| **Afterburners** | Medivac | 25 | +70% speed boost | Self | 14s | 0s |
| **Repair** | SCV | 0 | Restore HP to Mech units | 1 | Channeled | 0s |
| **Cloak** | Ghost, Banshee | 25 initial | Permanent invisibility | Self | Permanent | 0s |
| **Scanner Sweep** | Orbital Command | 50 | Reveal area, detect | 13 | 12s | 0s |

#### Transformation Abilities
| Ability | Unit | Effect | Time | Restrictions |
|---------|------|--------|------|---------------|
| **Siege Mode** | Siege Tank | +22 damage, +6 range, immobile | 3s | Cannot move |
| **Tank Mode** | Siege Tank | Mobile, reduced damage/range | 3s | Normal mobility |
| **Assault Mode** | Viking | Ground unit, attack ground | 2s | Cannot attack air |
| **Fighter Mode** | Viking | Air unit, attack air | 2s | Cannot attack ground |
| **Hellbat Mode** | Hellion | Melee, +biological damage | 4s | Slower movement |
| **Hellion Mode** | Hellbat | Ranged, faster movement | 4s | Light damage |

### Protoss Abilities

#### Combat Abilities
| Ability | Unit | Energy Cost | Effect | Range | Duration | Cooldown |
|---------|------|-------------|--------|-------|----------|----------|
| **Psionic Storm** | High Templar | 75 | 80 damage over 2.86s | 9 | 2.86s | 0s |
| **Feedback** | High Templar | 50 | Damage = target's energy | 9 | Instant | 0s |
| **Purification Nova** | Disruptor | 0 | 145 damage after delay | 13 | 2.14s delay | 14.3s |
| **Graviton Beam** | Phoenix | 50 | Lift unit, disable | 6 | 10s | 0s |
| **Prismatic Alignment** | Void Ray | 25 | +6 damage vs Armored | Self | 14s | 60s |

#### Utility Abilities
| Ability | Unit | Energy Cost | Effect | Range | Duration | Cooldown |
|---------|------|-------------|--------|-------|----------|----------|
| **Charge** | Zealot | 0 | Rapid movement to target | 8 | 2.5s | 10s |
| **Blink** | Stalker | 0 | Teleport short distance | 8 | Instant | 10s |
| **Psionic Transfer** | Adept | 0 | Project invulnerable shade | 7 | 7s | 11s |
| **Shadow Stride** | Dark Templar | 0 | Teleport + 100% speed | 8 | Instant | 21s |
| **Force Field** | Sentry | 50 | Create impassable barrier | 9 | 11s | 0s |
| **Guardian Shield** | Sentry | 75 | +2 armor vs ranged | 4 | 15s | 0s |
| **Hallucination** | Sentry | 75 | Create unit copies | 4 | 43s | 0s |
| **Barrier** | Immortal | 0 | Absorb 100 damage | Self | 2s | 35s |

#### Air Abilities
| Ability | Unit | Energy Cost | Effect | Range | Duration | Cooldown |
|---------|------|-------------|--------|-------|----------|----------|
| **Build Interceptor** | Carrier | 15 | Create Interceptor | Self | Permanent | 6s |
| **Release Interceptors** | Carrier | 0 | Deploy for combat | 14 | Until recalled | 0s |
| **Phasing Mode** | Warp Prism | 0 | Immobile + power field | Self | Until cancelled | 1.43s |
| **Cloaking Field** | Mothership | 100 | Cloak nearby units | 6 | 20s | 10s |
| **Mass Recall** | Mothership | 100 | Teleport units to ship | 6.5 | Instant | 130s |
| **Time Warp** | Mothership | 100 | Slow enemy units | 3.5 | 20s | 20s |

### Zerg Abilities

#### Evolution Abilities
| Ability | Unit | Cost | Effect | Time | Prerequisites |
|---------|------|------|--------|------|---------------|
| **Morph to Baneling** | Zergling | 25M/25G | Become suicide bomber | 14s | Baneling Nest |
| **Morph to Ravager** | Roach | 25M/75G | Gain Corrosive Bile | 9s | Ravager Den |
| **Morph to Lurker** | Hydralisk | 50M/100G | Burrow attacker | 18s | Lurker Den |
| **Morph to Brood Lord** | Corruptor | 150M/150G | Siege flyer | 24s | Greater Spire |
| **Morph to Overseer** | Overlord | 50M/50G | Detector unit | 12s | Lair |

#### Combat Abilities
| Ability | Unit | Energy Cost | Effect | Range | Duration | Cooldown |
|---------|------|-------------|--------|-------|----------|----------|
| **Neural Parasite** | Infestor | 125 | Control enemy unit | 9 | Until broken | 0s |
| **Fungal Growth** | Infestor | 75 | Root + 36 damage | 10 | 4s | 0s |
| **Parasitic Bomb** | Viper | 125 | 120 damage over time | 8 | 7s | 0s |
| **Blinding Cloud** | Viper | 100 | Disable ranged attacks | 9 | 11s | 0s |
| **Abduct** | Viper | 75 | Pull unit to Viper | 9 | Instant | 0s |
| **Corrosive Bile** | Ravager | 0 | 60 damage projectile | 9 | 1.14s delay | 7s |
| **Explode** | Baneling | 0 | 16 + Light damage | 2.2 | Instant | 0s |

#### Support Abilities
| Ability | Unit | Energy Cost | Effect | Range | Duration | Cooldown |
|---------|------|-------------|--------|-------|----------|----------|
| **Spawn Larvae** | Queen | 25 | +4 larvae after 40s | 7 | 40s | 0s |
| **Creep Tumor** | Queen | 25 | Spread creep terrain | 7 | Permanent | 15s |
| **Transfusion** | Queen | 50 | Heal 75 HP | 7 | Instant | 0s |
| **Spawn Locusts** | Swarm Host | 0 | Create 2 Locusts | 8 | 15s lifetime | 25s |
| **Burrow** | Most Zerg | 0 | Hide underground | Self | Until unburrowed | 1s |
| **Generate Creep** | Overlord | 0 | Create creep patch | 2 | Channeled | 0s |
| **Consume** | Viper | 0 | Convert building HP to energy | 2 | Instant | 29s |
| **Changeling** | Overseer | 50 | Spawn scout unit | 2 | 150s | 0s |
| **Contaminate** | Overseer | 75 | Disable building | 7 | 30s | 0s |

## Heart of the Swarm Evolution System

The Heart of the Swarm campaign introduced a comprehensive evolution system through Abathur's Evolution Pit aboard Kerrigan's leviathan. This system allows players to customize zerg units with both temporary mutations and permanent evolutionary upgrades, providing unprecedented tactical flexibility and unit specialization.

Essence is the genetic information of all life, key to Zerg evolution. They take it from prey to incorporate their strengths.

### Evolution Pit Overview

**System Mechanics:**
- **Evolution Master**: Abathur controls the evolution pit and guides genetic modifications
- **Temporary Mutations**: Can be selected before each mission and changed freely
- **Permanent Evolutions**: Unlocked through special evolution missions, choices are irreversible
- **Unit Coverage**: Seven core zerg units can be evolved (Zergling, Baneling, Roach, Hydralisk, Mutalisk, Swarm Host, Ultralisk)

**Strategic Framework:**
- Only one mutation can be active per unit at a time
- Evolution missions become available after completing specific campaign missions
- Permanent evolution choices fundamentally alter unit roles and capabilities
- Players must balance immediate tactical needs with long-term strategic planning

### Temporary Mutations (Changeable Between Missions)

Players can select one of three mutations for each unit type. These mutations can be freely changed between missions, allowing adaptation to different tactical situations.

#### Zergling Mutations
| Mutation | Effect | Strategic Application |
|----------|--------|----------------------|
| **Hardened Carapace** | +10 HP | Increases survivability in prolonged engagements |
| **Adrenal Overload** | +50% attack speed | Maximizes DPS for surgical strikes |
| **Metabolic Boost** | +60% movement speed | Enhances mobility for harassment and flanking |

#### Baneling Mutations
| Mutation | Effect | Strategic Application |
|----------|--------|----------------------|
| **Corrosive Acid** | 100% damage to primary target | Ensures maximum damage to priority targets |
| **Rupture** | +50% blast radius | Increases area denial and crowd control |
| **Regenerative Acid** | Explosion heals friendly units/structures | Provides tactical healing support |

#### Roach Mutations
| Mutation | Effect | Strategic Application |
|----------|--------|----------------------|
| **Hydriodic Bile** | +8 damage vs Light units | Specializes against infantry and light vehicles |
| **Adaptive Plating** | +3 armor when below 50% HP | Enhances survivability when critically damaged |
| **Tunneling Claws** | Full speed burrowed movement + 100% regen rate | Enables guerrilla tactics and rapid repositioning |

#### Hydralisk Mutations
| Mutation | Effect | Strategic Application |
|----------|--------|----------------------|
| **Frenzy** | +50% attack speed for 15s (30s cooldown) | Provides burst damage capability |
| **Ancillary Carapace** | +20 HP | Increases base survivability |
| **Grooved Spines** | +1 range (5→6) | Improves engagement flexibility and safety |

#### Mutalisk Mutations
| Mutation | Effect | Strategic Application |
|----------|--------|----------------------|
| **Vicious Glaive** | +3 additional bounces (total 6 targets) | Maximizes damage against grouped enemies |
| **Rapid Regeneration** | Health regeneration when out of combat (5s) | Enables sustained harassment campaigns |
| **Sundering Glaive** | +9 damage vs Armored, no bounce | Specializes against heavy units and structures |

#### Swarm Host Mutations
| Mutation | Effect | Strategic Application |
|----------|--------|----------------------|
| **Burrow** | Can spawn locusts while burrowed | Provides concealed siege capability |
| **Rapid Incubation** | +20% locust spawn rate | Increases sustained pressure potential |
| **Pressurized Glands** | Locusts attack air and ground | Provides anti-air capability to locusts |

#### Ultralisk Mutations
| Mutation | Effect | Strategic Application |
|----------|--------|----------------------|
| **Burrow Charge** | Underground charge attack | Enables surprise engagement initiation |
| **Tissue Assimilation** | Recovers 40% damage dealt as HP | Provides self-sustaining combat capability |
| **Monarch Blades** | +20 splash damage | Enhances crowd control against grouped enemies |

### Permanent Evolution Strains (Evolution Missions)

Evolution missions provide permanent, irreversible upgrades that fundamentally change how units function. Each unit has two evolution paths representing different tactical philosophies.

#### Zergling Evolution Strains
| Strain | Type | Statistics | Abilities | Strategic Role |
|--------|------|------------|-----------|----------------|
| **Raptor** | Offensive | Base stats + 2 damage (40% increase) | Cliff jumping, leap attacks, terrain navigation | Mobile assault unit with enhanced battlefield mobility |
| **Swarmling** | Economic | 3 per egg, 2s morph time | Instant mass production | Overwhelming numerical superiority through rapid deployment |

#### Baneling Evolution Strains
| Strain | Type | Statistics | Abilities | Strategic Role |
|--------|------|------------|-----------|----------------|
| **Splitter** | Area Control | Standard explosion + 5 damage spawns | Splits into smaller explosive units on detonation | Maximizes area denial and sustained damage |
| **Hunter** | Mobility | Enhanced movement | Cliff jumping, leap attacks | Eliminates terrain restrictions for targeted strikes |

#### Roach Evolution Strains
| Strain | Type | Statistics | Abilities | Strategic Role |
|--------|------|------------|-----------|----------------|
| **Corpser** | Offensive | Standard stats | Spawns roachlings from killed enemies | Converts enemy casualties into allied reinforcements |
| **Vile** | Control | Standard stats | Attacks slow enemy movement/attack by 75% | Battlefield control through movement impairment |

#### Hydralisk Evolution Strains
| Strain | Type | Statistics | Abilities | Strategic Role |
|--------|------|------------|-----------|----------------|
| **Impaler** | Anti-Armor | Enhanced vs Armored | Single-target burrowed attacks, armor penetration | Specialized siege unit against heavy targets |
| **Lurker** | Anti-Light | Enhanced vs Light | Linear area attacks while burrowed | Area denial against light unit swarms |

#### Mutalisk Evolution Strains
| Strain | Type | Statistics | Abilities | Strategic Role |
|--------|------|------------|-----------|----------------|
| **Brood Lord** | Siege | 225 HP, 1 armor, 20 damage | Long-range siege attacks spawn broodlings | Heavy siege unit with sustained pressure capability |
| **Viper** | Support | 150 HP, 1 armor | Abduct, Blinding Cloud, Consume, air-to-air combat | Tactical support with crowd control and energy management |

#### Swarm Host Evolution Strains
| Strain | Type | Statistics | Abilities | Strategic Role |
|--------|------|------------|-----------|----------------|
| **Carrion** | Air Support | Flying locusts | Locusts: +50% damage, +speed, -25% HP, air attacks | Provides air-to-ground siege capability |
| **Creeper** | Mobility | Standard stats | Generates creep, Deep Tunnel ability | Enhanced strategic mobility through creep network |

#### Ultralisk Evolution Strains
| Strain | Type | Statistics | Abilities | Strategic Role |
|--------|------|------------|-----------|----------------|
| **Noxious** | Area Control | 500 HP, 2 armor, 35 damage | Noxious Cloud (5 DPS), Toxic Blast (20 damage) | Area denial through continuous poison damage |
| **Torrasque** | Sustainability | 600 HP, 4 armor, 45 damage | Reincarnation (60s cooldown) | Ultimate battlefield persistence through death immunity |

### Evolution Mission Mechanics

**Unlock Requirements:**
- Evolution missions become available after completing specific campaign missions
- Each evolution mission focuses on one unit type
- Players must complete story missions to unlock evolution opportunities

**Testing Phase:**
- Evolution missions allow players to test both strains in combat scenarios
- Missions are designed to showcase the tactical differences between evolution choices
- Players can experiment with both options before making permanent selections

**Permanent Consequences:**
- Evolution choices cannot be reversed once selected
- Selections affect the entire remainder of the campaign
- Strategic planning is essential as choices impact late-game unit composition

### Strategic Evolution Framework

**Offensive vs Defensive Paradigms:**
- **Green Strains** (Offensive): Raptor, Splitter, Corpser, Impaler, Brood Lord, Carrion, Noxious
- **Purple Strains** (Defensive): Swarmling, Hunter, Vile, Lurker, Viper, Creeper, Torrasque

**Tactical Considerations:**
- **Early Game Impact**: Some evolutions provide immediate tactical advantages
- **Late Game Scaling**: Certain strains become more valuable in complex engagements
- **Mission Synergy**: Optimal choices vary based on anticipated mission types
- **Combined Arms**: Evolution choices should complement overall army composition

**Meta-Strategic Elements:**
- Players must balance unit specialization with tactical flexibility
- Permanent choices require long-term strategic thinking
- Evolution system rewards deep understanding of zerg tactical doctrine
- Successful campaigns require harmonious evolution choices across all unit types

The Heart of the Swarm evolution system represents one of the most comprehensive unit customization systems in real-time strategy gaming, providing unparalleled depth in single-player campaign experience while maintaining the core zerg identity of adaptation and evolution.

## Advanced Mechanics and Upgrade Systems

### Military Upgrades

#### Terran Upgrades
| Upgrade | Building | Level | Cost | Effect |
|---------|----------|-------|------|--------|
| **Infantry Weapons** | Engineering Bay | 1/2/3 | 100M/100G, 175M/175G, 250M/250G | +1/+2/+3 attack for Bio units |
| **Infantry Armor** | Engineering Bay | 1/2/3 | 100M/100G, 175M/175G, 250M/250G | +1/+2/+3 armor for Bio units |
| **Vehicle Weapons** | Armory | 1/2/3 | 100M/100G, 175M/175G, 250M/250G | +1/+2/+3 attack for Mech units |
| **Vehicle Plating** | Armory | 1/2/3 | 100M/100G, 175M/175G, 250M/250G | +1/+2/+3 armor for Mech units |
| **Ship Weapons** | Armory | 1/2/3 | 100M/100G, 175M/175G, 250M/250G | +1/+2/+3 attack for Air units |
| **Ship Plating** | Armory | 1/2/3 | 100M/100G, 175M/175G, 250M/250G | +1/+2/+3 armor for Air units |

#### Protoss Upgrades
| Upgrade | Building | Level | Cost | Effect |
|---------|----------|-------|------|--------|
| **Ground Weapons** | Forge | 1/2/3 | 100M/100G, 175M/175G, 250M/250G | +1/+2/+3 attack for ground units |
| **Ground Armor** | Forge | 1/2/3 | 100M/100G, 175M/175G, 250M/250G | +1/+2/+3 armor for ground units |
| **Shields** | Forge | 1/2/3 | 150M/150G, 225M/225G, 300M/300G | +1/+2/+3 shield armor |
| **Air Weapons** | Cybernetics Core | 1/2/3 | 100M/100G, 175M/175G, 250M/250G | +1/+2/+3 attack for air units |
| **Air Armor** | Cybernetics Core | 1/2/3 | 150M/150G, 225M/225G, 300M/300G | +1/+2/+3 armor for air units |

#### Zerg Upgrades
| Upgrade | Building | Level | Cost | Effect |
|---------|----------|-------|------|--------|
| **Melee Attacks** | Evolution Chamber | 1/2/3 | 100M/100G, 150M/150G, 200M/200G | +1/+2/+3 melee attack |
| **Missile Attacks** | Evolution Chamber | 1/2/3 | 100M/100G, 150M/150G, 200M/200G | +1/+2/+3 ranged attack |
| **Ground Carapace** | Evolution Chamber | 1/2/3 | 150M/150G, 225M/225G, 300M/300G | +1/+2/+3 ground armor |
| **Flyer Attacks** | Spire | 1/2/3 | 100M/100G, 175M/175G, 250M/250G | +1/+2/+3 air attack |
| **Flyer Carapace** | Spire | 1/2/3 | 150M/150G, 225M/225G, 300M/300G | +1/+2/+3 air armor |

### Unit-Specific Upgrades

#### Terran Unit Upgrades
| Upgrade | Building | Cost | Effect | Prerequisites |
|---------|----------|------|--------|---------------|
| **Stimpack** | Barracks Tech Lab | 100M/100G | Marine/Marauder +50% speed | Tech Lab |
| **Combat Shield** | Barracks Tech Lab | 100M/100G | Marine +10 HP | Tech Lab |
| **Concussive Shells** | Barracks Tech Lab | 50M/50G | Marauder slows targets | Tech Lab |
| **Siege Tech** | Factory Tech Lab | 100M/100G | Siege Tank siege mode | Tech Lab |
| **Infernal Pre-Igniter** | Factory Tech Lab | 150M/150G | Hellbat +10 damage vs Light | Armory |
| **Drilling Claws** | Factory Tech Lab | 75M/75G | Widow Mine +40% burrow speed | Tech Lab |
| **Cloaking Field** | Starport Tech Lab | 200M/200G | Banshee permanent cloak | Tech Lab |
| **Corvid Reactor** | Starport Tech Lab | 150M/150G | Raven +200 energy | Tech Lab |

#### Protoss Unit Upgrades
| Upgrade | Building | Cost | Effect | Prerequisites |
|---------|----------|------|--------|---------------|
| **Charge** | Twilight Council | 200M/200G | Zealot charges enemies | Twilight Council |
| **Blink** | Twilight Council | 150M/150G | Stalker teleportation | Twilight Council |
| **Resonating Glaives** | Twilight Council | 150M/150G | Adept +9 damage vs Light | Twilight Council |
| **Gravitic Boosters** | Robotics Bay | 100M/100G | Observer +25% speed | Robotics Bay |
| **Extended Thermal Lance** | Robotics Bay | 200M/200G | Colossus +2 range | Robotics Bay |
| **Anion Pulse-Crystals** | Fleet Beacon | 150M/150G | Phoenix +2 range | Fleet Beacon |
| **Flux Vanes** | Fleet Beacon | 100M/100G | Void Ray +1.3 speed | Fleet Beacon |

#### Zerg Unit Upgrades
| Upgrade | Building | Cost | Effect | Prerequisites |
|---------|----------|------|--------|---------------|
| **Metabolic Boost** | Spawning Pool | 100M/100G | Zergling +60% speed | Spawning Pool |
| **Adrenal Glands** | Spawning Pool | 200M/200G | Zergling +40% attack speed | Hive |
| **Centrifugal Hooks** | Baneling Nest | 150M/150G | Baneling +0.71 speed | Baneling Nest |
| **Tunneling Claws** | Roach Warren | 150M/150G | Roach moves while burrowed | Roach Warren |
| **Glial Reconstitution** | Roach Warren | 100M/100G | Roach +100% heal rate | Lair |
| **Grooved Spines** | Hydralisk Den | 150M/150G | Hydralisk +1 range | Hydralisk Den |
| **Muscular Augments** | Hydralisk Den | 100M/100G | Hydralisk +25% speed | Hydralisk Den |

### Advanced Combat Mechanics

#### Damage Mitigation Systems
| Mechanic | Units | Effect | Duration |
|----------|-------|--------|----------|
| **Hardened Shield** | Archon | Max 10 damage per hit to shields | Permanent |
| **Barrier** | Immortal | Absorbs up to 100 damage | 2 seconds |
| **Chitinous Plating** | Ultralisk | -2 damage from all sources | Permanent |
| **Prismatic Alignment** | Void Ray | +6 damage vs Armored | 14 seconds |

#### Detection and Stealth
| Detection Units | Range | Mobile | Notes |
|-----------------|-------|---------|-------|
| **Observer** (Protoss) | 9 | Yes | Permanently cloaked |
| **Overseer** (Zerg) | 9 | Yes | Can spawn Changelings |
| **Raven** (Terran) | 9 | Yes | Energy-based abilities |
| **Scanner Sweep** (Terran) | 13 | No | Temporary, costs 50 energy |
| **Photon Cannon** (Protoss) | 7 | No | Static defense + detection |
| **Spore Crawler** (Zerg) | 7 | No | Static defense + detection |
| **Missile Turret** (Terran) | 7 | No | Static defense + detection |

#### Special Movement Mechanics
| Mechanic | Units | Effect |
|----------|-------|--------|
| **Cliff Walking** | Colossus | Can walk over cliffs and units |
| **Burrow Movement** | Roach, Infestor | Move while underground |
| **Creep Bonus** | All Zerg | +30% speed on creep |
| **Charge** | Zealot | Rapid engagement movement |
| **Blink** | Stalker | Instant teleportation |
| **Jump** | Reaper | Cross cliffs without ramps |

### Technology Trees

#### Terran Tech Requirements
```
Command Center → Orbital Command (upgrade)
├─ Barracks → Marine, Marauder, Reaper
│  └─ Tech Lab → Ghost, upgrades
├─ Factory (requires Barracks) → Hellion, Widow Mine, Siege Tank
│  └─ Tech Lab → Thor, Cyclone, upgrades
└─ Starport (requires Factory) → Viking, Medivac, Liberator
   └─ Tech Lab → Raven, Banshee, Battlecruiser
```

#### Protoss Tech Requirements
```
Nexus
├─ Gateway → Zealot, Stalker, Adept
│  ├─ Cybernetics Core → Sentry, air units
│  └─ Twilight Council → High Templar, Dark Templar
├─ Robotics Facility (requires Gateway) → Observer, Immortal, Warp Prism
│  └─ Robotics Bay → Colossus, Disruptor
└─ Stargate (requires Cybernetics Core) → Phoenix, Void Ray, Oracle
   └─ Fleet Beacon → Tempest, Carrier, Mothership
```

#### Zerg Tech Requirements
```
Hatchery → Lair → Hive
├─ Spawning Pool → Zergling, Queen
│  └─ Baneling Nest → Baneling
├─ Roach Warren (requires Spawning Pool) → Roach
│  └─ Ravager Den → Ravager
├─ Hydralisk Den (requires Lair) → Hydralisk
│  └─ Lurker Den → Lurker
├─ Spire (requires Lair) → Mutalisk, Corruptor
│  └─ Greater Spire (requires Hive) → Brood Lord
└─ Infestation Pit (requires Lair) → Infestor, Swarm Host
```

### Micro and Macro Management

**Micromanagement:**
- Individual unit control during combat
- Spell casting and ability usage
- Target prioritization and focus fire
- Unit positioning and flanking

**Macromanagement:**
- Economic development and worker production
- Base expansion timing
- Production facility management
- Resource allocation between army/tech/economy

## Victory Conditions

**Standard Victory:**
- Eliminate all enemy buildings and units
- Force opponent to surrender

**Economic Victory:**
- Out-economy opponent through superior expansion
- Maintain larger army through better resource management

**Technological Victory:**
- Achieve superior unit compositions through tech advantages
- Use powerful late-game units effectively

## Game Phases

### Early Game (0-8 minutes)
- Focus: Economy building, basic units, early harassment
- Key decisions: Build order, scout timing, expansion timing

### Mid Game (8-16 minutes)
- Focus: Technology development, army positioning, map control
- Key decisions: Unit composition, engagement timing, expansion count

### Late Game (16+ minutes)
- Focus: Maximum supply armies, advanced technology, resource control
- Key decisions: Engagement positioning, spell usage, base trading

## Map Control Elements

**Strategic Locations:**
- **High Ground**: Provides vision advantage and defensive bonuses
- **Choke Points**: Narrow passages that favor defensive positioning
- **Watch Towers**: Neutral buildings providing extended vision
- **Expansion Sites**: Resource locations requiring defense

**Vision Mechanics:**
- Units have sight radius determining what they can see
- High ground provides vision advantage over low ground
- Stealth and detection create tactical depth
- Observers, Overseers, and Scans provide detection abilities

## Campaign-Exclusive Special Units

The StarCraft 2 campaign missions feature numerous special units that don't appear in multiplayer matches. These units often have enhanced statistics, unique abilities, or special mechanics that make them particularly powerful or serve specific story purposes. They are organized by campaign and include hybrid units that appear across multiple campaigns.

### Wings of Liberty Campaign Units

#### Terran Campaign-Exclusive Units
| Unit | Supply | Cost | HP | Armor | Damage | Range | Speed | Build Time | Size (pixels) | Attributes | Abilities |
|------|--------|------|----|----|--------|-------|-------|------------|---------------|------------|-----------|
| **Odin** | 12 | Special | 2500 | 3 | 60/30×4 | 7/10 | 1.88 | Mission Only |  | Armored, Mechanical, Massive | Nuclear Missile, Barrage |
| **Brutalisk** | 8 | Research | 600 | 3 | 50 | 1 | 2.25 | Mission Only |  | Armored, Biological, Massive | Enhanced Ultralisk Variant |
| **HERC** | 2 | 100M/25G | 110 | 1 | 12 | 1 | 2.25 | 30s |  | Armored, Mechanical | Combat Drugs, Grapple |

#### Zerg Campaign Units (Wings of Liberty)
| Unit | Supply | Cost | HP | Armor | Damage | Range | Speed | Build Time | Size (pixels) | Attributes | Abilities |
|------|--------|------|----|----|--------|-------|-------|------------|---------------|------------|-----------|
| **Aberration (WoL)** | 6 | Special | 800 | 4 | 35 | 1 | 2.25 | Mission Only |  | Biological, Armored, Massive | Enhanced Regeneration |

#### Special Structures
| Structure | HP | Armor | Damage | Range | Attributes | Abilities |
|-----------|----|----|--------|-------|------------|-----------|
| **Drakken Laser Drill** | 5000 | 5 | 500 | 20 | Armored, Structure | 174 Gigawatt Energy Output, Area Damage |

### Heart of the Swarm Campaign Units

#### Enhanced Zerg Units
| Unit | Supply | Cost | HP | Armor | Damage | Range | Speed | Build Time | Size (pixels) | Attributes | Abilities |
|------|--------|------|----|----|--------|-------|-------|------------|---------------|------------|-----------|
| **Aberration (HotS)** | 6 | 275M/200G | 275 | 2 | 20 (+15 vs Armored) | 1 | 2.95 | 36s |  | Biological, Armored, Massive | Towering, Structure Bonus |
| **Torrasque** | 8 | Evolution | 600 | 4 | 45 | 1 | 2.25 | Special |  | Armored, Biological, Massive | Reincarnate (60s cooldown) |

#### Primal Zerg Variants
| Unit | Supply | Cost | HP | Armor | Damage | Range | Speed | Build Time | Attributes | Abilities |
|------|--------|------|----|----|--------|-------|-------|------------|------------|-----------|
| **Primal Roach** | 2 | Mission Only | 180 | 2 | 18 | 4 | 2.25 | Mission Only | Armored, Biological | Enhanced Health, Primal Evolution |
| **Primal Hydralisk** | 2 | Mission Only | 90 | 0 | 12 | 5 | 2.25 | Mission Only | Light, Biological | Identical to Swarm version |
| **Primal Ultralisk** | 4 | Mission Only | 300 | 2 | 30 | 1 | 2.25 | Mission Only | Armored, Biological | Smaller, less armored than Swarm |

#### Evolution Mission Variants
| Unit | Evolution | HP | Armor | Damage | Range | Speed | Special Abilities |
|------|-----------|----|----|--------|-------|-------|-------------------|
| **Vile Roach** | Roach Evolution | 145 | 1 | 16 | 4 | 2.25 | Acid Saliva (75% slow), Heroic 20% slow |
| **Scantipede** | Roach Evolution | 145 | 1 | 16 | 4 | 2.25 | Parasite Injection, Spawn Roachlings on death |

### Legacy of the Void Campaign Units

#### War Council Faction Variants
The Legacy of the Void campaign features alternate versions of standard Protoss units from different factions. Each unit has three variants with similar power levels but different tactical applications:

| Base Unit | Faction Variants | Special Notes |
|-----------|------------------|---------------|
| **Zealot** | Aiur, Nerazim, Purifier | Each with unique abilities and visual differences |
| **Stalker** | Aiur, Nerazim, Purifier | Varying mobility and combat bonuses |
| **Immortal** | Aiur, Nerazim, Purifier | Different barrier and weapon systems |

#### Returning Brood War Units
| Unit | Supply | Cost | HP | Shields | Armor | Damage | Range | Attributes | Abilities |
|------|--------|------|----|---------|-------|--------|-------|------------|-----------|
| **Corsair** | 2 | 150M/100G | 100 | 80 | 1 | 5×2 | 5 | Light, Mechanical | Disruption Web |
| **Dragoon** | 2 | 125M/50G | 80 | 80 | 1 | 20 | 6 | Armored, Mechanical | Long Range Support |
| **Reaver** | 4 | 200M/100G | 100 | 80 | 0 | 100 (Scarabs) | 8 | Armored, Mechanical | Build Scarab |
| **Dark Archon** | 4 | Merge DTs | 25 | 200 | 1 | 0 | 0 | Psionic, Massive | Mind Control, Maelstrom |
| **Arbiter** | 4 | 100M/350G | 200 | 150 | 1 | 10×2 | 6 | Armored, Mechanical | Cloaking Field, Recall |

### Cross-Campaign Hybrid Units

Hybrid units appear as powerful enemies across multiple campaigns, representing the fusion of Protoss and Zerg genetics.

#### Hybrid Combat Units
| Unit | Supply | Cost | HP | Shields | Armor | Damage | Range | Speed | Size (pixels) | Attributes | Abilities |
|------|--------|------|----|---------|-------|--------|-------|-------|---------------|------------|-----------|
| **Hybrid Destroyer** | N/A | Enemy Unit | 750 | 250 | 2 | 35 | 6 | 2.25 |  | Armored, Psionic, Massive | Graviton Prison (60 damage over time) |
| **Hybrid Dominator** | N/A | Enemy Unit | 1000 | 400 | 3 | 45 | 7 | 2.25 |  | Armored, Psionic, Massive | Enhanced Destroyer, Detection |
| **Hybrid Reaver** | N/A | Enemy Unit | 1200 | 200 | 4 | 50 | 2 | 1.88 |  | Armored, Biological, Massive | Consume DNA (100 damage, heals 50%), Slime Spray |

#### Massive Campaign Units
| Unit | Campaign | HP | Armor | Damage | Range | Special Properties |
|------|----------|----|----|--------|-------|-------------------|
| **Leviathan** | Multiple | 8000+ | 5 | 500 (Bio-Plasmid) | 15 | 11km length, spawns Mutalisks/Brood Lords |
| **Kerrigan's Leviathan** | Heart of Swarm | Special | Special | Transport | N/A | Mobile base, story transport |

### Campaign Unit Characteristics

**Enhanced Statistics:**
- Campaign units typically have 2-5× the health of their multiplayer equivalents
- Armor values are often doubled or tripled
- Many possess unique abilities not available in multiplayer

**Special Mechanics:**
- **Reincarnation**: Torrasque can resurrect after death (60s cooldown)
- **Towering**: Aberrations can walk over smaller units like Colossi
- **Evolution Variants**: Multiple versions of the same unit with different abilities
- **Faction Systems**: Legacy of the Void allows choosing between different unit variants

**Hybrid Technology:**
- Represent pinnacle of Protoss-Zerg fusion
- Possess both psionic and biological capabilities
- Serve as primary antagonist forces in later campaigns
- Each type specializes in different combat roles (spell-casting vs. physical combat)

**Campaign Balance:**
- Designed for single-player story experience rather than competitive balance
- Often serve as boss units or special mission objectives
- Statistics vary between campaigns and difficulty levels
- Some units only available through specific story choices or research paths

This comprehensive rules documentation covers the fundamental mechanics that govern StarCraft 2 gameplay, from basic resource management to advanced combat calculations and strategic decision-making.