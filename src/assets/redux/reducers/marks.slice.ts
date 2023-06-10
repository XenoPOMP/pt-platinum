import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

import { Achievements } from '@type/Achievements';

import alienCow from '@media/images/achievement-pictures/webp/alien_cow.webp';
import aliveAndWell from '@media/images/achievement-pictures/webp/alive_and_well.webp';
import alreadyPressed from '@media/images/achievement-pictures/webp/already_pressed.webp';
import myGunOnAstick from '@media/images/achievement-pictures/webp/and_this_is_my_gun_on_a_stick.webp';
import beeNice from '@media/images/achievement-pictures/webp/bee_nice.webp';
import blastEmAsteroids from '@media/images/achievement-pictures/webp/blast_em_asteroid.webp';
import blowBack from '@media/images/achievement-pictures/webp/blowback.webp';
import bullsEye from '@media/images/achievement-pictures/webp/bullseye.webp';
import cantFoolMe from '@media/images/achievement-pictures/webp/cant_fool_me.webp';
import clerkAchievement from '@media/images/achievement-pictures/webp/clerk_achievement.webp';
import crossToBare from '@media/images/achievement-pictures/webp/cross_to_bare.webp';
import cubeMenace from '@media/images/achievement-pictures/webp/cube_menace.webp';
import decoratedVeteran from '@media/images/achievement-pictures/webp/decorated_veteran.webp';
import delicacy from '@media/images/achievement-pictures/webp/delicacy.webp';
import demoExpert from '@media/images/achievement-pictures/webp/demo_expert.webp';
import denoise from '@media/images/achievement-pictures/webp/denoise.webp';
import eruptionMan from '@media/images/achievement-pictures/webp/eruption_man.webp';
import faceOff from '@media/images/achievement-pictures/webp/face_off.webp';
import faker from '@media/images/achievement-pictures/webp/faker.webp';
import foodClan from '@media/images/achievement-pictures/webp/food_clan.webp';
import frozenNuggets from '@media/images/achievement-pictures/webp/frozen_nuggets.webp';
import ghosted from '@media/images/achievement-pictures/webp/ghosted.webp';
import goodEgg from '@media/images/achievement-pictures/webp/good_egg.webp';
import hauntedPlayground from '@media/images/achievement-pictures/webp/haunted_playground.webp';
import helpfulBurger from '@media/images/achievement-pictures/webp/helpful_burger.webp';
import iceClimber from '@media/images/achievement-pictures/webp/ice_climber.webp';
import johnGuttedWebp from '@media/images/achievement-pictures/webp/john-gutter.webp';
import jumpSpared from '@media/images/achievement-pictures/webp/jumpspared.webp';
import letThemSleep from '@media/images/achievement-pictures/webp/let_them_sleep.webp';
import letsMakeThisQuickWebp from '@media/images/achievement-pictures/webp/lets-make-this.quick.webp';
import lumberJack from '@media/images/achievement-pictures/webp/lumberjack.webp';
import manMeteor from '@media/images/achievement-pictures/webp/man_meteor.webp';
import niceShot from '@media/images/achievement-pictures/webp/nice_shot.webp';
import noOneIsSafe from '@media/images/achievement-pictures/webp/no_one_is_safe.webp';
import nonAlco from '@media/images/achievement-pictures/webp/non-alco.webp';
import pRankOne from '@media/images/achievement-pictures/webp/p_rank_1.webp';
import pRankTwo from '@media/images/achievement-pictures/webp/p_rank_2.webp';
import pRankThree from '@media/images/achievement-pictures/webp/p_rank_3.webp';
import pRankFour from '@media/images/achievement-pictures/webp/p_ranked_4.webp';
import pRankLast from '@media/images/achievement-pictures/webp/p_rannked_5.webp';
import panFried from '@media/images/achievement-pictures/webp/pan_fried.webp';
import pennyPincher from '@media/images/achievement-pictures/webp/penny_pincher.webp';
import pretendGhost from '@media/images/achievement-pictures/webp/pretend_ghost.webp';
import primateRageWebp from '@media/images/achievement-pictures/webp/primate-rage.webp';
import primoGolf from '@media/images/achievement-pictures/webp/primo_golf.webp';
import rainDance from '@media/images/achievement-pictures/webp/rain_dance.webp';
import royalFlush from '@media/images/achievement-pictures/webp/royal_flush.webp';
import sRankOne from '@media/images/achievement-pictures/webp/s_rank_1.webp';
import sRankTwo from '@media/images/achievement-pictures/webp/s_rank_2.webp';
import sRankThree from '@media/images/achievement-pictures/webp/s_rank_3.webp';
import sRankFour from '@media/images/achievement-pictures/webp/s_ranked_4.webp';
import sRankLast from '@media/images/achievement-pictures/webp/s_ranked_5.webp';
import sayOink from '@media/images/achievement-pictures/webp/say_oink.webp';
import seasonGreetings from '@media/images/achievement-pictures/webp/season_s_greetings.webp';
import sharpShooter from '@media/images/achievement-pictures/webp/sharpshooter.webp';
import shiningArmorWebp from '@media/images/achievement-pictures/webp/shining-armor.webp';
import skullsplitter from '@media/images/achievement-pictures/webp/skullsplitter.webp';
import spherical from '@media/images/achievement-pictures/webp/spherical.webp';
import spoonKnight from '@media/images/achievement-pictures/webp/spoonknight.webp';
import strike from '@media/images/achievement-pictures/webp/strike.webp';
import theCritic from '@media/images/achievement-pictures/webp/the_critic.webp';
import theUgly from '@media/images/achievement-pictures/webp/the_ugly.webp';
import thereCanBeOnlyOne from '@media/images/achievement-pictures/webp/there_can_be_only_one.webp';
import thrillSeeker from '@media/images/achievement-pictures/webp/thrill_seeker.webp';
import tripToTheWarzone from '@media/images/achievement-pictures/webp/trip_to_warzone.webp';
import turboTunnel from '@media/images/achievement-pictures/webp/turbo_tunnel.webp';
import unflattering from '@media/images/achievement-pictures/webp/unflattering.webp';
import unslicedMan from '@media/images/achievement-pictures/webp/unsliced_man.webp';
import veryHotSauce from '@media/images/achievement-pictures/webp/very_very_hot_sauce.webp';
import volleyBomb from '@media/images/achievement-pictures/webp/volleybomb.webp';
import whoopThis from '@media/images/achievement-pictures/webp/whoop_this.webp';
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

/**
 * Generates default achievement.
 *
 * @param name
 * @param pictureUrl
 * @constructor
 */
const AchievementFactory = (
	name: AchievementMark['name'],
	pictureUrl: AchievementMark['pictureUrl']
): AchievementMark => {
	return {
		name,
		pictureUrl,
		shown: true,
		completed: false,
	};
};

const initialState: AchievementMarks = {
	achievements: [
		// World 1
		AchievementFactory('JOHN_GUTTED', johnGuttedWebp),
		AchievementFactory('LETS_MAKE_THIS_QUICK', letsMakeThisQuickWebp),
		AchievementFactory('PRIMATE_RAGE', primateRageWebp),
		AchievementFactory('SHINING_ARMOR', shiningArmorWebp),
		AchievementFactory('SPOONKNIGHT', spoonKnight),
		AchievementFactory('SPHERICAL', spherical),
		AchievementFactory('THRILL_SEEKER', thrillSeeker),
		AchievementFactory('VOLLEYBOMB', volleyBomb),
		AchievementFactory('DELICACY', delicacy),
		AchievementFactory('VERY_VERY_HOT_SAUCE', veryHotSauce),
		AchievementFactory('ERUPTION_MAN', eruptionMan),
		AchievementFactory('UNSLICED_PIZZAMAN', unslicedMan),
		// World 1 - Boss
		AchievementFactory('THE_CRITIC', theCritic),
		// World 1 - Ranks
		AchievementFactory('S_RANK_1', sRankOne),
		AchievementFactory('P_RANK_1', pRankOne),
		// World 1 - End

		// World 2
		AchievementFactory('PEPPINO_S_RAIN_DANCE', rainDance),
		AchievementFactory('UNNECESSARY_VIOLENCE', clerkAchievement),
		AchievementFactory('ALIEN_COW', alienCow),
		AchievementFactory('GHOSTED', ghosted),
		AchievementFactory('PRETEND_GHOST', pretendGhost),
		AchievementFactory('ALIVE_AND_WELL', aliveAndWell),
		AchievementFactory('NO_ONE_IS_SAFE', noOneIsSafe),
		AchievementFactory('CUBE_MENACE', cubeMenace),
		AchievementFactory('GOOD_EGG', goodEgg),
		AchievementFactory('NON_ALCOHOLIC', nonAlco),
		AchievementFactory('ALREADY_PRESSED', alreadyPressed),
		AchievementFactory('ROYAL_FLUSH', royalFlush),
		// World 2 - Boss
		AchievementFactory('THE_UGLY', theUgly),
		// World 2 - Ranks
		AchievementFactory('S_RANK_2', sRankTwo),
		AchievementFactory('P_RANK_2', pRankTwo),
		// World 2 - End

		// World 3
		AchievementFactory('BLOWBACK', blowBack),
		AchievementFactory('X', xWebp),
		AchievementFactory('DEMOLITION_EXPERT', demoExpert),
		AchievementFactory('BEE_NICE', beeNice),
		AchievementFactory('LUMBERJACK', lumberJack),
		AchievementFactory('BULLSEYE', bullsEye),
		AchievementFactory('TURBO_TUNNEL', turboTunnel),
		AchievementFactory('BLAST_EM_ASTEROIDS', blastEmAsteroids),
		AchievementFactory('MAN_METEOR', manMeteor),
		AchievementFactory('PRIMO_GOLFER', primoGolf),
		AchievementFactory('NICE_SHOT', niceShot),
		AchievementFactory('HELPFUL_BURGER', helpfulBurger),
		// World 3 - Boss
		AchievementFactory('DENOISE', denoise),
		// World 3 - Ranks
		AchievementFactory('S_RANK_3', sRankThree),
		AchievementFactory('P_RANK_3', pRankThree),
		// World 3 - End

		// World 4
		AchievementFactory('PAN_FRIED', panFried),
		AchievementFactory('STRIKE', strike),
		AchievementFactory('SAY_OINK', sayOink),
		AchievementFactory('CANT_FOOL_ME', cantFoolMe),
		AchievementFactory('FOOD_CLAN', foodClan),
		AchievementFactory('PENNY_PINCHER', pennyPincher),
		AchievementFactory('UNFLATTENING', unflattering),
		AchievementFactory('WHOOP_THIS', whoopThis),
		AchievementFactory('THERE_CAN_BE_ONLY_ONE', thereCanBeOnlyOne),
		AchievementFactory('FROZEN_NUGGETS', frozenNuggets),
		AchievementFactory('SEASON_S_GREETINGS', seasonGreetings),
		AchievementFactory('ICE_CLIMBER', iceClimber),
		// World 4 - Boss
		AchievementFactory('FAKER', faker),
		// World 4 - Ranks
		AchievementFactory('S_RANK_4', sRankFour),
		AchievementFactory('P_RANK_4', pRankFour),

		// World 5
		AchievementFactory('CROSS_TO_BARE', crossToBare),
		AchievementFactory('HAUNTED_PLAYGROUND', hauntedPlayground),
		AchievementFactory('SKULLSPLITTER', skullsplitter),
		AchievementFactory('AND_THIS_IS_MY_GUN_ON_A_STICK', myGunOnAstick),
		AchievementFactory('LET_THEM_SLEEP', letThemSleep),
		AchievementFactory('JUMPSPARED', jumpSpared),
		AchievementFactory('DECORATED_VETERAN', decoratedVeteran),
		AchievementFactory('SHARPSHOOTER', sharpShooter),
		AchievementFactory('TRIP_TO_THE_WARZONE', tripToTheWarzone),
		// World 5 - Boss
		AchievementFactory('FACE_OFF', faceOff),
		AchievementFactory('S_RANK_5', sRankLast),
		AchievementFactory('P_RANK_5', pRankLast),
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
				const exclusionList: (keyof typeof defaultState)[] = [
					'pictureUrl',
					'shown',
				];

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

		changeShown(
			state,
			action: ReduxAction<{
				name: keyof Achievements;
				shown: AchievementMark['shown'];
			}>
		) {
			state.achievements.filter(
				mark => mark.name === action.payload.name
			)[0].shown = action.payload.shown;
		},
	},
});

export default marksSlice.reducer;
export const { changeCompletion, loadMarks, changeShown } = marksSlice.actions;
export const initialAchievementMarks = marksSlice.getInitialState();
