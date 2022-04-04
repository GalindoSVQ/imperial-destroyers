import { SVGProps } from 'react';

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
		<g transform="scale(3.42857)">
			<circle
				cx={7}
				cy={5.5}
				r={2.5}
				style={{
					fill: 'none',
					stroke: 'currentColor',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
				}}
			/>
			<path
				d="M2.73 11.9a5 5 0 0 1 8.54 0"
				style={{
					fill: 'none',
					stroke: 'currentColor',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
				}}
			/>
			<circle
				cx={7}
				cy={7}
				r={6.5}
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

export { UserIcon };
