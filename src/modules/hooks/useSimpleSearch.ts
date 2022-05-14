import { useMemo } from "react";
import { Pokemon } from "../../api-types/pokemons";

export const useSimpleSearch = (items: Pokemon[], searchKey: string) => {
  return useMemo(() => {
    return items.filter((item) => item.name.includes(searchKey)) ?? [];
  }, [items, searchKey]);
};
