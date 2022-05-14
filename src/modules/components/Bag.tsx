import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import { Box } from "@mui/material";
import { PaginationControls } from "../elements";
import { PokemonsList } from "../elements";
import { useScopedDowngradedStateValue, useSimpleSearch } from "../hooks";
import { useBag } from "../../state/hooks";
import { Header } from "./Header";
import { SearchInput } from "../elements/SearchInput";

import "../../App.css";

const defaultRowsPerPage = 20;

export const Bag: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKey, setSearchKey] = useState("");
  const bag = useScopedDowngradedStateValue(useBag());
  const setBag = useBag().set;

  const items = useSimpleSearch(bag.items, searchKey);

  const totalPages = useMemo(() => {
    return Math.ceil(items.length / defaultRowsPerPage);
  }, [items]);

  const handleChangePage = useCallback((event: Object, page: number) => {
    setCurrentPage(page);
  }, []);

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
      <Header search={<SearchInput onChange={handleChangeSearchKey} />} />
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
