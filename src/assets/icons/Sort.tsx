import * as React from 'react';
import { SVGProps } from 'react';

const Sort = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
		<path
			style={{
				fill: 'none',
				stroke: 'currentColor',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
			}}
			d="M13.5 1.5h-6m4 4h-4m6 4h-6m4 4h-4M.5 5l2 2-2 2M5 13.5V.5"
			transform="scale(3.42857)"
		/>
	</svg>
);

export { Sort };
