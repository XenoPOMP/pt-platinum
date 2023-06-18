import cn from 'classnames';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	AppSettings,
	initialAppSettings,
	loadAppSettings,
} from '@redux/reducers/appSettingsSlice';
import IStore from '@redux/types/redux-types';

import useAppSettings from '@hooks/useAppSettings';
import { useLocalStorage } from '@hooks/useLocalStorage';

import { PropsWith } from '@type/PropsWith';

import styles from './AppSettingsSaver.module.scss';
import type { AppSettingsSaverProps } from './AppSettingsSaver.props';

const AppSettingsSaver: FC<PropsWith<'children', AppSettingsSaverProps>> = ({
	children,
	disabled,
}) => {
	// const { language } = useAppSettings();
	const appSettings: AppSettings = useSelector(
		(state: IStore) => state.appSettings
	);
	const dispatch = useDispatch();
	const [getCookie, setCookie] = useLocalStorage<AppSettings>(
		'pt-platinum-settings',
		initialAppSettings
	);

	if (!disabled) {
		// Load app settings from cookies
		useEffect(() => {
			dispatch(loadAppSettings(getCookie));
		});

		// Save data to cookies
		useEffect(() => {
			setCookie(appSettings);
		}, [appSettings.language]);
	}

	return <>{children}</>;
};

export default AppSettingsSaver;
