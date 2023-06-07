import { FilterTypes } from '@type/FilterTypes';

/**
 * Achievement`s filter class.
 *
 * @constructor
 */
export class Filter {
	private readonly label?: string;
	private readonly filterType: FilterTypes;

	constructor(filterType: FilterTypes, label?: string) {
		this.filterType = filterType;
		this.label = label;
	}

	/**
	 * Constructs CSS var string.
	 *
	 * @param input    variable name.
	 * @private
	 *
	 * @return {string}   var(input).
	 */
	private var(input: string) {
		return `var(${input})`;
	}

	get displayName() {
		return this.label;
	}

	get colors(): {
		background: string;
		border: string;
	} {
		switch (this.filterType) {
			case FilterTypes.worldOne: {
				return {
					background: 'var(--bad-world-one-back)',
					border: 'var(--bad-world-one-font)',
				};
			}

			case FilterTypes.worldTwo: {
				return {
					background: 'var(--bad-world-two-back)',
					border: 'var(--bad-world-two-font)',
				};
			}

			case FilterTypes.worldThree: {
				return {
					background: 'var(--bad-world-three-back)',
					border: 'var(--bad-world-three-font)',
				};
			}

			case FilterTypes.worldFour: {
				return {
					background: 'var(--bad-world-four-back)',
					border: 'var(--bad-world-four-font)',
				};
			}

			case FilterTypes.worldFive: {
				return {
					background: 'var(--bad-world-five-back)',
					border: 'var(--bad-world-five-font)',
				};
			}

			case FilterTypes.dependsOn: {
				return {
					background: 'var(--bad-required-back)',
					border: 'var(--bad-required-font)',
				};
			}

			case FilterTypes.pizzaScape: {
				return {
					background: 'var(--bad-pizzascape-back)',
					border: 'var(--bad-pizzascape-font)',
				};
			}

			case FilterTypes.ancientCheese: {
				return {
					background: 'var(--bad-anc-cheese-back)',
					border: 'var(--bad-anc-cheese-font)',
				};
			}

			case FilterTypes.bloodSauceDungeon: {
				return {
					background: 'var(--bad-bloodsauce-dungeon-back)',
					border: 'var(--bad-bloodsauce-dungeon-font)',
				};
			}

			case FilterTypes.space: {
				return {
					background: 'var(--bad-oregano-back)',
					border: 'var(--bad-oregano-font)',
				};
			}

			case FilterTypes.wasteyard: {
				return {
					background: 'var(--bad-wasteyard-back)',
					border: 'var(--bad-wasteyard-font)',
				};
			}

			case FilterTypes.farm: {
				return {
					background: this.var('--bad-farm-back'),
					border: this.var('--bad-farm-font'),
				};
			}

			case FilterTypes.saloon: {
				return {
					background: this.var('--bad-saloon-back'),
					border: this.var('--bad-saloon-font'),
				};
			}

			case FilterTypes.crust: {
				return {
					background: this.var('--bad-crust-back'),
					border: this.var('--bad-crust-font'),
				};
			}

			case FilterTypes.lario: {
				return {
					background: this.var('--bad-lario-back'),
					border: this.var('--bad-lario-font'),
				};
			}

			case FilterTypes.boss: {
				return {
					background: this.var('--bad-boss-back'),
					border: this.var('--bad-boss-font'),
				};
			}

			case FilterTypes.golf: {
				return {
					background: this.var('--bad-golf-back'),
					border: this.var('--bad-golf-font'),
				};
			}

			case FilterTypes.pigCity: {
				return {
					background: this.var('--bad-pigcity-back'),
					border: this.var('--bad-pigcity-font'),
				};
			}

			case FilterTypes.thatLevel: {
				return {
					background: this.var('--bad-that-level-back'),
					border: this.var('--bad-that-level-font'),
				};
			}
		}
	}
}
