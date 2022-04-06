import styled from 'styled-components';

const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: ${({ theme }) => theme.spacing.paddingDesktopContent};
	background-color: ${({ theme }) => theme.colors.background};
	max-height: 100%;
`;

const Interactions = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;
	gap: ${({ theme }) => theme.spacing.s08};
	height: 2.5rem;
	margin-bottom: ${({ theme }) => theme.spacing.s06};

	@media ${({ theme }) => theme.device.mobile} {
		flex-flow: row wrap;
		gap: ${({ theme }) => theme.spacing.s06};
		height: auto;
		padding: 2rem;
		justify-content: center;
	}
`;

const Section = styled.section`
	display: flex;
	gap: ${({ theme }) => theme.spacing.s04};
	flex-flow: row wrap;
	justify-content: flex-start;

	@media ${({ theme }) => theme.device.mobile} {
		justify-content: space-around;
	}
`;

const Pagination = styled.div`
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

export { Header, Interactions, Pagination, Section };
