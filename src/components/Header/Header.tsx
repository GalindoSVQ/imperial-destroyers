import { useLocation } from 'react-router-dom';
import { Bell, UserIcon } from 'assets/icons';
import { Container, Head, UserActions, Titles } from './Header.style';
import { capitalize } from 'utils';

const Header = () => {
	const { pathname } = useLocation();
	const title = capitalize(pathname.split('/')[1]);

	return (
		<Container>
			<Head>
				<Titles>
					<h2>Imperial Destroyers Center</h2>
					<h1>{title}</h1>
				</Titles>
				<UserActions>
					<Bell />
					<UserIcon />
				</UserActions>
			</Head>
		</Container>
	);
};

export { Header };
