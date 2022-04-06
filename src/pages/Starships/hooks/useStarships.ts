import { API } from 'constants/api';
import { STARSHIP_CATEGORIES } from 'constants/starships';
import { useFetch } from 'hooks';
import Starship, { StarshipResponse } from 'models/Starship';
import { useEffect, useState } from 'react';
import { StarshipCategories } from 'utils';

export const useStarships = (currentPage: number) => {
	const fetchState = useFetch<StarshipResponse>(`${API.BASE_URL}${API.STARSHIPS}?page=${currentPage}`);
	const { data, error, loading } = fetchState;
	const [starships, setStarships] = useState<Starship[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<StarshipCategories>(STARSHIP_CATEGORIES[0]);

	useEffect(() => {
		data && setStarships(data.results);
	}, [data]);

	return {
		selectedCategory,
		totalItemsFetched: data?.count ?? 0,
		fetchError: error,
		fetchLoading: loading,
		setSelectedCategory,
		fetchStarships: starships,
	};
};
