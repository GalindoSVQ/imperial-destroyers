import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { CSSReset, theme } from 'styles';

export const Providers = ({ children }: PropsWithChildren<{}>) => (
	<ThemeProvider theme={theme}>
		<CSSReset />
		{children}
	</ThemeProvider>
);
