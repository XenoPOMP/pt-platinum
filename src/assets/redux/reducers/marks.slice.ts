import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

import { Achievements } from '@type/Achievements';

import alienCow from '@media/images/achievement-pictures/webp/alien_cow.webp';
import aliveAndWell from '@media/images/achievement-pictures/webp/alive_and_well.webp';
import clerkAchievement from '@media/images/achievement-pictures/webp/clerk_achievement.webp';
import cubeMenace from '@media/images/achievement-pictures/webp/cube_menace.webp';
import delicacy from '@media/images/achievement-pictures/webp/delicacy.webp';
import eruptionMan from '@media/images/achievement-pictures/webp/eruption_man.webp';
import ghosted from '@media/images/achievement-pictures/webp/ghosted.webp';
import goodEgg from '@media/images/achievement-pictures/webp/good_egg.webp';
import johnGuttedWebp from '@media/images/achievement-pictures/webp/john-gutter.webp';
import letsMakeThisQuickWebp from '@media/images/achievement-pictures/webp/lets-make-this.quick.webp';
import noOneIsSafe from '@media/images/achievement-pictures/webp/no_one_is_safe.webp';
import pretendGhost from '@media/images/achievement-pictures/webp/pretend_ghost.webp';
import primateRageWebp from '@media/images/achievement-pictures/webp/primate-rage.webp';
import rainDance from '@media/images/achievement-pictures/webp/rain_dance.webp';
import shiningArmorWebp from '@media/images/achievement-pictures/webp/shining-armor.webp';
import spherical from '@media/images/achievement-pictures/webp/spherical.webp';
import spoonKnight from '@media/images/achievement-pictures/webp/spoonknight.webp';
import thrillSeeker from '@media/images/achievement-pictures/webp/thrill_seeker.webp';
import unslicedMan from '@media/images/achievement-pictures/webp/unsliced_man.webp';
import veryHotSauce from '@media/images/achievement-pictures/webp/very_very_hot_sauce.webp';
import volleyBomb from '@media/images/achievement-pictures/webp/volleybomb.webp';

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

		{
			name: 'PRIMATE_RAGE',
			pictureUrl: primateRageWebp,
			shown: true,
			completed: false,
		},

		{
			name: 'SHINING_ARMOR',
			pictureUrl: shiningArmorWebp,
			shown: true,
			completed: false,
		},

		{
			name: 'SPOONKNIGHT',
			pictureUrl: spoonKnight,
			shown: true,
			completed: false,
		},

		{
			name: 'SPHERICAL',
			pictureUrl: spherical,
			shown: true,
			completed: false,
		},

		{
			name: 'THRILL_SEEKER',
			pictureUrl: thrillSeeker,
			shown: true,
			completed: false,
		},

		{
			name: 'VOLLEYBOMB',
			pictureUrl: volleyBomb,
			shown: true,
			completed: false,
		},

		{
			name: 'DELICACY',
			pictureUrl: delicacy,
			shown: true,
			completed: false,
		},

		{
			name: 'VERY_VERY_HOT_SAUCE',
			pictureUrl: veryHotSauce,
			shown: true,
			completed: false,
		},

		{
			name: 'ERUPTION_MAN',
			pictureUrl: eruptionMan,
			shown: true,
			completed: false,
		},

		{
			name: 'UNSLICED_PIZZAMAN',
			pictureUrl: unslicedMan,
			shown: true,
			completed: false,
		},

		{
			name: 'PEPPINO_S_RAIN_DANCE',
			pictureUrl: rainDance,
			shown: true,
			completed: false,
		},

		{
			name: 'UNNECESSARY_VIOLENCE',
			pictureUrl: clerkAchievement,
			shown: true,
			completed: false,
		},

		{
			name: 'ALIEN_COW',
			pictureUrl: alienCow,
			shown: true,
			completed: false,
		},

		{
			name: 'GHOSTED',
			pictureUrl: ghosted,
			shown: true,
			completed: false,
		},

		{
			name: 'PRETEND_GHOST',
			pictureUrl: pretendGhost,
			shown: true,
			completed: false,
		},

		{
			name: 'ALIVE_AND_WELL',
			pictureUrl: aliveAndWell,
			shown: true,
			completed: false,
		},

		{
			name: 'NO_ONE_IS_SAFE',
			pictureUrl: noOneIsSafe,
			shown: true,
			completed: false,
		},

		{
			name: 'CUBE_MENACE',
			pictureUrl: cubeMenace,
			shown: true,
			completed: false,
		},

		{
			name: 'GOOD_EGG',
			pictureUrl: goodEgg,
			shown: true,
			completed: false,
		},
	],
};

const marksSlice = createSlice({
	name: 'marks',
	initialState,
	reducers: {
		loadMarks(state, action: ReduxAction<AchievementMarks>) {
			state.achievements = action.payload.achievements.map((loaded, index) => {
				/** Default achievement state. */
				const defaultState = state.achievements[index];

				/**
				 * These keys are excluded from
				 * loading from local storage.
				 */
				const exclusionList: (keyof typeof defaultState)[] = ['pictureUrl'];

				/** Mark load with exclusions. */
				let output = { ...loaded };

				// Exclude each exclusion
				exclusionList.forEach(ex => {
					output = { ...output, [ex]: defaultState[ex] };
				});

				// Set local state to local storage`s one,
				// with excluded keys.
				return output;
			});
		},

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
export const { changeCompletion, loadMarks } = marksSlice.actions;
export const initialAchievementMarks = marksSlice.getInitialState();
