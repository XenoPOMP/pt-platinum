import { FC } from 'react';

import BodyClassnameProvider from '@providers/BodyClassnameProvider/BodyClassnameProvider';
import MarkSaver from '@providers/MarkSaver/MarkSaver';
import { ProviderProps } from '@providers/Provider.props';
import SizesProvider from '@providers/SizesProvider/SizesProvider';
import TaskbarSaver from '@providers/TaskbarSaver/TaskbarSaver';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';

const GlobalProvider: FC<ProviderProps> = ({ children }) => {
	return (
		<>
			<BodyClassnameProvider>
				<SizesProvider>
					<TaskbarSaver>
						<ThemeProvider>
							<MarkSaver>{children}</MarkSaver>
						</ThemeProvider>
					</TaskbarSaver>
				</SizesProvider>
			</BodyClassnameProvider>
		</>
	);
};

export default GlobalProvider;
