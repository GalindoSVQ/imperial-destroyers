import { HOME } from 'constants/paths';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './Home/Home';

export const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path={HOME} element={<Home />} />
		</Routes>
	</BrowserRouter>
);
