import styled from 'styled-components';

export const Container = styled.div`
	@media ${({ theme }) => theme.device.mobile} {
		background-color: ${({ theme }) => theme.colors.background};
		display: flex;
		flex-flow: row nowrap;
		width: 100vw;
		height: 100vh;
		justify-content: center;
		align-items: center;
	}

	@media ${({ theme }) => theme.device.desktop} {
		display: none;
	}
`;
