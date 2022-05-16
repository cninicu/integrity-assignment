import React, { ChangeEvent } from "react";
import { Box, Input } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";

type SearchInputProps = {
  onChange: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
};

export const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Box width={200}>
        <Input
          fullWidth
          startAdornment={<SearchIcon />}
          placeholder="search"
          onChange={onChange}
        />
      </Box>
    </Box>
  );
};
