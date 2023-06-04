import { Achievements } from '@type/Achievements';
import { Filter } from '@type/Filter';

export interface MainPageLocales {
	achievements: {
		[key in keyof Achievements]: {
			title: string;
			description: string;
			filters?: Filter[];
		};
	};
}
