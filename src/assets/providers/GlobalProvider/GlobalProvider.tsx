import { FC } from 'react';

import { BaseProviderProps } from '@providers/BaseProvider.props';
import BodyClassnameProvider from '@providers/BodyClassnameProvider/BodyClassnameProvider';
import MarkSaver from '@providers/MarkSaver/MarkSaver';
import Savers from '@providers/Savers/Savers';
import SizesProvider from '@providers/SizesProvider/SizesProvider';
import TaskbarSaver from '@providers/TaskbarSaver/TaskbarSaver';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';

import { PropsWith } from '@type/PropsWith';

const GlobalProvider: FC<PropsWith<'children', BaseProviderProps>> = ({
	children,
}) => {
	return (
		<>
			<BodyClassnameProvider>
				<SizesProvider>
					<ThemeProvider>
						<Savers>{children}</Savers>
					</ThemeProvider>
				</SizesProvider>
			</BodyClassnameProvider>
		</>
	);
};

export default GlobalProvider;
