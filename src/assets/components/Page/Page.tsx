import { FC, PropsWithChildren, ReactNode } from 'react';
import Helmet from 'react-helmet';

import Layout from '@components/Layout/Layout';

import useAppSettings from '@hooks/useAppSettings';

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
const Page: FC<PropsWithChildren<PageProps>> = ({ meta, children, header }) => {
	const { appName, language } = useAppSettings();

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

				{meta.noIndex && <meta name={'robots'} content={'noindex'} />}
			</Helmet>

			{children}
		</Layout>
	);
};

export default Page;
