import styled from 'styled-components';

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

export { Interactions };
