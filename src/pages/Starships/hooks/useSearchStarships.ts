import { API } from 'constants/api';
import { useDebounce, useFetch } from 'hooks';
import Starship, { StarshipResponse } from 'models/Starship';
import { useEffect, useState } from 'react';

export function useSearchStarships() {
	const [searchValue, setsearchValue] = useState('');
	const debouncedValue = useDebounce<string>(searchValue, 500);

	const searchState = useFetch<StarshipResponse>(`${API.BASE_URL}${API.STARSHIPS}?search=${debouncedValue}`);
	const { data, error, loading } = searchState;

	const [searchStarships, setSearchStarships] = useState<Starship[]>([]);

	useEffect(() => {
		data && setSearchStarships(data.results);
	}, [data]);

	return {
		totalItemsSearched: data?.count ?? 0,
		searchError: error,
		searchLoading: loading,
		searchStarships,
		searchValue,
		setsearchValue,
	};
}
