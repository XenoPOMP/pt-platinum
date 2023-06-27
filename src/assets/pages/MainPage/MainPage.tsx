import { chunk } from 'chunk-arr';
import cn from 'classnames';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useSearchParams } from 'react-router-dom';

import Page from '@components/Page/Page';
import page from '@components/Page/Page';

import { AchievementMark, AchievementMarks } from '@redux/reducers/marks.slice';
import {
	initialTaskbarOptions,
	switchPaginationPage,
} from '@redux/reducers/taskbar.slice';
import IStore from '@redux/types/redux-types';

import AchievementCard from '@ui/AchievementCard/AchievementCard';
import UiContainer from '@ui/UiContainer/UiContainer';

import useLocalization from '@hooks/useLocalization';
import { useTaskbarOptions } from '@hooks/useTaskbarOptions';

import { smoothScroll } from '@utils/smooth-scroll';

import styles from './MainPage.module.scss';

const MainPage = () => {
	const loc = useLocalization();
	const achievements: AchievementMarks['achievements'] = useSelector(
		(state: IStore) => state.marks.achievements
	);
	const { gridView, paginationSize, paginationPage } = useTaskbarOptions();
	const [params, setParams] = useSearchParams();
	const dispatch = useDispatch();

	/** Pagination chunks. */
	const achievementChunks =
		paginationSize === -1 ? achievements : chunk(achievements, paginationSize);

	/** Pagination keys. */
	const chunkKeys: number[] = Object.keys(achievementChunks)
		.map(strKey => parseInt(strKey))
		.map(key => key + 1);

	useEffect(() => {
		/** Initial page from params. */
		const initialPage: string | null = params.get('page');

		// Check for correct pagination page
		dispatch(
			switchPaginationPage(
				initialPage === null || !chunkKeys.includes(parseInt(initialPage))
					? 1
					: parseInt(initialPage)
			)
		);
	});

	const paginationResults = achievementChunks[paginationPage - 1];

	return (
		<Page meta={loc.meta.main}>
			<UiContainer
				className={cn(
					styles.mainPage,
					gridView === 'row' && styles.rowView,
					gridView === 'grid' && styles.gridView
				)}
			>
				{paginationSize !== -1
					? Array.isArray(paginationResults)
						? paginationResults.map((ac, index) => (
								<AchievementCard
									achievement={ac}
									index={index}
									key={`ac-card-${index}`}
								/>
						  ))
						: ''
					: achievements.map((ac, index) => (
							<AchievementCard
								achievement={ac}
								index={index}
								key={`ac-card-${index}`}
							/>
					  ))}

				{paginationSize !== -1 && (
					<nav className={cn(styles.pagination)}>
						<div className={cn(styles.controlGroup)}>
							<svg
								className={cn(
									styles.control,
									styles.reverse,
									paginationPage === 1 && styles.disabled
								)}
								viewBox='0 0 13 11'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								onClick={() => {
									setParams(
										new URLSearchParams({
											page: `1`,
										})
									);

									window.scrollTo(0, 0);
								}}
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M2.70442 0.292893C2.3139 -0.0976311 1.68073 -0.0976311 1.29021 0.292893C0.899683 0.683417 0.899683 1.31658 1.29021 1.70711L4.82574 5.24264L1.29021 8.77817C0.899683 9.1687 0.899683 9.80186 1.29021 10.1924C1.68073 10.5829 2.3139 10.5829 2.70442 10.1924L6.94706 5.94975C7.33759 5.55922 7.33759 4.92606 6.94706 4.53553L2.70442 0.292893ZM7.94701 0.292893C7.55648 -0.097631 6.92332 -0.097631 6.5328 0.292893C6.14227 0.683418 6.14227 1.31658 6.5328 1.70711L10.0683 5.24264L6.5328 8.77817C6.14227 9.1687 6.14227 9.80186 6.5328 10.1924C6.92332 10.5829 7.55648 10.5829 7.94701 10.1924L12.1896 5.94975C12.5802 5.55922 12.5802 4.92606 12.1896 4.53553L7.94701 0.292893Z'
									fill='#174E9F'
								/>
							</svg>

							<svg
								className={cn(
									styles.control,
									styles.reverse,
									paginationPage === 1 && styles.disabled
								)}
								viewBox='0 0 7 11'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								onClick={() => {
									setParams(
										new URLSearchParams({
											page: `${paginationPage - 1}`,
										})
									);

									window.scrollTo(0, 0);
								}}
							>
								<path
									d='M0.535543 0.292893C0.926067 -0.0976311 1.55923 -0.0976311 1.94976 0.292893L6.1924 4.53553C6.58292 4.92606 6.58292 5.55922 6.1924 5.94975C6.19216 5.94998 6.19263 5.94951 6.1924 5.94975L1.94976 10.1924C1.55923 10.5829 0.926067 10.5829 0.535543 10.1924C0.145019 9.80186 0.145019 9.1687 0.535543 8.77817L4.07108 5.24264L0.535543 1.70711C0.145019 1.31658 0.145019 0.683417 0.535543 0.292893Z'
									fill='#174E9F'
								/>
							</svg>
						</div>

						<div className={cn(styles.numericLinks)}>
							{chunkKeys.map((key, index) => (
								<div
									key={`${index}-pagination-link`}
									className={cn(
										styles.link,
										paginationPage === key && styles.active
									)}
									onClick={() => {
										setParams(
											new URLSearchParams({
												page: `${key}`,
											})
										);

										window.scrollTo(0, 0);
									}}
								>
									{key}
								</div>
							))}
						</div>

						<div className={cn(styles.controlGroup)}>
							<svg
								className={cn(
									styles.control,
									paginationPage === chunkKeys.at(-1) && styles.disabled
								)}
								viewBox='0 0 7 11'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								onClick={() => {
									setParams(
										new URLSearchParams({
											page: `${paginationPage + 1}`,
										})
									);

									window.scrollTo(0, 0);
								}}
							>
								<path
									d='M0.535543 0.292893C0.926067 -0.0976311 1.55923 -0.0976311 1.94976 0.292893L6.1924 4.53553C6.58292 4.92606 6.58292 5.55922 6.1924 5.94975C6.19216 5.94998 6.19263 5.94951 6.1924 5.94975L1.94976 10.1924C1.55923 10.5829 0.926067 10.5829 0.535543 10.1924C0.145019 9.80186 0.145019 9.1687 0.535543 8.77817L4.07108 5.24264L0.535543 1.70711C0.145019 1.31658 0.145019 0.683417 0.535543 0.292893Z'
									fill='#174E9F'
								/>
							</svg>

							<svg
								className={cn(
									styles.control,
									paginationPage === chunkKeys.at(-1) && styles.disabled
								)}
								viewBox='0 0 13 11'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								onClick={() => {
									setParams(
										new URLSearchParams({
											page: `${chunkKeys.at(-1)}`,
										})
									);

									window.scrollTo(0, 0);
								}}
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M2.70442 0.292893C2.3139 -0.0976311 1.68073 -0.0976311 1.29021 0.292893C0.899683 0.683417 0.899683 1.31658 1.29021 1.70711L4.82574 5.24264L1.29021 8.77817C0.899683 9.1687 0.899683 9.80186 1.29021 10.1924C1.68073 10.5829 2.3139 10.5829 2.70442 10.1924L6.94706 5.94975C7.33759 5.55922 7.33759 4.92606 6.94706 4.53553L2.70442 0.292893ZM7.94701 0.292893C7.55648 -0.097631 6.92332 -0.097631 6.5328 0.292893C6.14227 0.683418 6.14227 1.31658 6.5328 1.70711L10.0683 5.24264L6.5328 8.77817C6.14227 9.1687 6.14227 9.80186 6.5328 10.1924C6.92332 10.5829 7.55648 10.5829 7.94701 10.1924L12.1896 5.94975C12.5802 5.55922 12.5802 4.92606 12.1896 4.53553L7.94701 0.292893Z'
									fill='#174E9F'
								/>
							</svg>
						</div>
					</nav>
				)}
			</UiContainer>
		</Page>
	);
};

export default MainPage;
