// Combat and interaction rules for different unit types
// This system determines what units can kill each other and what they can harvest

export interface CombatRule {
	attacker: string;   // Unit type name
	target: string;     // Unit type or resource type
	canKill: boolean;   // Can cause game over to player
	canEat: boolean;    // Can harvest/consume
	reward: number;     // Mineral reward if eaten
}

export class CombatRulesEngine {
	private rules: CombatRule[] = [];

	constructor() {
		this.initializeRules();
	}

	private initializeRules() {
		// Larvae rules: Dies to Drone, can eat bushes
		this.addRule('Drone', 'Larvae', true, false, 0);
		this.addRule('Larvae', 'Bush', false, true, 0); // Reward determined by bush

		// Drone rules: Immune to Drone and Larvae, can eat trees and bushes
		this.addRule('Drone', 'Drone', false, false, 0);
		this.addRule('Larvae', 'Drone', false, false, 0);
		this.addRule('Drone', 'Bush', false, true, 0); // Reward determined by bush
		this.addRule('Drone', 'Tree', false, true, 20);

		// Zergling rules: Immune to Zergling, vulnerable to Zergling as Drone, can eat Larvae and Drones
		this.addRule('Drone', 'Zergling', false, false, 0); // Drone can't kill Zergling
		this.addRule('Zergling', 'Zergling', false, false, 0); // Zergling can't kill Zergling
		this.addRule('Zergling', 'Larvae', true, true, 25); // Zergling can kill player Larvae AND eat enemy Larvae for 25 minerals
		this.addRule('Zergling', 'Drone', true, true, 50); // Enemy Zergling CAN kill player Drone, but player Zergling can eat enemy Drone (eating checked first)
	}

	private addRule(attacker: string, target: string, canKill: boolean, canEat: boolean, reward: number) {
		this.rules.push({ attacker, target, canKill, canEat, reward });
	}

	// Check if attacker can kill the player (cause game over)
	public canKill(attackerType: string, playerType: string): boolean {
		const rule = this.rules.find(r => r.attacker === attackerType && r.target === playerType);
		return rule ? rule.canKill : false; // Default: safe/non-lethal if no rule specified
	}

	// Check if player can eat/harvest a target
	public canEat(playerType: string, targetType: string): boolean {
		const rule = this.rules.find(r => r.attacker === playerType && r.target === targetType);
		return rule ? rule.canEat : false; // Default: can't eat if no rule specified
	}

	// Get reward for eating a target
	public getReward(playerType: string, targetType: string): number {
		const rule = this.rules.find(r => r.attacker === playerType && r.target === targetType);
		return rule ? rule.reward : 0;
	}

	// Check if player is immune to an attacker
	public isImmuneTo(playerType: string, attackerType: string): boolean {
		return !this.canKill(attackerType, playerType);
	}

	// Check if two units should fight (real-time combat) instead of instant kill/eat
	// Returns true for evolved units (all except Larvae)
	public shouldFight(unit1Type: string, unit2Type: string): boolean {
		// Larvae never fight - they are instantly eaten
		if (unit1Type === 'Larvae' || unit2Type === 'Larvae') {
			return false;
		}

		// All other evolved units (Drone, Zergling, etc.) should fight
		return true;
	}
}