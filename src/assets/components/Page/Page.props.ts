import { HeaderProps } from '@ui/Header/Header.props';

export type MetaInfo = {
	pageTitle: string;
	pageDescription?: string;
	keywords?: string;
};

export interface PageProps {
	meta: MetaInfo;
	header?: HeaderProps;
	noIndex?: boolean;
}
