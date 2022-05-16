import { useCallback } from "react";
import { useScopedDowngradedStateValue } from "../../hooks";
import { useBag } from "../../../state/hooks";

export const useRemoveItemFromBag = () => {
  const bag = useScopedDowngradedStateValue(useBag());
  const setBag = useBag().set;

  return useCallback(
    (id: number) => {
      let updatedItems = [...bag.items];

      const removeItemIndex = updatedItems.findIndex((item) => item.id === id);

      updatedItems.splice(removeItemIndex, 1);

      setBag({
        items: updatedItems,
      });
    },
    [bag.items, setBag]
  );
};
