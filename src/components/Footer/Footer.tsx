import React from 'react';
import { Container } from './Footer.style';

const Footer = () => {
	return (
		<Container>
			<p>
				Handmade 🤟
				<a href="http://galindosvq.com" target="_blank" rel="noreferrer">
					{' '}
					Antonio Galindo
				</a>{' '}
				|
				<a
					href="https://github.com/galindosvq/imperial-destroyers/"
					target="_blank"
					rel="noreferrer"
				>
					{' '}
					Code
				</a>
			</p>
		</Container>
	);
};

export { Footer };
