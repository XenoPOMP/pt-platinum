import { Localization } from '@localization/Localization';
import en from '@localization/locales/en';
import ru from '@localization/locales/ru';

import useAppSettings from '@hooks/useAppSettings';

const useLocalization = (): Localization => {
	const { language } = useAppSettings();

	switch (language.get()) {
		case 'ru': {
			return ru;
		}

		case 'en': {
			return en;
		}
	}
};

export default useLocalization;
