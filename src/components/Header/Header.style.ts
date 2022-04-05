import styled from 'styled-components';

const Container = styled.header`
	background-color: ${({ theme }) => theme.colors.background};
	display: flex;
	flex-flow: column nowrap;
	gap: 1rem;
	padding: ${({ theme }) => theme.spacing.paddingDesktopContent};
	padding-top: ${({ theme }) => theme.spacing.s04};

	@media ${({ theme }) => theme.device.mobile} {
		display: none;
	}
`;

const Head = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: flex-start;
`;

const User = styled.div`
	display: flex;
	flex-flow: row nowrap;
	gap: ${({ theme }) => theme.spacing.s04};

	& svg {
		width: ${({ theme }) => theme.spacing.s05};
	}
`;

const Titles = styled.div`
	display: flex;
	flex-flow: column nowrap;
	gap: ${({ theme }) => theme.spacing.s04};

	& h1 {
		font-size: ${({ theme }) => theme.fontSize.xl};
		font-weight: ${({ theme }) => theme.fonts.bold};
	}

	& h2 {
		font-size: ${({ theme }) => theme.fontSize.medium};
	}
`;

export { Container, Head, Titles, User };
