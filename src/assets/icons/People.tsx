import * as React from 'react';
import { SVGProps } from 'react';

const People = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
		<g transform="scale(3.42857)">
			<circle
				cx={11}
				cy={2.5}
				r={2}
				style={{
					fill: 'none',
					stroke: 'currentColor',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
				}}
			/>
			<path
				d="M11 6.5c-2.5 0-2.5 7-2.5 7h5s0-7-2.5-7Z"
				style={{
					fill: 'none',
					stroke: 'currentColor',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
				}}
			/>
			<circle
				cx={3}
				cy={2.5}
				r={2}
				style={{
					fill: 'none',
					stroke: 'currentColor',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
				}}
			/>
			<path
				d="M3 13.5c-2.5 0-2.5-7-2.5-7h5s0 7-2.5 7Z"
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

export { People };
