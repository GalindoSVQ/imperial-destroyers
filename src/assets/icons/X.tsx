import { SVGProps } from 'react';

const X = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
		<path
			style={{
				fill: 'none',
				stroke: 'currentColor',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
			}}
			d="m13.5.5-13 13m0-13 13 13"
			transform="scale(3.42857)"
		/>
	</svg>
);

export { X };
