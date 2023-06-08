import { Localization } from '@localization/Localization';

import { FilterTypes } from '@type/FilterTypes';

import { FilterFactory } from '@utils/FilterFactory';

const russianLocalization: Localization = {
	meta: {
		main: {
			pageTitle: 'PT Platinum',
			pageDescription: '',
			keywords: '',
		},

		achievement: {
			pageTitle: `Достижение "#[ACHIEVEMENT_NAME]" Pizza Tower`,
			pageDescription: '',
			keywords: '',
		},

		notFound: {
			pageTitle: 'PT Platinum | 404',
			pageDescription: '',
			keywords: '',
		},
	},

	header: {
		taskbar: {
			searchPlaceholder: 'Поиск...',
		},
	},

	pages: {
		main: {
			achievements: {
				JOHN_GUTTED: {
					title: 'John Gutted',
					description:
						'Уничтожьте все блоки мертвого Джона на уровне John Gutter.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.worldOne, 'Уровень: John Gutter'),
					],
					instructions: [
						'Для выполнения этого достижения вам необходимо уничтожить все блоки с Джоном на уровне John Gutter.',
					],
				},

				LETS_MAKE_THIS_QUICK: {
					title: "Let's Make This Quick",
					description: 'Закончи уровень John Gutter меньше чем за две минуты.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.worldOne, 'Уровень: John Gutter'),
					],
				},

				PRIMATE_RAGE: {
					title: 'Primate Rage',
					description:
						'Получите комбо из 99 или более очков на уровне John Gutter.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.worldOne, 'Уровень: John Gutter'),
					],
				},

				SHINING_ARMOR: {
					title: 'Shining Armor',
					description:
						'Доберитесь до всех священников, ни разу не наткнувшись на стену в Pizzascape.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.pizzaScape, 'Уровень: Pizzascape'),
					],
				},

				SPOONKNIGHT: {
					title: 'Spoonknight',
					description: 'Парируйте десять рыцарей с вилкой в Pizzascape.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.pizzaScape, 'Уровень: Pizzascape'),
					],
				},

				SPHERICAL: {
					title: 'Spherical',
					description: 'Убейте противника во время формы шара в Pizzascape.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.pizzaScape, 'Уровень: Pizzascape'),
					],
				},

				THRILL_SEEKER: {
					title: 'Thrill Seeker',
					description:
						'Закончите уровень Ancient Cheese, не получив урона от взрывов.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.ancientCheese, 'Уровень: Ancient Cheese'),
					],
				},

				VOLLEYBOMB: {
					title: 'Volleybomb',
					description:
						'Убейте крысу, используя бомбу, сброшенную врагом на уровне Ancient Cheese.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.ancientCheese, 'Уровень: Ancient Cheese'),
					],
				},

				DELICACY: {
					title: 'Delicacy',
					description:
						'Сделайте 40 или более наборов сырных платформ изчезнувшими на уровне Ancient Cheese.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.ancientCheese, 'Уровень: Ancient Cheese'),
					],
				},

				VERY_VERY_HOT_SAUCE: {
					title: 'Very Very Hot Sauce',
					description:
						'Закончите уровень Bloodsauce Dungeon ни разу не дотронувшись до лавы.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(
							FilterTypes.bloodSauceDungeon,
							'Уровень: Bloodsauce Dungeon'
						),
					],
				},

				ERUPTION_MAN: {
					title: 'Eruption Man',
					description:
						'Во время побега используйте супер-прыжок на протяжении более чем 2 секунд на уровне Bloodsauce Dungeon.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(
							FilterTypes.bloodSauceDungeon,
							'Уровень: Bloodsauce Dungeon'
						),
					],
				},

				UNSLICED_PIZZAMAN: {
					title: 'Unsliced Pizzaman',
					description:
						'Закончите уровень Bloodsauce Dungeon, не получив урона от резака для пиццы.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(
							FilterTypes.bloodSauceDungeon,
							'Уровень: Bloodsauce Dungeon'
						),
					],
				},

				THE_CRITIC: {
					title: 'The Critic',
					description: 'Победите Пеппермена без урона.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.boss, 'Босс'),
					],
				},

				S_RANK_1: {
					title: 'S Ranked #1',
					description: 'Пройдите все уровни из мира 1 на S-ранк.',
					filters: [FilterFactory(FilterTypes.worldOne, 'Мир 1')],
				},

				P_RANK_1: {
					title: 'P Ranked #1',
					description: 'Пройдите все уровни из мира 1 на P-ранк.',
					filters: [FilterFactory(FilterTypes.worldOne, 'Мир 1')],
				},

				PEPPINO_S_RAIN_DANCE: {
					title: "Peppino's Rain Dance",
					description:
						'Активируйте тотем заново, станцевав ускоренным бегом в Oregano Desert.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.space, 'Уровень: Oregano Desert'),
					],
				},

				UNNECESSARY_VIOLENCE: {
					title: 'Unnecessary Violence',
					description: 'Убейте всех продавцов сосисок в магазинах пиццы.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.space, 'Уровень: Oregano Desert'),
					],
				},

				ALIEN_COW: {
					title: 'Alien Cow',
					description:
						'Не дайте ни одной корове ударить себя на уровне Oregano Desert.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.space, 'Уровень: Oregano Desert'),
					],
				},

				GHOSTED: {
					title: 'Ghosted',
					description:
						'Избегайте прикосновения призрака Джона на уровне Wasteyard.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.wasteyard, 'Уровень: Wasteyard'),
					],
				},

				PRETEND_GHOST: {
					title: 'Pretend Ghost',
					description:
						'Убейте 20 или более врагов в качестве призрака на уровне Wasteyard.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.wasteyard, 'Уровень: Wasteyard'),
					],
				},

				ALIVE_AND_WELL: {
					title: 'Alive and Well',
					description: 'Серфите на каждом трупе на уровне Wasteyard.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.wasteyard, 'Уровень: Wasteyard'),
					],
				},

				NO_ONE_IS_SAFE: {
					title: 'No One Is Safe',
					description:
						'Убить трех недоступных врагов сразу с супер насмешкой на уровне Fun Farm.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.farm, 'Уровень: Fun Farm'),
					],
				},

				CUBE_MENACE: {
					title: 'Cube Menace',
					description: 'Найдите и уничтожьте куб Морта.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.farm, 'Уровень: Fun Farm'),
					],
				},

				GOOD_EGG: {
					title: 'Good Egg',
					description:
						'Пройдите уровень Fun Farm, не получив урона, пока на вас сидит Морт.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.farm, 'Уровень: Fun Farm'),
					],
				},

				NON_ALCOHOLIC: {
					title: 'Non-Alcoholic',
					description:
						'Уничтожьте все пивные бутылки на уровне Fastfood Saloon.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.saloon, 'Уровень: Fastfood Saloon'),
					],
				},

				ALREADY_PRESSED: {
					title: 'Already Pressed',
					description:
						'Активируйте каждуй кнопку лишь однажды на уровне Fastfood Saloon.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.saloon, 'Уровень: Fastfood Saloon'),
					],
				},

				ROYAL_FLUSH: {
					title: 'Royal Flush',
					description: 'Прикоснитесь к каждой карте на уровне Fastfood Saloon.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.saloon, 'Уровень: Fastfood Saloon'),
					],
				},

				THE_UGLY: {
					title: 'The Ugly',
					description: 'Победите Виджиланта без урона.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.boss, 'Босс'),
					],
				},

				S_RANK_2: {
					title: 'S Ranked #2',
					description: 'Пройдите все уровни из мира 2 на S-ранк.',
					filters: [FilterFactory(FilterTypes.worldTwo, 'Мир 2')],
				},

				P_RANK_2: {
					title: 'P Ranked #2',
					description: 'Пройдите все уровни из мира 2 на P-ранк.',
					filters: [FilterFactory(FilterTypes.worldTwo, 'Мир 2')],
				},

				BLOWBACK: {
					title: 'Blowback',
					description:
						'Убейте гоблина-пушечника его собственной бомбой на уровне Crust Cove',
					filters: [
						FilterFactory(FilterTypes.worldThree, 'Мир 3'),
						FilterFactory(FilterTypes.crust, 'Уровень: Crust Cove'),
					],
				},

				X: {
					title: 'X',
					description: 'Найдите всех чуваков-сокровища на уровне Crust Cove',
					filters: [
						FilterFactory(FilterTypes.worldThree, 'Мир 3'),
						FilterFactory(FilterTypes.crust, 'Уровень: Crust Cove'),
					],
				},

				DEMOLITION_EXPERT: {
					title: 'Demolition Expert',
					description:
						'Пройдите уровень Crust Cove, не получив урон от взрывов.',
					filters: [
						FilterFactory(FilterTypes.worldThree, 'Мир 3'),
						FilterFactory(FilterTypes.crust, 'Уровень: Crust Cove'),
					],
				},

				BEE_NICE: {
					title: 'Bee Nice',
					description:
						'Встань перед пчелой и используй насмешку на уровне Gnome Forest.',
					filters: [
						FilterFactory(FilterTypes.worldThree, 'Мир 3'),
						FilterFactory(FilterTypes.lario, 'Уровень: Gnome Forest'),
					],
				},

				LUMBERJACK: {
					title: 'Lumberjack',
					description: 'Уничтожьте каждый блок дерева на уровне Gnome Forest.',
					filters: [
						FilterFactory(FilterTypes.worldThree, 'Мир 3'),
						FilterFactory(FilterTypes.lario, 'Уровень: Gnome Forest'),
					],
				},

				BULLSEYE: {
					title: 'Bullseye',
					description:
						'Убейте гоблина-Нойза его собственной стрелой на уровне Gnome Forest.',
					filters: [
						FilterFactory(FilterTypes.worldThree, 'Мир 3'),
						FilterFactory(FilterTypes.lario, 'Уровень: Gnome Forest'),
					],
				},

				TURBO_TUNNEL: {
					title: 'Turbo Tunnel',
					description:
						'Не ударяйтесь не об один потолок в комнате сразу за Джоном-колонной на уровне Deep Dish Nine.',
					filters: [
						FilterFactory(FilterTypes.worldThree, 'Мир 3'),
						FilterFactory(FilterTypes.space, 'Уровень: Deep Dish Nine'),
					],
				},

				BLAST_EM_ASTEROIDS: {
					title: "Blast'Em Asteroids",
					description: 'Уничтожьте все астероиды на уровне Deep Dish Nine.',
					filters: [
						FilterFactory(FilterTypes.worldThree, 'Мир 3'),
						FilterFactory(FilterTypes.space, 'Уровень: Deep Dish Nine'),
					],
				},

				MAN_METEOR: {
					title: 'Man Meteor',
					description:
						'Уничтожьте 5 летающих тарелок за один боди-слам на уровне Deep Dish Nine.',
					filters: [
						FilterFactory(FilterTypes.worldThree, 'Мир 3'),
						FilterFactory(FilterTypes.space, 'Уровень: Deep Dish Nine'),
					],
				},

				PRIMO_GOLFER: {
					title: 'Primo Golfer',
					description:
						'Получите максимальные ранги во всех курсах на уровне Golf.',
					filters: [
						FilterFactory(FilterTypes.worldThree, 'Мир 3'),
						FilterFactory(FilterTypes.golf, 'Уровень: Golf'),
					],
				},

				NICE_SHOT: {
					title: 'Nice Shot',
					description:
						'Убейте трех или более врагов за раз с помощью одного и того же удара на уровне Golf.',
					filters: [
						FilterFactory(FilterTypes.worldThree, 'Мир 3'),
						FilterFactory(FilterTypes.golf, 'Уровень: Golf'),
					],
				},

				HELPFUL_BURGER: {
					title: 'Helpful Burger',
					description:
						'Заставьте противника-бургера забить мяч внутрь цели на уровне Golf.',
					filters: [
						FilterFactory(FilterTypes.worldThree, 'Мир 3'),
						FilterFactory(FilterTypes.golf, 'Уровень: Golf'),
					],
				},

				DENOISE: {
					title: 'Denoise',
					description: 'Победите Нойза без урона.',
					filters: [
						FilterFactory(FilterTypes.worldThree, 'Мир 3'),
						FilterFactory(FilterTypes.boss, 'Босс'),
					],
				},

				S_RANK_3: {
					title: 'S Ranked #3',
					description: 'Пройдите все уровни из мира 3 на S-ранк.',
					filters: [FilterFactory(FilterTypes.worldThree, 'Мир 3')],
				},

				P_RANK_3: {
					title: 'P Ranked #3',
					description: 'Пройдите все уровни из мира 3 на P-ранк.',
					filters: [FilterFactory(FilterTypes.worldThree, 'Мир 3')],
				},

				PAN_FRIED: {
					title: 'Pan Fried',
					description: 'Найдите беконную комнату.',
					filters: [
						FilterFactory(FilterTypes.worldFour, 'Мир 4'),
						FilterFactory(FilterTypes.pigCity, 'Уровень: The Pig City'),
					],
				},

				STRIKE: {
					title: 'Strike!',
					description:
						'Убейте трех или более врагов за раз при помощи единственного запуска шара-Кирпича на уровне The Pig City.',
					filters: [
						FilterFactory(FilterTypes.worldFour, 'Мир 4'),
						FilterFactory(FilterTypes.pigCity, 'Уровень: The Pig City'),
					],
				},

				SAY_OINK: {
					title: 'Say Oink!',
					description: 'Сделайте фото с каждым жителем на уровне The Pig City.',
					filters: [
						FilterFactory(FilterTypes.worldFour, 'Мир 4'),
						FilterFactory(FilterTypes.pigCity, 'Уровень: The Pig City'),
					],
				},

				CANT_FOOL_ME: {
					title: "Can't Fool Me",
					description:
						'Избегайте убийства любого пицца-пацана на уровне Oh Shit!.',
					filters: [
						FilterFactory(FilterTypes.worldFour, 'Мир 4'),
						FilterFactory(FilterTypes.thatLevel, 'Уровень: Oh Shit!'),
					],
				},

				FOOD_CLAN: {
					title: 'Food Clan',
					description: 'Убейте 10 ниндзя парированием на уровне Oh Shit!.',
					filters: [
						FilterFactory(FilterTypes.worldFour, 'Мир 4'),
						FilterFactory(FilterTypes.thatLevel, 'Уровень: Oh Shit!'),
					],
				},

				PENNY_PINCHER: {
					title: 'Penny Pincher',
					description:
						'Избегайте быть захваченным мистером Пинчем во время побега на уровне Oh Shit!.',
					filters: [
						FilterFactory(FilterTypes.worldFour, 'Мир 4'),
						FilterFactory(FilterTypes.thatLevel, 'Уровень: Oh Shit!'),
					],
				},

				UNFLATTENING: {
					title: 'Unflattening',
					description:
						'Уберите форму коробки при помощи жрецов (хотя бы раз на каждого) на уровне Peppibot Factory.',
					filters: [
						FilterFactory(FilterTypes.worldFour, 'Мир 4'),
						FilterFactory(FilterTypes.factory, 'Уровень: Peppibot Factory'),
					],
				},

				WHOOP_THIS: {
					title: 'Whoop This!',
					description:
						'Пройдите первый секрет на уровне Peppibot Factory без урона.',
					filters: [
						FilterFactory(FilterTypes.worldFour, 'Мир 4'),
						FilterFactory(FilterTypes.factory, 'Уровень: Peppibot Factory'),
					],
				},

				THERE_CAN_BE_ONLY_ONE: {
					title: 'There Can Be Only One',
					description:
						'Уничтожьте каждого робота-Пеппино на уровне Peppibot Factory.',
					filters: [
						FilterFactory(FilterTypes.worldFour, 'Мир 4'),
						FilterFactory(FilterTypes.factory, 'Уровень: Peppibot Factory'),
					],
				},

				FROZEN_NUGGETS: {
					title: 'Frozen Nuggets',
					description:
						'Освободите всех замороженных птиц на уровне Refrigerator-Refrigerador-Freezerator.',
					filters: [
						FilterFactory(FilterTypes.worldFour, 'Мир 4'),
						FilterFactory(
							FilterTypes.freezerator,
							'Уровень: Refrigerator-Refrigerador-Freezerator'
						),
					],
				},
			},
		},

		achievement: {
			completeButton: {
				completed: 'Выполнено',
				notCompleted: 'Не выполнено',
			},
		},
	},
};

export default russianLocalization;
