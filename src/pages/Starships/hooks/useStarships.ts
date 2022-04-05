import { API } from 'constants/api';
import { useFetch } from 'hooks';
import Starship, { StarshipResponse } from 'models/Starship';
import { useEffect, useState } from 'react';

export const useStarships = () => {
	const response = useFetch<StarshipResponse>(`${API.BASE_URL}${API.STARSHIPS}`);
	const { data, error, loading } = response;
	const [starships, setStarships] = useState<Starship[]>([]);

	const sortByValues = ['Crew', 'Cargo Capacity', 'Unordered'];
	const [currentSortBy, setCurrentSortBy] = useState<typeof sortByValues[number]>('Unordered');

	useEffect(() => {
		data && setStarships(data.results);
	}, [data]);

	return { starships, error, loading, sortByValues, currentSortBy, setCurrentSortBy };
};
