import { useQuery } from "react-query";
import { QueryParams } from "../../api-types/pagination";
import { TypesQueryResponse } from "../../api-types/types";
import { fetchTypes } from "../../api-services/types";

export const TYPESS_QUERY_KEY = "types-query-key";

export const useTypesQuery = (params?: QueryParams) => {
  return useQuery<TypesQueryResponse, unknown, TypesQueryResponse>(
    [TYPESS_QUERY_KEY, params],
    async () => {
      const { data } = await fetchTypes(params);

      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};
