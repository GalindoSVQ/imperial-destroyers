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

export { capitalize, getImageUrl, getItemsPerPage };
