import cn from 'classnames';

import Page from '@components/Page/Page';

import useLocalization from '@hooks/useLocalization';

import styles from './MainPage.module.scss';

const MainPage = () => {
	const loc = useLocalization();

	return <Page meta={loc.meta.main}></Page>;
};

export default MainPage;
