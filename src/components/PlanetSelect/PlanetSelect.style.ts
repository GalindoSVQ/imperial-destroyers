import styled from 'styled-components';

export const Container = styled.div`
	align-items: center;
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	flex-flow: row nowrap;
	gap: 1rem;
	justify-content: flex-start;

	& svg {
		width: ${({ theme }) => theme.spacing.s05};
		flex-shrink: 0;
	}
`;

export const Select = styled.select`
	width: 250px;
	border-radius: ${({ theme }) => theme.radius.xs};
	box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.5);
	color: ${({ theme }) => theme.colors.secondary};
	height: 2rem;
	font-size: 1rem;
`;
