import cn from 'classnames';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

import Page from '@components/Page/Page';

import { AchievementMark, AchievementMarks } from '@redux/reducers/marks.slice';
import IStore from '@redux/types/redux-types';

import AchievementCard from '@ui/AchievementCard/AchievementCard';
import ProgressiveImage from '@ui/ProgressiveImage/ProgressiveImage';

import useLocalization from '@hooks/useLocalization';

import { Achievements } from '@type/Achievements';

import styles from './AchievementPage.module.scss';
import type { AchievementPageProps } from './AchievementPage.props';

const AchievementPage: FC<AchievementPageProps> = ({}) => {
	const { name } = useParams<{
		name: keyof Achievements;
	}>();

	const defaultName: Required<keyof Achievements> = name ? name : 'JOHN_GUTTED';

	const loc = useLocalization();
	const { title, description, filters } =
		loc.pages.main.achievements[defaultName];

	const { pictureUrl }: AchievementMark = useSelector((state: IStore) =>
		state.marks.achievements.filter(mark => mark.name === defaultName)
	)[0];

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
					<ProgressiveImage
						loaderColorScheme={{
							backgroundColor: 'transparent',
						}}
						alt={'achievement-image'}
						src={pictureUrl}
					/>
				</div>
			</div>
		</Page>
	);
};

export default AchievementPage;
