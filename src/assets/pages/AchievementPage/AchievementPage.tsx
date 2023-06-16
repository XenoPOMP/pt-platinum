import cn from 'classnames';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Page from '@components/Page/Page';

import { AchievementMark, changeCompletion } from '@redux/reducers/marks.slice';
import IStore from '@redux/types/redux-types';

import {
	AchievementLocale,
	InstructionImage,
} from '@localization/types/MainPageLocales';

import CheckBox from '@ui/CheckBox/CheckBox';
import CompletionBadge from '@ui/CompletionBadge/CompletionBadge';
import ProgressiveImage from '@ui/ProgressiveImage/ProgressiveImage';

import useLocalization from '@hooks/useLocalization';

import { Achievements } from '@type/Achievements';
import { PropsWith } from '@type/PropsWith';

import styles from './AchievementPage.module.scss';
import type { AchievementPageProps } from './AchievementPage.props';

const AchievementPage: FC<AchievementPageProps> = ({}) => {
	const { name } = useParams<{
		name: keyof Achievements;
	}>();

	const defaultName: Required<keyof Achievements> = name ? name : 'JOHN_GUTTED';

	// Localization
	const loc = useLocalization();
	const { title, description, filters, instructions } =
		loc.pages.main.achievements[defaultName];

	// Get data from redux store
	const { pictureUrl, completed }: AchievementMark = useSelector(
		(state: IStore) =>
			state.marks.achievements.filter(mark => mark.name === defaultName)
	)[0];

	// Hooks
	const dispatch = useDispatch();

	const getNextUpLinks = (): Record<
		'previous' | 'next',
		keyof Achievements | undefined
	> => {
		let previousKey: keyof Achievements | undefined = undefined;
		let nextKey: keyof Achievements | undefined = undefined;

		/** Locales keys. */
		const keys = Object.keys(loc.pages.main.achievements);

		/** Index of current card. */
		const masterIndex: number = (() => {
			let value: number = -1;

			keys.filter((key, index) => {
				if (key === defaultName) {
					value = index;
				}

				return key === defaultName;
			});

			return value;
		})();

		// Loop over all locales.
		keys.map((key, index) => {
			if (index + 1 === masterIndex) {
				previousKey = key as typeof previousKey;
			}

			if (index - 1 === masterIndex) {
				nextKey = key as typeof previousKey;
			}

			// First
			if (masterIndex === 0) {
				previousKey = undefined;
			}
		});

		return {
			previous: previousKey,
			next: nextKey,
		};
	};

	const NextUpLink: FC<
		PropsWith<
			'className',
			{
				achievementName?: keyof Achievements;
				type: 'previous' | 'next';
			}
		>
	> = ({ achievementName, className, type }) => {
		/** Router link. */
		const link = `/articles/${achievementName}`;

		// Get locales.
		const { title } =
			loc.pages.main.achievements[
				achievementName ? achievementName : 'JOHN_GUTTED'
			];

		return (
			<Link
				to={link}
				className={cn(
					styles.link,
					className,
					'flex gap-[.56em] items-center',
					achievementName === undefined && styles.disabled
				)}
			>
				<svg viewBox='0 0 11 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M0.43934 8.21751C-0.146447 8.8033 -0.146447 9.75305 0.43934 10.3388L8.21751 18.117C8.8033 18.7028 9.75305 18.7028 10.3388 18.117C10.9246 17.5312 10.9246 16.5815 10.3388 15.9957L3.62132 9.27817L10.3388 2.56066C10.9246 1.97487 10.9246 1.02513 10.3388 0.43934C9.75305 -0.146447 8.8033 -0.146447 8.21751 0.43934L0.43934 8.21751Z'
						fill='#0029FF'
					/>
				</svg>

				<span className={cn(styles.title)}>{title}</span>

				<span className={cn(styles.locale)}>
					{type === 'previous' && loc.pages.achievement.nextUp.previous}

					{type === 'next' && loc.pages.achievement.nextUp.next}
				</span>
			</Link>
		);
	};

	return (
		<Page
			meta={{
				...loc.meta.achievement,
				pageTitle: loc.meta.achievement.pageTitle.replace(
					/#\[.*\]/gi,
					loc.pages.main.achievements[defaultName].title
				),
			}}
			header={{
				taskbar: false,
			}}
		>
			<div className={cn(styles.titleBlock)}>
				<div className={cn(styles.container)}>
					<div className={cn(styles.block)}>
						<div className={cn(styles.avatarPlaceholder)}>
							<ProgressiveImage
								loaderColorScheme={{
									backgroundColor: 'transparent',
								}}
								alt={'achievement-image'}
								src={pictureUrl}
							/>

							<CompletionBadge completed={completed} />
						</div>

						<div className={cn(styles.text)}>
							<h2>{title}</h2>

							<i>{description}</i>
						</div>
					</div>

					{/*<FilterGroup filters={filters} />*/}

					{/*<Button*/}
					{/*	variant={completed ? 'active' : 'normal'}*/}
					{/*	onClick={() => {*/}
					{/*		dispatch(*/}
					{/*			changeCompletion({*/}
					{/*				name: defaultName,*/}
					{/*				value: !completed,*/}
					{/*			})*/}
					{/*		);*/}
					{/*	}}*/}
					{/*>*/}
					{/*	{completed*/}
					{/*		? loc.pages.achievement.completeButton.completed*/}
					{/*		: loc.pages.achievement.completeButton.notCompleted}*/}
					{/*</Button>*/}

					<div
						style={{
							fontSize: '1.5em',
							height: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							aspectRatio: 1,
						}}
					>
						<CheckBox
							checked={completed}
							onClick={() => {
								dispatch(
									changeCompletion({
										name: defaultName,
										value: !completed,
									})
								);
							}}
						/>
					</div>
				</div>
			</div>

			<div className={cn(styles.achievementPage)}>
				{instructions && (
					<>
						<h3>{loc.pages.achievement.guideLabel}</h3>

						<div className={cn(styles.instructions)}>
							{instructions.map(instr => {
								if (instr instanceof InstructionImage) {
									const { alt, background, url, rowSpan, colSpan } = instr;

									return (
										<div
											className={cn(styles.imagePlaceholder)}
											style={{
												gridRow: `span ${rowSpan}`,
												gridColumn: colSpan ? `span ${colSpan}` : 1,
											}}
										>
											<ProgressiveImage
												loaderColorScheme={{
													backgroundColor: background,
												}}
												alt={alt}
												src={url}
											/>
										</div>
									);
								} else {
									// Return paragraph by default
									return <p key={instr}>{instr}</p>;
								}
							})}
						</div>
					</>
				)}

				<div className={cn(styles.nextUpLinks)}>
					<NextUpLink
						achievementName={getNextUpLinks().previous}
						type={'previous'}
					/>
					<NextUpLink achievementName={getNextUpLinks().next} type={'next'} />
				</div>
			</div>
		</Page>
	);
};

export default AchievementPage;
