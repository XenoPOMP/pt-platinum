import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

import { Achievements } from '@type/Achievements';

import johnGuttedWebp from '@media/images/achievement-pictures/webp/john-gutter.webp';
import letsMakeThisQuickWebp from '@media/images/achievement-pictures/webp/lets-make-this.quick.webp';

export type AchievementMark = {
	name: keyof Achievements;
	pictureUrl?: string;
	shown: boolean;
	completed: boolean;
};

export type AchievementMarks = {
	achievements: Array<AchievementMark>;
};

const initialState: AchievementMarks = {
	achievements: [
		{
			name: 'JOHN_GUTTED',
			pictureUrl: johnGuttedWebp,
			shown: true,
			completed: false,
		},

		{
			name: 'LETS_MAKE_THIS_QUICK',
			pictureUrl: letsMakeThisQuickWebp,
			shown: true,
			completed: false,
		},
	],
};

const marksSlice = createSlice({
	name: 'marks',
	initialState,
	reducers: {
		changeCompletion(
			state,
			action: ReduxAction<{
				name: keyof Achievements;
				value: boolean;
			}>
		) {
			state.achievements = state.achievements.map(achieve => {
				if (achieve.name === action.payload.name) {
					return { ...achieve, completed: action.payload.value };
				}

				return achieve;
			});
		},
	},
});

export default marksSlice.reducer;
export const { changeCompletion } = marksSlice.actions;
