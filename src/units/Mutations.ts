/**
 * Mutations.ts
 *
 * Defines the mutation and evolution system for Zerg units based on
 * StarCraft 2: Heart of the Swarm campaign mechanics.
 *
 * Each unit has:
 * - 3 Temporary Mutations (changeable between missions)
 * - 2 Permanent Evolution Strains (irreversible choices)
 *
 * Data sourced from rag/rules.md lines 321-475
 */

export interface UnitMutation {
	name: string;
	mineralCost: number;
	gasCost: number;
	bonusAttSpeed: number; // Percentage bonus (e.g., 50 = +50% attack speed)
	bonusDmg: number; // Flat damage bonus
	bonusArmour: number; // Flat armor bonus
	bonusHP: number; // Flat HP bonus
	bonusRegen: number; //
	type: 'mutation' | 'evolution'; // Temporary mutation or permanent evolution
	description?: string; // Optional description for special abilities
	panelDesc: string; // Short description of stat changes for UI display
}

export interface UnitMorphOption {
	name: string;
	mineralCost: number;
	gasCost: number;
	mutations?: UnitMutation[]; // 5 mutations (3 temporary + 2 permanent)
}

/**
 * UnitMutations class
 * Central registry for all unit mutations and evolution strains
 */
export class UnitMutations {
	// Master list of all units with their morph costs and available mutations
	public static readonly UNIT_MORPH_OPTIONS: UnitMorphOption[] = [
		{
			name: 'Larvae',
			mineralCost: 0,
			gasCost: 0,
			mutations: [] // Larvae don't have mutations
		},
		{
			name: 'Drone',
			mineralCost: 50,
			gasCost: 0,
			mutations: [] // Drones don't have mutations in HotS
		},
		{
			name: 'Zergling',
			mineralCost: 25,
			gasCost: 0,
			mutations: [
				// Temporary Mutations
				{
					name: 'Hardened Carapace',
					mineralCost: 50,
					gasCost: 50,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 10,
					bonusRegen:0,
					type: 'mutation',
					description: 'Increases survivability in prolonged engagements',
					panelDesc: '+10 HP'
				},
				{
					name: 'Adrenal Overload',
					mineralCost: 200,
					gasCost: 200,
					bonusAttSpeed: 50,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen:0,
					type: 'mutation',
					description: 'Maximizes DPS for surgical strikes',
					panelDesc: '+50% attack speed'
				},
				{
					name: 'Metabolic Boost',
					mineralCost: 150,
					gasCost: 150,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen:1,
					type: 'mutation',
					description: '(+1/s regen) +60% movement speed - Enhances mobility for harassment and flanking',
					panelDesc: '+1/s regen'
				},
				// Permanent Evolution Strains
				{
					name: 'Raptor Strain',
					mineralCost: 150,
					gasCost: 150,
					bonusAttSpeed: 0,
					bonusDmg: 2,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen:0,
					type: 'evolution',
					description: 'Cliff jumping, leap attacks, terrain navigation - Mobile assault unit',
					panelDesc: '+2 damage'
				},
				{
					name: 'Swarmling Strain',
					mineralCost: 150,
					gasCost: 150,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen:2,
					type: 'evolution',
					description: '(+2/s regen)3 per egg, 2s morph time - Overwhelming numerical superiority',
					panelDesc: '+2/s regen'
				}
			]
		},
		{
			name: 'Baneling',
			mineralCost: 25,
			gasCost: 25,
			mutations: [
				// Temporary Mutations
				{
					name: 'Corrosive Acid',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'mutation',
					description: '100% damage to primary target - Ensures maximum damage to priority targets',
					panelDesc: '+100% damage to primary target'
				},
				{
					name: 'Rupture',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'mutation',
					description: '+50% blast radius - Increases area denial and crowd control',
					panelDesc: '+50% blast radius'
				},
				{
					name: 'Regenerative Acid',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'mutation',
					description: 'Explosion heals friendly units/structures - Tactical healing support',
					panelDesc: 'Explosion heals friendly units'
				},
				// Permanent Evolution Strains
				{
					name: 'Splitter Strain',
					mineralCost: 150,
					gasCost: 150,
					bonusAttSpeed: 0,
					bonusDmg: 5,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'evolution',
					description: 'Splits into smaller explosive units on detonation - Area denial',
					panelDesc: '+5 damage, splits into smaller banelings'
				},
				{
					name: 'Hunter Strain',
					mineralCost: 150,
					gasCost: 150,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'evolution',
					description: 'Cliff jumping, leap attacks - Eliminates terrain restrictions',
					panelDesc: 'Cliff jumping, leap attacks'
				}
			]
		},
		{
			name: 'Overlord',
			mineralCost: 100,
			gasCost: 0,
			mutations: [] // Overlords don't have mutations in standard HotS
		},
		{
			name: 'Roach',
			mineralCost: 75,
			gasCost: 25,
			mutations: [
				// Temporary Mutations
				{
					name: 'Hydriodic Bile',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 0,
					bonusDmg: 8,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'mutation',
					description: '+8 damage vs Light units - Specializes against infantry',
					panelDesc: '+8 damage vs Light'
				},
				{
					name: 'Adaptive Plating',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 3,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'mutation',
					description: '+3 armor when below 50% HP - Enhances survivability when critically damaged',
					panelDesc: '+3 armor when below 50% HP'
				},
				{
					name: 'Tunneling Claws',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'mutation',
					description: 'Full speed burrowed movement + 100% regen rate - Guerrilla tactics',
					panelDesc: 'Full speed burrowed move, +100% regen'
				},
				// Permanent Evolution Strains
				{
					name: 'Corpser Strain',
					mineralCost: 150,
					gasCost: 150,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'evolution',
					description: 'Spawns roachlings from killed enemies - Converts casualties to reinforcements',
					panelDesc: 'Spawns roachlings from kills'
				},
				{
					name: 'Vile Strain',
					mineralCost: 150,
					gasCost: 150,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'evolution',
					description: 'Attacks slow enemy movement/attack by 75% - Battlefield control',
					panelDesc: 'Attacks slow enemies by 75%'
				}
			]
		},
		{
			name: 'Hydralisk',
			mineralCost: 100,
			gasCost: 50,
			mutations: [
				// Temporary Mutations
				{
					name: 'Frenzy',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 50,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'mutation',
					description: '+50% attack speed for 15s (30s cooldown) - Burst damage capability',
					panelDesc: '+50% attack speed for 15s (30s cd)'
				},
				{
					name: 'Ancillary Carapace',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 20,
					bonusRegen: 0,
					type: 'mutation',
					description: 'Increases base survivability',
					panelDesc: '+20 HP'
				},
				{
					name: 'Grooved Spines',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'mutation',
					description: '+1 range (5→6) - Improves engagement flexibility and safety',
					panelDesc: '+1 range'
				},
				// Permanent Evolution Strains
				{
					name: 'Impaler Strain',
					mineralCost: 150,
					gasCost: 150,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'evolution',
					description: 'Single-target burrowed attacks, armor penetration - Anti-armor siege unit',
					panelDesc: 'Burrowed attacks, armor penetration'
				},
				{
					name: 'Lurker Strain',
					mineralCost: 150,
					gasCost: 150,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'evolution',
					description: 'Linear area attacks while burrowed - Area denial against light swarms',
					panelDesc: 'Linear area attacks while burrowed'
				}
			]
		},
		{
			name: 'Mutalisk',
			mineralCost: 100,
			gasCost: 100,
			mutations: [
				// Temporary Mutations
				{
					name: 'Vicious Glaive',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'mutation',
					description: '+3 additional bounces (total 6 targets) - Maximizes damage vs grouped enemies',
					panelDesc: '+3 bounces (6 total targets)'
				},
				{
					name: 'Rapid Regeneration',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'mutation',
					description: 'Health regeneration when out of combat (5s) - Sustained harassment',
					panelDesc: 'Regen when out of combat (5s)'
				},
				{
					name: 'Sundering Glaive',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 0,
					bonusDmg: 9,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'mutation',
					description: '+9 damage vs Armored, no bounce - Specializes against heavy units',
					panelDesc: '+9 damage vs Armored, no bounce'
				},
				// Permanent Evolution Strains
				{
					name: 'Brood Lord Strain',
					mineralCost: 150,
					gasCost: 150,
					bonusAttSpeed: 0,
					bonusDmg: 11,
					bonusArmour: 1,
					bonusHP: 105,
					bonusRegen: 0,
					type: 'evolution',
					description: '225 HP, 1 armor, 20 damage - Heavy siege unit with broodling spawning',
					panelDesc: '+105 HP, +1 armor, +11 damage'
				},
				{
					name: 'Viper Strain',
					mineralCost: 150,
					gasCost: 150,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 1,
					bonusHP: 30,
					bonusRegen: 0,
					type: 'evolution',
					description: '150 HP, 1 armor - Tactical support with Abduct, Blinding Cloud, Consume',
					panelDesc: '+30 HP, +1 armor, Abduct/Blinding Cloud'
				}
			]
		},
		{
			name: 'Queen',
			mineralCost: 150,
			gasCost: 0,
			mutations: [] // Queens don't have mutations in HotS
		},
		{
			name: 'Swarm Host',
			mineralCost: 100,
			gasCost: 75,
			mutations: [
				// Temporary Mutations
				{
					name: 'Burrow',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'mutation',
					description: 'Can spawn locusts while burrowed - Concealed siege capability',
					panelDesc: 'Spawn locusts while burrowed'
				},
				{
					name: 'Rapid Incubation',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 20,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'mutation',
					description: '+20% locust spawn rate - Increases sustained pressure',
					panelDesc: '+20% locust spawn rate'
				},
				{
					name: 'Pressurized Glands',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'mutation',
					description: 'Locusts attack air and ground - Provides anti-air capability',
					panelDesc: 'Locusts attack air and ground'
				},
				// Permanent Evolution Strains
				{
					name: 'Carrion Strain',
					mineralCost: 150,
					gasCost: 150,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'evolution',
					description: 'Flying locusts: +50% damage, +speed, -25% HP - Air-to-ground siege',
					panelDesc: 'Flying locusts: +50% damage, +speed'
				},
				{
					name: 'Creeper Strain',
					mineralCost: 150,
					gasCost: 150,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'evolution',
					description: 'Generates creep, Deep Tunnel ability - Enhanced strategic mobility',
					panelDesc: 'Generates creep, Deep Tunnel'
				}
			]
		},
		{
			name: 'Ultralisk',
			mineralCost: 275,
			gasCost: 200,
			mutations: [
				// Temporary Mutations
				{
					name: 'Burrow Charge',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'mutation',
					description: 'Underground charge attack - Surprise engagement initiation',
					panelDesc: 'Underground charge attack'
				},
				{
					name: 'Tissue Assimilation',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'mutation',
					description: 'Recovers 40% damage dealt as HP - Self-sustaining combat capability',
					panelDesc: 'Recovers 40% damage as HP'
				},
				{
					name: 'Monarch Blades',
					mineralCost: 100,
					gasCost: 100,
					bonusAttSpeed: 0,
					bonusDmg: 20,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'mutation',
					description: '+20 splash damage - Enhances crowd control against grouped enemies',
					panelDesc: '+20 splash damage'
				},
				// Permanent Evolution Strains
				{
					name: 'Noxious Strain',
					mineralCost: 150,
					gasCost: 150,
					bonusAttSpeed: 0,
					bonusDmg: 0,
					bonusArmour: 0,
					bonusHP: 0,
					bonusRegen: 0,
					type: 'evolution',
					description: 'Noxious Cloud (5 DPS), Toxic Blast (20 damage) - Area denial through poison',
					panelDesc: 'Noxious Cloud (5/s), Toxic Blast (20)'
				},
				{
					name: 'Torrasque Strain',
					mineralCost: 150,
					gasCost: 150,
					bonusAttSpeed: 0,
					bonusDmg: 10,
					bonusArmour: 2,
					bonusHP: 100,
					bonusRegen: 0,
					type: 'evolution',
					description: '600 HP, 4 armor, 45 damage - Reincarnation (60s cooldown) for battlefield persistence',
					panelDesc: '+100 HP, +2 armor, +10 damage, Reincarnation'
				}
			]
		}
	];

	/**
	 * Get mutations for a specific unit by name
	 */
	public static getMutationsByUnitName(unitName: string): UnitMutation[] {
		const unit = this.UNIT_MORPH_OPTIONS.find(u => u.name === unitName);
		return unit?.mutations || [];
	}

	/**
	 * Get all units with mutations
	 */
	public static getUnitsWithMutations(): string[] {
		return this.UNIT_MORPH_OPTIONS
			.filter(u => u.mutations && u.mutations.length > 0)
			.map(u => u.name);
	}

	/**
	 * Get mutation by unit name and mutation name
	 */
	public static getMutation(unitName: string, mutationName: string): UnitMutation | undefined {
		const mutations = this.getMutationsByUnitName(unitName);
		return mutations.find(m => m.name === mutationName);
	}

	/**
	 * Get only temporary mutations for a unit
	 */
	public static getTemporaryMutations(unitName: string): UnitMutation[] {
		return this.getMutationsByUnitName(unitName).filter(m => m.type === 'mutation');
	}

	/**
	 * Get only evolution strains for a unit
	 */
	public static getEvolutionStrains(unitName: string): UnitMutation[] {
		return this.getMutationsByUnitName(unitName).filter(m => m.type === 'evolution');
	}
}
