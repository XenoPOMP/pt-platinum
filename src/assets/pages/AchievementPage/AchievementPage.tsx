import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

import Page from '@components/Page/Page';

import {
	AchievementMark,
	AchievementMarks,
	changeCompletion,
} from '@redux/reducers/marks.slice';
import IStore from '@redux/types/redux-types';

import AchievementCard from '@ui/AchievementCard/AchievementCard';
import Button from '@ui/Button/Button';
import CheckBox from '@ui/CheckBox/CheckBox';
import CompletionBadge from '@ui/CompletionBadge/CompletionBadge';
import FilterGroup from '@ui/FilterGroup/FilterGroup';
import ProgressiveImage from '@ui/ProgressiveImage/ProgressiveImage';

import useBoolean from '@hooks/useBoolean';
import useLocalization from '@hooks/useLocalization';

import { Achievements } from '@type/Achievements';

import styles from './AchievementPage.module.scss';
import type { AchievementPageProps } from './AchievementPage.props';

const AchievementPage: FC<AchievementPageProps> = ({}) => {
	const { name } = useParams<{
		name: keyof Achievements;
	}>();

	const defaultName: Required<keyof Achievements> = name ? name : 'JOHN_GUTTED';

	// Localization
	const loc = useLocalization();
	const { title, description, filters } =
		loc.pages.main.achievements[defaultName];

	// Get data from redux store
	const { pictureUrl, completed }: AchievementMark = useSelector(
		(state: IStore) =>
			state.marks.achievements.filter(mark => mark.name === defaultName)
	)[0];

	// Hooks
	const dispatch = useDispatch();

	return (
		<Page
			meta={{
				...loc.meta.achievement,
				pageTitle: loc.meta.achievement.pageTitle.replace(
					/#\[.*\]/gi,
					loc.pages.main.achievements[defaultName].title
				),
			}}
			header={{
				taskbar: {
					rightControl: false,
				},
			}}
		>
			<div className={cn(styles.achievementPage)}>
				<div className={cn(styles.titleBlock)}>
					<div className={cn(styles.avatarPlaceholder)}>
						<ProgressiveImage
							loaderColorScheme={{
								backgroundColor: 'transparent',
							}}
							alt={'achievement-image'}
							src={pictureUrl}
						/>

						<CompletionBadge completed={completed} />
					</div>

					<h2>{title}</h2>

					<FilterGroup filters={filters} />

					<i>{description}</i>

					<Button
						variant={completed ? 'active' : 'normal'}
						onClick={() => {
							dispatch(
								changeCompletion({
									name: defaultName,
									value: !completed,
								})
							);
						}}
					>
						{completed
							? loc.pages.achievement.completeButton.completed
							: loc.pages.achievement.completeButton.notCompleted}
					</Button>
				</div>
			</div>
		</Page>
	);
};

export default AchievementPage;
