import cn from 'classnames';
import { useSelector } from 'react-redux';

import Page from '@components/Page/Page';

import { AchievementMarks } from '@redux/reducers/marks.slice';
import IStore from '@redux/types/redux-types';

import AchievementCard from '@ui/AchievementCard/AchievementCard';

import useLocalization from '@hooks/useLocalization';

import styles from './MainPage.module.scss';

const MainPage = () => {
	const loc = useLocalization();
	const achievements: AchievementMarks['achievements'] = useSelector(
		(state: IStore) => state.marks.achievements
	);

	return (
		<Page meta={loc.meta.main}>
			<div className={cn(styles.mainPage, styles.rowView)}>
				{achievements.map((ac, index) => (
					<AchievementCard achievement={ac} key={`ac-card-${index}`} />
				))}
			</div>
		</Page>
	);
};

export default MainPage;
