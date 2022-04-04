import { SVGProps } from 'react';

const Search = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
		<g transform="scale(3.42857)">
			<circle
				cx={5.92}
				cy={5.92}
				r={5.42}
				style={{
					fill: 'none',
					stroke: 'currentColor',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
				}}
			/>
			<path
				style={{
					fill: 'none',
					stroke: 'currentColor',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
				}}
				d="M13.5 13.5 9.75 9.75"
			/>
		</g>
	</svg>
);

export { Search };
