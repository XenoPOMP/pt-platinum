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

				PEPPINO_S_RAIN_DANCE: {
					title: "Peppino's Rain Dance",
					description:
						'Активируйте тотем заново, станцевав ускоренным бегом в Oregano Desert.',
					filters: [
						FilterFactory(FilterTypes.worldTwo, 'Мир 2'),
						FilterFactory(FilterTypes.space, 'Уровень: Oregano Desert'),
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
