import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

const MenuWrapper = styled.aside`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.secondary};
	padding: 1rem 0.75rem;
	width: 100px;
	box-shadow: 10px 0px 10px 0px rgba(0, 0, 0, 0.5);

	@media ${({ theme }) => theme.device.mobile} {
		display: none;
	}
`;

const Logo = styled.img`
	margin-bottom: 32px;
	width: 100%;
`;

const NavLink = styled(BaseNavLink)`
	align-items: center;
	color: ${({ theme }) => theme.colors.light100};
	display: flex;
	flex-direction: column;
	font-size: 0.8rem;
	font-weight: 300;
	line-height: 15px;
	padding: 14px 0;
	text-align: center;
	transition: color 250ms;
	width: 100%;
	text-decoration: none;

	svg {
		margin-bottom: 10px;
		width: 30px;
	}

	&:hover,
	&.active {
		color: ${({ theme }) => theme.colors.dark100};
	}
`;

export { Logo, MenuWrapper, NavLink };
