import { MetaInfo } from '@components/Page/Page.props';

export interface MetaLocales extends Record<string, MetaInfo> {
	main: MetaInfo;
	options: MetaInfo;
	achievement: MetaInfo;
	notFound: MetaInfo;
	welcomePage: MetaInfo;
}
