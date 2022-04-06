type PlanetCategories = typeof PLANET_CATEGORIES[number];
type StarshipCategories = typeof STARSHIP_CATEGORIES[number];

const PLANET_CATEGORIES = ['name', 'diameter'] as const;
const STARSHIP_CATEGORIES = ['unordered', 'cargo capacity', 'crew'] as const;

export { STARSHIP_CATEGORIES, PLANET_CATEGORIES };
export type { PlanetCategories, StarshipCategories };
