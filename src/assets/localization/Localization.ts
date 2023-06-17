import type { AchievementPageLocales } from '@localization/types/AchievementPageLocales';
import type { HeaderLocales } from '@localization/types/HeaderLocales';
import type { MainPageLocales } from '@localization/types/MainPageLocales';
import type { MetaLocales } from '@localization/types/MetaLocales';
import type { OptionsPageLocales } from '@localization/types/OptionsPageLocales';

export interface Localization {
	meta: MetaLocales;
	header: HeaderLocales;
	pages: {
		main: MainPageLocales;
		achievement: AchievementPageLocales;
		options: OptionsPageLocales;
	};
}
