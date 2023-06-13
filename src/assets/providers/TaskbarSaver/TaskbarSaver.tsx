import cn from 'classnames';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	TaskbarOptions,
	changeAppFilters,
	initialTaskbarOptions,
	loadTaskbarOptions,
} from '@redux/reducers/taskbar.slice';
import IStore from '@redux/types/redux-types';

import useAppSettings from '@hooks/useAppSettings';
import { useLocalStorage } from '@hooks/useLocalStorage';

import styles from './TaskbarSaver.module.scss';
import type { TaskbarSaverProps } from './TaskbarSaver.props';

const TaskbarSaver: FC<PropsWithChildren<TaskbarSaverProps>> = ({
	children,
}) => {
	const selector: TaskbarOptions = useSelector(
		(state: IStore) => state.taskbar
	);
	const { language } = useAppSettings();
	const dispatch = useDispatch();

	const [getCookie, setCookie] = useLocalStorage<TaskbarOptions>(
		'pt-platinum-taskbar',
		initialTaskbarOptions
	);

	// Load data from cookie
	useEffect(() => {
		dispatch(
			loadTaskbarOptions({
				showCompleted: getCookie.showCompleted,
			})
		);
	}, []);

	// Save data to cookie
	useEffect(() => {
		setCookie(selector);
	}, [selector.showCompleted]);

	return <>{children}</>;
};

export default TaskbarSaver;
