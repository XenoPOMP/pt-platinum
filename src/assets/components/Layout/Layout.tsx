import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';

import Header from '@ui/Header/Header';

import { PropsWith } from '@type/PropsWith';

import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

/**
 * App layout component.
 *
 * @param children
 * @constructor
 */
const Layout: FC<PropsWith<'children', LayoutProps>> = ({
	children,
	header,
}) => {
	return (
		<GlobalProvider>
			<Header {...header} />

			<main className={cn(styles.layout)}>{children}</main>
		</GlobalProvider>
	);
};

export default Layout;
