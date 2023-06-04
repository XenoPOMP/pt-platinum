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

	get displayName() {
		return this.label;
	}

	get colors() {
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
		}
	}
}
