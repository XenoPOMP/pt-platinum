import cn from 'classnames';
import { CSSProperties, FC } from 'react';

import { Filter } from '@type/Filter';

import styles from './FilterGroup.module.scss';
import type { FilterGroupProps } from './FilterGroup.props';

export const FilterBadge: FC<{ filter: Filter }> = ({ filter }) => {
	const label = filter.displayName;
	const colors = filter.colors;

	return (
		<div
			className={cn(styles.filter)}
			style={
				{
					'--filter-back': colors.background,
					'--filter-font': colors.border,
				} as CSSProperties
			}
		>
			{label}
		</div>
	);
};

const FilterGroup: FC<FilterGroupProps> = ({ filters }) => {
	return (
		<div className={cn(styles.filterGroup)}>
			{filters?.map((filter, index) => (
				<FilterBadge filter={filter} key={`filter-${index}-for-${name}`} />
			))}
		</div>
	);
};

export default FilterGroup;
