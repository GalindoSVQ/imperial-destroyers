import React, { PropsWithChildren } from 'react';

import { Menu } from '../Menu';
import { Content, Wrapper, Main } from './Layout.style';
import Navbar from 'components/Navbar/Navbar';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

function Layout({ children }: PropsWithChildren<{}>) {
	return (
		<Wrapper>
			<Menu />
			<Content>
				<Header />
				<Main>{children}</Main>
				<Footer />
			</Content>
			<Navbar />
		</Wrapper>
	);
}

export { Layout };
