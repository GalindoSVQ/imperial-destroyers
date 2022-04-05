import styled from 'styled-components';

export const Container = styled.form`
	align-items: center;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.radius.xs};
	box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.5);
	color: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-flow: row nowrap;
	font-weight: ${({ theme }) => theme.fonts.medium};
	gap: 0.5rem;
	max-height: 1rem;
	justify-content: flex-start;
	padding: ${({ theme }) => theme.spacing.s02} ${({ theme }) => theme.spacing.s04};
	width: 250px;
	font-size: 1rem;

	& svg {
		flex-shrink: 0;
		width: 20px;
	}

	& svg:last-child {
		margin-left: auto;
		width: 15px;
	}
`;

export const SearchInput = styled.input`
	font-size: 1rem;
	border: none;
	outline: none;

	@media ${({ theme }) => theme.device.mobile} {
		width: 80%;
	}
`;
