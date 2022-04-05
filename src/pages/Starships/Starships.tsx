import { useState } from 'react';
import { Select } from 'components/Select';
import { Search } from 'components/Search';
import { Interactions } from 'styles';
import { useStarships } from './hooks/useStarships';
import { Section } from './Starships.style';
import { Card } from 'components/Card';

const Starships = () => {
	const { starships, sortByValues, error, loading, currentSortBy, setCurrentSortBy } = useStarships();
	const [searchValue, setsearchValue] = useState('');

	if (error) {
		return <div> Error: {error.message} </div>;
	}

	return (
		<>
			<Interactions>
				<Search value={searchValue} onChange={setsearchValue} />
				<Select options={sortByValues} selected={currentSortBy} onChange={setCurrentSortBy} />
			</Interactions>
			{loading ? (
				<p>Loading data...</p>
			) : (
				<Section>
					{starships.map((starship) => (
						<Card
							key={starship.name}
							name={starship.name}
							imgUrl={''}
							description={starship.manufacturer}
						/>
					))}
				</Section>
			)}
		</>
	);
};

export { Starships };
