import { Language, Theme } from '@redux/reducers/appSettingsSlice';

export type OptionItemLocale<
	Add extends { variants: Record<Theme | Language, string> } | unknown
> = {
	header: string;
	description: string;
} & Add;

export type OptionsPageLocales = {
	theme: OptionItemLocale<{
		variants: Record<Theme, string>;
	}>;
	language: OptionItemLocale<{
		variants: Record<Language, string>;
	}>;
};
