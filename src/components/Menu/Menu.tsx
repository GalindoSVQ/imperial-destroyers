import { MENU } from 'constants/menu';
import { Logo, MenuWrapper, NavLink } from './Menu.style';
import DV from 'assets/icons/dv.svg';
import { Aircraft, Home, People, Planet, Train } from 'assets/icons';

export const menuRoutes = [
	{
		icon: <Home />,
		path: MENU.HOME.PATH,
		title: MENU.HOME.LABEL,
		target: '_self',
		rel: '',
	},
	{
		icon: <Planet />,
		path: MENU.PLANETS.PATH,
		title: MENU.PLANETS.LABEL,
		target: '_self',
		rel: '',
	},
	{
		icon: <Aircraft />,
		path: MENU.STARSHIPS.PATH,
		title: MENU.STARSHIPS.LABEL,
		target: '_self',
		rel: '',
	},
	{
		icon: <People />,
		path: MENU.PEOPLE.PATH,
		title: MENU.PEOPLE.LABEL,
		target: '_self',
		rel: '',
	},
	{
		icon: <Train />,
		path: MENU.VEHICLES.PATH,
		title: MENU.VEHICLES.LABEL,
		target: '_self',
		rel: '',
	},
];

export const Menu = () => (
	<MenuWrapper>
		<Logo src={DV} alt="" />
		<nav>
			<ul>
				{menuRoutes.map((link) => (
					<li key={link.path}>
						<NavLink
							to={link.path}
							title={link.title}
							target={link.target}
							rel={link.rel}
						>
							{link.icon}
							{link.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	</MenuWrapper>
);
