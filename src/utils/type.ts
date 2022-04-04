// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Parameter<T extends (args: any) => any> = T extends (args: infer P) => any ? P : never;
