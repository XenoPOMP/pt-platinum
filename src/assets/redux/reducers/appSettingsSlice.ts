import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

export type Language = 'ru';

export type AppSettings = {
	appVersion: string;
	appName: string;
	language: Language;
};

const initialState: AppSettings = {
	appVersion: '0.01',
	appName: 'React Vite Application',
	language: 'ru',
};

const appSettingsSlice = createSlice({
	name: 'appSettings',
	initialState,
	reducers: {
		changeLang(state, action: ReduxAction<Language>) {
			state.language = action.payload;
		},
	},
});

export default appSettingsSlice.reducer;
export const { changeLang } = appSettingsSlice.actions;
export const initialAppSettings = appSettingsSlice.getInitialState();
