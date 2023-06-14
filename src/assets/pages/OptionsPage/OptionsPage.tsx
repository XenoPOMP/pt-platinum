import cn from 'classnames';
import { FC } from 'react';
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

import useLocalization from '@hooks/useLocalization';

import { PropsWith } from '@type/PropsWith';

import styles from './OptionsPage.module.scss';
import type { OptionsPageProps } from './OptionsPage.props';

const OptionsPage: FC<OptionsPageProps> = ({}) => {
	const loc = useLocalization();
	const dispatch = useDispatch();

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
		>
			<div className={cn(styles.settingsPage)}>
				<OptionItem locale={loc.pages.options.theme}>
					<CustomSelect
						options={themeVariants}
						defaultValue={(() => {
							// Fetch initial value
							themeVariants.forEach(variant => {
								if (variant.value === initialAppSettings.theme) {
									return variant;
								}
							});

							// Default theme
							return themeVariants[0];
						})()}
						onChange={newTheme => {
							/**
							 * Theme value that has been selected.
							 */
							const selectedValue: Theme = (
								newTheme as SingleValue<SelectOption>
							)?.value as Theme;

							// Update Redux-state.
							dispatch(
								changeTheme(
									selectedValue ? selectedValue : initialAppSettings.theme
								)
							);
						}}
					/>
				</OptionItem>

				<OptionItem locale={loc.pages.options.language}>
					<CustomSelect
						options={languageVariants}
						defaultValue={(() => {
							// Fetch initial value
							languageVariants.forEach(variant => {
								if (variant.value === initialAppSettings.language) {
									return variant;
								}
							});

							// Default theme
							return languageVariants[0];
						})()}
						onChange={newLanguage => {
							/**
							 * Language value that has been selected.
							 */
							const selectedValue: Language = (
								newLanguage as SingleValue<SelectOption>
							)?.value as Language;

							// Update Redux-state.
							dispatch(
								changeLang(
									selectedValue ? selectedValue : initialAppSettings.language
								)
							);
						}}
					/>
				</OptionItem>
			</div>
		</Page>
	);
};

export default OptionsPage;
