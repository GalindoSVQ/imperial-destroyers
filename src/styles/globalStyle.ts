import { DefaultTheme } from 'styled-components';

const BASE_SPACING = '1rem';

const theme: DefaultTheme = {
	colors: {
		blue100: '#072046',
		blue200: '#004481',
		black: '#000000',
		dark10: '#010101',
		dark50: '#050505',
		dark100: '#121212',
		dark200: '#666666',
		dark300: '#717171',
		light100: '#bdbdbd',
		light200: '#d3d3d3',
		light300: '#f4f4f4',
		lightGray50: '#a7a7a7',
		lightGray100: '#7d7d7d',
		white: '#ffffff',
		green: '#48ae64',
		red: '#ed6b6a',
		success: '#d9efe0',
		error: '#f4c3ca',
		warning: '#ffefcf',
	},
	fonts: {
		bold: 700,
		light: 300,
		medium: 500,
		slim: 400,
	},
	fontSize: {
		xs: '0.625rem',
		small: '0.75rem',
	},
	spacing: {
		s01: `calc(0.25 * ${BASE_SPACING})`,
		s02: `calc(0.5 * ${BASE_SPACING})`,
		s03: `calc(0.75 * ${BASE_SPACING})`,
		s04: BASE_SPACING,
		s05: `calc(1.25 * ${BASE_SPACING})`,
		s06: `calc(1.5 * ${BASE_SPACING})`,
		s07: `calc(1.75 * ${BASE_SPACING})`,
		s08: `calc(2 * ${BASE_SPACING})`,
	},
	zIndex: {
		top: 3,
		middle: 2,
		zero: 0,
	},
};

export { theme };
