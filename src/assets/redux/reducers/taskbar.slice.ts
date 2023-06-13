import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

export type TaskbarOptions = {
	search: string;
	showCompleted: boolean;
	taskbarFilters: (string | undefined)[];
};

const initialState: TaskbarOptions = {
	search: '',
	showCompleted: true,
	taskbarFilters: [],
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
			action: ReduxAction<Pick<TaskbarOptions, 'showCompleted'>>
		) {
			state.showCompleted = action.payload.showCompleted;
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
	},
});

export default taskbarSlice.reducer;
export const {
	changeSearchString,
	changeShowCompletedRule,
	loadTaskbarOptions,
	changeAppFilters,
} = taskbarSlice.actions;
export const initialTaskbarOptions = taskbarSlice.getInitialState();
