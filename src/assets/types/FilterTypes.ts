export enum FilterTypes {
	worldOne,
	worldTwo,
	worldThree,
	worldFour,
	worldFive,
	dependsOn,
	pizzaScape,
	ancientCheese,
	bloodSauceDungeon,
	space,
	wasteyard,
	farm,
	saloon,
	crust,
	lario,
	boss,
	golf,
	pigCity,
	thatLevel,
	factory,
	freezerator,
	pizzaScare,
	fnaf,
	war,
}

export interface FilterNames extends Record<string, string> {
	worldOne: string;
	worldTwo: string;
	worldThree: string;
	worldFour: string;
	worldFive: string;
	dependsOn: string;
	johnGutter: string;
	pizzaScape: string;
	ancientCheese: string;
	bloodSauceDungeon: string;
	oreganoDesert: string;
	space: string;
	wasteyard: string;
	farm: string;
	saloon: string;
	crust: string;
	lario: string;
	deepDishNine: string;
	boss: string;
	golf: string;
	pigCity: string;
	thatLevel: string;
	factory: string;
	freezerator: string;
	pizzaScare: string;
	fnaf: string;
	war: string;
}
