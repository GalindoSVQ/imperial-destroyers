import { ComponentType, PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/globalStyle';

const AllTheProviders = ({ children }: PropsWithChildren<{}>) => (
	<ThemeProvider theme={theme}>
		<>{children}</>
	</ThemeProvider>
);

const renderWithProviders = (ui: ReactElement, options?: RenderOptions) =>
	render(ui, { wrapper: AllTheProviders as ComponentType, ...options });

export { renderWithProviders };
