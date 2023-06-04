import cn from 'classnames';
import {
	CSSProperties,
	FC,
	MouseEvent,
	PropsWithChildren,
	useEffect,
} from 'react';
import { Link } from 'react-router-dom';

import ArgumentError from '@errors/ArgumentError';

import styles from './Button.module.scss';
import type { ButtonProps } from './Button.props';

const Button: FC<PropsWithChildren<ButtonProps>> = ({
	square,
	fullHeight,
	fullWidth,
	variant,
	onClick,
	className,
	children,
	routerLink,
	link,
}) => {
	/** Default button`s variant. */
	const defaultVariant: ButtonProps['variant'] = variant ? variant : 'normal';

	/**
	 * Unified button styles.
	 */
	const buttonStyle: CSSProperties = {
		aspectRatio: square ? 1 : 'initial',
		height: fullHeight ? '100%' : 'initial',
		width: fullWidth ? '100%' : 'initial',
		padding: !square ? '.5em .66em' : '',
	};

	/**
	 * Unified click callback for all button types.
	 *
	 * @param event        mouse click event.
	 */
	const clickCallback = (
		event: Parameters<Required<Pick<ButtonProps, 'onClick'>>['onClick']>[0]
	) => {
		// Execute callback if it is defined
		if (onClick) {
			onClick(event);
		}
	};

	/**
	 * Unified class list.
	 */
	const inlineClasses = (): string => {
		const classes: string[] = [];

		if (defaultVariant === 'active') {
			classes.push(styles.active);
		}

		return cn(...classes);
	};

	// Error handling
	useEffect(() => {
		if (routerLink && link) {
			throw new ArgumentError(
				'can`t add router and href-link at the same time.'
			);
		}
	});

	return (
		<>
			{/* Usual button. Without any link. */}
			{!routerLink && !link && (
				<div
					style={buttonStyle}
					onClick={clickCallback}
					className={cn(styles.button, className, inlineClasses())}
				>
					{children}
				</div>
			)}

			{/* Router link button. */}
			{routerLink && !link && (
				<Link
					to={routerLink}
					style={buttonStyle}
					onClick={clickCallback}
					className={cn(styles.button, className, inlineClasses())}
				>
					{children}
				</Link>
			)}

			{/* Link button. */}
			{!routerLink && link && (
				<a
					href={link}
					style={buttonStyle}
					onClick={clickCallback}
					className={cn(styles.button, className, inlineClasses())}
				>
					{children}
				</a>
			)}
		</>
	);
};

export default Button;
