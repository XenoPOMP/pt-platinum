import { useSelector } from 'react-redux';

import IStore from '@redux/types/redux-types';

export interface UseTaskbarOptionsReturn {
	search: string;
}

export const useTaskbarOptions = (): UseTaskbarOptionsReturn => {
	const search = useSelector((state: IStore) => state.taskbar.search);

	return { search };
};
