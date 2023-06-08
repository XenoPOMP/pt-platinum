import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

export type TaskbarOptions = {
	search: string;
};

const initialState: TaskbarOptions = {
	search: '',
};

const taskbarSlice = createSlice({
	name: 'taskbar',
	initialState,
	reducers: {
		changeSearchString(state, action: ReduxAction<TaskbarOptions['search']>) {
			state.search = action.payload;
		},
	},
});

export default taskbarSlice.reducer;
export const { changeSearchString } = taskbarSlice.actions;
