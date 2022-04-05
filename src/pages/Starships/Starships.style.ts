import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: ${({ theme }) => theme.spacing.paddingDesktopContent};
	background-color: ${({ theme }) => theme.colors.background};
	max-height: 100%;
`;

export const Section = styled.section`
	display: flex;
	gap: ${({ theme }) => theme.spacing.s04};
	flex-flow: row wrap;
	justify-content: space-between;

	@media ${({ theme }) => theme.device.mobile} {
		justify-content: space-around;
	}
`;
