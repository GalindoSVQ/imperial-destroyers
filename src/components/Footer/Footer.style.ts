import styled from 'styled-components';

export const Container = styled.footer`
	background-color: ${({ theme }) => theme.colors.background};
	padding: ${({ theme }) => theme.spacing.paddingDesktopContent};
	text-align: right;
	letter-spacing: 2px;
	padding: ${({ theme }) => theme.spacing.s02};

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
