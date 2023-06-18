import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

export type Language = 'ru' | 'en';
export type Theme = 'light';

export type AppSettings = {
	appVersion: string;
	appName: string;
	theme: Theme;
	language: Language;
};

const initialState: AppSettings = {
	appVersion: '0.0.1',
	appName: 'PT Platinum',
	language: (() => {
		// DEBUG
		return 'en';

		// Set default language in russian-speaking countries for
		// Russian
		if (navigator.language === 'ru-RU') {
			return 'ru';
		}

		// Set default language to english in all other countries
		return 'en';
	})(),
	theme: 'light',
};

const appSettingsSlice = createSlice({
	name: 'appSettings',
	initialState,
	reducers: {
		changeLang(state, action: ReduxAction<Language>) {
			state.language = action.payload;
		},

		changeTheme(state, action: ReduxAction<Theme>) {
			state.theme = action.payload;
		},
	},
});

export default appSettingsSlice.reducer;
export const { changeLang, changeTheme } = appSettingsSlice.actions;
export const initialAppSettings = appSettingsSlice.getInitialState();
