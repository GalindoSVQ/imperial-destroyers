import { PropsWithChildren } from 'react';
import { ErrorBoundary, Footer, Header, Menu, Navbar } from 'components';
import { Content, Wrapper, Main } from './Layout.style';

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
