import styled from 'styled-components';

export const Container = styled.footer`
	background-color: ${({ theme }) => theme.colors.background};
	padding: ${({ theme }) => theme.spacing.paddingDesktopContent};

	@media ${({ theme }) => theme.device.mobile} {
		display: none;
	}
`;
