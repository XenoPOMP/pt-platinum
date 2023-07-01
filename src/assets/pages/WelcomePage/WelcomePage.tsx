import cn from 'classnames';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Page from '@components/Page/Page';

import {
	TutorialStepNames,
	WelcomeTutorialState,
	completeStep,
	skipTutorial,
} from '@redux/reducers/welcomeTutorial.slice';
import IStore from '@redux/types/redux-types';

import Button from '@ui/Button/Button';

import useLocalization from '@hooks/useLocalization';

import peppinoArt from '@media/images/Art Section.png';

import styles from './WelcomePage.module.scss';
import type { WelcomePageProps } from './WelcomePage.props';

const WelcomePage: FC<WelcomePageProps> = ({}) => {
	const loc = useLocalization();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { step } = useParams<{
		step: string;
	}>();

	const { steps }: WelcomeTutorialState = useSelector(
		(state: IStore) => state.welcome
	);
	const indexedNames: (keyof TutorialStepNames)[] = steps.map(
		step => step.name
	);

	return (
		<Page
			meta={loc.meta.welcomePage}
			noIndex
			header={{
				renderHeader: false,
			}}
		>
			<main className={cn(styles.welcomePage)}>
				<section className={cn(styles.settings)}>
					{step === '0' && (
						<div className={cn(styles.step, styles.welcome)}>
							<h2>{loc.pages.welcomePage.steps.welcome.header}</h2>

							<div className={cn(styles.desc)}>
								{loc.pages.welcomePage.steps.welcome.descText}
							</div>
						</div>
					)}

					<div className={cn(styles.controls)}>
						<Button
							variant={'transparent'}
							onClick={() => {
								dispatch(skipTutorial());
								navigate('/', {
									preventScrollReset: false,
									replace: true,
								});
							}}
						>
							{loc.pages.welcomePage.controls.skip}
						</Button>

						<div className={cn(styles.group)}>
							{step !== '0' && (
								<Button
									variant={'normal'}
									link={`/welcome/${parseInt(step ? step : '0') - 1}`}
								>
									{loc.pages.welcomePage.controls.back}
								</Button>
							)}

							{parseInt(step ? step : '0') < steps.length - 1 && (
								<Button
									variant={'normal'}
									link={`/welcome/${parseInt(step ? step : '0') + 1}`}
								>
									{loc.pages.welcomePage.controls.forward}
								</Button>
							)}

							{parseInt(step ? step : '0') === steps.length - 1 && (
								<Button variant={'active'}>
									{loc.pages.welcomePage.controls.readyToComplete}
								</Button>
							)}
						</div>
					</div>

					<progress
						className={cn(styles.progressBar)}
						value={(parseInt(step ? step : '0') + 1) / steps.length}
					/>
				</section>

				<section className={cn(styles.peppinoPoster)}></section>
			</main>
		</Page>
	);
};

export default WelcomePage;
