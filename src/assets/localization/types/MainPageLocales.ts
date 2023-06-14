import { Achievements } from '@type/Achievements';
import { Filter } from '@type/Filter';

export class InstructionImage {
	alt: string;
	url: string;
	background: string;
	rowSpan: number;
	colSpan?: number;

	constructor(
		url: string,
		alt: string,
		background: string,
		rowSpan: number,
		colSpan?: number
	) {
		this.url = url;
		this.alt = alt;
		this.background = background;
		this.rowSpan = rowSpan;
		this.colSpan = colSpan;
	}
}

export interface MainPageLocales {
	achievements: {
		[key in keyof Achievements]: {
			title: string;
			description: string;
			filters?: Filter[];
			instructions?: (string | InstructionImage)[];
		};
	};

	indexingFilters: Filter[];
}
