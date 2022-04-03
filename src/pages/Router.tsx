import { Splash } from 'components/Splash';
import { HOME } from 'constants/paths';
import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export const Router = () => {
	const Home = lazy(() => import('./Home'));

	return (
		<BrowserRouter>
			<Suspense fallback={<Splash />}>
				<Routes>
					<Route path={HOME} element={<Home />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};
