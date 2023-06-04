import cn from 'classnames';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	AchievementMarks,
	initialAchievementMarks,
	loadMarks,
} from '@redux/reducers/marks.slice';
import IStore from '@redux/types/redux-types';

import useAppSettings from '@hooks/useAppSettings';
import { useLocalStorage } from '@hooks/useLocalStorage';

import styles from './MarkSaver.module.scss';
import type { MarkSaverProps } from './MarkSaver.props';

const MarkSaver: FC<PropsWithChildren<MarkSaverProps>> = ({ children }) => {
	const selector: AchievementMarks = useSelector(
		(state: IStore) => state.marks
	);
	const dispatch = useDispatch();

	const [getCookieItem, setCookieItem] = useLocalStorage<AchievementMarks>(
		'pt-platinum-marks',
		initialAchievementMarks
	);

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

	return <>{children}</>;
};

export default MarkSaver;
