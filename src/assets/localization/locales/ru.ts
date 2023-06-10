import { Localization } from '@localization/Localization';
import { InstructionImage } from '@localization/types/MainPageLocales';

import { FilterTypes } from '@type/FilterTypes';

import { FilterFactory } from '@utils/FilterFactory';

import preview_0 from '@media/images/guides/2938238385_preview_Jonh Small.jpg';
import preview_1 from '@media/images/guides/preview_1.jpg';
import preview_2 from '@media/images/guides/preview_2.jpg';
import preview_3 from '@media/images/guides/preview_3.jpg';
import preview_4 from '@media/images/guides/preview_4.jpg';
import preview_5 from '@media/images/guides/preview_5.jpg';
import preview_6 from '@media/images/guides/preview_6.jpg';
import preview_7 from '@media/images/guides/preview_7.jpg';
import preview_8 from '@media/images/guides/preview_8.jpg';
import preview_9 from '@media/images/guides/preview_9.jpg';
import preview_10 from '@media/images/guides/preview_10.jpg';
import preview_11 from '@media/images/guides/preview_11.jpg';
import preview_12 from '@media/images/guides/preview_12.jpg';
import preview_13 from '@media/images/guides/preview_13.jpg';
import preview_14 from '@media/images/guides/preview_14.jpg';
import preview_15 from '@media/images/guides/preview_15.jpg';
import preview_16 from '@media/images/guides/preview_16.jpg';
import preview_17 from '@media/images/guides/preview_17.jpg';
import preview_18 from '@media/images/guides/preview_18.jpg';
import preview_19 from '@media/images/guides/preview_19.jpg';
import preview_20 from '@media/images/guides/preview_20.jpg';
import preview_21 from '@media/images/guides/preview_21.jpg';
import preview_22 from '@media/images/guides/preview_22.jpg';
import preview_23 from '@media/images/guides/preview_23.jpg';
import preview_24 from '@media/images/guides/preview_24.jpg';
import preview_25 from '@media/images/guides/preview_25.jpg';
import preview_26 from '@media/images/guides/preview_26.jpg';
import preview_27 from '@media/images/guides/preview_27.jpg';
import preview_28 from '@media/images/guides/preview_28.jpg';
import preview_29 from '@media/images/guides/preview_29.jpg';
import preview_30 from '@media/images/guides/preview_30.jpg';
import preview_31 from '@media/images/guides/preview_31.jpg';
import preview_32 from '@media/images/guides/preview_32.jpg';
import preview_33 from '@media/images/guides/preview_33.jpg';
import preview_34 from '@media/images/guides/preview_34.jpg';
import preview_35 from '@media/images/guides/preview_35.jpg';

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
			options: {
				showCompleted: 'Показывать выполненные достижения',
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
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.worldOne, 'Уровень: John Gutter'),
					],
					instructions: [
						new InstructionImage(preview_0, 'preview_0', 'transparent', 1),
						'Для выполнения этого достижения вам необходимо уничтожить все блоки с Джоном на уровне John Gutter.',
					],
				},

				LETS_MAKE_THIS_QUICK: {
					title: "Let's Make This Quick",
					description:
						'Закончи уровень "John Gutter" меньше чем за две минуты.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.worldOne, 'Уровень: John Gutter'),
					],
					instructions: [
						'Попытайтесь пройти карту менее чем за две минуты, несколько попыток и все должно получиться.',
					],
				},

				PRIMATE_RAGE: {
					title: 'Primate Rage',
					description:
						'Получите комбо из 99 или более очков на уровне "John Gutter".',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.worldOne, 'Уровень: John Gutter'),
					],
					instructions: [
						new InstructionImage(preview_1, 'preview_1', 'transparent', 1),
						'Полное комбо от начала и до конца, а также выполнение 2-го забега. Должно ровно хватить чтобы получить комбо из 99 врагов.',
					],
				},

				SHINING_ARMOR: {
					title: 'Shining Armor',
					description:
						'Доберитесь до всех священников, ни разу не врезавшись на стену в "Pizzascape".',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.pizzaScape, 'Уровень: Pizzascape'),
					],
					instructions: [
						new InstructionImage(preview_2, 'preview_2', 'transparent', 1),
						'Всего нужно добраться до 5 священников. Постоянно выполняйте прием резкого спуска вниз, будет очень много моментов когда нужно биться об стену и только этот прием спасет от удара об стену.',
					],
				},

				SPOONKNIGHT: {
					title: 'Spoonknight',
					description: 'Парируйте десять атак "Forknights" в "Pizzascape".',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.pizzaScape, 'Уровень: Pizzascape'),
					],
					instructions: [
						new InstructionImage(preview_3, 'preview_3', 'transparent', 1),
						'Очень просто, ничего особенного. Просто нажимаем "C" рядом с 10 "Forkknight" за один заход.',
					],
				},

				SPHERICAL: {
					title: 'Spherical',
					description:
						'Убейте другого врага когда вас пнет "Pepperoni Goblin" в "Pizzascape".',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.pizzaScape, 'Уровень: Pizzascape'),
					],
					instructions: [
						new InstructionImage(preview_4, 'preview_4', 'transparent', 1),
						'Найдите область с "Pepperoni Goblin" и другим врагом достаточно близко друг к другу - (при необходимости вы можете переместить их, схватив их). И пусть вас пнут, и будучи круглым мячом убить другого врага.',
					],
				},

				THRILL_SEEKER: {
					title: 'Thrill Seeker',
					description:
						'Закончите уровень "Ancient Cheese", не получив урона от взрывов.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.ancientCheese, 'Уровень: Ancient Cheese'),
					],
					instructions: [
						new InstructionImage(preview_5, 'preview_5', 'transparent', 1),
						'Все предельно просто. Просто постарайтесь не получить урона на этом уровне от бомб.',
					],
				},

				VOLLEYBOMB: {
					title: 'Volleybomb',
					description:
						'Убейте Крысу, используя бомбу, сброшенную врагом на уровне "Ancient Cheese".',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.ancientCheese, 'Уровень: Ancient Cheese'),
					],
					instructions: [
						new InstructionImage(preview_6, 'preview_6', 'transparent', 1),
						'Убейте Крысу бомбой гоблина. Испытание может быть завершено в комнате, скрин ниже:',
					],
				},

				DELICACY: {
					title: 'Delicacy',
					description:
						'Разрушить более сорока одной сырной платформы в "Ancient Cheese".',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.ancientCheese, 'Уровень: Ancient Cheese'),
					],
					instructions: [
						new InstructionImage(preview_7, 'preview_7', 'transparent', 1),
						'Можете особо не напрягаться, получите без проблем.',
					],
				},

				VERY_VERY_HOT_SAUCE: {
					title: 'Very Very Hot Sauce',
					description:
						'Закончите уровень "Bloodsauce Dungeon" ни разу не дотронувшись до лавы.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(
							FilterTypes.bloodSauceDungeon,
							'Уровень: Bloodsauce Dungeon'
						),
					],
					instructions: [
						new InstructionImage(preview_8, 'preview_8', 'transparent', 1),
						'Ничего особенного, просто пройдите уровень, не попадая ни в какие ямы с лавой.',
					],
				},

				ERUPTION_MAN: {
					title: 'Eruption Man',
					description:
						'Во время побега используйте супер-прыжок на протяжении более чем 2 секунд на уровне "Bloodsauce Dungeon".',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(
							FilterTypes.bloodSauceDungeon,
							'Уровень: Bloodsauce Dungeon'
						),
					],
					instructions: [
						new InstructionImage(preview_9, 'preview_9', 'transparent', 1),
						'Совершив суперпрыжок в этом месте во время "Pizza Time", и достижение ваше.',
					],
				},

				UNSLICED_PIZZAMAN: {
					title: 'Unsliced Pizzaman',
					description:
						'Закончите уровень "Bloodsauce Dungeon", не получив урона от ножей для пиццы.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(
							FilterTypes.bloodSauceDungeon,
							'Уровень: Bloodsauce Dungeon'
						),
					],
					instructions: [
						new InstructionImage(preview_10, 'preview_10', 'transparent', 1, 2),
						'Просто постарайтесь не получить урон от ножей для пиццы на этом уровне.',
					],
				},

				THE_CRITIC: {
					title: 'The Critic',
					description: 'Победите Пеппермена без урона.',
					filters: [
						FilterFactory(FilterTypes.worldOne, 'Мир 1'),
						FilterFactory(FilterTypes.boss, 'Босс'),
					],
					instructions: [
						new InstructionImage(preview_11, 'preview_11', 'transparent', 1, 2),
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
					description: 'Повторно активируйте тотем, танцуя в "Oregano Desert".',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.space, 'Уровень: Oregano Desert'),
					],
					instructions: [
						new InstructionImage(preview_12, 'preview_12', 'transparent', 1),
						'Находясь рядом с тотемом, начните бегать и разгоняться туда-сюда, пока тотем снова не станет активным. Можно это сделать с любым тотемом.',
					],
				},

				UNNECESSARY_VIOLENCE: {
					title: 'Unnecessary Violence',
					description: 'Убейте всех клерков-сосисок в пиццериях.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.space, 'Уровень: Oregano Desert'),
					],
					instructions: [
						new InstructionImage(preview_13, 'preview_13', 'transparent', 1),
						'На уровне расположено 5 пиццерий, в каждой из которых есть продавец сосисок.',
					],
				},

				ALIEN_COW: {
					title: 'Alien Cow',
					description:
						'Не дайте ни одной корове ударить себя на уровне "Oregano Desert".',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.space, 'Уровень: Oregano Desert'),
					],
					instructions: [
						new InstructionImage(preview_14, 'preview_14', 'transparent', 1),
						'Избегайте спешки и не торопитесь. Старайтесь перепрыгнуть всех коров и все получится.',
					],
				},

				GHOSTED: {
					title: 'Ghosted',
					description:
						'Избегайте прикосновения призрака Джона на уровне "Wasteyard".',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.wasteyard, 'Уровень: Wasteyard'),
					],
					instructions: [
						new InstructionImage(preview_15, 'preview_15', 'transparent', 1),
						'Не прикасайтесь к Джону-Призраку во время "Pizza Time".',
					],
				},

				PRETEND_GHOST: {
					title: 'Pretend Ghost',
					description:
						'Убейте 20 или более врагов, играя за призрака, в "Wasteyard".',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.wasteyard, 'Уровень: Wasteyard'),
					],
					instructions: [
						new InstructionImage(preview_16, 'preview_16', 'transparent', 1),
						'Убедитесь, что появились эти два мини-Джонов - (Нужно убить их будучи призраком)',
						new InstructionImage(preview_17, 'preview_17', 'transparent', 1),
						'и залетите в этот секрет, чтобы выполнить квест.',
					],
				},

				ALIVE_AND_WELL: {
					title: 'Alive and Well',
					description: 'Прокатитесь на каждом трупе в "Wasteyard".',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.wasteyard, 'Уровень: Wasteyard'),
					],
					instructions: [
						new InstructionImage(preview_18, 'preview_18', 'transparent', 1),
						'Все трупы находятся на главном пути.',
					],
				},

				NO_ONE_IS_SAFE: {
					title: 'No One Is Safe',
					description:
						'Убейте сразу трех недоступных врагов с помощью супер-насмешки в "Fun Farm".',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.farm, 'Уровень: Fun Farm'),
					],
					instructions: [
						new InstructionImage(preview_19, 'preview_19', 'transparent', 1),
						'Супер-насмешка в этом месте убьет 4 "Peasanto\'s":',
					],
				},

				CUBE_MENACE: {
					title: 'Cube Menace',
					description: 'Найдите и уничтожьте куб Морта.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.farm, 'Уровень: Fun Farm'),
					],
					instructions: [
						new InstructionImage(preview_20, 'preview_20', 'transparent', 1),
						'Куб можно найти в первой локации, через которую вам нужно будет перепрыгнуть с "Мортом". Секция будет закрыта, и вам нужно будет сломать блок "Мортом", чтобы туда попасть.',
					],
				},

				GOOD_EGG: {
					title: 'Good Egg',
					description: 'Завершите "Fun Farm", избегая урона с "Мортом" на вас.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.farm, 'Уровень: Fun Farm'),
					],
					instructions: [
						new InstructionImage(preview_21, 'preview_21', 'transparent', 1),
						'Просто постарайтесь избегать повреждений с "Мортом" на вас. Попадания факела который кидает "Peasanto" не считается уроном.',
					],
				},

				NON_ALCOHOLIC: {
					title: 'Non-Alcoholic',
					description:
						'Уничтожьте все пивные бутылки на уровне "Fastfood Saloon".',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.saloon, 'Уровень: Fastfood Saloon'),
					],
					instructions: [
						new InstructionImage(preview_22, 'preview_22', 'transparent', 1),
						'В салуне повсюду разбросано куча пивных бутылок, и большую часть нужно их разбить.',
					],
				},

				ALREADY_PRESSED: {
					title: 'Already Pressed',
					description:
						'Активируйте каждую кнопку только один раз в "Fastfood Saloon".',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.saloon, 'Уровень: Fastfood Saloon'),
					],
					instructions: [
						new InstructionImage(preview_23, 'preview_23', 'transparent', 1),
						'Не очень простое достижение. Нужно не плохо запомнить маршрут и точно знать, что делать. Также есть вероятность двойного активирования кнопки так что нужно быть немного осторожным с этим.',
					],
				},

				ROYAL_FLUSH: {
					title: 'Royal Flush',
					description:
						'Прикоснитесь к каждой карте на уровне "Fastfood Saloon".',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.saloon, 'Уровень: Fastfood Saloon'),
					],
					instructions: [
						new InstructionImage(preview_24, 'preview_24', 'transparent', 1),
						'Карты разбросаны по всей карте и вам нужно собрать их всех. Карты в секретах не учитываются.',
					],
				},

				THE_UGLY: {
					title: 'The Ugly',
					description: 'Победите Виджиланта без урона.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.boss, 'Босс'),
					],
					instructions: [
						new InstructionImage(preview_25, 'preview_25', 'transparent', 1, 2),
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
					instructions: [
						new InstructionImage(preview_26, 'preview_26', 'transparent', 1),
						'Отразите атаку пушечного выстрела гоблина, и все должно получиться.',
					],
				},

				X: {
					title: 'X',
					description: 'Найдите всех "Treasure Chest Guy" в "Crust Cove".',
					filters: [
						FilterFactory(FilterTypes.worldThree, 'Мир 3'),
						FilterFactory(FilterTypes.crust, 'Уровень: Crust Cove'),
					],
					instructions: [
						new InstructionImage(preview_27, 'preview_27', 'transparent', 2),
						'На протяжении всего забега в земле прячутся 7 спрятанных "Treasure Chest Guy", все они отмечены красным крестиком на земле.',
						'В игре засчитывается "Treasure Chest Guy", выкопав его, а не убив. Это означает, что вы можете постоянно выкапывать первого "Treasure Chest Guy" в начале уровня, и не убивать его. Идем на другую под-локацию, возвращаемся обратно в комнату и снова выкапываем того же "Treasure Chest Guy", делаем так 7 раз и получаем достижение.',
					],
				},

				DEMOLITION_EXPERT: {
					title: 'Demolition Expert',
					description: 'Завершите "Crust Cove", не получив урона от взрыва.',
					filters: [
						FilterFactory(FilterTypes.worldThree, 'Мир 3'),
						FilterFactory(FilterTypes.crust, 'Уровень: Crust Cove'),
					],
					instructions: [
						new InstructionImage(preview_28, 'preview_28', 'transparent', 1),
						'Просто избегайте повреждений гоблинов с пушкой и капитанских пушек на протяжении всего забега.',
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
						FilterFactory(FilterTypes.freezerator, 'Уровень: Refrigerator'),
					],
				},

				SEASON_S_GREETINGS: {
					title: "Season's Greetings",
					description:
						'Убейте 5 фейковых Санта-Клаусов на уровне Refrigerator-Refrigerador-Freezerator.',
					filters: [
						FilterFactory(FilterTypes.worldFour, 'Мир 4'),
						FilterFactory(FilterTypes.freezerator, 'Уровень: Refrigerator'),
					],
				},

				ICE_CLIMBER: {
					title: 'Ice Climber',
					description:
						'Закончите уровень Refrigerator-Refrigerador-Freezerator, ни разу не упав в пропасть.',
					filters: [
						FilterFactory(FilterTypes.worldFour, 'Мир 4'),
						FilterFactory(FilterTypes.freezerator, 'Уровень: Refrigerator'),
					],
				},

				FAKER: {
					title: 'Faker',
					description: 'Победите босса фейк-Пеппино без урона.',
					filters: [
						FilterFactory(FilterTypes.worldFour, 'Мир 4'),
						FilterFactory(FilterTypes.boss, 'Босс'),
					],
				},

				S_RANK_4: {
					title: 'S Ranked #4',
					description: 'Пройдите все уровни из мира 4 на S-ранк.',
					filters: [FilterFactory(FilterTypes.worldFour, 'Мир 4')],
				},

				P_RANK_4: {
					title: 'P Ranked #4',
					description: 'Пройдите все уровни из мира 4 на P-ранк.',
					filters: [FilterFactory(FilterTypes.worldFour, 'Мир 4')],
				},

				CROSS_TO_BARE: {
					title: 'Cross To Bare',
					description: 'Убейте 30 призраков на уровне Pizzascare.',
					filters: [
						FilterFactory(FilterTypes.worldFive, 'Мир 5'),
						FilterFactory(FilterTypes.pizzaScare, 'Уровень: Pizzascare'),
					],
				},

				HAUNTED_PLAYGROUND: {
					title: 'Haunted Playground',
					description:
						'Не получайте урон от ловушек Короля-Призрака на уровне Pizzascare.',
					filters: [
						FilterFactory(FilterTypes.worldFive, 'Мир 5'),
						FilterFactory(FilterTypes.pizzaScare, 'Уровень: Pizzascare'),
					],
				},

				SKULLSPLITTER: {
					title: 'Skullsplitter',
					description: 'Уничтожьте каждый блок скелета на уровне Pizzascare.',
					filters: [
						FilterFactory(FilterTypes.worldFive, 'Мир 5'),
						FilterFactory(FilterTypes.pizzaScare, 'Уровень: Pizzascare'),
					],
				},

				AND_THIS_IS_MY_GUN_ON_A_STICK: {
					title: 'And This... Is My Gun On A Stick!',
					description:
						'Убейте всех преследующих вас монстров во время побега на уровне Don`t Make A Sound.',
					filters: [
						FilterFactory(FilterTypes.worldFive, 'Мир 5'),
						FilterFactory(FilterTypes.fnaf, 'Уровень: Don`t Make A Sound'),
					],
				},

				LET_THEM_SLEEP: {
					title: 'Let Them Sleep',
					description:
						'Активируйте тревогу меньше чем 6 раз до побега на уровне Don`t Make A Sound.',
					filters: [
						FilterFactory(FilterTypes.worldFive, 'Мир 5'),
						FilterFactory(FilterTypes.fnaf, 'Уровень: Don`t Make A Sound'),
					],
				},

				JUMPSPARED: {
					title: 'Jumpspared',
					description: 'Избегайте скримеров на уровне Don`t Make A Sound.',
					filters: [
						FilterFactory(FilterTypes.worldFive, 'Мир 5'),
						FilterFactory(FilterTypes.fnaf, 'Уровень: Don`t Make A Sound'),
					],
				},

				DECORATED_VETERAN: {
					title: 'Decorated Veteran',
					description: 'Получите урон не более трех раз на уровне WAR.',
					filters: [
						FilterFactory(FilterTypes.worldFive, 'Мир 5'),
						FilterFactory(FilterTypes.war, 'Уровень: WAR'),
					],
				},

				SHARPSHOOTER: {
					title: 'Sharpshooter',
					description:
						'Не промазывайте выстрелами более трех раз на уровне WAR.',
					filters: [
						FilterFactory(FilterTypes.worldFive, 'Мир 5'),
						FilterFactory(FilterTypes.war, 'Уровень: WAR'),
					],
				},

				TRIP_TO_THE_WARZONE: {
					title: 'Trip to the Warzone',
					description:
						'Закончите уровень WAR так, чтобы у вас осталось времени больше минуты.',
					filters: [
						FilterFactory(FilterTypes.worldFive, 'Мир 5'),
						FilterFactory(FilterTypes.war, 'Уровень: WAR'),
					],
				},

				FACE_OFF: {
					title: 'Face Off',
					description: 'Пройдите Пицца-фейса без урона.',
					filters: [
						FilterFactory(FilterTypes.worldFive, 'Мир 5'),
						FilterFactory(FilterTypes.boss, 'Босс'),
					],
				},

				S_RANK_5: {
					title: 'S Ranked #5',
					description: 'Пройдите все уровни из мира 5 на S-ранк.',
					filters: [FilterFactory(FilterTypes.worldFive, 'Мир 5')],
				},

				P_RANK_5: {
					title: 'P Ranked #5',
					description: 'Пройдите все уровни из мира 5 на P-ранк.',
					filters: [FilterFactory(FilterTypes.worldFive, 'Мир 5')],
				},
			},
		},

		achievement: {
			completeButton: {
				completed: 'Выполнено',
				notCompleted: 'Не выполнено',
			},

			guideLabel: 'Как получить?',
		},
	},
};

export default russianLocalization;
