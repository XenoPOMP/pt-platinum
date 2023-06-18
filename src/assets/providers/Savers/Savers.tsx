import cn from 'classnames';
import { FC, useMemo } from 'react';

import AppSettingsSaver from '@providers/AppSettingsSaver/AppSettingsSaver';
import MarkSaver from '@providers/MarkSaver/MarkSaver';
import TaskbarSaver from '@providers/TaskbarSaver/TaskbarSaver';

import { PropsWith } from '@type/PropsWith';

import styles from './Savers.module.scss';
import type { SaversProps } from './Savers.props';

const Savers: FC<PropsWith<'children', SaversProps>> = ({ children }) => {
	// const nestedChild = useMemo(() => children, [children]);

	return (
		<AppSettingsSaver disabled>
			<TaskbarSaver>
				<MarkSaver>{children}</MarkSaver>
			</TaskbarSaver>
		</AppSettingsSaver>
	);
};

export default Savers;
