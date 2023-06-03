import type { HeaderLocales } from '@localization/types/HeaderLocales';
import type { MetaLocales } from '@localization/types/MetaLocales';

export interface Localization {
	meta: MetaLocales;
	header: HeaderLocales;
}
