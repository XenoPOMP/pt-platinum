import cn from 'classnames';
import { FC } from 'react';

import Page from '@components/Page/Page';

import AchievementCard from '@ui/AchievementCard/AchievementCard';

import useLocalization from '@hooks/useLocalization';

import styles from './OptionsPage.module.scss';
import type { OptionsPageProps } from './OptionsPage.props';

const OptionsPage: FC<OptionsPageProps> = ({}) => {
	const loc = useLocalization();

	return (
		<Page
			meta={loc.meta.options}
			header={{
				taskbar: false,
			}}
		>
			<div className={cn(styles.settingsPage)}>123</div>
		</Page>
	);
};

export default OptionsPage;
