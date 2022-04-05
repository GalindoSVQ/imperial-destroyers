import { API } from 'constants/api';
import { useFetch } from 'hooks';
import useCounter from 'hooks/useCounter';
import Starship, { StarshipResponse } from 'models/Starship';
import { useEffect, useState } from 'react';
import { getItemsPerPage } from 'utils';

export const useStarships = () => {
	const { count: page, increment: incrementPage, decrement: decrementPage } = useCounter(1);
	const state = useFetch<StarshipResponse>(`${API.BASE_URL}${API.STARSHIPS}?page=${page}`);

	const { data, error, loading } = state;
	const [starships, setStarships] = useState<Starship[]>([]);

	const sortByValues = ['Crew', 'Cargo Capacity', 'Unordered'];
	const [currentSortBy, setCurrentSortBy] = useState<typeof sortByValues[number]>('Unordered');
	const { start, end } = getItemsPerPage(data?.count ?? 0, page);

	useEffect(() => {
		data && setStarships(data.results);
	}, [data]);

	return {
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
	};
};
