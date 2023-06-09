import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

export type TaskbarOptions = {
	search: string;
	showCompleted: boolean;
};

const initialState: TaskbarOptions = {
	search: '',
	showCompleted: true,
};

const taskbarSlice = createSlice({
	name: 'taskbar',
	initialState,
	reducers: {
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
	},
});

export default taskbarSlice.reducer;
export const { changeSearchString, changeShowCompletedRule } =
	taskbarSlice.actions;
