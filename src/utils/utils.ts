import { PlanetCategories, StarshipCategories } from 'constants/app';
import Planet from 'models/Planet';
import Starship from 'models/Starship';

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

const getImageUrl = (model: 'starships' | 'planets', starshipName: string) =>
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

const planetsResponseBuilder = (starships: Planet[], currentSortBy: PlanetCategories) => {
	const enumCategories: Record<PlanetCategories, keyof Planet> = {
		name: 'name',
		diameter: 'diameter',
	};

	const startshipsSorted = starships.sort((a, b) => {
		const starshipKey = enumCategories[currentSortBy];

		return a[starshipKey] < b[starshipKey] ? -1 : 1;
	});

	return startshipsSorted;
};

export { capitalize, getImageUrl, getItemsPerPage, planetsResponseBuilder, starshipsResponseBuilder };
