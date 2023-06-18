import cn from 'classnames';
import { FC, useEffect } from 'react';
import Emoji from 'react-ios-emojis';
import { useDispatch } from 'react-redux';
import { SingleValue } from 'react-select';

import Page from '@components/Page/Page';

import {
	Language,
	Theme,
	changeLang,
	changeTheme,
	initialAppSettings,
} from '@redux/reducers/appSettingsSlice';

import type { OptionItemLocale } from '@localization/types/OptionsPageLocales';

import CustomSelect from '@ui/CustomSelect/CustomSelect';
import {
	SelectOption,
	TypedSelectOption,
} from '@ui/CustomSelect/CustomSelect.props';
import UiContainer from '@ui/UiContainer/UiContainer';

import useAppSettings from '@hooks/useAppSettings';
import useLocalization from '@hooks/useLocalization';

import { PropsWith } from '@type/PropsWith';

import styles from './OptionsPage.module.scss';
import type { OptionsPageProps } from './OptionsPage.props';

const OptionsPage: FC<OptionsPageProps> = ({}) => {
	const loc = useLocalization();
	const dispatch = useDispatch();

	const { theme, language, appVersion } = useAppSettings();

	const themeVariants: TypedSelectOption<Theme>[] = [
		{
			value: 'light',
			label: loc.pages.options.theme.variants.light,
		},
	];

	const languageVariants: TypedSelectOption<Language>[] = [
		{
			value: 'ru',
			label: (
				<div className={'flex items-center gap-[.5em]'}>
					<Emoji name={'flagRussia'} /> {loc.pages.options.language.variants.ru}
				</div>
			),
		},
		{
			value: 'en',
			label: (
				<div className={'flex items-center gap-[.5em]'}>
					<Emoji name={'flagUnitedKingdom'} />{' '}
					{loc.pages.options.language.variants.en}
				</div>
			),
		},
	];

	const OptionItem: FC<
		PropsWith<
			'children',
			{
				locale: OptionItemLocale<unknown>;
			}
		>
	> = ({ children, locale }) => {
		return (
			<div className={cn(styles.item)}>
				<div className={cn(styles.title)}>
					<h2>{locale.header}</h2>

					<i>{locale.description}</i>
				</div>

				{children}
			</div>
		);
	};

	return (
		<Page
			meta={loc.meta.options}
			header={{
				taskbar: false,
			}}
			noIndex
			disabled
		>
			<UiContainer className={cn(styles.settingsPage)}>
				<OptionItem locale={loc.pages.options.theme}>
					<CustomSelect
						options={themeVariants}
						defaultValue={(() => {
							const currentTheme = theme.get();

							return themeVariants.filter(
								variant => variant.value === currentTheme
							)[0];
						})()}
						onChange={newTheme => {
							/**
							 * Theme value that has been selected.
							 */
							const selectedValue: Theme = (
								newTheme as SingleValue<SelectOption>
							)?.value as Theme;

							// Update Redux-state.
							theme.set(
								selectedValue ? selectedValue : initialAppSettings.theme
							);
						}}
					/>
				</OptionItem>

				<OptionItem locale={loc.pages.options.language}>
					<CustomSelect
						options={languageVariants}
						defaultValue={(() => {
							const currentLang = language.get();

							return languageVariants.filter(
								variant => variant.value === currentLang
							)[0];
						})()}
						onChange={newLanguage => {
							/**
							 * Language value that has been selected.
							 */
							const selectedValue: Language = (
								newLanguage as SingleValue<SelectOption>
							)?.value as Language;

							// Update Redux-state.
							language.set(
								selectedValue ? selectedValue : initialAppSettings.language
							);
						}}
					/>
				</OptionItem>

				<div className={cn(styles.item)}>
					<i>v{appVersion.get()}</i>
				</div>
			</UiContainer>
		</Page>
	);
};

export default OptionsPage;
