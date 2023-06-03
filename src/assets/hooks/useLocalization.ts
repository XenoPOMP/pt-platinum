import { Localization } from '@localization/Localization';
import ru from '@localization/locales/ru';

import useAppSettings from '@hooks/useAppSettings';

const useLocalization = (): Localization => {
	const { language } = useAppSettings();

	switch (language.get()) {
		case 'ru': {
			return ru;
		}
	}
};

export default useLocalization;
