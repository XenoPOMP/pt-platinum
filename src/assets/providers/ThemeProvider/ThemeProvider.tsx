import { FC } from 'react';

import { BaseProviderProps } from '@providers/BaseProvider.props';

import useBodyClassnames from '@hooks/useBodyClassnames';

import styles from './ThemeProvider.module.scss';

const ThemeProvider: FC<BaseProviderProps> = ({ children }) => {
	useBodyClassnames([styles.themes, styles.light]);

	return <>{children}</>;
};

export default ThemeProvider;
