import cn from 'classnames';
import { CSSProperties, FC } from 'react';

import Button from '@ui/Button/Button';
import styles from '@ui/Header/Header.module.scss';

import useLocalization from '@hooks/useLocalization';
import { useProgress } from '@hooks/useProgress';

import type { TaskBarProps } from './TaskBar.props';

const TaskBar: FC<TaskBarProps> = ({ rightControl }) => {
	const { progress, total } = useProgress();
	const loc = useLocalization();

	return (
		<section className={cn(styles.taskBar)}>
			<div className={'flex items-center gap-[.95em]'}>
				<div
					className={cn(styles.progressBar)}
					style={
						{
							'--percent': `${progress}%`,
						} as CSSProperties
					}
				></div>
				{progress}% ({total})
			</div>

			{rightControl && (
				<div className={cn(styles.rightControls)}>
					<label className={cn(styles.inputPlaceholder)}>
						<svg
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M18.4444 20L11.4444 13C10.8889 13.4444 10.25 13.7963 9.52778 14.0556C8.80556 14.3148 8.03704 14.4444 7.22222 14.4444C5.2037 14.4444 3.49537 13.7454 2.09722 12.3472C0.699074 10.9491 0 9.24074 0 7.22222C0 5.2037 0.699074 3.49537 2.09722 2.09722C3.49537 0.699074 5.2037 0 7.22222 0C9.24074 0 10.9491 0.699074 12.3472 2.09722C13.7454 3.49537 14.4444 5.2037 14.4444 7.22222C14.4444 8.03704 14.3148 8.80556 14.0556 9.52778C13.7963 10.25 13.4444 10.8889 13 11.4444L20 18.4444L18.4444 20ZM7.22222 12.2222C8.61111 12.2222 9.79167 11.7361 10.7639 10.7639C11.7361 9.79167 12.2222 8.61111 12.2222 7.22222C12.2222 5.83333 11.7361 4.65278 10.7639 3.68056C9.79167 2.70833 8.61111 2.22222 7.22222 2.22222C5.83333 2.22222 4.65278 2.70833 3.68056 3.68056C2.70833 4.65278 2.22222 5.83333 2.22222 7.22222C2.22222 8.61111 2.70833 9.79167 3.68056 10.7639C4.65278 11.7361 5.83333 12.2222 7.22222 12.2222Z'
								fill='#646464'
							/>
						</svg>

						<input
							className={cn(styles.searchBar)}
							placeholder={loc.header.taskbar.searchPlaceholder}
						/>
					</label>

					<Button square fullHeight className={cn(styles.button)}>
						<svg
							width='32'
							height='32'
							viewBox='0 0 32 32'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M14.2222 32V21.3333H17.7778V24.8889H32V28.4444H17.7778V32H14.2222ZM0 28.4444V24.8889H10.6667V28.4444H0ZM7.11111 21.3333V17.7778H0V14.2222H7.11111V10.6667H10.6667V21.3333H7.11111ZM14.2222 17.7778V14.2222H32V17.7778H14.2222ZM21.3333 10.6667V0H24.8889V3.55556H32V7.11111H24.8889V10.6667H21.3333ZM0 7.11111V3.55556H17.7778V7.11111H0Z'
								fill='#646464'
							/>
						</svg>
					</Button>
				</div>
			)}
		</section>
	);
};

export default TaskBar;
