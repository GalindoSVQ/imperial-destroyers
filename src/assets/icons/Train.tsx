import * as React from 'react';
import { SVGProps } from 'react';

const Train = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
		<g transform="scale(3.42857)">
			<rect
				x={1.5}
				y={0.5}
				width={11}
				height={11.5}
				rx={1}
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
				d="M3.5 12v1.5m7-1.5v1.5M1.5 7h11"
			/>
			<circle
				cx={4}
				cy={9.5}
				r={0.5}
				style={{
					fill: 'none',
					stroke: 'currentColor',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
				}}
			/>
			<circle
				cx={10}
				cy={9.5}
				r={0.5}
				style={{
					fill: 'none',
					stroke: 'currentColor',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
				}}
			/>
		</g>
	</svg>
);

export default Train;
