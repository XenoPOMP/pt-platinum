import { FC } from 'react';

import BodyClassnameProvider from '@providers/BodyClassnameProvider/BodyClassnameProvider';
import MarkSaver from '@providers/MarkSaver/MarkSaver';
import { ProviderProps } from '@providers/Provider.props';
import SizesProvider from '@providers/SizesProvider/SizesProvider';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';

const GlobalProvider: FC<ProviderProps> = ({ children }) => {
	return (
		<>
			<BodyClassnameProvider>
				<SizesProvider>
					<ThemeProvider>
						<MarkSaver>{children}</MarkSaver>
					</ThemeProvider>
				</SizesProvider>
			</BodyClassnameProvider>
		</>
	);
};

export default GlobalProvider;
