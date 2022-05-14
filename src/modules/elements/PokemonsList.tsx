import React, { useCallback } from "react";
import "../../App.css";
import { Box, Button, List, ListItem, Paper, Typography } from "@mui/material";
import { Pokemon } from "../queries/usePokemonsQuery";
import { useBag } from "../../state/hooks";
import { useScopedDowngradedStateValue } from "../hooks";

type PokemonsListProps = {
  items: any[];
  removeFromBag: (id: number) => void;
  addToBag?: (pokemon: Pokemon, id: number) => void;
};

export const PokemonsList: React.FC<PokemonsListProps> = ({
  items,
  addToBag,
  removeFromBag,
}) => {
  const bag = useScopedDowngradedStateValue(useBag());

  const itemIsAdded = useCallback(
    (id: number) => {
      return bag.items.findIndex((item) => item.id === id) >= 0;
    },
    [bag.items]
  );

  return (
    <List>
      {items?.map(({ id, name }) => (
        <ListItem key={id}>
          <Paper
            elevation={3}
            style={{
              width: "100%",
              height: "50px",
            }}
          >
            <Box
              display="flex"
              px={2}
              height="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  variant="subtitle2"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  ID: {id}
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  name: {name}
                </Typography>
              </Box>
              {itemIsAdded(id) ? (
                <Button
                  style={{
                    backgroundColor: "red",
                  }}
                  variant="contained"
                  size="small"
                  onClick={() => removeFromBag(id)}
                >
                  Remove
                </Button>
              ) : (
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => addToBag?.({ name }, id)}
                >
                  Add
                </Button>
              )}
            </Box>
          </Paper>
        </ListItem>
      ))}
    </List>
  );
};
