import cn from 'classnames';
import { useSelector } from 'react-redux';

import Page from '@components/Page/Page';

import { AchievementMarks } from '@redux/reducers/marks.slice';
import IStore from '@redux/types/redux-types';

import AchievementCard from '@ui/AchievementCard/AchievementCard';
import UiContainer from '@ui/UiContainer/UiContainer';

import useLocalization from '@hooks/useLocalization';
import { useTaskbarOptions } from '@hooks/useTaskbarOptions';

import styles from './MainPage.module.scss';

const MainPage = () => {
	const loc = useLocalization();
	const achievements: AchievementMarks['achievements'] = useSelector(
		(state: IStore) => state.marks.achievements
	);
	const { gridView } = useTaskbarOptions();

	return (
		<Page meta={loc.meta.main}>
			<UiContainer
				className={cn(
					styles.mainPage,
					gridView === 'row' && styles.rowView,
					gridView === 'grid' && styles.gridView
				)}
			>
				{achievements.map((ac, index) => (
					<AchievementCard achievement={ac} key={`ac-card-${index}`} />
				))}
			</UiContainer>
		</Page>
	);
};

export default MainPage;
