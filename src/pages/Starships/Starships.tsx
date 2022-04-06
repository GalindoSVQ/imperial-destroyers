import { capitalize, getImageUrl, getItemsPerPage, starshipsResponseBuilder } from 'utils';
import { Card, Search, Select } from 'components';
import { useSearchStarships, useStarships } from './hooks';
import { STARSHIP_CATEGORIES } from 'constants/starships';
import { Interactions } from 'styles';
import { Pagination, Section } from './Starships.style';
import { useCounter } from 'hooks';

const Starships = () => {
	const { count: page, increment: incrementPage, decrement: decrementPage } = useCounter(1);
	const { selectedCategory, fetchError, fetchLoading, fetchStarships, setSelectedCategory, totalItemsFetched } =
		useStarships(page);
	const { totalItemsSearched, searchError, searchLoading, searchStarships, searchValue, setsearchValue } =
		useSearchStarships();

	const allItemCounter = searchValue ? totalItemsSearched : totalItemsFetched;
	const { start, end } = getItemsPerPage(allItemCounter, page);
	const responses = !!searchValue ? searchStarships : fetchStarships;
	const starshipsResponse = starshipsResponseBuilder(responses, selectedCategory);

	if (fetchError || searchError) {
		return <span> Error fetching data: {fetchError?.message ?? searchError?.message} </span>;
	}

	return (
		<>
			<Interactions>
				<Search value={searchValue} onChange={setsearchValue} />
				<Select
					value={selectedCategory}
					onChange={setSelectedCategory}
					options={STARSHIP_CATEGORIES}
					mapOptionToLabel={(category) => capitalize(category)}
				/>
			</Interactions>
			{fetchLoading || searchLoading ? (
				<p>Loading data...</p>
			) : (
				<>
					<Section>
						{starshipsResponse.map((starship) => (
							<Card
								key={starship.name}
								name={starship.name}
								imgUrl={getImageUrl('starships', starship.name)}
								description={starship.manufacturer}
							/>
						))}
					</Section>
					{allItemCounter > 10 && (
						<Pagination>
							<div>
								<button onClick={decrementPage} disabled={page === 1}>
									&lt;
								</button>
								{start} to {end} of {allItemCounter} Starships
								<button
									onClick={incrementPage}
									disabled={end === allItemCounter}
								>
									&gt;
								</button>
							</div>
							<span>Page {page}</span>
						</Pagination>
					)}
				</>
			)}
		</>
	);
};

export { Starships };
