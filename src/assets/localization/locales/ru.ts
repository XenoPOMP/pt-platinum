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
