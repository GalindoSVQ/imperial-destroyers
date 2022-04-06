import { capitalize, getImageUrl, getItemsPerPage, planetsResponseBuilder, ResponseType } from 'utils';
import { Card, Search, Select } from 'components';
import { Interactions, Pagination, Section } from 'styles';
import { useCounter, useFetch, useSearch } from 'hooks';
import { API } from 'constants/api';
import { useState } from 'react';
import Planet from 'models/Planet';
import { PlanetCategories, PLANET_CATEGORIES } from 'constants/app';

function Planets() {
	const { count: page, increment, decrement } = useCounter(1);
	const [selectedCategory, setSelectedCategory] = useState<PlanetCategories>(PLANET_CATEGORIES[0]);
	const fetchState = useFetch<ResponseType<Planet>>(`${API.BASE_URL}${API.PLANETS}?page=${page}`);

	const { data, error: fetchError, loading: fetchLoading } = fetchState;
	const totalItemsFetched = data?.count ?? 0;
	const fetchResponse = data?.results ?? [];

	const { totalItems, searchError, searchLoading, searchResponse, searchValue, setsearchValue } = useSearch(
		API.PLANETS,
	);

	const allItemCounter = searchValue ? totalItems : totalItemsFetched;
	const { start, end } = getItemsPerPage(allItemCounter, page);
	const responses = !!searchValue ? (searchResponse as Planet[]) : fetchResponse;
	const planetsResponse = planetsResponseBuilder(responses, selectedCategory);

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
					options={PLANET_CATEGORIES}
					mapOptionToLabel={(category) => capitalize(category)}
				/>
			</Interactions>
			{fetchLoading || searchLoading ? (
				<p>Loading data...</p>
			) : (
				<>
					<Section>
						{planetsResponse.map((planet) => (
							<Card
								key={planet.name}
								name={planet.name}
								imgUrl={getImageUrl('planets', planet.name)}
								description={planet.climate}
							/>
						))}
					</Section>
					{allItemCounter > 10 && (
						<Pagination>
							<div>
								<button onClick={decrement} disabled={page === 1}>
									&lt;
								</button>
								{start} to {end} of {allItemCounter} Planets
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

export { Planets };
