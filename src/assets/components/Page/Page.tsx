import cn from 'classnames';
import { FC, PropsWithChildren, ReactNode, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import Layout from '@components/Layout/Layout';
import Redirect from '@components/Redirect/Redirect';

import { WelcomeTutorialState } from '@redux/reducers/welcomeTutorial.slice';
import IStore from '@redux/types/redux-types';

import UiContainer from '@ui/UiContainer/UiContainer';

import useAppSettings from '@hooks/useAppSettings';
import useLocalization from '@hooks/useLocalization';

import styles from './Page.module.scss';
import type { MetaInfo } from './Page.props';
import { PageProps } from './Page.props';

/**
 * Component that provides page implementation.
 * Meta tag optimization included.
 *
 * @param {MetaInfo} meta            page meta info.
 * @param {ReactNode} children       page children component.
 * @constructor
 */
const Page: FC<PropsWithChildren<PageProps>> = ({
	meta,
	children,
	header,
	noIndex,
	disabled,
}) => {
	const { appName, language } = useAppSettings();
	const loc = useLocalization();

	const location = useLocation();

	const { completed, currentStepIndex }: WelcomeTutorialState = useSelector(
		(state: IStore) => state.welcome
	);

	return (
		<Layout header={header}>
			<Helmet
				htmlAttributes={{
					lang: language.get(),
				}}
			>
				<title>{meta.pageTitle}</title>
				<meta name={'description'} content={meta.pageDescription} />
				<meta name={'keywords'} content={meta.keywords} />
				<meta name={'apple-mobile-web-app-title'} content={appName.get()} />

				{(noIndex || disabled) && <meta name={'robots'} content={'noindex'} />}
			</Helmet>

			{!disabled ? (
				children
			) : (
				<div className={cn(styles.disabledPage)}>
					<UiContainer className={cn(styles.text)}>
						<h3>{loc.pages.disabled.notWorking}</h3>

						<Link to={'/'}>{loc.pages.disabled.goHome}</Link>
					</UiContainer>

					<div className={cn(styles.waves)}>
						<svg
							viewBox='0 0 1920 530'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M0 14L45.7 35.5C91.3 57 182.7 100 274.2 119.8C365.7 139.7 457.3 136.3 548.8 118.3C640.3 100.3 731.7 67.7001 823 62.2001C914.3 56.7001 1005.7 78.3001 1097 71.2001C1188.3 64.0001 1279.7 28 1371.2 11.5C1462.7 -4.99996 1554.3 -1.99996 1645.8 16C1737.3 34 1828.7 67 1874.3 83.5L1920 100V531H1874.3C1828.7 531 1737.3 531 1645.8 531C1554.3 531 1462.7 531 1371.2 531C1279.7 531 1188.3 531 1097 531C1005.7 531 914.3 531 823 531C731.7 531 640.3 531 548.8 531C457.3 531 365.7 531 274.2 531C182.7 531 91.3 531 45.7 531H0V14Z'
								className={cn(styles.first)}
							/>
							<path
								d='M0 100L45.7 106.5C91.3 113 182.7 126 274.2 140.7C365.7 155.3 457.3 171.7 548.8 187.5C640.3 203.3 731.7 218.7 823 203.7C914.3 188.7 1005.7 143.3 1097 143C1188.3 142.7 1279.7 187.3 1371.2 201.8C1462.7 216.3 1554.3 200.7 1645.8 175.8C1737.3 151 1828.7 117 1874.3 100L1920 83V531H1874.3C1828.7 531 1737.3 531 1645.8 531C1554.3 531 1462.7 531 1371.2 531C1279.7 531 1188.3 531 1097 531C1005.7 531 914.3 531 823 531C731.7 531 640.3 531 548.8 531C457.3 531 365.7 531 274.2 531C182.7 531 91.3 531 45.7 531H0V100Z'
								className={cn(styles.second)}
							/>
							<path
								d='M0 232L45.7 219.7C91.3 207.3 182.7 182.7 274.2 179.8C365.7 177 457.3 196 548.8 197C640.3 198 731.7 181 823 185.5C914.3 190 1005.7 216 1097 233.2C1188.3 250.3 1279.7 258.7 1371.2 263.2C1462.7 267.7 1554.3 268.3 1645.8 260.2C1737.3 252 1828.7 235 1874.3 226.5L1920 218V531H1874.3C1828.7 531 1737.3 531 1645.8 531C1554.3 531 1462.7 531 1371.2 531C1279.7 531 1188.3 531 1097 531C1005.7 531 914.3 531 823 531C731.7 531 640.3 531 548.8 531C457.3 531 365.7 531 274.2 531C182.7 531 91.3 531 45.7 531H0V232Z'
								className={cn(styles.third)}
							/>
							<path
								d='M0 327L45.7 324.5C91.3 322 182.7 317 274.2 302.5C365.7 288 457.3 264 548.8 266.8C640.3 269.7 731.7 299.3 823 302C914.3 304.7 1005.7 280.3 1097 264.2C1188.3 248 1279.7 240 1371.2 244.5C1462.7 249 1554.3 266 1645.8 266.2C1737.3 266.3 1828.7 249.7 1874.3 241.3L1920 233V531H1874.3C1828.7 531 1737.3 531 1645.8 531C1554.3 531 1462.7 531 1371.2 531C1279.7 531 1188.3 531 1097 531C1005.7 531 914.3 531 823 531C731.7 531 640.3 531 548.8 531C457.3 531 365.7 531 274.2 531C182.7 531 91.3 531 45.7 531H0V327Z'
								className={cn(styles.fourth)}
							/>
							<path
								d='M0 356L45.7 349C91.3 342 182.7 328 274.2 328.7C365.7 329.3 457.3 344.7 548.8 363C640.3 381.3 731.7 402.7 823 396.3C914.3 390 1005.7 356 1097 352.2C1188.3 348.3 1279.7 374.7 1371.2 384.2C1462.7 393.7 1554.3 386.3 1645.8 382.5C1737.3 378.7 1828.7 378.3 1874.3 378.2L1920 378V531H1874.3C1828.7 531 1737.3 531 1645.8 531C1554.3 531 1462.7 531 1371.2 531C1279.7 531 1188.3 531 1097 531C1005.7 531 914.3 531 823 531C731.7 531 640.3 531 548.8 531C457.3 531 365.7 531 274.2 531C182.7 531 91.3 531 45.7 531H0V356Z'
								className={cn(styles.fifth)}
							/>
							<path
								d='M0 402L45.7 409.8C91.3 417.7 182.7 433.3 274.2 437.2C365.7 441 457.3 433 548.8 433.2C640.3 433.3 731.7 441.7 823 443C914.3 444.3 1005.7 438.7 1097 429C1188.3 419.3 1279.7 405.7 1371.2 413.8C1462.7 422 1554.3 452 1645.8 467.2C1737.3 482.3 1828.7 482.7 1874.3 482.8L1920 483V531H1874.3C1828.7 531 1737.3 531 1645.8 531C1554.3 531 1462.7 531 1371.2 531C1279.7 531 1188.3 531 1097 531C1005.7 531 914.3 531 823 531C731.7 531 640.3 531 548.8 531C457.3 531 365.7 531 274.2 531C182.7 531 91.3 531 45.7 531H0V402Z'
								className={cn(styles.sixth)}
							/>
						</svg>
					</div>
				</div>
			)}
		</Layout>
	);
};

export default Page;
