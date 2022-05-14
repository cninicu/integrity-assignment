import { useQuery } from "react-query";
import { fetchPokemons } from "../../api-services/pokemons";
import { PokemonsQueryResponse } from "../../api-types/pokemons";
import { QueryParams } from "../../api-types/pagination";

export const POKEMONS_QUERY_KEY = "pokemons-query-key";

export const usePokemonsQuery = (params?: QueryParams) => {
  return useQuery<PokemonsQueryResponse, unknown, PokemonsQueryResponse>(
    [POKEMONS_QUERY_KEY, params],
    async () => {
      const { data } = await fetchPokemons(params);

      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};
