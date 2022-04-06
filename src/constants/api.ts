export const API = {
	BASE_URL: 'https://swapi.dev/api/',
	PLANETS: 'planets',
	PEOPLE: 'people',
	STARSHIPS: 'starships',
	VEHICLES: 'vehicles',
} as const;

type APIKeys = keyof typeof API;
type APIValues = typeof API[APIKeys];

export type { APIKeys, APIValues };
