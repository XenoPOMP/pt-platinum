import cn from 'classnames';
import { FC } from 'react';

import Page from '@components/Page/Page';

import useLocalization from '@hooks/useLocalization';

import peppinoArt from '@media/images/Art Section.png';

import styles from './WelcomePage.module.scss';
import type { WelcomePageProps } from './WelcomePage.props';

const WelcomePage: FC<WelcomePageProps> = ({}) => {
	const loc = useLocalization();

	return (
		<Page
			meta={loc.meta.welcomePage}
			noIndex
			header={{
				renderHeader: false,
			}}
		>
			<main className={cn(styles.welcomePage)}>
				<div className={cn('w-[100%]')}>1</div>

				<section className={cn(styles.peppinoPoster)}>
					<img alt={'peppino-art'} src={peppinoArt} />
				</section>
			</main>
		</Page>
	);
};

export default WelcomePage;
