import { AnimatePresence } from 'framer-motion';
import React, { FC } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import AchievementPage from '@pages/AchievementPage/AchievementPage';
import MainPage from '@pages/MainPage/MainPage';
import NotFound from '@pages/NotFound/NotFound';
import OptionsPage from '@pages/OptionsPage/OptionsPage';
import WelcomePage from '@pages/WelcomePage/WelcomePage';

/**
 * Root component of application routes.
 *
 * @param {boolean} pageTransitions      determines whether animated page
 *                                       transitions will be enabled.
 * @constructor
 */
const AppRoutes: FC<{
	pageTransitions?: boolean;
}> = ({ pageTransitions }) => {
	const location = useLocation();

	/**
	 * This component contains all application routes.
	 *
	 * Add new routes here.
	 *
	 * @constructor
	 */
	const RoutesNode: FC<unknown> = () => {
		return (
			<Routes location={location} key={location.pathname}>
				<Route path={'*'} element={<NotFound />} />

				<Route path={'/'} element={<MainPage />} index />

				<Route path={'/settings'} element={<OptionsPage />} />

				<Route path={'/articles/:name'} element={<AchievementPage />} />
			</Routes>
		);
	};

	return pageTransitions ? (
		<AnimatePresence>
			<RoutesNode />
		</AnimatePresence>
	) : (
		<RoutesNode />
	);
};

export default AppRoutes;
