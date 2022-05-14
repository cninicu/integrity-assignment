export type Pokemon = {
  id?: number;
  name: string;
};

export type PokemonsQueryResponse = {
  results: Pokemon[];
  count: number;
};
