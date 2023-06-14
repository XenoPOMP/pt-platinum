import { useContext, useEffect } from 'react';

import { BodyClassnameContext } from '@providers/BodyClassnameProvider/BodyClassnameProvider';

const useBodyClassnames = (classNames: string[]) => {
	const classContext = useContext(BodyClassnameContext);

	return useEffect(() => {
		classContext.addClassName(classNames);
	}, []);
};

export default useBodyClassnames;
