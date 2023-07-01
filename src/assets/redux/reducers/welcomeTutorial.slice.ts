import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

export interface TutorialStepNames {
	welcome: string;
	languageSetup: string;
	themeSetup: string;
}

type TutorialStep = {
	name: keyof TutorialStepNames;
	completed: boolean;
};

export type WelcomeTutorialState = {
	steps: TutorialStep[];
	completed: boolean;
	currentStepIndex: number;
};

const initialState: WelcomeTutorialState = {
	steps: [
		{
			name: 'welcome',
			completed: false,
		},
		{
			name: 'languageSetup',
			completed: false,
		},
		{
			name: 'themeSetup',
			completed: false,
		},
	],

	completed: false,

	currentStepIndex: 0,
};

const welcomeTutorialSlice = createSlice({
	name: 'welcomeTutorial',
	initialState,
	reducers: {
		/**
		 * Allows to complete or un-complete step.
		 *
		 * @param state
		 * @param action
		 */
		completeStep(state, action: ReduxAction<TutorialStep>) {
			const { name, completed } = action.payload;

			state.steps.map((step, index) => {
				if (name === step.name) {
					state.currentStepIndex = index;

					return {
						...step,
						completed,
					};
				}

				return step;
			});
		},

		/** Skip tutorial. It will never be shown again. */
		skipTutorial(state, action: ReduxAction<undefined>) {
			state.completed = true;

			// Set all steps completed
			state.steps = state.steps.map(step => {
				return { ...step, completed: true };
			});
		},
	},
});

export default welcomeTutorialSlice.reducer;
export const { completeStep, skipTutorial } = welcomeTutorialSlice.actions;
