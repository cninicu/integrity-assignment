import { useCallback } from "react";
import { useScopedDowngradedStateValue } from "../../hooks";
import { useBag } from "../../../state/hooks";
import { Pokemon } from "../../../api-types/pokemons";

export const useInsertItemInBag = () => {
  const bag = useScopedDowngradedStateValue(useBag());
  const setBag = useBag().set;

  return useCallback(
    (pokemon: Pokemon, id: number) => {
      setBag({
        items: [...bag.items, { id, name: pokemon.name }],
      });
    },
    [bag.items, setBag]
  );
};
