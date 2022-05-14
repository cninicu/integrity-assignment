import React, { useCallback, useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Pokemon, usePokemonsQuery } from "../queries/usePokemonsQuery";
import { PaginationControls } from "../elements";
import { PokemonsList } from "../elements";
import { useBag } from "../../state/hooks";
import { useScopedDowngradedStateValue } from "../hooks";
import { Section } from "../elements";
import "../../App.css";
import { Header } from "./Header";

const defaultRowsPerPage = 20;

export const All: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: totalCount, isLoading: isLoadingTotalCount } =
    usePokemonsQuery();

  const { data, isLoading } = usePokemonsQuery({
    limit: defaultRowsPerPage,
    offset: defaultRowsPerPage * currentPage - defaultRowsPerPage,
  });

  const bag = useScopedDowngradedStateValue(useBag());
  const setBag = useBag().set;

  const totalPages = useMemo(() => {
    return Math.ceil((totalCount?.count ?? 0) / 20);
  }, [totalCount?.count]);

  const handleChangePage = useCallback(
    (event: Object, page: number) => {
      setCurrentPage(page);
    },
    [currentPage]
  );

  const addToBagHandler = useCallback(
    (pokemon: Pokemon, id: number) => {
      setBag({
        items: [...bag.items, { id, name: pokemon.name }],
      });
    },
    [bag.items, setBag]
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

  return (
    <Box height="100%">
      <Header />
      <Box display="flex" justifyContent="space-between" pb={2}>
        <PaginationControls
          rowsPerPage={defaultRowsPerPage}
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handleChangePage}
          disabled={isLoadingTotalCount}
        />
        <Typography variant="subtitle2">
          Total {totalCount?.count ?? 0} pokemons
        </Typography>
      </Box>
      <Section isLoading={isLoading}>
        <PokemonsList
          items={
            data?.results.map((item, index) => ({
              name: item.name,
              id:
                currentPage * defaultRowsPerPage -
                defaultRowsPerPage +
                index +
                1,
            })) ?? []
          }
          addToBag={addToBagHandler}
          removeFromBag={removeItemFromBagHandler}
        />
      </Section>
    </Box>
  );
};
