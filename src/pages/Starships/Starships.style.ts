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
	justify-content: flex-start;

	@media ${({ theme }) => theme.device.mobile} {
		justify-content: space-around;
	}
`;

export const Pagination = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	padding: ${({ theme }) => theme.spacing.s07};
	gap: ${({ theme }) => theme.spacing.s03};

	& button {
		background-color: #ffffff;
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 0.25rem;
		padding: ${({ theme }) => theme.spacing.s02} ${({ theme }) => theme.spacing.s03};
		margin: 0 ${({ theme }) => theme.spacing.s04};
	}
`;
