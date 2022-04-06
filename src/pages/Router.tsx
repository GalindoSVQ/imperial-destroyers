import { Layout } from 'components';
import { MENU } from 'constants/menu';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import People from './People';
import Planets from './Planets';
import Starships from './Starships';
import Vehicles from './Vehicles';

export const Router = () => (
	<BrowserRouter>
		<Layout>
			<Routes>
				<Route path={MENU.HOME.PATH} element={<Home />} />
				<Route path={MENU.PLANETS.PATH} element={<Planets />} />
				<Route path={MENU.STARSHIPS.PATH} element={<Starships />} />
				<Route path={MENU.PEOPLE.PATH} element={<People />} />
				<Route path={MENU.VEHICLES.PATH} element={<Vehicles />} />
			</Routes>
		</Layout>
	</BrowserRouter>
);
