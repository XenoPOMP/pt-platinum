import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

export type TaskbarOptions = {
	search: string;
	showCompleted: boolean;
	taskbarFilters: (string | undefined)[];
	gridView: 'row' | 'grid';
	paginationSize: number;
	paginationPage: number;
};

const initialState: TaskbarOptions = {
	search: '',
	showCompleted: true,
	taskbarFilters: [],
	gridView: 'row',
	paginationSize: -1,
	paginationPage: 1,
};

const taskbarSlice = createSlice({
	name: 'taskbar',
	initialState,
	reducers: {
		/**
		 * Load taskbar options from cookie to redux.
		 */
		loadTaskbarOptions(
			state,
			action: ReduxAction<
				Pick<
					TaskbarOptions,
					'showCompleted' | 'gridView' | 'paginationSize' | 'paginationPage'
				>
			>
		) {
			state.showCompleted = action.payload.showCompleted;
			state.gridView = action.payload.gridView;
			state.paginationSize = action.payload.paginationSize
				? action.payload.paginationSize
				: -1;
			state.paginationPage = action.payload.paginationPage
				? action.payload.paginationPage
				: 0;
		},

		/** Allows to change search string. */
		changeSearchString(state, action: ReduxAction<TaskbarOptions['search']>) {
			state.search = action.payload;
		},

		/** Allows to disable viewing completed achievements. */
		changeShowCompletedRule(
			state,
			action: ReduxAction<TaskbarOptions['showCompleted']>
		) {
			state.showCompleted = action.payload;
		},

		/** Allows to apply filters. */
		changeAppFilters(
			state,
			action: ReduxAction<TaskbarOptions['taskbarFilters']>
		) {
			state.taskbarFilters = action.payload;
		},

		/** Change grid settings. */
		changeGridView(state, action: ReduxAction<TaskbarOptions['gridView']>) {
			state.gridView = action.payload;
		},

		/** Change pagination size. */
		changePaginationSize(
			state,
			action: ReduxAction<TaskbarOptions['paginationSize']>
		) {
			state.paginationSize = action.payload;
		},

		/** Switch pagination page to another one. */
		switchPaginationPage(
			state,
			action: ReduxAction<TaskbarOptions['paginationPage']>
		) {
			state.paginationPage = action.payload;
		},
	},
});

export default taskbarSlice.reducer;
export const {
	changeSearchString,
	changeShowCompletedRule,
	loadTaskbarOptions,
	changeAppFilters,
	changeGridView,
	changePaginationSize,
	switchPaginationPage,
} = taskbarSlice.actions;
export const initialTaskbarOptions = taskbarSlice.getInitialState();
