import { Sort } from 'assets/icons';
import { Container, Select } from './PlanetSelect.style';

const PlanetSelect = () => {
	return (
		<Container>
			<Sort />
			<Select name="selectPlanet">
				<option value="value1">Value 1</option>
				<option value="value2" selected>
					Value 2
				</option>
				<option value="value3">Value 3</option>
			</Select>
		</Container>
	);
};

export { PlanetSelect };
