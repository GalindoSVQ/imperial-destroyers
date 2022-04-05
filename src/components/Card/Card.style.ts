import styled from 'styled-components';

const Container = styled.article<{ width: number }>`
	display: flex;
	flex-flow: column nowrap;
	width: ${({ width }) => width}px;
	height: 280px;
	box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
		0px 1px 3px 0px rgba(0, 0, 0, 0.12);
	background-color: ${({ theme }) => theme.colors.backgroundCard};
	color: ${({ theme }) => theme.colors.light300};

	@media ${({ theme }) => theme.device.mobile} {
		width: 100%;
	}
`;

const Img = styled.div<{ src?: string }>`
	background-color: ${({ theme }) => theme.colors.light100};
	${({ src }) => src && `background-image: url(${src});`}
	background-position: center;
	background-size: cover;
	width: 100%;
	height: 7rem;

	@media ${({ theme }) => theme.device.mobile} {
		height: 9rem;
	}
`;

const CardContent = styled.div`
	padding: 0.5rem;
`;

const CardActions = styled.div`
	margin-top: 1rem;
	display: flex;
	gap: 1rem;
`;

const Name = styled.h3`
	font-weight: ${({ theme }) => theme.fonts.medium};
	font-size: 1.5rem;
	line-height: 1.334;
	letter-spacing: 0em;
	margin-bottom: 0.35em;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const Description = styled.p`
	margin: 0;
	font-weight: ${({ theme }) => theme.fonts.light};
	font-size: 0.875rem;
	line-height: 1.43;
	color: ${({ theme }) => theme.colors.light100};
	overflow: hidden;
	text-overflow: ellipsis;
`;

const Button = styled.button`
	background-color: transparent;
	outline: 0;
	border: 0;
	padding: 0;
	cursor: pointer;
	text-decoration: none;
	font-weight: 500;
	font-size: 0.8125rem;
	line-height: 1.75;
	text-transform: uppercase;
	padding: 4px 5px;
	color: ${({ theme }) => theme.colors.apricot};
`;

export { Button, Container, CardActions, CardContent, Img, Name, Description };
