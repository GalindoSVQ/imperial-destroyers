import { Layout } from 'components/Layout';
import { Splash } from 'components/Splash';
import { MENU } from 'constants/menu';
import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export const Router = () => {
	const Home = lazy(() => import('./Home'));
	const Planets = lazy(() => import('./Planets'));
	const Starships = lazy(() => import('./Starships'));
	const People = lazy(() => import('./People'));
	const Vehicles = lazy(() => import('./Vehicles'));

	return (
		<BrowserRouter>
			<Layout>
				<Suspense fallback={<Splash />}>
					<Routes>
						<Route path={MENU.HOME.PATH} element={<Home />} />
						<Route path={MENU.PLANETS.PATH} element={<Planets />} />
						<Route path={MENU.STARSHIPS.PATH} element={<Starships />} />
						<Route path={MENU.PEOPLE.PATH} element={<People />} />
						<Route path={MENU.VEHICLES.PATH} element={<Vehicles />} />
					</Routes>
				</Suspense>
			</Layout>
		</BrowserRouter>
	);
};
