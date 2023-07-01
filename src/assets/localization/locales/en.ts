import { Localization } from '@localization/Localization';
import { InstructionImage } from '@localization/types/MainPageLocales';
import * as previews from '@localization/utils/preview-images';

import { Filter } from '@type/Filter';
import { FilterNames, FilterTypes } from '@type/FilterTypes';

import { FilterFactory } from '@utils/FilterFactory';

/**
 * These filters are being indexed in filter select
 * menu.
 */
const indexingFilters: Record<keyof FilterNames, Filter> = {
	// Worlds
	worldOne: FilterFactory(FilterTypes.worldOne, 'World 1'),
	worldTwo: FilterFactory(FilterTypes.worldTwo, 'World 2'),
	worldThree: FilterFactory(FilterTypes.worldThree, 'World 3'),
	worldFour: FilterFactory(FilterTypes.worldFour, 'World 4'),
	worldFive: FilterFactory(FilterTypes.worldFive, 'World 5'),

	// Boss
	boss: FilterFactory(FilterTypes.boss, 'Boss'),

	// World 1
	johnGutter: FilterFactory(FilterTypes.worldOne, 'Level: John Gutter'),
	pizzaScape: FilterFactory(FilterTypes.pizzaScape, 'Level: Pizzascape'),
	ancientCheese: FilterFactory(
		FilterTypes.ancientCheese,
		'Level: Ancient Cheese'
	),
	bloodSauceDungeon: FilterFactory(
		FilterTypes.bloodSauceDungeon,
		'Level: Bloodsauce Dungeon'
	),

	// World 2
	oreganoDesert: FilterFactory(FilterTypes.space, 'Level: Oregano Desert'),
	wasteyard: FilterFactory(FilterTypes.wasteyard, 'Level: Wasteyard'),
	farm: FilterFactory(FilterTypes.farm, 'Level: Fun Farm'),
	saloon: FilterFactory(FilterTypes.saloon, 'Level: Fastfood Saloon'),

	// World 3
	crust: FilterFactory(FilterTypes.crust, 'Level: Crust Cove'),
	lario: FilterFactory(FilterTypes.lario, 'Level: Gnome Forest'),
	deepDishNine: FilterFactory(FilterTypes.space, 'Level: Deep Dish Nine'),
	golf: FilterFactory(FilterTypes.golf, 'Level: Golf'),

	// World 4
	pigCity: FilterFactory(FilterTypes.pigCity, 'Level: The Pig City'),
	thatLevel: FilterFactory(FilterTypes.thatLevel, 'Level: Oh Shit!'),
	factory: FilterFactory(FilterTypes.factory, 'Level: Peppibot Factory'),
	freezerator: FilterFactory(FilterTypes.freezerator, 'Level: Refrigerator'),

	// World 5
	pizzaScare: FilterFactory(FilterTypes.pizzaScare, 'Level: Pizzascare'),
	fnaf: FilterFactory(FilterTypes.fnaf, 'Level: Don`t Make A Sound'),
	war: FilterFactory(FilterTypes.war, 'Level: WAR'),
};

/**
 * This function converts filter object to array.
 *
 * @returns {Filter[]}       array of indexing filters.
 */
const getIndexingFilters = (): Filter[] => {
	const output: ReturnType<typeof getIndexingFilters> = [];

	// Create array from indexing filters record
	Object.keys(indexingFilters).map((key: string) => {
		output.push(
			indexingFilters[key as keyof typeof FilterTypes & 'johnGutter']
		);
	});

	return output;
};

const englishLocalization: Localization = {
	meta: {
		main: {
			pageTitle: 'PT Platinum',
			pageDescription: '',
			keywords: '',
		},

		options: {
			pageTitle: `Options`,
			pageDescription: '',
			keywords: '',
		},

		achievement: {
			pageTitle: `Achievement "#[ACHIEVEMENT_NAME]" Pizza Tower`,
			pageDescription: '',
			keywords: '',
		},

		notFound: {
			pageTitle: 'PT Platinum | 404',
			pageDescription: '',
			keywords: '',
		},

		welcomePage: {
			pageTitle: 'You`re welcome at PT Platinum!',
			pageDescription: '',
			keywords: '',
		},
	},

	header: {
		taskbar: {
			searchPlaceholder: 'Search...',
			options: {
				showCompleted: 'Show completed achievements',
				filters: 'Filters',
				paginationSize: 'Result quantity at one page',
				filtersPlaceholder: 'Choose from list...',
				gridView: 'Grid view',
				disablePagination: 'All',
			},
		},
	},

	pages: {
		// TODO Translate all locales
		main: {
			achievements: {
				JOHN_GUTTED: {
					title: 'John Gutted',
					description: 'Destroy all the dead john blocks in John Gutter.',
					filters: [indexingFilters.worldOne, indexingFilters.johnGutter],
					instructions: [
						new InstructionImage(
							previews.preview_0,
							'preview_0',
							'transparent',
							1
						),
						'To complete this achievement, you need to destroy all the dead John blocks at the John Gutter level.',
					],
				},

				LETS_MAKE_THIS_QUICK: {
					title: "Let's Make This Quick",
					description: 'Finish John Gutter in under two minutes.',
					filters: [indexingFilters.worldOne, indexingFilters.johnGutter],
					instructions: [
						'Try to complete the map in less than two minutes, a few attempts and everything should work out.',
					],
				},

				PRIMATE_RAGE: {
					title: 'Primate Rage',
					description: 'Get a combo of 99 or more in John Gutter.',
					filters: [indexingFilters.worldOne, indexingFilters.johnGutter],
					instructions: [
						new InstructionImage(
							previews.preview_1,
							'preview_1',
							'transparent',
							1
						),
						'Complete combo from start to finish, as well as the execution of the 2nd lap. Should be exactly enough to get a combo of 99 enemies.',
					],
				},

				SHINING_ARMOR: {
					title: 'Shining Armor',
					description:
						'Get to all the priests without bumping into a wall once in Pizzascape.',
					filters: [indexingFilters.worldOne, indexingFilters.pizzaScape],
					instructions: [
						new InstructionImage(
							previews.preview_2,
							'preview_2',
							'transparent',
							1
						),
						'In total, you need to get to 5 priests. Constantly perform the technique of a sharp descent down, there will be a lot of moments when you need to beat against the wall and only this technique will save you from hitting the wall.',
					],
				},

				SPOONKNIGHT: {
					title: 'Spoonknight',
					description: 'Parry ten Forknights in Pizzascape.',
					filters: [indexingFilters.worldOne, indexingFilters.pizzaScape],
					instructions: [
						new InstructionImage(
							previews.preview_3,
							'preview_3',
							'transparent',
							1
						),
						'Very simple, nothing special. Just press Parry next to 10 "Forkknight" in one run.',
					],
				},

				SPHERICAL: {
					title: 'Spherical',
					description:
						'Kill another enemy while in the ball form in Pizzascape.',
					filters: [indexingFilters.worldOne, indexingFilters.pizzaScape],
					instructions: [
						new InstructionImage(
							previews.preview_4,
							'preview_4',
							'transparent',
							1
						),
						'Find an area with a "Pepperoni Goblin" and another enemy close enough to each other - (if necessary, you can move them by grabbing them). And let them kick you, and being a round ball kill another enemy.',
					],
				},

				THRILL_SEEKER: {
					title: 'Thrill Seeker',
					description:
						'Finish Ancient Cheese without getting hurt by an explosion.',
					filters: [indexingFilters.worldOne, indexingFilters.ancientCheese],
					instructions: [
						new InstructionImage(
							previews.preview_5,
							'preview_5',
							'transparent',
							1
						),
						'Everything is extremely simple. Just try not to take damage at this level from bombs.',
					],
				},

				VOLLEYBOMB: {
					title: 'Volleybomb',
					description:
						'Kill a rat using a bomb dropped by an enemy in Ancient Cheese.',
					filters: [indexingFilters.worldOne, indexingFilters.ancientCheese],
					instructions: [
						new InstructionImage(
							previews.preview_6,
							'preview_6',
							'transparent',
							1
						),
						'Kill the Rat with a goblin bomb. The achievement can be completed in the room, screen:',
					],
				},

				DELICACY: {
					title: 'Delicacy',
					description:
						'Make more than forty one sets of cheese platforms crumble in Ancient Cheese.',
					filters: [indexingFilters.worldOne, indexingFilters.ancientCheese],
					instructions: [
						new InstructionImage(
							previews.preview_7,
							'preview_7',
							'transparent',
							1
						),
						'You can not strain yourself too much, you will get it without any problems.',
					],
				},

				VERY_VERY_HOT_SAUCE: {
					title: 'Very Very Hot Sauce',
					description: 'Finish Bloodsauce Dungeon without touching lava once.',
					filters: [
						indexingFilters.worldOne,
						indexingFilters.bloodSauceDungeon,
					],
					instructions: [
						new InstructionImage(
							previews.preview_8,
							'preview_8',
							'transparent',
							1
						),
						'Nothing special, just complete the level without getting into any lava pits.',
					],
				},

				ERUPTION_MAN: {
					title: 'Eruption Man',
					description:
						'During escape, go up with the superjump for more than two seconds in Bloodsauce Dungeon.',
					filters: [
						indexingFilters.worldOne,
						indexingFilters.bloodSauceDungeon,
					],
					instructions: [
						new InstructionImage(
							previews.preview_9,
							'preview_9',
							'transparent',
							1
						),
						'By making a super jump in this place during "Pizza Time", and the achievement is yours.',
					],
				},

				UNSLICED_PIZZAMAN: {
					title: 'Unsliced Pizzaman',
					description:
						'Finish Bloodsauce Dungeon without getting hurt by a pizza cutter.',
					filters: [
						indexingFilters.worldOne,
						indexingFilters.bloodSauceDungeon,
					],
					instructions: [
						new InstructionImage(
							previews.preview_10,
							'preview_10',
							'transparent',
							1,
							1
						),
						'Just try not to take damage from pizza knives at this level.',
					],
				},

				THE_CRITIC: {
					title: 'The Critic',
					description: 'Defeat Pepperman without getting hurt.',
					filters: [indexingFilters.worldOne, indexingFilters.boss],
					instructions: [
						new InstructionImage(
							previews.preview_11,
							'preview_11',
							'transparent',
							1
						),
						'One of the simplest bosses, compared to other bosses, there should be no problems with its passage without damage.',
					],
				},

				S_RANK_1: {
					title: 'S Ranked #1',
					description: 'Get all S Ranks in World 1.',
					filters: [indexingFilters.worldOne],
				},

				P_RANK_1: {
					title: 'P Ranked #1',
					description: 'Get all P Ranks in World 1.',
					filters: [indexingFilters.worldOne],
				},

				PEPPINO_S_RAIN_DANCE: {
					title: "Peppino's Rain Dance",
					description:
						'Reactivate a totem by dancing with the mach dash in Oregano Desert.',
					filters: [indexingFilters.worldTwo, indexingFilters.oreganoDesert],
					instructions: [
						new InstructionImage(
							previews.preview_12,
							'preview_12',
							'transparent',
							1
						),
						'Being near the totem, start running and accelerating back and forth until the totem becomes active again. You can do this with any totem.',
					],
				},

				UNNECESSARY_VIOLENCE: {
					title: 'Unnecessary Violence',
					description: 'Kill all of the clerk sausages in the pizzamarts.',
					filters: [indexingFilters.worldTwo, indexingFilters.oreganoDesert],
					instructions: [
						new InstructionImage(
							previews.preview_13,
							'preview_13',
							'transparent',
							1
						),
						'There are 5 pizzerias on the level, each of which has a sausage seller.',
					],
				},

				ALIEN_COW: {
					title: 'Alien Cow',
					description: 'Dont get hit by a single cow in Oregano Desert.',
					filters: [indexingFilters.worldTwo, indexingFilters.oreganoDesert],
					instructions: [
						new InstructionImage(
							previews.preview_14,
							'preview_14',
							'transparent',
							1
						),
						'Avoid haste and take your time. Try to jump over all the cows and everything will work out.',
					],
				},

				GHOSTED: {
					title: 'Ghosted',
					description: 'Avoid getting touched by the John Ghost in Wasteyard.',
					filters: [indexingFilters.worldTwo, indexingFilters.wasteyard],
					instructions: [
						new InstructionImage(
							previews.preview_15,
							'preview_15',
							'transparent',
							1
						),
						'Don\'t touch John Ghost during "Pizza Time".',
					],
				},

				PRETEND_GHOST: {
					title: 'Pretend Ghost',
					description: 'Kill 20 or more enemies as a ghost in Wasteyard.',
					filters: [indexingFilters.worldTwo, indexingFilters.wasteyard],
					instructions: [
						new InstructionImage(
							previews.preview_16,
							'preview_16',
							'transparent',
							1
						),
						'Make sure that these two mini-Johns have appeared - (You need to kill them being a ghost)',
						new InstructionImage(
							previews.preview_17,
							'preview_17',
							'transparent',
							1
						),
						'and fly into this secret to complete the quest.',
					],
				},

				ALIVE_AND_WELL: {
					title: 'Alive and Well',
					description: 'Surf every corpse in Wasteyard.',
					filters: [indexingFilters.worldTwo, indexingFilters.wasteyard],
					instructions: [
						new InstructionImage(
							previews.preview_18,
							'preview_18',
							'transparent',
							1
						),
						'All the corpses are on the main path.',
					],
				},

				NO_ONE_IS_SAFE: {
					title: 'No One Is Safe',
					description:
						'Kill three unreachable enemies at once with the supertaunt in Fun Farm.',
					filters: [indexingFilters.worldTwo, indexingFilters.farm],
					instructions: [
						new InstructionImage(
							previews.preview_19,
							'preview_19',
							'transparent',
							1
						),
						'Super-mockery in this place will kill 4 "Peasanto\'s":',
					],
				},

				CUBE_MENACE: {
					title: 'Cube Menace',
					description: 'Find and destroy the Mort Cube.',
					filters: [indexingFilters.worldTwo, indexingFilters.farm],
					instructions: [
						new InstructionImage(
							previews.preview_20,
							'preview_20',
							'transparent',
							1
						),
						'The cube can be found in the first location, through which you will need to jump with the "Mort". The section will be closed, and you will need to break the block with a "Mort" to get there.',
					],
				},

				GOOD_EGG: {
					title: 'Good Egg',
					description:
						'Complete Fun Farm while avoiding getting hurt with Mort on you.',
					filters: [indexingFilters.worldTwo, indexingFilters.farm],
					instructions: [
						new InstructionImage(
							previews.preview_21,
							'preview_21',
							'transparent',
							1
						),
						'Just try to avoid damage with the "Mort" on you. Hitting a torch that throws a "Peasanto" is not considered damage.',
					],
				},

				NON_ALCOHOLIC: {
					title: 'Non-Alcoholic',
					description: 'Destroy nearly every beer bottle in Fastfood Saloon.',
					filters: [indexingFilters.worldTwo, indexingFilters.saloon],
					instructions: [
						new InstructionImage(
							previews.preview_22,
							'preview_22',
							'transparent',
							1
						),
						'There are a lot of beer bottles scattered everywhere in the saloon, and most of them need to be broken.',
					],
				},

				ALREADY_PRESSED: {
					title: 'Already Pressed',
					description: 'Activate each button only once in Fastfood Saloon.',
					filters: [indexingFilters.worldTwo, indexingFilters.saloon],
					instructions: [
						new InstructionImage(
							previews.preview_23,
							'preview_23',
							'transparent',
							1
						),
						'Not a very simple achievement. You need to remember the route well and know exactly what to do. There is also a possibility of double activation of the button, so you need to be a little careful with this.',
					],
				},

				ROYAL_FLUSH: {
					title: 'Royal Flush',
					description: 'Touch every single card in Fastfood Saloon.',
					filters: [indexingFilters.worldTwo, indexingFilters.saloon],
					instructions: [
						new InstructionImage(
							previews.preview_24,
							'preview_24',
							'transparent',
							1
						),
						'The cards are scattered all over the map and you need to collect them all. Cards are not counted in secrets.',
					],
				},

				THE_UGLY: {
					title: 'The Ugly',
					description: 'Defeat Vigilante without getting hurt.',
					filters: [indexingFilters.worldTwo, indexingFilters.boss],
					instructions: [
						new InstructionImage(
							previews.preview_25,
							'preview_25',
							'transparent',
							1
						),
						'Of the 5 bosses, I think this is the most difficult boss after PizzaFace. A total of 18 HP and not simple attacks will give you a head start.',
					],
				},

				S_RANK_2: {
					title: 'S Ranked #2',
					description: 'Get all S Ranks in World 2.',
					filters: [indexingFilters.worldTwo],
				},

				P_RANK_2: {
					title: 'P Ranked #2',
					description: 'Get all P Ranks in World 2.',
					filters: [indexingFilters.worldTwo],
				},

				BLOWBACK: {
					title: 'Blowback',
					description: 'Kill a cannon goblin with his own bomb in Crust Cove.',
					filters: [indexingFilters.worldThree, indexingFilters.crust],
					instructions: [
						new InstructionImage(
							previews.preview_26,
							'preview_26',
							'transparent',
							1
						),
						"Parry the attack of the goblin's cannon shot, and everything should work out.",
					],
				},

				X: {
					title: 'X',
					description: 'Uncover all the treasure guys in Crust Cove.',
					filters: [indexingFilters.worldThree, indexingFilters.crust],
					instructions: [
						new InstructionImage(
							previews.preview_27,
							'preview_27',
							'transparent',
							2
						),
						'Throughout the run, there are 7 hidden "Treasure Chest Guy" hiding in the ground, all of them marked with a red cross on the ground.',
						'The game counts "Treasure Chest Guy" by digging him out, not killing him. This means that you can constantly dig up the first "Treasure Chest Guy" at the beginning of the level, and not kill him. Then you go to another sub-location, go back to the room and dig out the same "Treasure Chest Guy" again, do this 7 times and get an achievement.',
					],
				},

				DEMOLITION_EXPERT: {
					title: 'Demolition Expert',
					description:
						'Complete Crust Cove without getting hit by an explosion.',
					filters: [indexingFilters.worldThree, indexingFilters.crust],
					instructions: [
						new InstructionImage(
							previews.preview_28,
							'preview_28',
							'transparent',
							1
						),
						"Just avoid damage to the goblins with the cannon and the captain's guns throughout the race.",
					],
				},

				BEE_NICE: {
					title: 'Bee Nice',
					description: 'Stand next to a bee and taunt in Gnome Forest.',
					filters: [indexingFilters.worldThree, indexingFilters.lario],
					instructions: [
						new InstructionImage(
							previews.preview_29,
							'preview_29',
							'transparent',
							1
						),
						'Bees are everywhere on the map, just find one and then stand in front of one of them and hit Parry.',
					],
				},

				LUMBERJACK: {
					title: 'Lumberjack',
					description: 'Destroy every wood block in Gnome Forest.',
					filters: [indexingFilters.worldThree, indexingFilters.lario],
					instructions: [
						new InstructionImage(
							previews.preview_30,
							'preview_30',
							'transparent',
							1
						),
						'There are too many of them to count, but they are located only on this level.',
					],
				},

				BULLSEYE: {
					title: 'Bullseye',
					description:
						'Kill a noise goblin with his own arrow in Gnome Forest.',
					filters: [indexingFilters.worldThree, indexingFilters.lario],
					instructions: [
						new InstructionImage(
							previews.preview_31,
							'preview_31',
							'transparent',
							1
						),
						'Parry the "Noise Goblin" arrow that he releases. It should hit the goblin if it is not too far away.',
					],
				},

				TURBO_TUNNEL: {
					title: 'Turbo Tunnel',
					description:
						'Avoid hitting the ceiling during the room right after the John Pillar in Deep Dish Nine.',
					filters: [indexingFilters.worldThree, indexingFilters.deepDishNine],
					instructions: [
						new InstructionImage(
							previews.preview_32,
							'preview_32',
							'transparent',
							1
						),
						'Once you start "Pizza Time", you should not knock your head on the ceiling. Trial and error and everything will work out.',
					],
				},

				BLAST_EM_ASTEROIDS: {
					title: "Blast'Em Asteroids",
					description: 'Destroy all asteroids in Deep Dish Nine.',
					filters: [indexingFilters.worldThree, indexingFilters.deepDishNine],
					instructions: [
						new InstructionImage(
							previews.preview_33,
							'preview_33',
							'transparent',
							1
						),
						'We need to destroy all the asteroids with tubes in their mouths. Asteroids are clearly visible, and this achievement should not cause problems.',
					],
				},

				MAN_METEOR: {
					title: 'Man Meteor',
					description: 'Kill 5 UFOlives in a single bodyslam in Deep Dish Nine',
					filters: [indexingFilters.worldThree, indexingFilters.deepDishNine],
					instructions: [
						new InstructionImage(
							previews.preview_34,
							'preview_34',
							'transparent',
							1
						),
						'There are several places where you can accomplish this achievement, but the easiest is to kill 5 floating UFOs in this pit.',
					],
				},

				PRIMO_GOLFER: {
					title: 'Primo Golfer',
					description: 'Get the highest rank in the courses of Golf.',
					filters: [indexingFilters.worldThree, indexingFilters.golf],
					instructions: [
						new InstructionImage(
							previews.preview_35,
							'preview_35',
							'transparent',
							1
						),
						'Get the rank of "Primo Burg`" on each golf course in one pass. A run-up collision in a "Greaseball" (aka "golf ball") covers a much longer distance than a normal putter, so try to pick up speed and collide with it, and not just play golf.',
					],
				},

				NICE_SHOT: {
					title: 'Nice Shot',
					description: 'Kill three or more enemies in a single stroke in Golf.',
					filters: [indexingFilters.worldThree, indexingFilters.golf],
					instructions: [
						new InstructionImage(
							previews.preview_36,
							'preview_36',
							'transparent',
							1
						),
						'This should happen by itself, but if you can\'t do it, just put 3 enemies next to each other - (you can drag them, just carefully...) and hit the "Greaseball" to kill them all with one blow.',
					],
				},

				HELPFUL_BURGER: {
					title: 'Helpful Burger',
					description:
						'Get a burger enemy to hit the ball inside the goal in Golf.',
					filters: [indexingFilters.worldThree, indexingFilters.golf],
					instructions: [
						new InstructionImage(
							previews.preview_37,
							'preview_37',
							'transparent',
							1
						),
						'The "Burger Golfer" must have the finishing touch to score the ball into the basket. Let the "Greaseball" get stuck in the nose, and let the "Burger Golfer" come up and hit it.',
					],
				},

				DENOISE: {
					title: 'Denoise',
					description: 'Defeat Noise without getting hurt.',
					filters: [indexingFilters.worldThree, indexingFilters.boss],
					instructions: [
						new InstructionImage(
							previews.preview_38,
							'preview_38',
							'transparent',
							1,
							1
						),
						'The first time during the passage may seem difficult, but it seems to me that it is second in complexity after "Pepperman". The whole trick of "Noise" is that, despite the fact that it has a certain number of attacks, they will all be executed in random order and can be executed only 2 times.',
					],
				},

				S_RANK_3: {
					title: 'S Ranked #3',
					description: 'Get all S Ranks in World 3.',
					filters: [indexingFilters.worldThree],
				},

				P_RANK_3: {
					title: 'P Ranked #3',
					description: 'Get all P Ranks in World 3.',
					filters: [indexingFilters.worldThree],
				},

				PAN_FRIED: {
					title: 'Pan Fried',
					description: 'Find the bacon room.',
					filters: [indexingFilters.worldFour, indexingFilters.pigCity],
					instructions: [
						new InstructionImage(
							previews.preview_39,
							'preview_39',
							'transparent',
							1
						),
						'The bacon room is located in the subzone of the 3rd taxi. Before you enter the police car, 2 strips of bacon will hang from the ceiling above. The super-jump between the bacon opens the entrance leading to the bacon room.',
					],
				},

				STRIKE: {
					title: 'Strike!',
					description:
						'Kill three or more enemies with a single Brick ball in Pig City.',
					filters: [indexingFilters.worldFour, indexingFilters.pigCity],
					instructions: [
						new InstructionImage(
							previews.preview_41,
							'preview_41',
							'transparent',
							1
						),
						'Once you switch to Gustavo and Brick, there will be 3 shrimp next to you. Attack them when they are on the same level.',
					],
				},

				SAY_OINK: {
					title: 'Say Oink!',
					description: 'Take a photo with every Pig City citizen.',
					filters: [indexingFilters.worldFour, indexingFilters.pigCity],
					instructions: [
						new InstructionImage(
							previews.preview_42,
							'preview_42',
							'transparent',
							1
						),
						'There are 13 pigs on the location, next to them you need to pose for "C". All of them are on the main road, so they cannot be in taxi subzones or secrets, they are not difficult to find. Dancing pigs and police pigs don\'t count.',
					],
				},

				CANT_FOOL_ME: {
					title: "Can't Fool Me",
					description: 'Avoid killing any pizzaboy cardboard in Oh Shit!',
					filters: [indexingFilters.worldFour, indexingFilters.thatLevel],
					instructions: [
						new InstructionImage(
							previews.preview_43,
							'preview_43',
							'transparent',
							1
						),
						'It is necessary to avoid destroying cardboard pizza-boy. The best tactic of action is to identify the cardboard from the enemy, they are not difficult to detect, and they are not difficult to cope with. Keep in mind that red ninjas are completely indistinguishable from cardboard ones. In the end, they will give an achievement.',
					],
				},

				FOOD_CLAN: {
					title: 'Food Clan',
					description: 'Kill ten ninjas by parrying them in Oh Shit!',
					filters: [indexingFilters.worldFour, indexingFilters.thatLevel],
					instructions: [
						new InstructionImage(
							previews.preview_44,
							'preview_44',
							'transparent',
							1
						),
						'The same method as with "Forknight" is only more difficult, when "Ninja Slice" tries to attack, we repel the attack with "C", everything should work out.',
					],
				},

				PENNY_PINCHER: {
					title: 'Penny Pincher',
					description:
						'Avoid getting grabbed by Mr Pinch during the escape sequence of Oh Shit!',
					filters: [indexingFilters.worldFour, indexingFilters.thatLevel],
					instructions: [
						new InstructionImage(
							previews.preview_45,
							'preview_45',
							'transparent',
							1
						),
						'Not a particularly difficult achievement. As soon as you pass the room with a few "Mr. Pinch", you\'ve practically got this achievement.',
					],
				},

				UNFLATTENING: {
					title: 'Unflattening',
					description:
						'Remove the boxxed form from each priest at least once in Peppibot Factory.',
					filters: [indexingFilters.worldFour, indexingFilters.factory],
					instructions: [
						new InstructionImage(
							previews.preview_46,
							'preview_46',
							'transparent',
							1
						),
						'There are 4 priests you need to interact with, the 3rd priest is right after the 2nd priest, there is no box conversion between them. You can either open the secret next to the 2nd priest to interact with the 3rd priest, and then go back upstairs to get the transformation again and this time interact with the 2nd priest, or make a Lap 2 and choose an unclassified route and a secret route, on different races.',
					],
				},

				WHOOP_THIS: {
					title: 'Whoop This!',
					description:
						'Survive the first secret of Peppibot Factory without getting hurt.',
					filters: [indexingFilters.worldFour, indexingFilters.factory],
					instructions: [
						new InstructionImage(
							previews.preview_47,
							'preview_47',
							'transparent',
							1
						),
						'When you find the secret, you need to use the super taunt as soon as possible and start running towards the wall to your left to avoid all the attacks at once.',
					],
				},

				THERE_CAN_BE_ONLY_ONE: {
					title: 'There Can Be Only One',
					description: 'Destroy every Peppino robot in Peppibot Factory.',
					filters: [indexingFilters.worldFour, indexingFilters.factory],
					instructions: [
						new InstructionImage(
							previews.preview_48,
							'preview_48',
							'transparent',
							1
						),
						'All robots are on the main path (there are no secrets or hidden rooms), but you have to go through the second round, as you need to kill each robot twice that appears during "Pizza Time" so that they all count.',
					],
				},

				FROZEN_NUGGETS: {
					title: 'Frozen Nuggets',
					description:
						'Free all the frozen birds in Refrigerator-Refrigerador-Freezerator.',
					filters: [indexingFilters.worldFour, indexingFilters.freezerator],
					instructions: [
						new InstructionImage(
							previews.preview_49,
							'preview_49',
							'transparent',
							1
						),
						'You will need fire breath to free most of the birds, (you can also use jetpacks). Frozen bird blocks are very different from regular frozen blocks.',
					],
				},

				SEASON_S_GREETINGS: {
					title: "Season's Greetings",
					description:
						'Kill 5 fake santas in Refrigerator-Refrigerador-Freezerator.',
					filters: [indexingFilters.worldFour, indexingFilters.freezerator],
					instructions: [
						new InstructionImage(
							previews.preview_50,
							'preview_50',
							'transparent',
							1
						),
						'To get this achievement, you need to make a decent combination once you get the fire breath. The first 2 "Fake Santa\'s" can be killed by launching/uppercutting an enemy at Santa, but the remaining 3 can only die with a super taunt. If you don\'t have all 5 kills by the time you get to the exit, you can take the second run and try again.',
					],
				},

				ICE_CLIMBER: {
					title: 'Ice Climber',
					description:
						'Complete Refrigerator-Refrigerador-Freezerator without falling in a pit.',
					filters: [indexingFilters.worldFour, indexingFilters.freezerator],
					instructions: [
						new InstructionImage(
							previews.preview_51,
							'preview_51',
							'transparent',
							1
						),
						'Easier said than done, avoid moving fast as there are a lot of sudden falls, but once you get a fiery breath, you can just hold the jump button.',
					],
				},

				FAKER: {
					title: 'Faker',
					description: 'Defeat Fake Peppino without getting hurt.',
					filters: [indexingFilters.worldFour, indexingFilters.boss],
					instructions: [
						new InstructionImage(
							previews.preview_52,
							'preview_52',
							'transparent',
							1,
							1
						),
						'Quite a difficult boss. In total, he has two stages of attacks, first he personally attacks, and then he sends his doppelgangers to attack you. Be patient, a fairly long boss that requires a lot of time and attempts. It would not be bad to remember the location of the tunnel when you run away from it, otherwise it will be very insulting to run into a dead end when you have almost passed this test.',
					],
				},

				S_RANK_4: {
					title: 'S Ranked #4',
					description: 'Get all S Ranks in World 4.',
					filters: [indexingFilters.worldFour],
				},

				P_RANK_4: {
					title: 'P Ranked #4',
					description: 'Get all P Ranks in World 4.',
					filters: [indexingFilters.worldFour],
				},

				CROSS_TO_BARE: {
					title: 'Cross To Bare',
					description: 'Kill thirty ghosts in Pizzascare.',
					filters: [indexingFilters.worldFive, indexingFilters.pizzaScare],
					instructions: [
						new InstructionImage(
							previews.preview_53,
							'preview_53',
							'transparent',
							1
						),
						'The ghosts are scattered all over the map, and you will get a cross for exorcising the ghosts many times throughout this level.',
					],
				},

				HAUNTED_PLAYGROUND: {
					title: 'Haunted Playground',
					description:
						"Avoid getting hurt by the King Ghost's traps in Pizzascare.",
					filters: [indexingFilters.worldFive, indexingFilters.pizzaScare],
					instructions: [
						new InstructionImage(
							previews.preview_54,
							'preview_54',
							'transparent',
							1
						),
						'You need to know the location of the map pretty well to get this achievement. Try not to rush, although there will be areas where you will need to pass at speed. Keep in mind that the cross makes you completely invulnerable to the "Ghost King", so be sure to use it.',
					],
				},

				SKULLSPLITTER: {
					title: 'Skullsplitter',
					description: 'Destroy every single skull block in Pizzascare.',
					filters: [indexingFilters.worldFive, indexingFilters.pizzaScare],
					instructions: [
						new InstructionImage(
							previews.preview_55,
							'preview_55',
							'transparent',
							1
						),
						'Everything is the same as in "Gnome Forest", only instead of a tree, a skull. All the skull blocks are on the main path, so there is no need to check the secrets.',
					],
				},

				AND_THIS_IS_MY_GUN_ON_A_STICK: {
					title: 'And This... Is My Gun On A Stick!',
					description:
						"Kill every chasing monster in the escape section of Don't Make A Sound.",
					filters: [indexingFilters.worldFive, indexingFilters.fnaf],
					instructions: [
						new InstructionImage(
							previews.preview_56,
							'preview_56',
							'transparent',
							1
						),
						'When escaping, you need to kill all the monsters with a shotgun. You will shoot them all in one room, and after that you will shoot them one at a time in each room. Shoot the monster regardless of whether they are active or not and let the pineapple wake them up. If the achievement does not work after killing the Mushroom that stands near the exit, make a second run to kill all the monsters that you missed.',
					],
				},

				LET_THEM_SLEEP: {
					title: 'Let Them Sleep',
					description:
						"Activate the alarms in Don't Make A Sound less than six times before the escape sequence.",
					filters: [indexingFilters.worldFive, indexingFilters.fnaf],
					instructions: [
						new InstructionImage(
							previews.preview_57,
							'preview_57',
							'transparent',
							1
						),
						'In total, there are about 5 mandatory alarm clocks at the level. One with Mushrooms, one with Cheese, twice with a Butcher and the final one at the end, this means that you have only one alarm left. The achievement is obtained immediately after the onset of "Pizza Time". I advise you to remember the route, do everything possible to avoid triggering the alarm, and I hope you will succeed.',
					],
				},

				JUMPSPARED: {
					title: 'Jumpspared',
					description: "Avoid getting jumpscared in Don't Make A Sound.",
					filters: [indexingFilters.worldFive, indexingFilters.fnaf],
					instructions: [
						new InstructionImage(
							previews.preview_58,
							'preview_58',
							'transparent',
							1
						),
						'Start this run as if you are going to get the S/P rank, as you will always need a super mockery, and avoid all secrets, as the combo will instantly disappear. Be careful with combos, as things can go awry very quickly. During Pizza Time, kill the pineapple as soon as possible, as it will instantly wake up the monster in the room.',
					],
				},

				DECORATED_VETERAN: {
					title: 'Decorated Veteran',
					description: "Don't get hurt more than three times in WAR.",
					filters: [indexingFilters.worldFive, indexingFilters.war],
					instructions: [
						"Only tanks create a serious problem for passing here, get rid of them as soon as possible, if the tank shoots, you can detonate a projectile from your shotgun. I recommend going through the level several times to remember everything well. Use your shotgun whenever you feel you need it and avoid all the secrets as you won't get anything from them.",
					],
				},

				SHARPSHOOTER: {
					title: 'Sharpshooter',
					description: "Don't miss more than three shots in WAR",
					filters: [indexingFilters.worldFive, indexingFilters.war],
					instructions: [
						'Here you need to minimize the use of a shotgun. Hitting the enemy, destructible blocks, target blocks or computers - all these are considered hits, so try to get into all this and miss less often.',
					],
				},

				TRIP_TO_THE_WARZONE: {
					title: 'Trip to the Warzone',
					description: 'Finish WAR with more than a minute left.',
					filters: [indexingFilters.worldFive, indexingFilters.war],
					instructions: [
						'This achievement is not as difficult as it seems. All that is required is a decent level memory. It goes without saying that there is no need to go into secrets. Try to ram all the enemies, as shooting with a shotgun kills most of your speed, but do not forget about tanks.',
					],
				},

				FACE_OFF: {
					title: 'Face Off',
					description: 'Defeat Pizza Face without damage.',
					filters: [indexingFilters.worldFive, indexingFilters.boss],
					instructions: [
						new InstructionImage(
							previews.preview_59,
							'preview_59',
							'transparent',
							1
						),
						"Personally, I think this is the most difficult boss, well, it's understandable why. This boss is a real test of endurance and fortitude. The only positive thing about this boss is that most of his stages are quite easy.",
					],
				},

				S_RANK_5: {
					title: 'S Ranked #5',
					description: 'Get all S Ranks in World 5.',
					filters: [indexingFilters.worldFive],
				},

				P_RANK_5: {
					title: 'P Ranked #5',
					description: 'Get all P Ranks in World 5.',
					filters: [indexingFilters.worldFive],
				},
			},

			indexingFilters: getIndexingFilters(),
		},

		achievement: {
			completeButton: {
				completed: 'Completed',
				notCompleted: 'Not completed',
			},

			guideLabel: 'How to get it?',

			nextUp: {
				previous: 'Prev.',
				next: 'Next.',
			},
		},

		options: {
			theme: {
				header: 'Theme',
				description: 'Choose appearance for application.',
				variants: {
					light: 'Light',
					dark: 'Dark',
				},
			},

			language: {
				header: 'Language',
				description: 'Choose your language.',
				variants: {
					ru: 'Русский',
					en: 'English',
				},
			},
		},

		disabled: {
			notWorking: 'This page is not working now',
			goHome: 'Go home',
		},
	},
};

export default englishLocalization;
