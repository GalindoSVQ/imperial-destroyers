import Starship from 'models/Starship';
import { StarshipCategories } from 'utils';

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

const getImageUrl = (model: 'starships', starshipName: string) =>
	new URL(`../assets/images/${model}/${starshipName}.png`, import.meta.url).href;

const getItemsPerPage = (count: number, currentPage: number) => {
	const itemsPerPage = 10;
	const start = (currentPage - 1) * itemsPerPage + 1;
	const end = start + itemsPerPage - 1;

	return {
		start,
		end: end >= count ? count : end,
	};
};

const starshipsResponseBuilder = (starships: Starship[], currentSortBy: StarshipCategories) => {
	const enumCategories: Record<StarshipCategories, keyof Starship> = {
		'cargo capacity': 'cargo_capacity',
		crew: 'crew',
		unordered: 'url',
	};

	if (currentSortBy === 'unordered') {
		return starships;
	}

	const startshipsSorted = starships.sort((a, b) => {
		const starshipKey = enumCategories[currentSortBy];

		// TODO format field types
		return a[starshipKey] > b[starshipKey] ? -1 : 1;
	});

	return startshipsSorted;
};

export { capitalize, getImageUrl, getItemsPerPage, starshipsResponseBuilder };
