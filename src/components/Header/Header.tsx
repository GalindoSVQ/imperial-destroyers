import { useLocation } from 'react-router-dom';
import { capitalize } from 'utils';
import { Bell, UserIcon } from 'assets/icons';
import { Container, Head, User, Titles } from './Header.style';

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
		</Container>
	);
};

export { Header };
