import { TutorialStepNames } from '@redux/reducers/welcomeTutorial.slice';

type StepWithHeaderLocale<T extends any = unknown> = { header: string } & T;

export type WelcomePageLocales = {
	steps: Record<
		keyof TutorialStepNames,
		StepWithHeaderLocale<{
			descText?: string;
		}>
	>;

	controls: {
		skip: string;
		back: string;
		forward: string;
		readyToComplete: string;
	};
};
