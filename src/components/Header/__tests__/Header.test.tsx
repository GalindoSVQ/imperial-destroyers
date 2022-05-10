import { Header } from '../Header';
import { expect, it, describe, vi } from 'vitest';
import { render, screen } from 'utils/test-utils';

describe('<Header />', () => {
	vi.mock('react-router-dom', () => ({
		...vi.importActual('react-router-dom'),
		useLocation: () => ({
			pathname: '/pages/Planets',
		}),
	}));

	it('the title is visible', () => {
		render(<Header />);
		expect(screen.getByText(/Imperial Destroyers Center/i)).toBeInTheDocument();
	});
});
