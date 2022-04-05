import { Button, Container, CardActions, CardContent, Img, Name, Description } from './Card.style';

type Props = {
	name: string;
	imgUrl: string;
	width?: number;
	description: string;
};

const Card = ({ name, description, imgUrl, width = 300 }: Props) => (
	<Container width={width}>
		<Img src={imgUrl} />
		<CardContent>
			<Name>{name}</Name>
			<Description>{description}</Description>
		</CardContent>
		<CardActions>
			<Button>Share</Button>
			<Button>Learn More</Button>
		</CardActions>
	</Container>
);

export { Card };
