import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

import { Achievements } from '@type/Achievements';

import alienCow from '@media/images/achievement-pictures/webp/alien_cow.webp';
import aliveAndWell from '@media/images/achievement-pictures/webp/alive_and_well.webp';
import alreadyPressed from '@media/images/achievement-pictures/webp/already_pressed.webp';
import beeNice from '@media/images/achievement-pictures/webp/bee_nice.webp';
import blastEmAsteroids from '@media/images/achievement-pictures/webp/blast_em_asteroid.webp';
import blowBack from '@media/images/achievement-pictures/webp/blowback.webp';
import bullsEye from '@media/images/achievement-pictures/webp/bullseye.webp';
import clerkAchievement from '@media/images/achievement-pictures/webp/clerk_achievement.webp';
import cubeMenace from '@media/images/achievement-pictures/webp/cube_menace.webp';
import delicacy from '@media/images/achievement-pictures/webp/delicacy.webp';
import demoExpert from '@media/images/achievement-pictures/webp/demo_expert.webp';
import denoise from '@media/images/achievement-pictures/webp/denoise.webp';
import eruptionMan from '@media/images/achievement-pictures/webp/eruption_man.webp';
import ghosted from '@media/images/achievement-pictures/webp/ghosted.webp';
import goodEgg from '@media/images/achievement-pictures/webp/good_egg.webp';
import johnGuttedWebp from '@media/images/achievement-pictures/webp/john-gutter.webp';
import letsMakeThisQuickWebp from '@media/images/achievement-pictures/webp/lets-make-this.quick.webp';
import lumberJack from '@media/images/achievement-pictures/webp/lumberjack.webp';
import noOneIsSafe from '@media/images/achievement-pictures/webp/no_one_is_safe.webp';
import nonAlco from '@media/images/achievement-pictures/webp/non-alco.webp';
import pRankOne from '@media/images/achievement-pictures/webp/p_rank_1.webp';
import pRankTwo from '@media/images/achievement-pictures/webp/p_rank_2.webp';
import pretendGhost from '@media/images/achievement-pictures/webp/pretend_ghost.webp';
import primateRageWebp from '@media/images/achievement-pictures/webp/primate-rage.webp';
import rainDance from '@media/images/achievement-pictures/webp/rain_dance.webp';
import royalFlush from '@media/images/achievement-pictures/webp/royal_flush.webp';
import sRankOne from '@media/images/achievement-pictures/webp/s_rank_1.webp';
import sRankTwo from '@media/images/achievement-pictures/webp/s_rank_2.webp';
import shiningArmorWebp from '@media/images/achievement-pictures/webp/shining-armor.webp';
import spherical from '@media/images/achievement-pictures/webp/spherical.webp';
import spoonKnight from '@media/images/achievement-pictures/webp/spoonknight.webp';
import theCritic from '@media/images/achievement-pictures/webp/the_critic.webp';
import theUgly from '@media/images/achievement-pictures/webp/the_ugly.webp';
import thrillSeeker from '@media/images/achievement-pictures/webp/thrill_seeker.webp';
import turboTunnel from '@media/images/achievement-pictures/webp/turbo_tunnel.webp';
import unslicedMan from '@media/images/achievement-pictures/webp/unsliced_man.webp';
import veryHotSauce from '@media/images/achievement-pictures/webp/very_very_hot_sauce.webp';
import volleyBomb from '@media/images/achievement-pictures/webp/volleybomb.webp';
import xWebp from '@media/images/achievement-pictures/webp/x.webp';

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
			name: 'THE_CRITIC',
			pictureUrl: theCritic,
			shown: true,
			completed: false,
		},

		{
			name: 'S_RANK_1',
			pictureUrl: sRankOne,
			shown: true,
			completed: false,
		},

		{
			name: 'P_RANK_1',
			pictureUrl: pRankOne,
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

		{
			name: 'NON_ALCOHOLIC',
			pictureUrl: nonAlco,
			shown: true,
			completed: false,
		},

		{
			name: 'ALREADY_PRESSED',
			pictureUrl: alreadyPressed,
			shown: true,
			completed: false,
		},

		{
			name: 'ROYAL_FLUSH',
			pictureUrl: royalFlush,
			shown: true,
			completed: false,
		},

		{
			name: 'THE_UGLY',
			pictureUrl: theUgly,
			shown: true,
			completed: false,
		},

		{
			name: 'S_RANK_2',
			pictureUrl: sRankTwo,
			shown: true,
			completed: false,
		},

		{
			name: 'P_RANK_2',
			pictureUrl: pRankTwo,
			shown: true,
			completed: false,
		},

		{
			name: 'BLOWBACK',
			pictureUrl: blowBack,
			shown: true,
			completed: false,
		},

		{
			name: 'X',
			pictureUrl: xWebp,
			shown: true,
			completed: false,
		},

		{
			name: 'DEMOLITION_EXPERT',
			pictureUrl: demoExpert,
			shown: true,
			completed: false,
		},

		{
			name: 'BEE_NICE',
			pictureUrl: beeNice,
			shown: true,
			completed: false,
		},

		{
			name: 'LUMBERJACK',
			pictureUrl: lumberJack,
			shown: true,
			completed: false,
		},

		{
			name: 'BULLSEYE',
			pictureUrl: bullsEye,
			shown: true,
			completed: false,
		},

		{
			name: 'TURBO_TUNNEL',
			pictureUrl: turboTunnel,
			shown: true,
			completed: false,
		},

		{
			name: 'BLAST_EM_ASTEROIDS',
			pictureUrl: blastEmAsteroids,
			shown: true,
			completed: false,
		},

		{
			name: 'DENOISE',
			pictureUrl: denoise,
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
