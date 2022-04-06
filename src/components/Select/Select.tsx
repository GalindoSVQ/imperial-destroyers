import { Sort } from 'assets/icons';
import { Container, SelectElement } from './Select.style';

type Allowed = string;

type Props<Value> = {
	value: Value;
	onChange: (newValue: Value) => void;
	options: readonly Value[];
	mapOptionToLabel?: (option: Value) => Allowed;
	mapOptionToValue?: (option: Value) => Allowed;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isAllowed = (v: any): v is Allowed => typeof v === 'string';

function Select<Value>({ value, onChange, options, mapOptionToLabel, mapOptionToValue }: Props<Value>) {
	const toLabel = (option: Value): Allowed => {
		if (mapOptionToLabel) {
			return mapOptionToLabel(option);
		}

		return isAllowed(option) ? option : String(option);
	};

	const toValue = (option: Value): Allowed => {
		if (mapOptionToValue) {
			return mapOptionToValue(option);
		}

		return isAllowed(option) ? option : String(option);
	};

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChange(options[e.target.selectedIndex]);
	};

	return (
		<Container>
			<Sort />
			<SelectElement value={toValue(value)} onChange={handleChange}>
				{options.map((value) => (
					<option value={toValue(value)} key={toValue(value)}>
						{toLabel(value)}
					</option>
				))}
			</SelectElement>
		</Container>
	);
}

export { Select };
