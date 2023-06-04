import { FC, PropsWithChildren } from 'react';

import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';

import Header from '@ui/Header/Header';

import { LayoutProps } from './Layout.props';

/**
 * App layout component.
 *
 * @param children
 * @constructor
 */
const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, header }) => {
	return (
		<GlobalProvider>
			<Header {...header} />

			<main>{children}</main>
		</GlobalProvider>
	);
};

export default Layout;
