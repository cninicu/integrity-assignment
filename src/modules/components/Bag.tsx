import React, { useCallback, useMemo, useState } from "react";
import "../../App.css";
import { Box, Typography } from "@mui/material";
import { PaginationControls } from "../elements";
import { PokemonsList } from "../elements";
import { useScopedDowngradedStateValue } from "../hooks";
import { useBag } from "../../state/hooks";
import { Header } from "./Header";

const defaultRowsPerPage = 20;

export const Bag: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const bag = useScopedDowngradedStateValue(useBag());
  const setBag = useBag().set;

  const totalPages = useMemo(() => {
    return Math.ceil(bag.items.length / 20);
  }, [bag.items.length]);

  const handleChangePage = useCallback(
    (event: Object, page: number) => {
      setCurrentPage(page);
    },
    [currentPage]
  );

  const removeItemFromBagHandler = useCallback(
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

  const currentPageFilteredItems = useMemo(() => {
    const endIndex = currentPage * defaultRowsPerPage;

    return bag.items
      ? bag.items.slice(endIndex - defaultRowsPerPage, endIndex)
      : [];
  }, [bag.items, currentPage]);

  return (
    <Box height="100%">
      <Header />
      <Box display="flex" justifyContent="space-between" pb={2}>
        <PaginationControls
          rowsPerPage={defaultRowsPerPage}
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handleChangePage}
        />
        <Typography variant="subtitle2">
          Total {bag.items.length ?? 0} pokemons
        </Typography>
      </Box>
      <PokemonsList
        items={currentPageFilteredItems ?? []}
        removeFromBag={removeItemFromBagHandler}
      />
    </Box>
  );
};
