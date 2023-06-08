import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { AchievementMarks } from '@redux/reducers/marks.slice';
import { TaskbarOptions } from '@redux/reducers/taskbar.slice';

/**
 * Redux store interface.
 */
interface IStore {
	appSettings: AppSettings;
	marks: AchievementMarks;
	taskbar: TaskbarOptions;
}

/**
 * Type for Redux action.
 *
 * A generic is payload type.
 */
export type ReduxAction<A> = {
	payload: A;
	type: string;
};

export default IStore;
