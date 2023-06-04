import { useSelector } from 'react-redux';

import { AchievementMark } from '@redux/reducers/marks.slice';
import IStore from '@redux/types/redux-types';

export const useProgress = () => {
	const selector: AchievementMark[] = useSelector(
		(state: IStore) => state.marks.achievements
	);

	const total = selector.length;
	const checked = selector.filter(mark => mark.completed).length;

	return {
		progress: parseInt(`${(checked * 100) / total}`),
		checked,
		total,
	};
};
