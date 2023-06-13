import { useSelector } from 'react-redux';

import { TaskbarOptions } from '@redux/reducers/taskbar.slice';
import IStore from '@redux/types/redux-types';

export interface UseTaskbarOptionsReturn
	extends Pick<
		TaskbarOptions,
		'search' | 'showCompleted' | 'taskbarFilters' | 'gridView'
	> {}

export const useTaskbarOptions = (): UseTaskbarOptionsReturn => {
	const { search, showCompleted, taskbarFilters, gridView } = useSelector(
		(state: IStore) => state.taskbar
	);

	return { search, showCompleted, taskbarFilters: taskbarFilters, gridView };
};
