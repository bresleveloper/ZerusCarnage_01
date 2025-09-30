/**
 * PlayerUpgrades - Manages permanent upgrades that persist across unit morphs
 *
 * Upgrade Types:
 * - Attack: Increases damage dealt (cost: 100+50n M/G per level)
 * - Armor: Reduces damage taken (cost: 150+50n M/G per level)
 */
export class PlayerUpgrades {
	private attackLevel: number = 0;
	private armorLevel: number = 0;

	// Getters for current levels
	public getAttackLevel(): number {
		return this.attackLevel;
	}

	public getArmorLevel(): number {
		return this.armorLevel;
	}

	// Get combat bonuses (each level = +1)
	public getAttackBonus(): number {
		return this.attackLevel;
	}

	public getArmorBonus(): number {
		return this.armorLevel;
	}

	// Upgrade methods (increment levels)
	public upgradeAttack(): void {
		this.attackLevel++;
	}

	public upgradeArmor(): void {
		this.armorLevel++;
	}

	// Cost calculation for next level
	public getAttackUpgradeCost(): { minerals: number; gas: number } {
		const nextLevel = this.attackLevel + 1;
		const cost = 100 + (this.attackLevel * 50);
		return { minerals: cost, gas: cost };
	}

	public getArmorUpgradeCost(): { minerals: number; gas: number } {
		const nextLevel = this.armorLevel + 1;
		const cost = 150 + (this.armorLevel * 50);
		return { minerals: cost, gas: cost };
	}

	// Debug info
	public getInfo(): string {
		return `Attack: +${this.attackLevel} | Armor: +${this.armorLevel}`;
	}
}