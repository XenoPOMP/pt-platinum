import { combineReducers, configureStore } from '@reduxjs/toolkit';

import appSettingsSlice from '@redux/reducers/appSettingsSlice';
import marksSlice from '@redux/reducers/marks.slice';
import taskbarSlice from '@redux/reducers/taskbar.slice';
import welcomeTutorialSlice from '@redux/reducers/welcomeTutorial.slice';

const rootReducer = combineReducers({
	appSettings: appSettingsSlice,
	marks: marksSlice,
	taskbar: taskbarSlice,
	welcome: welcomeTutorialSlice,
});

/** Cookie name. */
const cookieName = 'pt-platinum-store';

const store = configureStore({
	reducer: rootReducer,
	preloadedState: localStorage.getItem(cookieName)
		? JSON.parse(localStorage.getItem(cookieName) as string)
		: {},
});

/**
 * Subscribe to update event.
 *
 * Save data to local storage.
 */
store.subscribe(() => {
	localStorage.setItem(cookieName, JSON.stringify(store.getState()));
});

export { store };
