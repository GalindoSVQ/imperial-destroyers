import { Sort } from 'assets/icons';
import { ChangeEvent, useCallback } from 'react';
import { Container, SelectElement } from './Select.style';

type Props = {
	options: string[];
	onChange: (value: string) => void;
	selected: string;
};

const Select = ({ options, onChange, selected }: Props) => {
	const changeMonthHandler = useCallback(
		(event: ChangeEvent<HTMLSelectElement>) => {
			onChange(event.target.value);
		},
		[onChange],
	);

	return (
		<Container>
			<Sort />
			<SelectElement name="select" onChange={changeMonthHandler} value={selected}>
				{options.map((option) => (
					<option key={option} value={option.toLocaleLowerCase()}>
						{option}
					</option>
				))}
			</SelectElement>
		</Container>
	);
};

export { Select };
