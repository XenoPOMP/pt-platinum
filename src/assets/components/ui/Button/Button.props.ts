import { MouseEvent } from 'react';

export interface ButtonProps {
	/** Defines whether button is square. */
	square?: boolean;

	/** Sets height to 100% on true. */
	fullHeight?: boolean;

	/** Sets width to 100% on true. */
	fullWidth?: boolean;

	/** Button`s style variant. */
	variant?: 'normal' | 'active' | 'transparent';

	/** Callback. */
	onClick?: (event?: MouseEvent<HTMLDivElement | HTMLAnchorElement>) => void;

	/** Additional classnames of button. */
	className?: string;

	/** React-router-dom link. */
	routerLink?: string;

	/** HREF link. */
	link?: string;
}
