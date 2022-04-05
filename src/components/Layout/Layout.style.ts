import styled from 'styled-components';

const Content = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 100%;
	color: ${({ theme }) => theme.colors.primary};
`;

const Main = styled.div`
	flex: 1;
	padding: ${({ theme }) => theme.spacing.paddingDesktopContent};
	background-color: ${({ theme }) => theme.colors.background};
	max-height: 100%;

	@media ${({ theme }) => theme.device.mobile} {
		padding-bottom: calc(${({ theme }) => theme.spacing.navBar} + 3rem);
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-flow: row nowrap;
`;

export { Content, Main, Wrapper };
