import { API, APIValues } from 'constants/api';
import { useDebounce, useFetch } from 'hooks';
import { useState } from 'react';

export type Response<T> = {
	count: number;
	next: string | null;
	previous: string | null;
	results: T[];
};

function useSearch<T>(itemType: APIValues) {
	const [searchValue, setsearchValue] = useState('');
	const debouncedValue = useDebounce<string>(searchValue, 500);

	const searchState = useFetch<Response<T>>(`${API.BASE_URL}${itemType}/?search=${debouncedValue}`);
	const { data, error, loading } = searchState;

	return {
		totalItems: data?.count ?? 0,
		searchError: error,
		searchLoading: loading,
		searchResponse: data?.results ?? [],
		searchValue,
		setsearchValue,
	};
}

export { useSearch };
