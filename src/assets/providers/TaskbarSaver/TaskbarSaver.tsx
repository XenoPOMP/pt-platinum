import { FC, PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	TaskbarOptions,
	initialTaskbarOptions,
	loadTaskbarOptions,
} from '@redux/reducers/taskbar.slice';
import IStore from '@redux/types/redux-types';

import useAppSettings from '@hooks/useAppSettings';
import { useLocalStorage } from '@hooks/useLocalStorage';

import type { TaskbarSaverProps } from './TaskbarSaver.props';

const TaskbarSaver: FC<PropsWithChildren<TaskbarSaverProps>> = ({
	children,
	disabled,
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

	if (!disabled) {
		// Load data from cookie
		useEffect(() => {
			dispatch(
				loadTaskbarOptions({
					showCompleted: getCookie.showCompleted,
					gridView: getCookie.gridView
						? getCookie.gridView
						: initialTaskbarOptions.gridView,
				})
			);
		}, []);

		// Save data to cookie
		useEffect(() => {
			setCookie(selector);
		}, [selector.showCompleted, selector.gridView]);
	}

	return <>{children}</>;
};

export default TaskbarSaver;
