import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

export interface TutorialStepNames {}

type TutorialStep = {
	name: keyof TutorialStepNames;
	completed: boolean;
};

export type WelcomeTutorialState = {
	steps: TutorialStep[];
	completed: boolean;
};

const initialState: WelcomeTutorialState = {
	steps: [],
	completed: false,
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

			state.steps.map(step => {
				if (name === step.name) {
					return action.payload;
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
