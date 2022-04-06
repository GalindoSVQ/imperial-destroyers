import { useState } from 'react';
import { API } from 'constants/api';
import { StarshipCategories, STARSHIP_CATEGORIES } from 'constants/app';
import Starship from 'models/Starship';
import { useCounter, useFetch, useSearch } from 'hooks';
import { Card, Search, Select } from 'components';
import { capitalize, getImageUrl, getItemsPerPage, ResponseType, starshipsResponseBuilder } from 'utils';
import { Interactions, Pagination, Section } from 'styles';

function Starships() {
	const { count: page, increment, decrement } = useCounter(1);
	const [selectedCategory, setSelectedCategory] = useState<StarshipCategories>(STARSHIP_CATEGORIES[0]);
	const fetchState = useFetch<ResponseType<Starship>>(`${API.BASE_URL}${API.STARSHIPS}?page=${page}`);

	const { data, error: fetchError, loading: fetchLoading } = fetchState;
	const totalItemsFetched = data?.count ?? 0;
	const fetchResponse = data?.results ?? [];

	const { totalItems, searchError, searchLoading, searchResponse, searchValue, setsearchValue } = useSearch(
		API.STARSHIPS,
	);

	const allItemCounter = searchValue ? totalItems : totalItemsFetched;
	const { start, end } = getItemsPerPage(allItemCounter, page);
	const responses = !!searchValue ? (searchResponse as Starship[]) : fetchResponse;
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
								<button onClick={decrement} disabled={page === 1}>
									&lt;
								</button>
								{start} to {end} of {allItemCounter} Starships
								<button
									onClick={increment}
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
}

export { Starships };
