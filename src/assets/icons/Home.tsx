import { SVGProps } from 'react';

const Home = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
		<path
			style={{
				fill: 'none',
				stroke: 'currentColor',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
			}}
			d="M.5 7 7 .5 13.5 7m-11 1.5v5h9v-5"
			transform="scale(3.42857)"
		/>
	</svg>
);

export { Home };
