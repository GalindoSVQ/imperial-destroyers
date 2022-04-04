import styled from 'styled-components';
import { NavLink as NavLinkMenu } from '../Menu/Menu.style';

export const NavigationBar = styled.nav`
	@media ${({ theme }) => theme.device.mobile} {
		background-color: ${({ theme }) => theme.colors.secondary};
		bottom: 0;
		box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5);
		height: ${({ theme }) => theme.spacing.navBar};
		padding: 10px 0;
		position: fixed;
		width: 100%;
		z-index: ${({ theme }) => theme.zIndex.top};

		& ul {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-around;
			height: 100%;
		}

		& li {
			display: flex;
			flex-flow: column nowrap;
			justify-content: center;
			align-items: center;

			& svg {
				width: 20px;
			}
		}
	}

	@media ${({ theme }) => theme.device.desktop} {
		display: none;
	}
`;

export const NavLink = styled(NavLinkMenu)`
	cursor: pointer;
`;
