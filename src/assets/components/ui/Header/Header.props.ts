import type { TaskBarProps } from '@ui/TaskBar/TaskBar.props';

export interface HeaderProps {
	renderHeader?: boolean;
	taskbar?: false | TaskBarProps;
}
