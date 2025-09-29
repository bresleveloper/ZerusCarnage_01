# Zerus Carnage: Product Requirements Document

## Executive Summary

**Project Name:** Zerus Carnage
**Genre:** 2D Top-Down Action Shooter
**Platform:** Web (HTML5/JavaScript)
**Target Audience:** Action game enthusiasts, StarCraft fans, retro shooter players
**Development Approach:** AI-assisted development with modular architecture

### Core Concept
Zerus Carnage merges the intense 2D top-down action mechanics of classic GTA (1 & 2) with the rich lore and universe of StarCraft 2. Players control a Larvae on the primal jungle world of Zerus, engaging in real-time combat to eliminate rival Zerg units or other bio units, collect resources and equipment, and evolve into more powerful forms of the zerg evolution tree. Victory comes through evolutionary superiority in a persistent action-oriented world.

---

## Game Overview

### Setting: The World of Zerus

**Environmental Context:**
Zerus is a battleground where different Zerg units fight for evolutionary dominance. The primal ecosystem is fractured to competing very evlolved Zerg units, each with different evolutionary paths and leadership structures.

**World Description:**
- **Primal Territories:** Dense jungle controlled by traditional primal Zerg leader unit
- **Crystal Mines:** Underground mineral deposits contested by resource-focused leader unit
- **Volcanic Battlegrounds:** Harsh terrain where the most aggressive Zerg species fight for evolutionary advantage as they adapts to the terrain and become stronger.
- **Ancient Spawning Complexes:** Fortified areas serving as faction headquarters and mission hubs
- **The Evolutionary Nexus:** Central contested zone where the ultimate evolutionary secrets lie

**Atmospheric Elements:**
- **Dynamic Faction Warfare:** Territories change hands based on player and AI actions
- **Environmental Hazards:** Acid pools, unstable terrain, and psionic storms affecting combat
- **Destructible Terrain:** Cover and obstacles that can be destroyed during firefights
- **Day/Night Cycle:** Different leader unit are more/less active during certain periods

### Player Character: The Rogue Larvae

**Starting Form:** Larvae - an independent consciousness seeking to carve its own evolutionary path

**Base Stats:**
- **Health Points:** 25 HP (low but fast regeneration)
- **Armor:** 10 (natural carapace protection)
- **Movement Speed:** 2.5 units/second (moderate mobility)
- **Starting Weapons:** Basic bio-spikes (weak ranged attack)

**Character Philosophy:** This Larvae has broken free from collective consciousness and operates as an independent agent. Unlike faction-bound Zerg, it can learn from and adapt to any evolutionary path, making alliances and enemies as needed to survive and thrive in the chaotic world of Zerus.

---

## Core Game Mechanics

### Real-Time Combat System

**Combat Structure:**
- **Movement:** WASD/Arrow keys for 4-directional movement
- **Primary Attack:** Mouse click or spacebar for continuous fire
- **Secondary Abilities:** Number keys 1-4 for special abilities
- **Interaction:** E key to collect items, or other interactions

**Damage System:**
**Base Damage Formula:**
```
Final Damage = (Base Damage + Bonus Damage + Upgrades) - (Armor + Upgrades)
Minimum Damage = 0.5 (cannot go below this)
```

**Combat Features:**
- **Real-time Action:** Continuous movement and shooting with physics-based projectiles
- **Cover System:** Use terrain and structures for protection from enemy fire
- **Multiple Enemies:** Engage 5-15 enemies simultaneously in larger battles
- **Environmental Kills:** Use hazards and destructible terrain tactically

### Mission and Objective System

**Mission Sources:**
- **Spawning Pool Communicators:** mission terminals scattered throughout territories
- **Field Contacts:** Named NPCs offering dynamic objectives
- **Environmental Missions:** Objectives triggered by exploring specific areas
- **Mini Bosses:** special zerg units extra evolved in some manner

**Mission Types:**

1. **Elimination Contracts**
   - Target specific enemy units or rival leaders
   - Reward: Resources, evolution (such as extra armor)
   - Difficulty: Scales with target strength and protection

2. **Territory Expansion**
   - Clear out contested areas and establish control
   - Reward: New evolution strain
   - Mechanics: Kill random number or enemies

3. **Resource Extraction**
   - Fight for valuable materials 
   - Reward: rare evolution paths


### Item and Pickup System

**Weapon Pickups:**
- **Bio-Weapons:** all weapons are bio an natural and evolved and not needed or availabe for pickup

- **Essence:** Essence is the genetic information of all life, key to Zerg evolution. They take it from prey to incorporate their strengths.

- **Scavenged Essence:** Salvaged Essence from other unit to unlock new evo or strain or upgrade

**Power-Up System:**
- **Temporary Abilities** (30-60 seconds duration)
  - *Metabolic Boost (adrenaline sack):* +50% movement and attack speed
  - *Hardened Carapace (protein sack):* +3 armor 
  - *Psionic Shield (mental Essence):* Absorb next 50 damage points

**Resource Collection:**
- **Direct Drops:** Minerals and vespene from defeated enemies (5-12% of enemy cost)
- **Environmental Nodes:** Resource deposits scattered throughout world (5-12% of local units cost)
- **Crate Crushing:** Destructible containers hide resources and items
- **Tributes:** Payment for completed tasks 

### Evolution and Morphing System

**Permanent Evolution:**
- **Tier Advancement:** Spend accumulated resources to unlock new base forms
- **Stat Enhancement:** Permanent improvements to health, armor, damage
- **Ability Slots:** Gain additional active and passive ability slots
- **Evolutionary Branches:** Choose specialization paths that affect gameplay style (stains and abilities ect.)

---

## World Design and Progression

### Territory-Based Zone Structure

**Zone 1: The Nursery Borderlands** (Tutorial Territory)
- **Leader Control:** Huge Drone
- **Enemy Level:** 1-15
- **Dominant Forces:** Weak feral Zerg, basic primal strains, larvae up to weak zerglings
- **Resources:** Abundant basic minerals, tutorial weapon caches
- **Objectives:** Learn combat, evlove to drone, help the huge drone to evolve

**Zone 2: Primal Coalition Heartland** (Early Game)
- **Leader Control:** huge Primal Zergling very evloved
- **Enemy Level:** 10-25
- **Dominant Forces:** primal Zergling, some evolved drones, weak roaches.
- **Resources:** Quality evolution materials, bio-weapon caches
- **Objectives:** defeat the huge Primal Zergling by evolving to a zergling, getting upgrades and strains and finding a powerful enough Psionic Shield.  

**Zone 3: The Contested Caverns** (Mid Game)
- **Leader Control:** Swarm Remnants vs. Feral Brotherhood
- **Enemy Level:** 20-40
- **Dominant Forces:** Advanced tech units, mutated experimentals
- **Resources:** Rare minerals, high-tech weapon systems
- **Objectives:** Major faction conflicts, territory wars over the caverns. Objective is to fight and take control over one of the minor caverns in order to evolve to a roach with best strains and upgrades. then again one of the minor caverns in order to evolve to a hydra with best strains and upgrades.

**Zone 4: The Volcanic Crucible** (Late Game)
- **Leader Control:** Feral Brotherhood stronghold
- **Enemy Level:** 35-55
- **Dominant Forces:** Elite zerg ground units
- **Resources:** Unique evolution catalysts, experimental technology
- **Objectives:** High-stakes missions, evolve to an ultralisk with best strains and upgrades.

**Zone 5: The Evolutionary Nexus** (End Game)
- **Leader Control:** All-around conflict zone
- **Enemy Level:** 50-75
- **Dominant Forces:** leaders, ancient primal guardians
- **Resources:** Ultimate evolution materials, legendary equipment
- **Objectives:** Final evolutionary ascension, find way to evolve to brutalisk, then to hybrid


---

## Technical Specifications

### Core Technology Stack

**Game Engine:**
- **THREE.js v0.134.0** - 3D graphics library but optimized for 2D real-time action and smart module for integration for realistic projectile and collision systems.
- **TypeScript 4.3.2** - TypeScript with strict typing for complex game state management
- **Vite 7.1.7** - Fast development server and build tool
- **Sass 1.43.5** - CSS preprocessing
- **Prettier 2.5.0** - Code formatting


**Real-Time Systems:**
- **Combat Engine:** 60fps action with predictive collision detection
- **AI System:** Behavior trees for leaders AI and dynamic territorial control
- **Particle System:** Efficient sprite-based effects for weapons and explosions
- **Audio Engine:** Spatial audio with dynamic mixing based on action intensity

**Data Architecture:**
```typescript
interface GameWorld {
  territories: Territory[];
  leaderUnit: UnitForm[];
  activeEvents: WorldEvent[];
  player: Player;
  timeOfDay: TimeState;
}

interface Player {
  currentForm: UnitForm;
  temporaryAbilities: ActiveAbility[];
  inventory: ItemInventory;
  evolution: EvolutionProgress;
}

interface Combat {
  activeBattles: Battle[];
  projectiles: Projectile[];
  explosions: Explosion[];
}
```

### Performance Optimization

**Real-Time Requirements:**
- **Frame Rate:** Solid 60 FPS during combat with up to 20 active enemies
- **Input Latency:** <16ms response time for movement and shooting
- **Memory Management:** Efficient object pooling for projectiles and effects
- **Load Balancing:** Dynamic quality scaling based on system performance

**Scalability Features:**
- **Entity Culling:** Only process off-screen entities within influence radius
- **Level-of-Detail:** Reduce complexity for distant objects and effects
- **Adaptive Quality:** Automatic graphics quality adjustment for performance
- **Asset Streaming:** Progressive loading of zone content as needed

---

## User Interface Design

### Action Game Interface

**HUD Elements:**
- **Health/Armor Bar:** Top-left corner with regeneration indicators
- **Ammo/Energy Display:** Bottom-right showing current weapon status
- **Minimap:** Top-right corner showing territory control and objectives
- **Active Abilities:** Bottom-center with cooldown timers and activation indicators
- **Reputation Meters:** Small faction standing indicators along screen edge

**Combat Interface:**
- **Crosshair System:** Dynamic crosshair showing accuracy and weapon type
- **Damage Indicators:** Floating numbers and directional damage indicators
- **Threat Indicators:** Screen-edge warnings for incoming attacks
- **Environmental Markers:** Highlight interactive objects and hazards

**Inventory and Progression:**
- **Quick Inventory:** Hotkey-accessible equipment switching
- **Evolution Menu:** Full-screen progression tree with detailed stats
- **Mission Briefing:** Immersive faction communication interfaces
- **Map Screen:** Detailed territory view with Leader Control visualization

### Control Scheme

**Primary Controls:**
```
Movement: WASD or Arrow Keys
Primary Attack: Left Mouse Button or Spacebar
Secondary Attack: Right Mouse Button
Abilities: Number Keys 1-4
Interact: E key
Inventory: I key
Map: M key
Mission Log: J key
```

**Advanced Controls:**
- **Precision Aiming:** Mouse for accurate directional shooting
- **Quick Commands:** Function keys for faction communications
- **Emergency Actions:** Shift combinations for retreat and defensive abilities
- **Context Actions:** Dynamic key prompts for environmental interactions

---

## Balancing and Progression Systems

### Combat Balance Framework

**Player Power Progression:**
- **Early Game:** Focus on movement and basic combat survival
- **Mid Game:** Multi-ability management 
- **Late Game:** Advanced forms 
- **End Game:** Ultimate evolution choices 

**Enemy Scaling:**
```typescript
interface EnemyScaling {
  baseLevel: number;
  territoryModifier: number; // +0 to +15 based on Leader Control strength
  groupSizeBonus: number; // +1 per additional enemy beyond first
}
```

**Resource Economy:**
- **Scarcity Phases:** Limited resources force choices
- **Abundance Phases:** Multiple upgrade paths available simultaneously
- **End Game Economy:** Focus shifts to rare evolution materials

---

## Audio and Visual Design

### Art Direction

**Visual Style:**
- **Aesthetic:** High-contrast 2D sprites with animation
- **Color Coding:** Faction-specific color schemes for instant recognition

**Environment Art:**
- **Texture Variety:** Rich jungle, crystalline, and volcanic biome differentiation
- **Destructible Elements:** Clear visual feedback for environmental interaction
- **Territory Markers:** Distinct visual cues for Leader Control boundaries

### Sound Design

**Combat Audio:**
- **Weapon Feedback:** Distinct sound signatures for all weapon types
- **Environmental Audio:** Spatial positioning for tactical audio cues
- **Enemy Communication:** Faction-specific audio cues for enemy behavior
- **Impact Sound:** Satisfying audio feedback for successful hits and eliminations

**Ambient Design:**
- **Territorial Atmosphere:** Different background audio for each zone
- **Evolution Audio:** Unique sound effects for morphing and ability activation

---

## AI and NPC Systems

### Faction AI Behavior

**AI Personality Systems:**
```typescript
interface FactionAI {
  aggressionLevel: number; // 0-100, affects attack frequency
  territorialInstinct: number; // 0-100, affects expansion behavior
  adaptationSpeed: number; // 0-100, affects response to player actions
}
```

**Dynamic AI Behaviors:**
- **Territorial Control:** AI leader unit actively expand and defend territory
- **Resource Competition:** AI competes for the same resource nodes as player
- **Adaptive Strategies:** AI learns from player behavior and adjusts tactics

### Mission Generation System

**Dynamic Mission Creation:**
- **Context-Aware:** Missions generated based on current world state
- **Player-Responsive:** Mission types adapt to player's preferred playstyle

**Mission Categories:**
1. **Assault Missions:** Direct combat against enemy strongholds
2. **Stealth Missions:** Infiltration and sabotage with optional combat
3. **Resource Missions:** Competitive collection under hostile conditions

---

### Competitive Elements

**Leaderboard Systems:**
- **Evolution Speed:** Fastest progression through evolution tiers
- **Combat Performance:** Kill/death ratios and combat effectiveness scores

**Achievement System:**
- **Territory Control:** Establish dominance in each zone
- **Evolution Mastery:** Unlock all possible evolutionary paths

