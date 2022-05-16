import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useCallback } from "react";
import { InputLabel } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export type MultipleSelectCheckmarksProps = {
  values?: string[];
  onChange?: (newValues: string[]) => void;
};

export const MultipleSelectCheckmarks: React.FC<
  MultipleSelectCheckmarksProps
> = ({ values = [], onChange }) => {
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

  const handleChange = useCallback(
    (event: SelectChangeEvent<typeof selectedValues>) => {
      const {
        target: { value },
      } = event;

      const updatedSelectedValues =
        typeof value === "string" ? value.split(",") : value;

      setSelectedValues(updatedSelectedValues);
      onChange?.(updatedSelectedValues);
    },
    [onChange]
  );

  return (
    <FormControl sx={{ width: 200 }}>
      <InputLabel>Type</InputLabel>

      <Select
        variant="standard"
        multiple
        value={selectedValues}
        onChange={handleChange}
        // input={<OutlinedInput size="small" placeholder="search" />}
        renderValue={(selected) => {
          return selected.length === 0 ? "" : selected.join(", ");
        }}
        MenuProps={MenuProps}
      >
        <MenuItem key="" value="Filter by value" />
        {values.map((value) => (
          <MenuItem key={value} value={value}>
            <Checkbox checked={selectedValues.indexOf(value) > -1} />
            <ListItemText primary={value} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
