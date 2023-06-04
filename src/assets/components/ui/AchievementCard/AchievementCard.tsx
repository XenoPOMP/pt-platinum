import cn from 'classnames';
import { CSSProperties, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AchievementMark } from '@redux/reducers/marks.slice';
import IStore from '@redux/types/redux-types';

import ProgressiveImage from '@ui/ProgressiveImage/ProgressiveImage';

import useLocalization from '@hooks/useLocalization';

import { Filter } from '@type/Filter';

import styles from './AchievementCard.module.scss';
import type { AchievementCardProps } from './AchievementCard.props';

const AchievementCard: FC<AchievementCardProps> = ({ achievement }) => {
	const { name, pictureUrl, shown } = achievement;

	const loc = useLocalization();
	const { title, description, filters } = loc.pages.main.achievements[name];

	const FilterBadge: FC<{ filter: Filter }> = ({ filter }) => {
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

	return (
		<>
			{shown && (
				<Link
					to={`/articles/${name}`}
					className={cn(styles.card, styles.rowView)}
				>
					<div className={cn(styles.avatarBox)}>
						<ProgressiveImage
							loaderColorScheme={{
								backgroundColor: 'transparent',
							}}
							src={pictureUrl}
							alt={name}
						/>
					</div>

					<section>
						<div className={cn(styles.title)}>
							<h3>{title}</h3>

							<div className={cn(styles.filterGroup)}>
								{filters?.map((filter, index) => (
									<FilterBadge
										filter={filter}
										key={`filter-${index}-for-${name}`}
									/>
								))}
							</div>
						</div>

						<i className={cn(styles.desc)}>{description}</i>
					</section>
				</Link>
			)}
		</>
	);
};

export default AchievementCard;
