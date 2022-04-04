import { render } from '@testing-library/react';
import { Header } from '../Header';

describe('<Header />', () => {
	test('should disrender component', () => {
		const component = render(<Header />);

		component.getByText('Imperial destroyers center');
	});
});
