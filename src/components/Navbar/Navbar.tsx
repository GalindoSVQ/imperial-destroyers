import { menuRoutes } from 'components/Menu/Menu';
import { NavigationBar, NavLink } from './Navbar.style';

const Navbar = () => (
	<NavigationBar>
		<ul>
			{menuRoutes.map((route) => (
				<li key={route.path}>
					<NavLink
						to={route.path}
						title={route.title}
						target={route.target}
						rel={route.rel}
					>
						{route.icon}
						{route.title}
					</NavLink>
				</li>
			))}
		</ul>
	</NavigationBar>
);

export { Navbar };
