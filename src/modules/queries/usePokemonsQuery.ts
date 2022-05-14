import { useQuery } from "react-query";
import { fetchPokemons } from "../../api-services/fetchPokemons";

export const POKEMONS_QUERY_KEY = "pokemons-query-key";

export type QueryParams = {
  offset: number;
  limit: number;
};

export type Pokemon = {
  name: string;
};

export type PokemonsQueryResponse = {
  results: Pokemon[];
  count: number;
};

export const usePokemonsQuery = (params?: QueryParams) => {
  return useQuery<PokemonsQueryResponse, unknown, PokemonsQueryResponse>(
    [POKEMONS_QUERY_KEY, params],
    async () => {
      const { data } = await fetchPokemons(params);

      return data;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 0,
    }
  );
};
