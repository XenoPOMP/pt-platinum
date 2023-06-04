import { combineReducers, configureStore } from '@reduxjs/toolkit';

import appSettingsSlice from '@redux/reducers/appSettingsSlice';
import marksSlice from '@redux/reducers/marks.slice';

const rootReducer = combineReducers({
	appSettings: appSettingsSlice,
	marks: marksSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
