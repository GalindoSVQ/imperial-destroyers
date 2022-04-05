const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

const getImageUrl = (model: 'starships', starshipName: string) =>
	new URL(`../assets/images/${model}/${starshipName}.png`, import.meta.url).href;

export { capitalize, getImageUrl };
