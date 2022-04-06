// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Parameter<T extends (args: any) => any> = T extends (args: infer P) => any ? P : never;

type ResponseType<T> = {
	count: number;
	next: string | null;
	previous: string | null;
	results: T[];
};

export type { Parameter, ResponseType };
