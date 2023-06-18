import { HeaderProps } from '@ui/Header/Header.props';

export type MetaInfo = {
	pageTitle: string;
	pageDescription?: string;
	keywords?: string;
	noIndex?: boolean;
};

export interface PageProps {
	meta: MetaInfo;
	header?: HeaderProps;
}
