import React, { PropsWithChildren } from 'react';

import { Menu } from '../Menu';
import { Content, Wrapper, Main } from './Layout.style';
import Navbar from 'components/Navbar/Navbar';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { ErrorBoundary } from 'components/ErrorBoundary';

function Layout({ children }: PropsWithChildren<{}>) {
	return (
		<Wrapper>
			<Menu />
			<Content>
				<Header />
				<ErrorBoundary>
					<Main>{children}</Main>
					<Footer />
				</ErrorBoundary>
			</Content>
			<Navbar />
		</Wrapper>
	);
}

export { Layout };
