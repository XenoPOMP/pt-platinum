import React from 'react';

import Page from '@components/Page/Page';

import useLocalization from '@hooks/useLocalization';

const NotFound = () => {
	const loc = useLocalization();

	return <Page meta={loc.meta.notFound}>Error 404: page not found</Page>;
};

export default NotFound;
