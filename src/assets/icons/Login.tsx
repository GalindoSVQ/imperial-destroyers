import { SVGProps } from 'react';

const Login = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
		<path
			style={{
				fill: 'none',
				stroke: 'currentColor',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
			}}
			d="M13.5 7h-8m2-2-2 2 2 2"
			transform="scale(3.42857)"
		/>
		<path
			d="M12.48 10.5a6.5 6.5 0 1 1 0-7"
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

export { Login };
