import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import { Box } from "@mui/material";
import { PaginationControls } from "../elements";
import { PokemonsList } from "../elements";
import { useScopedDowngradedStateValue, useSimpleSearch } from "../hooks";
import { useBag } from "../../state/hooks";
import { Header } from "./Header";
import { SearchInput } from "../elements/SearchInput";
import { useTypesQuery } from "../queries/useTypesQuery";
import { MultipleSelectCheckmarks } from "./MultipleSelectCheckmarks";
import { useRemoveItemFromBag } from "./hooks";

import "../../App.css";

const defaultRowsPerPage = 20;

export const Bag: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKey, setSearchKey] = useState("");
  const bag = useScopedDowngradedStateValue(useBag());

  const { data, isLoading } = useTypesQuery();

  const types = useMemo(() => {
    if (isLoading) return [];

    return data?.results.map((type) => type.name);
  }, [data, isLoading]);

  const items = useSimpleSearch(bag.items, searchKey);

  const removeItemFromBagHandler = useRemoveItemFromBag();

  const totalPages = useMemo(() => {
    return Math.ceil(items.length / defaultRowsPerPage);
  }, [items]);

  const handleChangePage = useCallback((event: Object, page: number) => {
    setCurrentPage(page);
  }, []);

  const currentPageFilteredItems = useMemo(() => {
    const endIndex = currentPage * defaultRowsPerPage;

    return items ? items.slice(endIndex - defaultRowsPerPage, endIndex) : [];
  }, [items, currentPage]);

  const handleChangeSearchKey = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setSearchKey(event.target.value);
    },
    []
  );

  return (
    <Box height="100%">
      <Header>
        <Box display="flex" alignItems="end" columnGap={2}>
          <MultipleSelectCheckmarks values={types} />
          <SearchInput onChange={handleChangeSearchKey} />
        </Box>
      </Header>

      <PaginationControls
        totalCount={bag.items.length}
        label="Pokemons"
        rowsPerPage={defaultRowsPerPage}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handleChangePage}
      />

      <PokemonsList
        items={currentPageFilteredItems ?? []}
        removeFromBag={removeItemFromBagHandler}
      />
    </Box>
  );
};
