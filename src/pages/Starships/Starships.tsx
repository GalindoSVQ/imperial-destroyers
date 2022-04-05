import { Select } from 'components/Select';
import { Search } from 'components/Search';
import { Card } from 'components/Card';
import { getImageUrl, getItemsPerPage } from 'utils';
import useCounter from 'hooks/useCounter';
import { useSearchStarships, useStarships } from './hooks';
import { Interactions } from 'styles';
import { Section, Pagination } from './Starships.style';

const Starships = () => {
	const { count: page, increment: incrementPage, decrement: decrementPage } = useCounter(1);
	const { currentSortBy, fetchData, fetchError, fetchLoading, setCurrentSortBy, sortByValues, fetchStarships } =
		useStarships(page);
	const { searchData, searchError, searchLoading, searchStarships, searchValue, setsearchValue } =
		useSearchStarships();

	const data = searchValue ? searchStarships : fetchStarships;
	const allItemCounter = (searchValue ? searchData?.count : fetchData?.count) ?? 0;
	const { start, end } = getItemsPerPage(allItemCounter, page);

	if (fetchError || searchError) {
		return <span> Error fetching data: {fetchError?.message ?? searchError?.message} </span>;
	}

	return (
		<>
			<Interactions>
				<Search value={searchValue} onChange={setsearchValue} />
				<Select options={sortByValues} selected={currentSortBy} onChange={setCurrentSortBy} />
			</Interactions>
			{fetchLoading || searchLoading ? (
				<p>Loading data...</p>
			) : (
				<>
					<Section>
						{data.map((starship) => (
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
								{start} to {end} of {fetchData?.count} Starships
								<button
									onClick={incrementPage}
									disabled={end === fetchData?.count}
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
