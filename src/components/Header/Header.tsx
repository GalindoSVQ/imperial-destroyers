import { useLocation } from 'react-router-dom';
import { capitalize } from 'utils';
import { Search } from 'components/Search';
import { Bell, UserIcon } from 'assets/icons';
import { Container, Head, Interactions, User, Titles } from './Header.style';
import { PlanetSelect } from 'components/PlanetSelect';

const Header = () => {
	const { pathname } = useLocation();
	const title = capitalize(pathname.split('/')[1]) || 'Home';

	return (
		<Container>
			<Head>
				<Titles>
					<h2>Imperial Destroyers Center</h2>
					<h1>{title}</h1>
				</Titles>
				<User>
					<Bell />
					<UserIcon />
				</User>
			</Head>
			<Interactions>
				<Search />
				<PlanetSelect />
			</Interactions>
		</Container>
	);
};

export { Header };
