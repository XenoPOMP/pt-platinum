import cn from 'classnames';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Page from '@components/Page/Page';

import { AchievementMark, changeCompletion } from '@redux/reducers/marks.slice';
import IStore from '@redux/types/redux-types';

import { InstructionImage } from '@localization/types/MainPageLocales';

import CheckBox from '@ui/CheckBox/CheckBox';
import CompletionBadge from '@ui/CompletionBadge/CompletionBadge';
import ProgressiveImage from '@ui/ProgressiveImage/ProgressiveImage';

import useLocalization from '@hooks/useLocalization';

import { Achievements } from '@type/Achievements';

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
			</div>
		</Page>
	);
};

export default AchievementPage;
