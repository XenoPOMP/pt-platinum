import cn from 'classnames';
import { FC, useMemo } from 'react';

import AppSettingsSaver from '@providers/AppSettingsSaver/AppSettingsSaver';
import MarkSaver from '@providers/MarkSaver/MarkSaver';
import TaskbarSaver from '@providers/TaskbarSaver/TaskbarSaver';

import { PropsWith } from '@type/PropsWith';

import styles from './Savers.module.scss';
import type { SaversProps } from './Savers.props';

/**
 * @deprecated new save algorithm is being used now.
 *
 * @param children
 * @constructor
 */
const Savers: FC<PropsWith<'children', SaversProps>> = ({ children }) => {
	return (
		<>
			{/*<AppSettingsSaver disabled />*/}
			{/*<TaskbarSaver disabled />*/}
			{/*<MarkSaver disabled />*/}

			{children}
		</>
	);
};

export default Savers;
