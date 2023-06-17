import { useDispatch, useSelector } from 'react-redux';

import {
	Language,
	Theme,
	changeLang,
	changeTheme,
} from '@redux/reducers/appSettingsSlice';
import IStore from '@redux/types/redux-types';

interface SettingController<T> {
	get: () => T;
	set: (newValue: T) => void;
}

interface IUseAppSettings {
	appVersion: Omit<SettingController<string>, 'set'>;
	appName: Omit<SettingController<string>, 'set'>;
	language: SettingController<Language>;
	theme: SettingController<Theme>;
}

const useAppSettings = (): IUseAppSettings => {
	const dispatch = useDispatch();

	return {
		appVersion: {
			get: () => useSelector((state: IStore) => state.appSettings.appVersion),
		},

		appName: {
			get: () => useSelector((state: IStore) => state.appSettings.appName),
		},

		language: {
			get: () => useSelector((state: IStore) => state.appSettings.language),
			set: newLang => dispatch(changeLang(newLang)),
		},

		theme: {
			get: () => useSelector((state: IStore) => state.appSettings.theme),
			set: newTheme => dispatch(changeTheme(newTheme)),
		},
	};
};

export default useAppSettings;
