import { STARSHIP_CATEGORIES } from 'constants/starships';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Parameter<T extends (args: any) => any> = T extends (args: infer P) => any ? P : never;

type StarshipCategories = typeof STARSHIP_CATEGORIES[number];

export type { Parameter, StarshipCategories };
