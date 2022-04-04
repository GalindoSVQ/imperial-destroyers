import { SVGProps } from 'react';

const Aircraft = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
		<path
			d="M12.75 2.75h-1.61a.49.49 0 0 0-.48.38l-.51 2-5-1a3.69 3.69 0 0 0-4.4 3.59 1 1 0 0 0 1 1h4.4l1 1.58a2 2 0 0 0 1.68.92h1.1a.5.5 0 0 0 .44-.73l-.88-1.74h2.76a1 1 0 0 0 1-1v-4.5a.5.5 0 0 0-.5-.5Z"
			style={{
				fill: 'none',
				stroke: 'currentColor',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
			}}
			transform="scale(3.42857)"
		/>
	</svg>
);

export { Aircraft };
