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
			<SelectElement name="select" onChange={changeMonthHandler}>
				{options.map((option) => {
					return (
						<option
							key={option}
							value={option.toLocaleLowerCase()}
							selected={option === selected}
						>
							{option}
						</option>
					);
				})}
			</SelectElement>
		</Container>
	);
};

export { Select };
