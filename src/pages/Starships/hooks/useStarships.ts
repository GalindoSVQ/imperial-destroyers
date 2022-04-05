import { API } from 'constants/api';
import { useFetch } from 'hooks';
import Starship, { StarshipResponse } from 'models/Starship';
import { useEffect, useState } from 'react';

export const useStarships = (currentPage: number) => {
	const fetchState = useFetch<StarshipResponse>(`${API.BASE_URL}${API.STARSHIPS}?page=${currentPage}`);
	const { data: fetchData, error: fetchError, loading: fetchLoading } = fetchState;
	const [starships, setStarships] = useState<Starship[]>([]);
	const sortByValues = ['Crew', 'Cargo Capacity', 'Unordered'];
	const [currentSortBy, setCurrentSortBy] = useState<typeof sortByValues[number]>('Unordered');

	useEffect(() => {
		fetchData && setStarships(fetchData.results);
	}, [fetchData]);

	return {
		currentSortBy,
		fetchData,
		fetchError,
		fetchLoading,
		setCurrentSortBy,
		sortByValues,
		fetchStarships: starships,
	};
};
