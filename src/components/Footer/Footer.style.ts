import styled from 'styled-components';

export const Container = styled.footer`
	background-color: ${({ theme }) => theme.colors.background};
	padding: ${({ theme }) => theme.spacing.paddingDesktopContent};
	text-align: center;
	letter-spacing: 2px;

	& p {
		color: ${({ theme }) => theme.colors.light100};
	}

	& a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.lightGray100};
	}

	@media ${({ theme }) => theme.device.mobile} {
		display: none;
	}
`;
