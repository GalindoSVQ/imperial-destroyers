import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/globalStyle';
import { CSSReset } from 'styles/reset';

export const Providers = ({ children }: PropsWithChildren<{}>) => (
	<ThemeProvider theme={theme}>
		<CSSReset />
		{children}
	</ThemeProvider>
);
