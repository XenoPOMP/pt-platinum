import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { AchievementMarks } from '@redux/reducers/marks.slice';

/**
 * Redux store interface.
 */
interface IStore {
	appSettings: AppSettings;
	marks: AchievementMarks;
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
