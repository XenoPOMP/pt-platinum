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
	worldOne: FilterFactory(FilterTypes.worldOne, 'Мир 1'),
	worldTwo: FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
	worldThree: FilterFactory(FilterTypes.worldThree, 'Мир 3'),
	worldFour: FilterFactory(FilterTypes.worldFour, 'Мир 4'),
	worldFive: FilterFactory(FilterTypes.worldFive, 'Мир 5'),

	// Boss
	boss: FilterFactory(FilterTypes.boss, 'Босс'),

	// World 1
	johnGutter: FilterFactory(FilterTypes.worldOne, 'Уровень: John Gutter'),
	pizzaScape: FilterFactory(FilterTypes.pizzaScape, 'Уровень: Pizzascape'),
	ancientCheese: FilterFactory(
		FilterTypes.ancientCheese,
		'Уровень: Ancient Cheese'
	),
	bloodSauceDungeon: FilterFactory(
		FilterTypes.bloodSauceDungeon,
		'Уровень: Bloodsauce Dungeon'
	),

	// World 2
	oreganoDesert: FilterFactory(FilterTypes.space, 'Уровень: Oregano Desert'),
	wasteyard: FilterFactory(FilterTypes.wasteyard, 'Уровень: Wasteyard'),
	farm: FilterFactory(FilterTypes.farm, 'Уровень: Fun Farm'),
	saloon: FilterFactory(FilterTypes.saloon, 'Уровень: Fastfood Saloon'),

	// World 3
	crust: FilterFactory(FilterTypes.crust, 'Уровень: Crust Cove'),
	lario: FilterFactory(FilterTypes.lario, 'Уровень: Gnome Forest'),
	deepDishNine: FilterFactory(FilterTypes.space, 'Уровень: Deep Dish Nine'),
	golf: FilterFactory(FilterTypes.golf, 'Уровень: Golf'),

	// World 4
	pigCity: FilterFactory(FilterTypes.pigCity, 'Уровень: The Pig City'),
	thatLevel: FilterFactory(FilterTypes.thatLevel, 'Уровень: Oh Shit!'),
	factory: FilterFactory(FilterTypes.factory, 'Уровень: Peppibot Factory'),
	freezerator: FilterFactory(FilterTypes.freezerator, 'Уровень: Refrigerator'),

	// World 5
	pizzaScare: FilterFactory(FilterTypes.pizzaScare, 'Уровень: Pizzascare'),
	fnaf: FilterFactory(FilterTypes.fnaf, 'Уровень: Don`t Make A Sound'),
	war: FilterFactory(FilterTypes.war, 'Уровень: WAR'),
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

const russianLocalization: Localization = {
	meta: {
		main: {
			pageTitle: 'PT Platinum',
			pageDescription: '',
			keywords: '',
		},

		options: {
			pageTitle: `Настройки`,
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

		welcomePage: {
			pageTitle: 'Добро пожаловать в PT Platinum!',
			pageDescription: '',
			keywords: '',
		},
	},

	header: {
		taskbar: {
			searchPlaceholder: 'Поиск...',
			options: {
				showCompleted: 'Показывать выполненные достижения',
				filters: 'Фильтры',
				paginationSize: 'Показывать результатов за раз',
				filtersPlaceholder: 'Выберете из списка...',
				gridView: 'Вид сетки',
				disablePagination: 'Все',
			},
		},
	},

	pages: {
		main: {
			achievements: {
				JOHN_GUTTED: {
					title: 'John Gutted',
					description:
						'Уничтожьте все блоки мертвого Джона на уровне "John Gutter".',
					filters: [indexingFilters.worldOne, indexingFilters.johnGutter],
					instructions: [
						new InstructionImage(
							previews.preview_0,
							'preview_0',
							'transparent',
							1
						),
						'Для выполнения этого достижения вам необходимо уничтожить все блоки с Джоном на уровне John Gutter.',
					],
				},

				LETS_MAKE_THIS_QUICK: {
					title: "Let's Make This Quick",
					description:
						'Закончи уровень "John Gutter" меньше чем за две минуты.',
					filters: [indexingFilters.worldOne, indexingFilters.johnGutter],
					instructions: [
						'Попытайтесь пройти карту менее чем за две минуты, несколько попыток и все должно получиться.',
					],
				},

				PRIMATE_RAGE: {
					title: 'Primate Rage',
					description:
						'Получите комбо из 99 или более очков на уровне "John Gutter".',
					filters: [indexingFilters.worldOne, indexingFilters.johnGutter],
					instructions: [
						new InstructionImage(
							previews.preview_1,
							'preview_1',
							'transparent',
							1
						),
						'Полное комбо от начала и до конца, а также выполнение 2-го забега. Должно ровно хватить чтобы получить комбо из 99 врагов.',
					],
				},

				SHINING_ARMOR: {
					title: 'Shining Armor',
					description:
						'Доберитесь до всех священников, ни разу не врезавшись на стену в "Pizzascape".',
					filters: [indexingFilters.worldOne, indexingFilters.pizzaScape],
					instructions: [
						new InstructionImage(
							previews.preview_2,
							'preview_2',
							'transparent',
							1
						),
						'Всего нужно добраться до 5 священников. Постоянно выполняйте прием резкого спуска вниз, будет очень много моментов когда нужно биться об стену и только этот прием спасет от удара об стену.',
					],
				},

				SPOONKNIGHT: {
					title: 'Spoonknight',
					description: 'Парируйте десять атак "Forknights" в "Pizzascape".',
					filters: [indexingFilters.worldOne, indexingFilters.pizzaScape],
					instructions: [
						new InstructionImage(
							previews.preview_3,
							'preview_3',
							'transparent',
							1
						),
						'Очень просто, ничего особенного. Просто нажимаем "C" рядом с 10 "Forkknight" за один заход.',
					],
				},

				SPHERICAL: {
					title: 'Spherical',
					description:
						'Убейте другого врага когда вас пнет "Pepperoni Goblin" в "Pizzascape".',
					filters: [indexingFilters.worldOne, indexingFilters.pizzaScape],
					instructions: [
						new InstructionImage(
							previews.preview_4,
							'preview_4',
							'transparent',
							1
						),
						'Найдите область с "Pepperoni Goblin" и другим врагом достаточно близко друг к другу - (при необходимости вы можете переместить их, схватив их). И пусть вас пнут, и будучи круглым мячом убить другого врага.',
					],
				},

				THRILL_SEEKER: {
					title: 'Thrill Seeker',
					description:
						'Закончите уровень "Ancient Cheese", не получив урона от взрывов.',
					filters: [indexingFilters.worldOne, indexingFilters.ancientCheese],
					instructions: [
						new InstructionImage(
							previews.preview_5,
							'preview_5',
							'transparent',
							1
						),
						'Все предельно просто. Просто постарайтесь не получить урона на этом уровне от бомб.',
					],
				},

				VOLLEYBOMB: {
					title: 'Volleybomb',
					description:
						'Убейте Крысу, используя бомбу, сброшенную врагом на уровне "Ancient Cheese".',
					filters: [indexingFilters.worldOne, indexingFilters.ancientCheese],
					instructions: [
						new InstructionImage(
							previews.preview_6,
							'preview_6',
							'transparent',
							1
						),
						'Убейте Крысу бомбой гоблина. Испытание может быть завершено в комнате, скрин ниже:',
					],
				},

				DELICACY: {
					title: 'Delicacy',
					description:
						'Разрушить более сорока одной сырной платформы в "Ancient Cheese".',
					filters: [indexingFilters.worldOne, indexingFilters.ancientCheese],
					instructions: [
						new InstructionImage(
							previews.preview_7,
							'preview_7',
							'transparent',
							1
						),
						'Можете особо не напрягаться, получите без проблем.',
					],
				},

				VERY_VERY_HOT_SAUCE: {
					title: 'Very Very Hot Sauce',
					description:
						'Закончите уровень "Bloodsauce Dungeon" ни разу не дотронувшись до лавы.',
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
						'Ничего особенного, просто пройдите уровень, не попадая ни в какие ямы с лавой.',
					],
				},

				ERUPTION_MAN: {
					title: 'Eruption Man',
					description:
						'Во время побега используйте супер-прыжок на протяжении более чем 2 секунд на уровне "Bloodsauce Dungeon".',
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
						'Совершив суперпрыжок в этом месте во время "Pizza Time", и достижение ваше.',
					],
				},

				UNSLICED_PIZZAMAN: {
					title: 'Unsliced Pizzaman',
					description:
						'Закончите уровень "Bloodsauce Dungeon", не получив урона от ножей для пиццы.',
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
						'Просто постарайтесь не получить урон от ножей для пиццы на этом уровне.',
					],
				},

				THE_CRITIC: {
					title: 'The Critic',
					description: 'Победите Пеппермена без урона.',
					filters: [indexingFilters.worldOne, indexingFilters.boss],
					instructions: [
						new InstructionImage(
							previews.preview_11,
							'preview_11',
							'transparent',
							1
						),
						'Один из самых простых боссов, по сравнению с другими боссами, проблем вызвать с его прохождением без урона не должно.',
					],
				},

				S_RANK_1: {
					title: 'S Ranked #1',
					description: 'Пройдите все уровни из мира 1 на S-ранк.',
					filters: [indexingFilters.worldOne],
				},

				P_RANK_1: {
					title: 'P Ranked #1',
					description: 'Пройдите все уровни из мира 1 на P-ранк.',
					filters: [indexingFilters.worldOne],
				},

				PEPPINO_S_RAIN_DANCE: {
					title: "Peppino's Rain Dance",
					description: 'Повторно активируйте тотем, танцуя в "Oregano Desert".',
					filters: [indexingFilters.worldTwo, indexingFilters.oreganoDesert],
					instructions: [
						new InstructionImage(
							previews.preview_12,
							'preview_12',
							'transparent',
							1
						),
						'Находясь рядом с тотемом, начните бегать и разгоняться туда-сюда, пока тотем снова не станет активным. Можно это сделать с любым тотемом.',
					],
				},

				UNNECESSARY_VIOLENCE: {
					title: 'Unnecessary Violence',
					description: 'Убейте всех клерков-сосисок в пиццериях.',
					filters: [indexingFilters.worldTwo, indexingFilters.oreganoDesert],
					instructions: [
						new InstructionImage(
							previews.preview_13,
							'preview_13',
							'transparent',
							1
						),
						'На уровне расположено 5 пиццерий, в каждой из которых есть продавец сосисок.',
					],
				},

				ALIEN_COW: {
					title: 'Alien Cow',
					description:
						'Не дайте ни одной корове ударить себя на уровне "Oregano Desert".',
					filters: [indexingFilters.worldTwo, indexingFilters.oreganoDesert],
					instructions: [
						new InstructionImage(
							previews.preview_14,
							'preview_14',
							'transparent',
							1
						),
						'Избегайте спешки и не торопитесь. Старайтесь перепрыгнуть всех коров и все получится.',
					],
				},

				GHOSTED: {
					title: 'Ghosted',
					description:
						'Избегайте прикосновения призрака Джона на уровне "Wasteyard".',
					filters: [indexingFilters.worldTwo, indexingFilters.wasteyard],
					instructions: [
						new InstructionImage(
							previews.preview_15,
							'preview_15',
							'transparent',
							1
						),
						'Не прикасайтесь к Джону-Призраку во время "Pizza Time".',
					],
				},

				PRETEND_GHOST: {
					title: 'Pretend Ghost',
					description:
						'Убейте 20 или более врагов, играя за призрака, в "Wasteyard".',
					filters: [indexingFilters.worldTwo, indexingFilters.wasteyard],
					instructions: [
						new InstructionImage(
							previews.preview_16,
							'preview_16',
							'transparent',
							1
						),
						'Убедитесь, что появились эти два мини-Джонов - (Нужно убить их будучи призраком)',
						new InstructionImage(
							previews.preview_17,
							'preview_17',
							'transparent',
							1
						),
						'и залетите в этот секрет, чтобы выполнить квест.',
					],
				},

				ALIVE_AND_WELL: {
					title: 'Alive and Well',
					description: 'Прокатитесь на каждом трупе в "Wasteyard".',
					filters: [indexingFilters.worldTwo, indexingFilters.wasteyard],
					instructions: [
						new InstructionImage(
							previews.preview_18,
							'preview_18',
							'transparent',
							1
						),
						'Все трупы находятся на главном пути.',
					],
				},

				NO_ONE_IS_SAFE: {
					title: 'No One Is Safe',
					description:
						'Убейте сразу трех недоступных врагов с помощью супер-насмешки в "Fun Farm".',
					filters: [indexingFilters.worldTwo, indexingFilters.farm],
					instructions: [
						new InstructionImage(
							previews.preview_19,
							'preview_19',
							'transparent',
							1
						),
						'Супер-насмешка в этом месте убьет 4 "Peasanto\'s":',
					],
				},

				CUBE_MENACE: {
					title: 'Cube Menace',
					description: 'Найдите и уничтожьте куб Морта.',
					filters: [indexingFilters.worldTwo, indexingFilters.farm],
					instructions: [
						new InstructionImage(
							previews.preview_20,
							'preview_20',
							'transparent',
							1
						),
						'Куб можно найти в первой локации, через которую вам нужно будет перепрыгнуть с "Мортом". Секция будет закрыта, и вам нужно будет сломать блок "Мортом", чтобы туда попасть.',
					],
				},

				GOOD_EGG: {
					title: 'Good Egg',
					description: 'Завершите "Fun Farm", избегая урона с "Мортом" на вас.',
					filters: [indexingFilters.worldTwo, indexingFilters.farm],
					instructions: [
						new InstructionImage(
							previews.preview_21,
							'preview_21',
							'transparent',
							1
						),
						'Просто постарайтесь избегать повреждений с "Мортом" на вас. Попадания факела который кидает "Peasanto" не считается уроном.',
					],
				},

				NON_ALCOHOLIC: {
					title: 'Non-Alcoholic',
					description:
						'Уничтожьте все пивные бутылки на уровне "Fastfood Saloon".',
					filters: [indexingFilters.worldTwo, indexingFilters.saloon],
					instructions: [
						new InstructionImage(
							previews.preview_22,
							'preview_22',
							'transparent',
							1
						),
						'В салуне повсюду разбросано куча пивных бутылок, и большую часть нужно их разбить.',
					],
				},

				ALREADY_PRESSED: {
					title: 'Already Pressed',
					description:
						'Активируйте каждую кнопку только один раз в "Fastfood Saloon".',
					filters: [indexingFilters.worldTwo, indexingFilters.saloon],
					instructions: [
						new InstructionImage(
							previews.preview_23,
							'preview_23',
							'transparent',
							1
						),
						'Не очень простое достижение. Нужно не плохо запомнить маршрут и точно знать, что делать. Также есть вероятность двойного активирования кнопки так что нужно быть немного осторожным с этим.',
					],
				},

				ROYAL_FLUSH: {
					title: 'Royal Flush',
					description:
						'Прикоснитесь к каждой карте на уровне "Fastfood Saloon".',
					filters: [indexingFilters.worldTwo, indexingFilters.saloon],
					instructions: [
						new InstructionImage(
							previews.preview_24,
							'preview_24',
							'transparent',
							1
						),
						'Карты разбросаны по всей карте и вам нужно собрать их всех. Карты в секретах не учитываются.',
					],
				},

				THE_UGLY: {
					title: 'The Ugly',
					description: 'Победите Виджиланта без урона.',
					filters: [indexingFilters.worldTwo, indexingFilters.boss],
					instructions: [
						new InstructionImage(
							previews.preview_25,
							'preview_25',
							'transparent',
							1
						),
						'Из 5-ти боссов я считаю ,что это самый сложный босс после "PizzaFace". В общей сложности 18 HP и не простые атаки, даст вам фору.',
					],
				},

				S_RANK_2: {
					title: 'S Ranked #2',
					description: 'Пройдите все уровни из мира 2 на S-ранк.',
					filters: [indexingFilters.worldTwo],
				},

				P_RANK_2: {
					title: 'P Ranked #2',
					description: 'Пройдите все уровни из мира 2 на P-ранк.',
					filters: [indexingFilters.worldTwo],
				},

				BLOWBACK: {
					title: 'Blowback',
					description:
						'Убейте гоблина-пушечника его собственной бомбой на уровне Crust Cove',
					filters: [indexingFilters.worldThree, indexingFilters.crust],
					instructions: [
						new InstructionImage(
							previews.preview_26,
							'preview_26',
							'transparent',
							1
						),
						'Отразите атаку пушечного выстрела гоблина, и все должно получиться.',
					],
				},

				X: {
					title: 'X',
					description: 'Найдите всех "Treasure Chest Guy" в "Crust Cove".',
					filters: [indexingFilters.worldThree, indexingFilters.crust],
					instructions: [
						new InstructionImage(
							previews.preview_27,
							'preview_27',
							'transparent',
							2
						),
						'На протяжении всего забега в земле прячутся 7 спрятанных "Treasure Chest Guy", все они отмечены красным крестиком на земле.',
						'В игре засчитывается "Treasure Chest Guy", выкопав его, а не убив. Это означает, что вы можете постоянно выкапывать первого "Treasure Chest Guy" в начале уровня, и не убивать его. Идем на другую под-локацию, возвращаемся обратно в комнату и снова выкапываем того же "Treasure Chest Guy", делаем так 7 раз и получаем достижение.',
					],
				},

				DEMOLITION_EXPERT: {
					title: 'Demolition Expert',
					description: 'Завершите "Crust Cove", не получив урона от взрыва.',
					filters: [indexingFilters.worldThree, indexingFilters.crust],
					instructions: [
						new InstructionImage(
							previews.preview_28,
							'preview_28',
							'transparent',
							1
						),
						'Просто избегайте повреждений гоблинов с пушкой и капитанских пушек на протяжении всего забега.',
					],
				},

				BEE_NICE: {
					title: 'Bee Nice',
					description:
						'Встань перед пчелой и используй насмешку на уровне "Gnome Forest".',
					filters: [indexingFilters.worldThree, indexingFilters.lario],
					instructions: [
						new InstructionImage(
							previews.preview_29,
							'preview_29',
							'transparent',
							1
						),
						'Пчелы повсюду на карте, просто найдите одну, а затем позируйте рядом с ней на "C".',
					],
				},

				LUMBERJACK: {
					title: 'Lumberjack',
					description: 'Уничтожьте все деревянный блоки в "Gnome Forest".',
					filters: [indexingFilters.worldThree, indexingFilters.lario],
					instructions: [
						new InstructionImage(
							previews.preview_30,
							'preview_30',
							'transparent',
							1
						),
						'Их слишком много, чтобы их сосчитать, но они расположены только на этом уровне.',
					],
				},

				BULLSEYE: {
					title: 'Bullseye',
					description:
						'Убейте "Noise Goblin" его собственной стрелой в "Gnome Forest".',
					filters: [indexingFilters.worldThree, indexingFilters.lario],
					instructions: [
						new InstructionImage(
							previews.preview_31,
							'preview_31',
							'transparent',
							1
						),
						'Отразите стрелу "Noise Goblin", которую он выпускает. Она должна попасть в гоблина, если он не находится слишком далеко.',
					],
				},

				TURBO_TUNNEL: {
					title: 'Turbo Tunnel',
					description:
						'Избегайте ударов о потолок в комнате сразу после начала "Pizza Time" в "Deep Dish Nine".',
					filters: [indexingFilters.worldThree, indexingFilters.deepDishNine],
					instructions: [
						new InstructionImage(
							previews.preview_32,
							'preview_32',
							'transparent',
							1
						),
						'Как только вы начнете "Pizza Time", вы не должны стучаться головой об потолок. Метод проб и ошибок и все получится.',
					],
				},

				BLAST_EM_ASTEROIDS: {
					title: "Blast'Em Asteroids",
					description: 'Уничтожьте все астероиды на уровне "Deep Dish Nine".',
					filters: [indexingFilters.worldThree, indexingFilters.deepDishNine],
					instructions: [
						new InstructionImage(
							previews.preview_33,
							'preview_33',
							'transparent',
							1
						),
						'Нужно уничтожить все астероиды с трубками во рту. Астероиды хорошо видны, и проблем это достижение вызвать не должно.',
					],
				},

				MAN_METEOR: {
					title: 'Man Meteor',
					description:
						'Уничтожьте 5 НЛО за один боди-слам на уровне "Deep Dish Nine".',
					filters: [indexingFilters.worldThree, indexingFilters.deepDishNine],
					instructions: [
						new InstructionImage(
							previews.preview_34,
							'preview_34',
							'transparent',
							1
						),
						'Есть несколько мест, где можно выполнить это достижение, но самый легкий это убить 5 парящих НЛО в этой яме.',
					],
				},

				PRIMO_GOLFER: {
					title: 'Primo Golfer',
					description:
						'Получите ранг "Primo Burg`" во всех курсах на уровне Golf.',
					filters: [indexingFilters.worldThree, indexingFilters.golf],
					instructions: [
						new InstructionImage(
							previews.preview_35,
							'preview_35',
							'transparent',
							1
						),
						'Получите ранг «Primo Burg`» на каждом поле для гольфа за один проход. Столкновение с разбега в "Greaseball", (он же «мяч для гольфа») преодолевает гораздо большее расстояние, чем обычный удар клюшкой, поэтому постарайтесь набрать скорость и столкнуться с ним, а не просто играть в гольф.',
					],
				},

				NICE_SHOT: {
					title: 'Nice Shot',
					description: 'Убейте трех или более врагов одним ударом в "Golf".',
					filters: [indexingFilters.worldThree, indexingFilters.golf],
					instructions: [
						new InstructionImage(
							previews.preview_36,
							'preview_36',
							'transparent',
							1
						),
						'Это должно произойти само по себе, но если вы не можете этого сделать, просто поставьте 3 врага рядом друг с другом - (вы же можете их перетаскивать, только аккуратно...) и ударьте "Greaseball", чтобы убить их всех одним ударом.',
					],
				},

				HELPFUL_BURGER: {
					title: 'Helpful Burger',
					description:
						'Заставьте противника-бургера забить мяч внутрь цели на уровне "Golf".',
					filters: [indexingFilters.worldThree, indexingFilters.golf],
					instructions: [
						new InstructionImage(
							previews.preview_37,
							'preview_37',
							'transparent',
							1
						),
						'У "Burger Golfer" должен быть последний штрих, чтобы забить шар в корзину. Пусть "Greaseball" застрянет в носе, и пусть "Burger Golfer" подойдет, и ударить его.',
					],
				},

				DENOISE: {
					title: 'Denoise',
					description: 'Победите Нойза без урона.',
					filters: [indexingFilters.worldThree, indexingFilters.boss],
					instructions: [
						new InstructionImage(
							previews.preview_38,
							'preview_38',
							'transparent',
							1,
							1
						),
						'Первый раз при прохождении может показаться сложным, но мне кажется по сложности он идет вторым после "Pepperman". Вся фишка "Noise" в том, что, несмотря на то, что у него есть определенное количество атак, все они будут выполняться в случайном порядке и могут быть выполнены всего 2 раза',
					],
				},

				S_RANK_3: {
					title: 'S Ranked #3',
					description: 'Пройдите все уровни из мира 3 на S-ранк.',
					filters: [indexingFilters.worldThree],
				},

				P_RANK_3: {
					title: 'P Ranked #3',
					description: 'Пройдите все уровни из мира 3 на P-ранк.',
					filters: [indexingFilters.worldThree],
				},

				PAN_FRIED: {
					title: 'Pan Fried',
					description: 'Найдите комнату с беконом.',
					filters: [indexingFilters.worldFour, indexingFilters.pigCity],
					instructions: [
						new InstructionImage(
							previews.preview_39,
							'preview_39',
							'transparent',
							1
						),
						'Комната с беконом находится в подзоне 3-го такси. Перед тем, как вы войдете в полицейскую машину, с потолка наверху будут свисать 2 полоски бекона. Супер-прыжок между беконом открывает вход, ведущую в комнату с беконом.',
					],
				},

				STRIKE: {
					title: 'Strike!',
					description:
						'Убейте трех или более врагов одним шаровым ударом в "The Pig City".',
					filters: [indexingFilters.worldFour, indexingFilters.pigCity],
					instructions: [
						new InstructionImage(
							previews.preview_41,
							'preview_41',
							'transparent',
							1
						),
						'Как только вы переключитесь на Густаво и Брика, рядом с вами будет 3 креветки. Атакуйте их, когда они окажутся на одном уровне.',
					],
				},

				SAY_OINK: {
					title: 'Say Oink!',
					description: 'Сфотографируйтесь с каждым жителем в "The Pig City".',
					filters: [indexingFilters.worldFour, indexingFilters.pigCity],
					instructions: [
						new InstructionImage(
							previews.preview_42,
							'preview_42',
							'transparent',
							1
						),
						'На локации есть 13 свиней, рядом с ними нужно позировать на "C". Все они находятся на главном пути, поэтому их не может быть в подзонах такси или секретах, их нетрудно найти. Танцующие свиньи и свиньи-полицейские не засчитываются.',
					],
				},

				CANT_FOOL_ME: {
					title: "Can't Fool Me",
					description: 'Не убивать картонных пицца-boy в "Oh Sh!t!".',
					filters: [indexingFilters.worldFour, indexingFilters.thatLevel],
					instructions: [
						new InstructionImage(
							previews.preview_43,
							'preview_43',
							'transparent',
							1
						),
						'Нужно избегать уничтожения картонных пицца-boy. Лучшая тактика действий — определить картонного от врага, их нетрудно обнаружить, и с ними нетрудно справиться. Имейте в виду, что красные ниндзя совершенно неотличимы от картонных. В конце дадут достижение.',
					],
				},

				FOOD_CLAN: {
					title: 'Food Clan',
					description: 'Убейте 10 ниндзя парированием на уровне "Oh Shit!".',
					filters: [indexingFilters.worldFour, indexingFilters.thatLevel],
					instructions: [
						new InstructionImage(
							previews.preview_44,
							'preview_44',
							'transparent',
							1
						),
						'Тот же метод как с "Forknight" только сложнее , когда "Ninja Slice" попытается атаковать отражаем атаку с помощью "C", все должно получиться.',
					],
				},

				PENNY_PINCHER: {
					title: 'Penny Pincher',
					description:
						'Избегайте того, чтобы "Mr. Pinch" схватил вас во время "Pizza Time" в "Oh Sh!t!".',
					filters: [indexingFilters.worldFour, indexingFilters.thatLevel],
					instructions: [
						new InstructionImage(
							previews.preview_45,
							'preview_45',
							'transparent',
							1
						),
						'Не особо сложное достижение. Как только вы пройдете комнату с несколькими "Mr. Pinch", вы практически получили это достижение.',
					],
				},

				UNFLATTENING: {
					title: 'Unflattening',
					description:
						'Уберите форму коробки при помощи жрецов (хотя бы раз на каждого) на уровне "Peppibot Factory".',
					filters: [indexingFilters.worldFour, indexingFilters.factory],
					instructions: [
						new InstructionImage(
							previews.preview_46,
							'preview_46',
							'transparent',
							1
						),
						'Есть 4 священника, с которыми вам нужно взаимодействовать, священник 3-й находится сразу после священника 2-го, между ними нет преобразования в коробку. Вы можете либо открыть секрет рядом со 2-м священником, чтобы взаимодействовать с 3-им священником, а затем вернуться наверх, чтобы снова получить трансформацию и на этот раз взаимодействовать со 2-м священником, или сделать второй круг и выбрать несекретный маршрут и секретный маршрут, на разных забегах.',
					],
				},

				WHOOP_THIS: {
					title: 'Whoop This!',
					description:
						'Пройдите первый секрет на уровне "Peppibot Factory" без урона.',
					filters: [indexingFilters.worldFour, indexingFilters.factory],
					instructions: [
						new InstructionImage(
							previews.preview_47,
							'preview_47',
							'transparent',
							1
						),
						'Когда вы найдете секрет, вам нужно как можно скорее использовать супер-насмешку и начать бежать к стене слева от вас, чтобы избежать всех атак сразу.',
					],
				},

				THERE_CAN_BE_ONLY_ONE: {
					title: 'There Can Be Only One',
					description: 'Уничтожьте всех "Peppibot" на "Peppibot Factory".',
					filters: [indexingFilters.worldFour, indexingFilters.factory],
					instructions: [
						new InstructionImage(
							previews.preview_48,
							'preview_48',
							'transparent',
							1
						),
						'Все роботы находятся на основном пути (нет секретов или скрытых комнат), но вы должны пройти второй круг, так как вам нужно дважды убить каждого робота, которые появляется во время "Pizza Time", чтобы они все зачлись.',
					],
				},

				FROZEN_NUGGETS: {
					title: 'Frozen Nuggets',
					description:
						'Освободите всех замороженных птиц в "Refrigerator-Refrigerador-Freezerator".',
					filters: [indexingFilters.worldFour, indexingFilters.freezerator],
					instructions: [
						new InstructionImage(
							previews.preview_49,
							'preview_49',
							'transparent',
							1
						),
						'Вам нужен будет огненное дыхание, чтобы освободить большинство птиц, (также вы можете использовать реактивные ранцы). Блоки с замороженными птицами очень отличаются от обычных замороженных блоков.',
					],
				},

				SEASON_S_GREETINGS: {
					title: "Season's Greetings",
					description:
						'Убейте 5 фейковых Санта-Клаусов на уровне "Refrigerator-Refrigerador-Freezerator".',
					filters: [indexingFilters.worldFour, indexingFilters.freezerator],
					instructions: [
						new InstructionImage(
							previews.preview_50,
							'preview_50',
							'transparent',
							1
						),
						'Чтобы получить это достижение, вам нужно провести приличную комбинацию, как только вы получите огненное дыхание. Первые 2 "Fake Santa\'s" могут быть убиты, запустив/апперкотируя врага в санту, но оставшиеся 3 могут умереть только с помощью супер-насмешки. Если к моменту, когда вы доберетесь до выхода, у вас не будет всех 5 убийств, вы можете пройти второй забег и попробовать еще раз.',
					],
				},

				ICE_CLIMBER: {
					title: 'Ice Climber',
					description:
						'Закончите уровень "Refrigerator-Refrigerador-Freezerator", ни разу не упав в пропасть.',
					filters: [indexingFilters.worldFour, indexingFilters.freezerator],
					instructions: [
						new InstructionImage(
							previews.preview_51,
							'preview_51',
							'transparent',
							1
						),
						'Легче сказать, чем сделать, избегайте быстрого движения, так как есть много внезапных падений, но как только вы получите огненное дыхание, вы можете просто удерживать кнопку прыжка.',
					],
				},

				FAKER: {
					title: 'Faker',
					description: 'Победите босса фейк-Пеппино без урона.',
					filters: [indexingFilters.worldFour, indexingFilters.boss],
					instructions: [
						new InstructionImage(
							previews.preview_52,
							'preview_52',
							'transparent',
							1,
							1
						),
						'Достаточно не простой босс. Всего у него две стадии атак, сначала он сам лично атакует, а потом уже посылает своих двойников атаковать вас. Наберитесь терпения, достаточно продолжительный босс который требуют много времени и попыток. Было не плохо бы запомнить расположение туннеля когда будете убегать от него, а то будет очень обидно упереться в тупик когда вы почти прошли это испытание.',
					],
				},

				S_RANK_4: {
					title: 'S Ranked #4',
					description: 'Пройдите все уровни из мира 4 на S-ранк.',
					filters: [indexingFilters.worldFour],
				},

				P_RANK_4: {
					title: 'P Ranked #4',
					description: 'Пройдите все уровни из мира 4 на P-ранк.',
					filters: [indexingFilters.worldFour],
				},

				CROSS_TO_BARE: {
					title: 'Cross To Bare',
					description: 'Убейте тридцать призраков в "Pizzascare".',
					filters: [indexingFilters.worldFive, indexingFilters.pizzaScare],
					instructions: [
						new InstructionImage(
							previews.preview_53,
							'preview_53',
							'transparent',
							1
						),
						'Призраки разбросаны по всей карте, и вы много раз получите крест для изгнания призраков на протяжении всего этого уровня.',
					],
				},

				HAUNTED_PLAYGROUND: {
					title: 'Haunted Playground',
					description:
						'Избегайте урона от ловушек Короля-призрака в "Pizzascare".',
					filters: [indexingFilters.worldFive, indexingFilters.pizzaScare],
					instructions: [
						new InstructionImage(
							previews.preview_54,
							'preview_54',
							'transparent',
							1
						),
						'Вам нужно неплохо знать расположение карты, чтобы получить это достижение. Старайтесь не торопиться, хотя будут участки где нужно будет пройти на скорости. Имейте в виду, что крест делает вас полностью неуязвимым для "Ghost King", поэтому обязательно воспользуйтесь им.',
					],
				},

				SKULLSPLITTER: {
					title: 'Skullsplitter',
					description: 'Уничтожьте все блоки черепа в "Pizzascare".',
					filters: [indexingFilters.worldFive, indexingFilters.pizzaScare],
					instructions: [
						new InstructionImage(
							previews.preview_55,
							'preview_55',
							'transparent',
							1
						),
						'Все тоже самое как и в "Gnome Forest", только вместо дерева, черепа. Все блоки черепа находятся на главном пути, поэтому нет необходимости проверять секреты.',
					],
				},

				AND_THIS_IS_MY_GUN_ON_A_STICK: {
					title: 'And This... Is My Gun On A Stick!',
					description:
						'Убейте всех преследующих вас монстров во время побега на уровне "Don`t Make A Sound".',
					filters: [indexingFilters.worldFive, indexingFilters.fnaf],
					instructions: [
						new InstructionImage(
							previews.preview_56,
							'preview_56',
							'transparent',
							1
						),
						'При побеге вам нужно убить всех монстров из дробовика. Вы будете стрелять в них всех в одной комнате, а уже после вы будете стрелять в них по одному в каждой комнате. Стреляйте в монстра независимо от того, активны ли они или нет, и позвольте ананасу разбудить их. Если достижение не срабатывает после убийства Гриба который стоит около выхода, сделайте второй забег, чтобы убить всех монстров, которых вы пропустили.',
					],
				},

				LET_THEM_SLEEP: {
					title: 'Let Them Sleep',
					description:
						'Активируйте тревогу меньше чем 6 раз до побега на уровне "Don`t Make A Sound".',
					filters: [indexingFilters.worldFive, indexingFilters.fnaf],
					instructions: [
						new InstructionImage(
							previews.preview_57,
							'preview_57',
							'transparent',
							1
						),
						'Всего на уровне около 5 обязательных будильников. Один с Грибом, один с Сыром, дважды с Мясником и финальная в конце, это означает, что у вас в запасе остается только одна тревога. Достижение получить сразу после наступления "Pizza Time". Советую запомнить маршрут, сделайте все возможное, чтобы избежать срабатывания сигнализации, и, надеюсь, у вас все получится.',
					],
				},

				JUMPSPARED: {
					title: 'Jumpspared',
					description: 'Избегайте скримеров на уровне "Don`t Make A Sound".',
					filters: [indexingFilters.worldFive, indexingFilters.fnaf],
					instructions: [
						new InstructionImage(
							previews.preview_58,
							'preview_58',
							'transparent',
							1
						),
						'Начинайте этот забег, как будто вы собираетесь получить ранг S/P, так как вам всегда будет нужна супер-насмешка, и избегайте всех секретов, так как комбо мгновенно пропадет. Будьте осторожны с комбо, так как все может очень быстро пойти наперекосяк. Во время "Pizza Time" убейте ананас как можно скорее, так как он мгновенно разбудит монстра в комнате.',
					],
				},

				DECORATED_VETERAN: {
					title: 'Decorated Veteran',
					description: 'Не получите урон более трех раз на уровне "WAR".',
					filters: [indexingFilters.worldFive, indexingFilters.war],
					instructions: [
						'Серьезную проблему для прохождения создают тут только танки, избавьтесь от них как можно скорее, если танк стреляет, вы можете взорвать снаряд из своего дробовика. Рекомендую пройти уровень несколько раз, чтобы не плохо запомнить все. Используйте свой дробовик всякий раз, когда вы чувствуете, что он вам нужен, и избегайте все секреты, поскольку вы ничего не получите от них.',
					],
				},

				SHARPSHOOTER: {
					title: 'Sharpshooter',
					description:
						'Не промазывайте выстрелами более трех раз на уровне "WAR".',
					filters: [indexingFilters.worldFive, indexingFilters.war],
					instructions: [
						'Тут нужно свисти к минимум использование дробовика. Попадание во врага, разрушаемые блоки, блоки-мишени или компьютеры — все это считается попаданиями, поэтому постарайтесь во все это попасть и реже промахиваться.',
					],
				},

				TRIP_TO_THE_WARZONE: {
					title: 'Trip to the Warzone',
					description:
						'Закончите уровень "WAR" так, чтобы у вас осталось времени больше минуты.',
					filters: [indexingFilters.worldFive, indexingFilters.war],
					instructions: [
						'Это достижение не такое уж и сложное, как кажется. Все, что требуется, — это приличная память об уровне. Само собой, что в секреты идти не надо. Старайтесь таранить всех врагов, так как стрельба из дробовика убивает большую часть вашей скорости, но не забываем про танки.',
					],
				},

				FACE_OFF: {
					title: 'Face Off',
					description: 'Пройдите Пицца-фейса без урона.',
					filters: [indexingFilters.worldFive, indexingFilters.boss],
					instructions: [
						new InstructionImage(
							previews.preview_59,
							'preview_59',
							'transparent',
							1
						),
						'Лично я считаю, что это самый сложный босс, ну оно и понятно почему. Этот босс самый настоящий тест на выносливость и стойкость. Единственным положительным моментом этого босса является то, что большинство его этапов, достаточно легкие.',
					],
				},

				S_RANK_5: {
					title: 'S Ranked #5',
					description: 'Пройдите все уровни из мира 5 на S-ранк.',
					filters: [indexingFilters.worldFive],
				},

				P_RANK_5: {
					title: 'P Ranked #5',
					description: 'Пройдите все уровни из мира 5 на P-ранк.',
					filters: [indexingFilters.worldFive],
				},
			},

			indexingFilters: getIndexingFilters(),

			allDoneLabels: {
				header: 'Поздравляем! Вы прошли игру на 100%',
			},
		},

		achievement: {
			completeButton: {
				completed: 'Выполнено',
				notCompleted: 'Не выполнено',
			},

			guideLabel: 'Как получить?',

			nextUp: {
				previous: 'Пред.',
				next: 'След.',
			},
		},

		options: {
			theme: {
				header: 'Тема',
				description: 'Выберите, как будет выглядеть приложение.',
				variants: {
					light: 'Светлая',
					dark: 'Темная',
				},
			},

			language: {
				header: 'Язык',
				description: 'Выберете ваш язык.',
				variants: {
					ru: 'Русский',
					en: 'English',
				},
			},
		},

		disabled: {
			notWorking: 'Эта страница сейчас не работает',
			goHome: 'Вернуться на главную',
		},

		welcomePage: {
			steps: {
				welcome: {
					header: 'Добро пожаловать в Pizza Tower Platinum!',
					descText:
						'Наше приложение поможет вам отслеживать все достижения, которые вы можете получить в этой удивительной игре. Вы всегда будете знать, как много прогресса вы сделали и какие достижения вам еще нужно получить. Мы надеемся, что наше приложение поможет вам наслаждаться игрой еще больше и достичь всех желаемых результатов. Удачной игры!',
				},

				languageSetup: {
					header: 'Настройка языка',
				},

				themeSetup: {
					header: 'Настройка темы',
				},
			},

			controls: {
				skip: 'Пропустить',
				back: 'Назад',
				forward: 'Далее',
				readyToComplete: 'Готово',
			},
		},
	},
};

export default russianLocalization;
