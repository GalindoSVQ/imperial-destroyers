import { useState } from 'react';
import { Select } from 'components/Select';
import { Search } from 'components/Search';
import { Interactions } from 'styles';
import { useStarships } from './hooks/useStarships';
import { Section, Pagination } from './Starships.style';
import { Card } from 'components/Card';
import { getImageUrl } from 'utils';

const Starships = () => {
	const [searchValue, setsearchValue] = useState('');
	const {
		page,
		currentSortBy,
		data,
		decrementPage,
		error,
		incrementPage,
		loading,
		setCurrentSortBy,
		sortByValues,
		starships,
		start,
		end,
	} = useStarships();

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
				<>
					<Section>
						{starships.map((starship) => (
							<Card
								key={starship.name}
								name={starship.name}
								imgUrl={getImageUrl('starships', starship.name)}
								description={starship.manufacturer}
							/>
						))}
					</Section>
					<Pagination>
						<div>
							<button onClick={decrementPage} disabled={page === 1}>
								&lt;
							</button>
							{start} to {end} of {data?.count} Starships
							<button onClick={incrementPage} disabled={end === data?.count}>
								&gt;
							</button>
						</div>
						<span>Page {page}</span>
					</Pagination>
				</>
			)}
		</>
	);
};

export { Starships };
