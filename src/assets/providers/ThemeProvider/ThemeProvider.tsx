import cn from 'classnames';
import { FC, useContext } from 'react';

import { BaseProviderProps } from '@providers/BaseProvider.props';
import { BodyClassnameContext } from '@providers/BodyClassnameProvider/BodyClassnameProvider';

import useAppSettings from '@hooks/useAppSettings';
import useBodyClassnames from '@hooks/useBodyClassnames';

import { PropsWith } from '@type/PropsWith';

import styles from './ThemeProvider.module.scss';

const ThemeProvider: FC<PropsWith<'children', BaseProviderProps>> = ({
	children,
}) => {
	const { theme } = useAppSettings();

	return (
		<div
			className={cn(
				styles.themes,
				theme.get() === 'light' && styles.light,
				theme.get() === 'dark' && styles.dark
			)}
		>
			{children}
		</div>
	);
};

export default ThemeProvider;
