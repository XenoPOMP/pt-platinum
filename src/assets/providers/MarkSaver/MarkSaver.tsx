import { FC, PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	AchievementMarks,
	initialAchievementMarks,
	loadMarks,
} from '@redux/reducers/marks.slice';
import IStore from '@redux/types/redux-types';

import { useLocalStorage } from '@hooks/useLocalStorage';

import type { MarkSaverProps } from './MarkSaver.props';

const MarkSaver: FC<PropsWithChildren<MarkSaverProps>> = ({
	children,
	disabled,
}) => {
	const selector: AchievementMarks = useSelector(
		(state: IStore) => state.marks
	);
	const dispatch = useDispatch();

	const [getCookieItem, setCookieItem] = useLocalStorage<AchievementMarks>(
		'pt-platinum-marks',
		initialAchievementMarks
	);

	if (!disabled) {
		// Load cookie data
		useEffect(() => {
			if (getCookieItem.achievements.length !== selector.achievements.length) {
				setCookieItem(selector);
				return;
			}

			dispatch(loadMarks(getCookieItem));
		}, []);

		// Save data to cookie
		useEffect(() => {
			setCookieItem(selector);
		}, [selector.achievements]);
	}

	return <>{children}</>;
};

export default MarkSaver;
