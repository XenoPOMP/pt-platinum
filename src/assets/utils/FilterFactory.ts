import { Filter } from '@type/Filter';

/**
 * This factory returns new {@link Filter} instance.
 *
 * @param filterType
 * @param label
 * @constructor
 */
export const FilterFactory = (
	filterType: ConstructorParameters<typeof Filter>[0],
	label: ConstructorParameters<typeof Filter>[1]
) => {
	return new Filter(filterType, label);
};
