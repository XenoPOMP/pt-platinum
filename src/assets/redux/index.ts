import { combineReducers, configureStore } from '@reduxjs/toolkit';

import appSettingsSlice from '@redux/reducers/appSettingsSlice';
import marksSlice from '@redux/reducers/marks.slice';
import taskbarSlice from '@redux/reducers/taskbar.slice';

const rootReducer = combineReducers({
	appSettings: appSettingsSlice,
	marks: marksSlice,
	taskbar: taskbarSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
