import cn from 'classnames';
import { FC, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TextOverflow from 'react-text-overflow';

import {
	AchievementMark,
	changeCompletion,
	changeShown,
} from '@redux/reducers/marks.slice';

import CompletionBadge from '@ui/CompletionBadge/CompletionBadge';
import FilterGroup from '@ui/FilterGroup/FilterGroup';
import ProgressiveImage from '@ui/ProgressiveImage/ProgressiveImage';

import useLocalization from '@hooks/useLocalization';
import { useTaskbarOptions } from '@hooks/useTaskbarOptions';

import { PropsWith } from '@type/PropsWith';

import styles from './AchievementCard.module.scss';
import type { AchievementCardProps } from './AchievementCard.props';

const AchievementCard: FC<AchievementCardProps> = ({ achievement }) => {
	const { name, pictureUrl, shown, completed } = achievement;

	// const { name, pictureUrl, shown, completed } = useMemo<
	// 	Pick<AchievementMark, 'name' | 'pictureUrl' | 'shown' | 'completed'>
	// >(
	// 	() => ({
	// 		name: achievement.name,
	// 		pictureUrl: achievement.pictureUrl,
	// 		shown: achievement.shown,
	// 		completed: achievement.completed,
	// 	}),
	// 	[achievement]
	// );

	const loc = useLocalization();
	const { title, description, filters } = loc.pages.main.achievements[name];

	const { search, showCompleted, taskbarFilters, gridView } =
		useTaskbarOptions();
	const dispatch = useDispatch();

	const showCard = (): void => {
		dispatch(
			changeShown({
				name,
				shown: true,
			})
		);
	};

	const hideCard = (): void => {
		dispatch(
			changeShown({
				name,
				shown: false,
			})
		);
	};

	/** Link to the connected article. */
	const articleLink = `/articles/${name}`;

	/**
	 * This component wraps card in Link.
	 *
	 * @param children
	 * @constructor
	 */
	const WrapInLink: FC<PropsWith<'children', {}>> = ({ children }) => {
		return <Link to={articleLink}>{children}</Link>;
	};

	/** Card`s body. */
	const Body: FC<unknown> = () => {
		return (
			<article
				className={cn(
					styles.card,
					gridView === 'row' && styles.rowView,
					gridView === 'grid' && styles.gridView
				)}
			>
				<div
					className={cn(styles.avatarBox)}
					onClick={() => {
						dispatch(
							changeCompletion({
								name,
								value: !completed,
							})
						);
					}}
				>
					<ProgressiveImage
						loaderColorScheme={{
							backgroundColor: 'transparent',
						}}
						src={pictureUrl}
						alt={name}
					/>

					<CompletionBadge completed={completed} />
				</div>

				<Link to={articleLink}>
					<section>
						<div className={cn(styles.title)}>
							<h3>
								<TextOverflow text={title} />
							</h3>

							<div className={cn(styles.filterGroup)}>
								<FilterGroup filters={filters} />
							</div>
						</div>

						<i className={cn(styles.desc)}>
							<TextOverflow text={description} />
						</i>
					</section>
				</Link>
			</article>
		);
	};

	// Hide or show card
	useEffect(() => {
		const pattern = new RegExp(`${search}`, 'gi');
		let showCardCondition = false;

		// If card has not to show (it`s completed)
		if ((completed && showCompleted) || !completed) {
			showCardCondition = true;
		}

		// Check filters
		const matches: (string | undefined)[] | undefined = filters?.map(filter => {
			// If filters are applied and filter march
			if (
				taskbarFilters.includes(filter.displayName) &&
				taskbarFilters.length !== 0
			) {
				return filter.displayName;
			}
		});

		// Hide card immediately if filters don`t match
		if (matches?.length === 0 && taskbarFilters.length !== 0) {
			hideCard();
			return;
		}

		// If card match search query
		// show it immediately
		if (pattern.test(title) && showCardCondition) {
			showCard();
			return;
		}

		// At other cases, hide card
		hideCard();
	}, [search, showCompleted, completed, taskbarFilters]);

	return (
		<>
			{shown &&
				(gridView === 'grid' ? (
					<WrapInLink>
						<Body />
					</WrapInLink>
				) : (
					<Body />
				))}
		</>
	);
};

export default AchievementCard;
