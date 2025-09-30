import { PlayerUpgrades } from '../upgrades/PlayerUpgrades';

export interface SpendingCallbacks {
	onUpgradeAttack: () => void;
	onUpgradeArmor: () => void;
	onSpendHealth: () => void;
	onPurchaseAbsorb: () => void;
}

export class SpendingPanel {
	private container: HTMLElement;
	private callbacks: SpendingCallbacks;

	// Button elements
	private attackButton: HTMLButtonElement;
	private armorButton: HTMLButtonElement;
	private healButton: HTMLButtonElement;
	private absorbButton: HTMLButtonElement;

	constructor(callbacks: SpendingCallbacks) {
		this.callbacks = callbacks;
		this.container = this.createPanel();
	}

	private createPanel(): HTMLElement {
		const panel = document.createElement('div');
		panel.className = 'spending-section';

		// Title
		const title = document.createElement('div');
		title.className = 'control-label';
		title.textContent = 'Spending';
		panel.appendChild(title);

		// Attack upgrade button
		this.attackButton = this.createButton('⚔️', 'ATK', () => this.callbacks.onUpgradeAttack());
		panel.appendChild(this.attackButton);

		// Armor upgrade button
		this.armorButton = this.createButton('🛡️', 'ARM', () => this.callbacks.onUpgradeArmor());
		panel.appendChild(this.armorButton);

		// Health spending button
		this.healButton = this.createButton('❤️', 'HEAL', () => this.callbacks.onSpendHealth());
		panel.appendChild(this.healButton);

		// Damage absorb button
		this.absorbButton = this.createButton('⚡', 'ABSORB', () => this.callbacks.onPurchaseAbsorb());
		panel.appendChild(this.absorbButton);

		return panel;
	}

	private createButton(icon: string, label: string, callback: () => void): HTMLButtonElement {
		const button = document.createElement('button');
		button.className = 'upgrade-button';

		const iconSpan = document.createElement('span');
		iconSpan.className = 'upgrade-icon';
		iconSpan.textContent = icon;

		const labelSpan = document.createElement('span');
		labelSpan.className = 'upgrade-label';
		labelSpan.textContent = label;

		const costSpan = document.createElement('span');
		costSpan.className = 'upgrade-cost';
		costSpan.textContent = '0M / 0G';

		button.appendChild(iconSpan);
		button.appendChild(labelSpan);
		button.appendChild(costSpan);

		button.addEventListener('click', callback);

		return button;
	}

	public updateButtons(
		currentMinerals: number,
		currentGas: number,
		currentEssence: number,
		upgrades: PlayerUpgrades,
		currentHP: number,
		maxHP: number,
		currentAbsorb: number
	): void {
		// Update attack button
		const attackCost = upgrades.getAttackUpgradeCost();
		const attackLevel = upgrades.getAttackLevel();
		this.updateButton(
			this.attackButton,
			`+${attackLevel + 1} ATK`,
			attackCost.minerals,
			attackCost.gas,
			currentMinerals >= attackCost.minerals && currentGas >= attackCost.gas
		);

		// Update armor button
		const armorCost = upgrades.getArmorUpgradeCost();
		const armorLevel = upgrades.getArmorLevel();
		this.updateButton(
			this.armorButton,
			`+${armorLevel + 1} ARM`,
			armorCost.minerals,
			armorCost.gas,
			currentMinerals >= armorCost.minerals && currentGas >= armorCost.gas
		);

		// Update heal button
		const missingHP = maxHP - currentHP;
		const canHeal = missingHP > 0 && currentMinerals >= 1;
		this.updateButton(
			this.healButton,
			missingHP > 0 ? `HEAL` : 'FULL HP',
			1,
			0,
			canHeal,
			`${currentHP}/${maxHP} HP`
		);

		// Update absorb button (1 essence = 10 absorb)
		const essenceCost = 1;
		const absorbGain = 10;
		const canBuyAbsorb = currentEssence >= essenceCost;
		this.updateButton(
			this.absorbButton,
			`+${absorbGain} ABSORB`,
			0, // No mineral cost
			0, // No gas cost
			canBuyAbsorb,
			`${currentAbsorb} shield | ${essenceCost}🐚`
		);
	}

	private updateButton(
		button: HTMLButtonElement,
		label: string,
		mineralCost: number,
		gasCost: number,
		canAfford: boolean,
		extraInfo?: string
	): void {
		const labelSpan = button.querySelector('.upgrade-label') as HTMLSpanElement;
		const costSpan = button.querySelector('.upgrade-cost') as HTMLSpanElement;

		labelSpan.textContent = label;

		if (extraInfo) {
			costSpan.textContent = extraInfo;
		} else {
			costSpan.textContent = `${mineralCost}M / ${gasCost}G`;
		}

		button.disabled = !canAfford;
	}

	public getContainer(): HTMLElement {
		return this.container;
	}

	public dispose(): void {
		if (this.container.parentNode) {
			this.container.parentNode.removeChild(this.container);
		}
	}
}