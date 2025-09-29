# Zerus Evolution: Product Requirements Document

## Executive Summary

**Project Name:** Zerus Evolution
**Genre:** Turn-based Monster Collection RPG
**Platform:** Web (HTML5/JavaScript)
**Target Audience:** Strategy game enthusiasts, StarCraft fans, retro RPG players
**Development Approach:** AI-assisted development with modular architecture

### Core Concept
Zerus Evolution combines the beloved mechanics of classic Pokémon (Red/Green) with the rich lore and universe of StarCraft 2. Players control a Larvae on the primal jungle world of Zerus, engaging in turn-based combat to consume other Zerg units, accumulate resources, and evolve into more powerful forms. Victory is achieved through consumption rather than capture, creating a unique survival-evolution gameplay loop.

---

## Game Overview

### Setting: The Primal World of Zerus

**Environmental Context:**
Zerus is the birthworld of the Zerg, transformed from a hostile ash world into a lush, dangerous jungle ecosystem. In the modern era, after Kerrigan's departure, primal Zerg continue their eternal evolutionary war across the planet's diverse biomes.

**World Description:**
- **Primal Jungle Canopy:** Dense overgrowth with filtered sunlight, home to smaller Zerg strains
- **Crystalline Caverns:** Underground networks rich in minerals and vespene deposits
- **Volcanic Highlands:** Rocky terrain where larger, more aggressive Zerg species dwell
- **Spawning Pools:** Ancient evolutionary sites where the most powerful primals gather
- **The Great Fissure:** A massive canyon system leading to the planet's core, final endgame area

**Atmospheric Elements:**
- Bioluminescent plants providing eerie lighting
- Creep patches that enhance Zerg movement and abilities
- Environmental hazards (acid pools, unstable terrain, psionic storms)
- Dynamic weather affecting combat and exploration

### Player Character: The Aspiring Larvae

**Starting Form:** Larvae - the most basic Zerg unit with unlimited evolutionary potential

**Core Stats:**
- **Health Points:** 25 HP
- **Armor:** 10 (high for early game balance)
- **Attack:** 0 (cannot attack until first evolution)
- **Speed:** 0.79 (slowest unit, vulnerability mechanic)
- **Special Ability:** *Survival Instinct* - 50% chance to avoid fatal damage once per encounter

**Character Philosophy:** Unlike other Zerg bound by the Swarm's collective will, your Larvae has developed independent consciousness. This unique trait allows evolutionary choices typically impossible in the rigid Zerg hierarchy, making every playthrough a personal evolutionary journey.

---

## Core Game Mechanics

### Turn-Based Combat System

**Combat Structure:**
1. **Initiative Phase:** Speed determines turn order
2. **Action Phase:** Each unit selects one action:
   - Attack (deal damage to opponent)
   - Defend (+50% damage reduction, gain priority next turn)
   - Special Ability (unit-specific powers)
   - Consume Attempt (only when opponent ≤20% HP)

**Damage Calculation:**
```
Base Damage = Attacker's Attack Value - Defender's Armor Value
Minimum Damage = 1 (attacks always deal at least 1 damage)
Bonus Damage = Type effectiveness modifiers
Critical Hits = 5% chance for 2x damage
```

**Victory Conditions:**
- **Consumption Victory:** Successfully consume opponent when they're at ≤20% HP
- **Standard Victory:** Reduce opponent to 0 HP (provides fewer resources)
- **Retreat:** Escape combat (available when player HP ≤30%)

### Resource Management System

**Primary Resources:**

1. **Minerals**
   - Gained: 1/10th of consumed unit's mineral cost
   - Usage: Evolution morphing, armor upgrades, special abilities
   - Example: Consuming a Roach (75M cost) grants 7-8 minerals

2. **Vespene Gas**
   - Gained: 1/10th of consumed unit's vespene cost
   - Usage: Advanced evolutions, ability upgrades, rare items
   - Example: Consuming a Mutalisk (100G cost) grants 10 vespene gas

3. **Biomass**
   - Gained: HP value of consumed unit ÷ 5
   - Usage: Temporary stat boosts, healing items, evolution catalysts
   - Special: Accumulates differently based on unit type consumed

**Resource Balance Examples:**
```
Consuming Zergling (25M cost) = 2-3 minerals + 7 biomass
Consuming Hydralisk (100M/50G cost) = 10 minerals + 5 gas + 18 biomass
Consuming Ultralisk (275M/200G cost) = 27 minerals + 20 gas + 100 biomass
```

### Evolution System

**Evolution Categories:**

1. **Tier 1 Evolutions** (Early Game)
   - **Zergling** (25M) - Fast, aggressive melee attacker
   - **Drone** (50M) - Utility unit with resource gathering abilities
   - **Overlord** (100M) - Defensive support with detection abilities

2. **Tier 2 Evolutions** (Mid Game)
   - **Roach** (75M/25G) - Tanky burrowing unit with regeneration
   - **Hydralisk** (100M/50G) - Ranged attacker with spine upgrades
   - **Queen** (150M) - Support unit with healing and creep abilities

3. **Tier 3 Evolutions** (Late Game)
   - **Mutalisk** (100M/100G) - Flying unit with bounce attacks
   - **Infestor** (100M/150G) - Psionic unit with mind control
   - **Ultralisk** (275M/200G) - Massive melee powerhouse

**Evolution Mechanics:**
- **Prerequisites:** Must have consumed at least one unit of the same evolutionary line
- **Stat Inheritance:** Carry forward 25% of accumulated upgrades
- **Unique Traits:** Each evolution unlocks exclusive abilities and upgrade paths
- **Branching Paths:** Some evolutions lock out others, encouraging replay value

### Upgrade System

**Upgrade Categories:**

1. **Combat Upgrades**
   - **Melee Attack:** +1/+2/+3 damage (Cost: 50M/100M/150M)
   - **Ranged Attack:** +1/+2/+3 damage (Cost: 50M/100M/150M)
   - **Carapace Armor:** +1/+2/+3 damage reduction (Cost: 75M/125M/175M)

2. **Biological Upgrades**
   - **Metabolic Boost:** +25% speed per level (Cost: 25G/50G/75G)
   - **Adrenal Glands:** +20% attack speed per level (Cost: 50G/100G/150G)
   - **Regeneration:** Heal 2/4/6 HP per turn (Cost: 30G/60G/90G)

3. **Evolutionary Upgrades**
   - **Psionic Sensitivity:** Unlock psionic abilities (Cost: 100G)
   - **Adaptive Camouflage:** 25% dodge chance (Cost: 75G)
   - **Primal Essence:** Gain primal-specific abilities (Cost: 150G + Biomass)

---

## World Design and Progression

### Zone Structure

**Zone 1: Nursery Groves** (Tutorial Area)
- **Enemy Level:** 1-10
- **Dominant Species:** Zerglings, basic Drones
- **Environmental Features:** Gentle creep coverage, abundant minerals
- **Story Context:** Recently hatched primals learning survival basics

**Zone 2: Hunting Territories** (Early Game)
- **Enemy Level:** 8-20
- **Dominant Species:** Roaches, Hydralisks, Queens
- **Environmental Features:** Dense jungle, burrowable terrain
- **Story Context:** Established primal hunting grounds with territorial conflicts

**Zone 3: The Spire Reaches** (Mid Game)
- **Enemy Level:** 18-35
- **Dominant Species:** Mutalisks, Corruptors, evolved Roaches
- **Environmental Features:** Vertical terrain, aerial combat zones
- **Story Context:** Ancient spire structures where flying strains dominate

**Zone 4: Deep Cavern Networks** (Late Mid Game)
- **Enemy Level:** 30-50
- **Dominant Species:** Infestors, Swarm Hosts, Lurkers
- **Environmental Features:** Underground mazes, psionic interference
- **Story Context:** Subterranean realm of the most cunning Zerg minds

**Zone 5: The Prime Spawning Grounds** (End Game)
- **Enemy Level:** 45-70
- **Dominant Species:** Ultralisks, Primal Kerrigan variants, Ancient Zerg
- **Environmental Features:** Massive organic structures, unstable evolutionary energy
- **Story Context:** The original spawning pools where the first Zerg evolved

### Encounter Design

**Wild Encounters:** (75% of battles)
- Random encounters while exploring
- Enemy difficulty scales with current zone
- Higher chance of finding rare strains in specific biomes
- Weather and time-of-day affect encounter rates

**Elite Encounters:** (20% of battles)
- Named unique Zerg with enhanced stats and special abilities
- Guard valuable resources or evolutionary materials
- Often possess rare upgrade components
- May require specific strategies or evolutions to defeat

**Boss Encounters:** (5% of battles)
- Massive primal Zerg controlling territory sections
- Multi-phase battles with evolving strategies
- Defeating bosses unlocks new zones or special evolutions
- Each boss represents a different aspect of Zerg evolution (speed, strength, cunning, etc.)

---

## Technical Specifications

### Core Technology Stack

**Frontend Framework:**
- **Engine:** Phaser.js 3.70+ for 2D game development
- **Language:** TypeScript for type safety and scalability
- **UI Framework:** Custom UI components with retro pixel art styling
- **Audio:** Web Audio API with OGG/MP3 fallback support

**Data Management:**
- **Save System:** LocalStorage with JSON serialization
- **Unit Database:** Static JSON files with all unit stats and abilities
- **Configuration:** YAML files for easy balance adjustments
- **Asset Management:** Webpack-based bundling with lazy loading

**Development Tools:**
- **Build System:** Vite (already configured in project)
- **Testing:** Jest for unit testing, Playwright for integration testing
- **Asset Pipeline:** Custom scripts for sprite sheet generation
- **Performance:** Built-in profiling tools and memory management

### Architecture Design

**Modular Component System:**
```typescript
interface GameUnit {
  id: string;
  name: string;
  stats: UnitStats;
  abilities: Ability[];
  evolutionPaths: EvolutionPath[];
  consumeValue: ResourceBundle;
}

interface CombatSystem {
  initiateBattle(player: GameUnit, enemy: GameUnit): Battle;
  calculateDamage(attacker: GameUnit, defender: GameUnit): number;
  processConsumption(winner: GameUnit, loser: GameUnit): ResourceBundle;
}

interface EvolutionSystem {
  canEvolve(unit: GameUnit, targetForm: string): boolean;
  performEvolution(unit: GameUnit, targetForm: string): GameUnit;
  calculateEvolutionCost(current: GameUnit, target: string): ResourceBundle;
}
```

**Save System Structure:**
```typescript
interface GameSave {
  playerUnit: GameUnit;
  resources: ResourceBundle;
  currentZone: string;
  unlockedEvolutions: string[];
  defeatedEnemies: string[];
  completedAchievements: string[];
  playtime: number;
  difficulty: DifficultyLevel;
}
```

### Performance Requirements

**Target Specifications:**
- **Loading Time:** <3 seconds initial load, <1 second zone transitions
- **Frame Rate:** 60 FPS during exploration, 30 FPS minimum during combat
- **Memory Usage:** <500MB RAM consumption
- **Storage:** <100MB local storage for saves and cache
- **Compatibility:** Modern browsers (Chrome 80+, Firefox 75+, Safari 13+)

**Optimization Strategies:**
- Sprite atlasing for reduced texture memory
- Audio compression and selective loading
- Lazy loading of zone data and assets
- Client-side caching with versioning
- Progressive loading for large sprite animations

---

## User Interface Design

### Visual Style Guide

**Art Direction:**
- **Aesthetic:** Retro 16-bit pixel art reminiscent of classic Pokémon games
- **Color Palette:** Zerus jungle themes (deep greens, purple bio-luminescence, orange/red volcanic accents)
- **Typography:** Pixelated fonts with high contrast for readability
- **Animation Style:** Frame-by-frame sprite animation with smooth transitions

**Screen Layouts:**

**Overworld Interface:**
- **Minimap:** Top-right corner showing current zone layout
- **Resource Display:** Top-left showing Minerals/Vespene/Biomass
- **Unit Status:** Bottom panel with HP, abilities, and current buffs
- **Menu Access:** Unified menu system (Evolution, Upgrades, Options)

**Combat Interface:**
- **Unit Display:** Large sprites centered on screen during battle
- **Action Menu:** Bottom panel with Attack/Defend/Special/Consume options
- **Health Bars:** Prominent HP display with damage number popup
- **Battle Log:** Scrollable text area showing combat narrative

**Evolution Interface:**
- **Evolution Tree:** Visual branching diagram of available paths
- **Resource Requirements:** Clear cost display with current vs. required
- **Stat Comparison:** Before/after stat changes with upgrade previews
- **Confirmation Dialog:** Final evolution choice with irreversibility warning

### Accessibility Features

**Vision Accessibility:**
- High contrast mode for text and UI elements
- Colorblind-friendly palette options
- Scalable UI elements (150%, 200% zoom options)
- Screen reader compatibility for text elements

**Motor Accessibility:**
- Customizable key bindings
- Single-button play mode option
- Adjustable input timing windows
- Mouse and keyboard alternative controls

**Cognitive Accessibility:**
- Optional tutorial reminders and tips system
- Simplified UI mode with reduced visual complexity
- Save-anywhere functionality
- Pause-and-plan combat option

---

## Balancing and Progression

### Resource Economy Design

**Early Game Balance** (Levels 1-20):
- **Resource Scarcity:** Limited minerals force strategic evolution choices
- **Combat Difficulty:** Enemies slightly weaker to encourage exploration
- **Growth Rate:** Rapid early progression to establish core mechanics
- **Safety Nets:** Free healing at specific safe zones

**Mid Game Balance** (Levels 20-45):
- **Resource Abundance:** Sufficient resources for multiple upgrade paths
- **Combat Complexity:** Introduction of multi-ability enemies
- **Strategic Depth:** Evolution choices begin affecting encounter outcomes
- **Risk/Reward:** Optional dangerous areas with valuable rewards

**End Game Balance** (Levels 45-70+):
- **Resource Investment:** Major decisions require significant resource commitment
- **Combat Mastery:** Enemies require optimal strategy and timing
- **Replayability:** Multiple viable evolution paths for different playstyles
- **Achievement Hunting:** Post-game content and completion challenges

### Difficulty Scaling

**Dynamic Difficulty System:**
```typescript
interface DifficultyCalculation {
  baseLevel: number;
  playerEvolutionTier: number;
  zoneProgressionBonus: number;
  playerPerformanceModifier: number; // -2 to +3 based on win/loss ratio
}

// Enemy level = baseLevel + evolutionTier + zoneBonus + performance
```

**Difficulty Options:**
- **Survival Mode:** Permadeath with enhanced rewards
- **Standard Mode:** Normal progression with respawn penalties
- **Explorer Mode:** Reduced combat difficulty, focus on discovery
- **Custom Mode:** Player-adjustable parameters for personalized experience

### Achievement System

**Evolution Achievements:**
- "First Steps" - Complete first evolution
- "Adaptive Master" - Unlock all Tier 2 evolutions
- "Apex Predator" - Reach maximum evolution tier
- "Genetic Diversity" - Achieve 10 different evolution forms across playthroughs

**Combat Achievements:**
- "Perfect Hunter" - Win 50 battles through consumption
- "Survival Instinct" - Win 10 battles at critical health
- "Tactical Genius" - Win battles against 5 different unit types in one day
- "Primal Dominance" - Defeat all boss encounters

**Exploration Achievements:**
- "World Walker" - Visit all zones in the game
- "Resource Hoarder" - Accumulate 1000+ of each resource type
- "Lore Keeper" - Discover all environmental story elements
- "Speed Evolution" - Complete the game in under 10 hours

---

## AI Development Integration

### AI-Friendly Data Structures

**JSON Configuration Format:**
```json
{
  "units": {
    "larvae": {
      "baseStats": {"hp": 25, "attack": 0, "armor": 10, "speed": 0.79},
      "evolutionPaths": ["zergling", "drone", "overlord"],
      "abilities": ["survivalInstinct"],
      "cost": {"minerals": 0, "vespene": 0, "biomass": 0}
    },
    "zergling": {
      "baseStats": {"hp": 35, "attack": 5, "armor": 0, "speed": 2.25},
      "evolutionPaths": ["baneling"],
      "abilities": ["burrow", "metabolicBoost"],
      "cost": {"minerals": 25, "vespene": 0, "biomass": 0}
    }
  },
  "abilities": {
    "survivalInstinct": {
      "type": "passive",
      "effect": "avoidFatalDamage",
      "chance": 0.5,
      "cooldown": "once_per_battle"
    }
  }
}
```

**Modular Code Architecture:**
```typescript
// Enable easy AI modifications and extensions
abstract class GameSystem {
  abstract initialize(): void;
  abstract update(deltaTime: number): void;
  abstract serialize(): any;
  abstract deserialize(data: any): void;
}

class EvolutionSystem extends GameSystem {
  // AI can easily modify evolution logic
  calculateEvolutionOptions(unit: GameUnit, resources: Resources): EvolutionOption[] {
    return this.evolutionRules.filter(rule => rule.canApply(unit, resources));
  }
}
```

### Development Phases

**Phase 1: Core Systems** (4-6 weeks)
- Basic combat system implementation
- Resource management and accumulation
- Simple UI for testing and validation
- Unit stat loading from JSON configuration

**Phase 2: Evolution Mechanics** (3-4 weeks)
- Evolution tree implementation
- Upgrade system integration
- Save/load functionality
- Basic art asset integration

**Phase 3: World and Content** (4-6 weeks)
- Zone creation and enemy placement
- Environmental storytelling elements
- Audio integration and sound effects
- Balance testing and adjustment

**Phase 4: Polish and Release** (2-3 weeks)
- Bug fixing and optimization
- Achievement system implementation
- Accessibility feature addition
- Final balance pass and testing

### Success Metrics and KPIs

**Player Engagement:**
- **Average Session Time:** Target 45-60 minutes per play session
- **Completion Rate:** 70%+ of players reaching mid-game content
- **Return Rate:** 60%+ of players returning within 48 hours
- **Evolution Diversity:** Players exploring at least 5 different evolution paths

**Technical Performance:**
- **Load Time:** <3 seconds for 95% of players
- **Crash Rate:** <0.1% across all supported browsers
- **Save System Reliability:** 99.9% successful save/load operations
- **Memory Usage:** Staying under 500MB for 95% of gameplay sessions

**Content Balance:**
- **Battle Win Rate:** 75-85% for standard difficulty players
- **Resource Accumulation:** Steady progression curve without excessive grinding
- **Difficulty Spikes:** No single encounter causing >20% player dropout
- **Replayability:** 40%+ of completing players starting new playthroughs

---

## Marketing and Community Features

### Unique Selling Proposition

**"Evolution Through Consumption"**
Unlike traditional monster collection games where you capture creatures, Zerus Evolution features a darker, more primal progression system where victory means consuming your opponents. This creates a unique moral dynamic combined with strategic resource management that sets it apart from other games in the genre.

**Key Differentiators:**
- **Asymmetric Evolution:** Every playthrough can result in completely different evolutionary paths
- **Rich Lore Integration:** Deep StarCraft 2 universe integration with original story elements
- **Strategic Depth:** Resource management adds economic strategy to classic RPG combat
- **Mature Themes:** Addresses survival, evolution, and the cycle of consumption in nature

### Community Integration

**Social Features:**
- **Evolution Gallery:** Share screenshots of unique evolutionary combinations
- **Strategy Guides:** Community-created guides for optimal progression paths
- **Challenge Runs:** User-generated challenge modes and restrictions
- **Speedrun Leaderboards:** Fastest completion times with different evolution strategies

**Content Creation Support:**
- **Modding API:** JSON-based configuration system for easy community modifications
- **Custom Zones:** Tools for creating and sharing new areas and encounters
- **Balance Feedback:** In-game reporting system for balance suggestions
- **Translation Support:** Localization framework for community translations

---

## Risk Assessment and Mitigation

### Technical Risks

**Performance Issues:**
- **Risk:** Game may run poorly on older hardware/browsers
- **Mitigation:** Extensive compatibility testing, scalable quality options
- **Monitoring:** Real-time performance metrics and user feedback collection

**Save Data Corruption:**
- **Risk:** Players losing progression due to save system failures
- **Mitigation:** Multiple backup saves, cloud save integration, export functionality
- **Recovery:** Automated save validation and recovery systems

### Design Risks

**Balance Issues:**
- **Risk:** Certain evolution paths being overpowered or underpowered
- **Mitigation:** Extensive playtesting, data-driven balance adjustments
- **Response:** Rapid patch deployment system for quick balance fixes

**Content Complexity:**
- **Risk:** Game being too complex for target audience
- **Mitigation:** Robust tutorial system, difficulty options, streamlined UI
- **Validation:** Regular user testing sessions and feedback integration

### Legal and IP Risks

**StarCraft IP Usage:**
- **Risk:** Potential trademark or copyright infringement claims
- **Mitigation:** Clear fair use documentation, original art assets, transformative elements
- **Alternative:** Pivot to generic sci-fi setting if necessary while maintaining core mechanics

---

## Future Expansion Opportunities

### Post-Launch Content

**Major Expansions:**
- **"The Overmind's Legacy":** New zone featuring corrupted Zerg with unique mechanics
- **"Protoss Expeditions":** Adding Protoss enemies with completely different combat dynamics
- **"Terran Incursions":** Human military encounters requiring different strategic approaches

**Feature Additions:**
- **Multiplayer Battles:** Turn-based PvP with evolution restrictions
- **Breeding System:** Combine genetic traits from different evolutionary paths
- **Environmental Evolution:** Unit adaptations based on biome exposure
- **Prestige System:** New Game+ with enhanced difficulty and exclusive content

### Platform Expansion

**Mobile Adaptation:**
- Touch-optimized UI for tablets and smartphones
- Simplified graphics options for lower-end devices
- Cloud save synchronization across platforms
- Reduced session length optimization for mobile play patterns

**Desktop Distribution:**
- Steam release with achievements and workshop support
- Standalone executable with enhanced graphics options
- Integration with Steam friends for comparison and challenges
- Native OS notifications for long-term engagement

---

## Conclusion

Zerus Evolution represents a unique fusion of beloved classic game mechanics with rich science fiction lore, creating an engaging evolution-based RPG experience. The comprehensive technical specification and AI-friendly architecture ensure that the game can be effectively developed with AI assistance while maintaining high quality standards.

The project's modular design, extensive configuration systems, and clear progression mechanics make it ideal for iterative development and community involvement. The focus on replayability through diverse evolutionary paths ensures long-term player engagement, while the rich StarCraft 2 universe integration provides depth and authenticity for science fiction fans.

Success metrics and risk mitigation strategies provide clear development guidance, while expansion opportunities ensure the game's long-term viability and growth potential. This PRD serves as a comprehensive blueprint for creating a distinctive and engaging gaming experience that honors both its inspirations while carving out its own unique identity in the monster collection genre.

**Development Timeline Estimate:** 14-18 weeks for full release
**Target Launch Platform:** Web browsers with future mobile/desktop expansion
**Success Definition:** 10,000+ active players within first month, 85% positive user reviews, sustainable community growth

---

*Document Version: 1.0*
*Last Updated: September 2025*
*Total Word Count: ~8,500 words*