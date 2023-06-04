import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

import { Achievements } from '@type/Achievements';

import johnGuttedWebp from '@media/images/achievement-pictures/webp/JOHN_GUTTED.webp';
import letsMakeThisQuickWebp from '@media/images/achievement-pictures/webp/lets-make-this.quick.webp';

export type AchievementMark = {
	name: keyof Achievements;
	pictureUrl?: string;
	shown: boolean;
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
		},

		{
			name: 'LETS_MAKE_THIS_QUICK',
			pictureUrl: letsMakeThisQuickWebp,
			shown: true,
		},
	],
};

const marksSlice = createSlice({
	name: 'marks',
	initialState,
	reducers: {
		simpleAction(state, action: ReduxAction<any>) {},
	},
});

export default marksSlice.reducer;
export const { simpleAction } = marksSlice.actions;
