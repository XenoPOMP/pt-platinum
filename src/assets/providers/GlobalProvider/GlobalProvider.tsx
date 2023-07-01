import { FC } from 'react';

import { BaseProviderProps } from '@providers/BaseProvider.props';
import BodyClassnameProvider from '@providers/BodyClassnameProvider/BodyClassnameProvider';
import SizesProvider from '@providers/SizesProvider/SizesProvider';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';

import { PropsWith } from '@type/PropsWith';

const GlobalProvider: FC<PropsWith<'children', BaseProviderProps>> = ({
	children,
}) => {
	return (
		<>
			<BodyClassnameProvider>
				<SizesProvider>
					<ThemeProvider>{children}</ThemeProvider>
				</SizesProvider>
			</BodyClassnameProvider>
		</>
	);
};

export default GlobalProvider;
