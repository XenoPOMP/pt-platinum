import cn from 'classnames';
import { FC } from 'react';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({}) => {
	return (
		<header className={cn(styles.appHeader)}>
			<section className={cn(styles.main)}>Main</section>
		</header>
	);
};

export default Header;
