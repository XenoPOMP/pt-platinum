import cn from 'classnames';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeCompletion, changeShown } from '@redux/reducers/marks.slice';

import CompletionBadge from '@ui/CompletionBadge/CompletionBadge';
import FilterGroup from '@ui/FilterGroup/FilterGroup';
import ProgressiveImage from '@ui/ProgressiveImage/ProgressiveImage';

import useLocalization from '@hooks/useLocalization';
import { useTaskbarOptions } from '@hooks/useTaskbarOptions';

import styles from './AchievementCard.module.scss';
import type { AchievementCardProps } from './AchievementCard.props';

const AchievementCard: FC<AchievementCardProps> = ({ achievement }) => {
	const { name, pictureUrl, shown, completed } = achievement;

	const loc = useLocalization();
	const { title, description, filters } = loc.pages.main.achievements[name];

	const { search, showCompleted } = useTaskbarOptions();
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

	// Hide or show card
	useEffect(() => {
		const pattern = new RegExp(`${search}`, 'gi');
		let showCardCondition = false;

		if ((completed && showCompleted) || !completed) {
			showCardCondition = true;
		}

		if (pattern.test(title) && showCardCondition) {
			showCard();
			return;
		}

		hideCard();
	}, [search, showCompleted, completed]);

	return (
		<>
			{shown && (
				<div className={cn(styles.card, styles.rowView)}>
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

					<Link to={`/articles/${name}`}>
						<section>
							<div className={cn(styles.title)}>
								<h3>{title}</h3>

								<div className={cn(styles.filterGroup)}>
									<FilterGroup filters={filters} />
								</div>
							</div>

							<i className={cn(styles.desc)}>{description}</i>
						</section>
					</Link>
				</div>
			)}
		</>
	);
};

export default AchievementCard;
