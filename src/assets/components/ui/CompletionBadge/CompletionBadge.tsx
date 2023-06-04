import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC } from 'react';

import styles from './CompletionBadge.module.scss';
import type { CompletionBadgeProps } from './CompletionBadge.props';

const CompletionBadge: FC<CompletionBadgeProps> = ({ completed }) => {
	return (
		<motion.div
			initial={{
				opacity: completed ? 1 : 0,
			}}
			animate={{
				opacity: completed ? 1 : 0,
			}}
			transition={{
				duration: 0.08,
				ease: completed ? 'easeOut' : 'easeIn',
			}}
			className={cn(styles.completedBadge)}
		>
			<svg viewBox='0 0 49 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M47.1335 6.82843C48.6956 5.26633 48.6956 2.73367 47.1335 1.17157C45.5714 -0.390524 43.0388 -0.390525 41.4767 1.17157L19.5563 23.0919L6.82843 10.364C5.26633 8.80186 2.73367 8.80186 1.17157 10.364C-0.390525 11.9261 -0.390524 14.4587 1.17157 16.0208L16.7279 31.5772C18.29 33.1393 20.8227 33.1393 22.3848 31.5772L47.1335 6.82843Z'
					fill='#52FF00'
				/>
			</svg>
		</motion.div>
	);
};

export default CompletionBadge;
