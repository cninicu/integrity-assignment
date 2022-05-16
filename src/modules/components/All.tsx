import React, { useCallback, useMemo, useState } from "react";
import { Box } from "@mui/material";
import { usePokemonsQuery } from "../queries";
import { PaginationControls } from "../elements";
import { PokemonsList } from "../elements";
import { Section } from "../elements";
import { Header } from "./Header";
import { useInsertItemInBag, useRemoveItemFromBag } from "./hooks";

import "../../App.css";

const defaultRowsPerPage = 20;

export const All: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: totalCount, isLoading: isLoadingTotalCount } =
    usePokemonsQuery();

  const { data, isLoading } = usePokemonsQuery({
    limit: defaultRowsPerPage,
    offset: defaultRowsPerPage * currentPage - defaultRowsPerPage,
  });

  const insertItemInBagHandler = useInsertItemInBag();
  const removeItemFromBagHandler = useRemoveItemFromBag();

  const pokemonNames = useMemo(() => {
    return (
      data?.results.map((item, index) => ({
        name: item.name,
        id: currentPage * defaultRowsPerPage - defaultRowsPerPage + index + 1,
      })) ?? []
    );
  }, [currentPage, data?.results]);

  const totalPages = useMemo(() => {
    return Math.ceil((totalCount?.count ?? 0) / 20);
  }, [totalCount?.count]);

  const handleChangePage = useCallback((event: Object, page: number) => {
    setCurrentPage(page);
  }, []);

  return (
    <Box height="100%">
      <Header />
      <PaginationControls
        rowsPerPage={defaultRowsPerPage}
        totalPages={totalPages}
        totalCount={totalCount?.count}
        label="Pokemons"
        currentPage={currentPage}
        onPageChange={handleChangePage}
        disabled={isLoadingTotalCount}
      />
      <Section isLoading={isLoading}>
        <PokemonsList
          items={pokemonNames}
          addToBag={insertItemInBagHandler}
          removeFromBag={removeItemFromBagHandler}
        />
      </Section>
    </Box>
  );
};
