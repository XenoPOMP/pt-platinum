import { useOutside } from '@pacote/react-use-outside';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MultiValue } from 'react-select';

import Portal from '@components/Portal/Portal';

import {
	changeAppFilters,
	changeGridView,
	changeSearchString,
	changeShowCompletedRule,
} from '@redux/reducers/taskbar.slice';

import Button from '@ui/Button/Button';
import CheckBox from '@ui/CheckBox/CheckBox';
import CustomSelect from '@ui/CustomSelect/CustomSelect';
import { SelectOption } from '@ui/CustomSelect/CustomSelect.props';
import styles from '@ui/Header/Header.module.scss';

import useBoolean from '@hooks/useBoolean';
import useLocalization from '@hooks/useLocalization';
import { useProgress } from '@hooks/useProgress';
import { useTaskbarOptions } from '@hooks/useTaskbarOptions';

import type { TaskBarProps } from './TaskBar.props';

const TaskBar: FC<TaskBarProps> = ({ rightControl }) => {
	const { progress } = useProgress();
	const { search, showCompleted, gridView } = useTaskbarOptions();
	const dispatch = useDispatch();
	const loc = useLocalization();

	const [optionsShown, toggleOptions, setOptionsVisibility] = useBoolean(false);
	const [toggleBuffer, setToggleBuffer] = useState<boolean | null>(null);
	const optionsRef = useOutside<HTMLDivElement>('click', () => {
		setOptionsVisibility(false);
	});

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
				{progress}%
			</div>

			{rightControl && (
				<div
					className={cn(
						styles.rightControls,
						optionsShown && styles.optionsShown
					)}
				>
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
							value={search}
							onChange={ev => {
								dispatch(changeSearchString(ev.target.value));
							}}
						/>
					</label>

					<Button
						square
						fullHeight
						className={cn(styles.optionsButton)}
						onClick={() => {
							const newValue = !optionsShown;

							if (toggleBuffer === null) {
								setOptionsVisibility(newValue);
								setToggleBuffer(newValue);
								return;
							}

							setToggleBuffer(null);
						}}
					>
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

					<motion.div
						initial={{
							opacity: optionsShown ? 1 : 0,
							pointerEvents: optionsShown ? 'all' : 'none',
						}}
						animate={{
							opacity: optionsShown ? 1 : 0,
							pointerEvents: optionsShown ? 'all' : 'none',
						}}
						transition={{
							duration: 0.25,
							ease: optionsShown ? 'easeOut' : 'easeIn',
						}}
						ref={optionsRef}
						className={cn(styles.settingsPopup)}
					>
						<div className={cn(styles.item)}>
							<label className={cn(styles.itemLabel)}>
								{loc.header.taskbar.options.gridView}
							</label>

							<div className={cn(styles.gridViewSelector)}>
								<div
									className={cn(
										styles.selector,
										gridView === 'grid' && styles.active
									)}
									onClick={() => dispatch(changeGridView('grid'))}
								>
									<svg
										viewBox='0 0 25 25'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M2 2H9V9H2V2ZM0 2C0 0.895431 0.895431 0 2 0H9C10.1046 0 11 0.895431 11 2V9C11 10.1046 10.1046 11 9 11H2C0.895431 11 0 10.1046 0 9V2ZM16 2H23V9H16V2ZM14 2C14 0.895431 14.8954 0 16 0H23C24.1046 0 25 0.895431 25 2V9C25 10.1046 24.1046 11 23 11H16C14.8954 11 14 10.1046 14 9V2ZM9 16H2V23H9V16ZM2 14C0.895431 14 0 14.8954 0 16V23C0 24.1046 0.895431 25 2 25H9C10.1046 25 11 24.1046 11 23V16C11 14.8954 10.1046 14 9 14H2ZM16 16H23V23H16V16ZM14 16C14 14.8954 14.8954 14 16 14H23C24.1046 14 25 14.8954 25 16V23C25 24.1046 24.1046 25 23 25H16C14.8954 25 14 24.1046 14 23V16Z'
											fill='#EDEDED'
										/>
									</svg>
								</div>

								<div
									className={cn(
										styles.selector,
										gridView === 'row' && styles.active
									)}
									onClick={() => dispatch(changeGridView('row'))}
								>
									<svg
										viewBox='0 0 28 20'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M0 2C0 0.895431 0.895431 0 2 0H26C27.1046 0 28 0.895431 28 2C28 3.10457 27.1046 4 26 4H2C0.895431 4 0 3.10457 0 2ZM0 10C0 8.89543 0.895431 8 2 8H26C27.1046 8 28 8.89543 28 10C28 11.1046 27.1046 12 26 12H2C0.895431 12 0 11.1046 0 10ZM2 16C0.895431 16 0 16.8954 0 18C0 19.1046 0.895431 20 2 20H26C27.1046 20 28 19.1046 28 18C28 16.8954 27.1046 16 26 16H2Z'
											fill='#737674'
										/>
									</svg>
								</div>
							</div>
						</div>

						<div className={cn(styles.item)}>
							<label className={cn(styles.itemLabel)}>
								{loc.header.taskbar.options.filters}
							</label>

							<CustomSelect
								options={loc.pages.main.indexingFilters.map(filter => {
									const { colors, displayName } = filter;

									return {
										value: displayName,
										label: displayName,
										multiColors: {
											background: colors.background,
											font: colors.border,
										},
									};
								})}
								isMulti
								placeholder={loc.header.taskbar.options.filtersPlaceholder}
								className={cn(styles.select)}
								onChange={select => {
									const filters: (string | undefined)[] = (
										select as MultiValue<SelectOption>
									).map(item => {
										return item.value;
									});

									// Apply filters
									dispatch(changeAppFilters(filters));
								}}
							/>
						</div>

						<div className={cn(styles.item)}>
							<CheckBox
								checked={showCompleted}
								onClick={state => {
									dispatch(changeShowCompletedRule(state));
								}}
							>
								{loc.header.taskbar.options.showCompleted}
							</CheckBox>
						</div>
					</motion.div>
				</div>
			)}
		</section>
	);
};

export default TaskBar;
