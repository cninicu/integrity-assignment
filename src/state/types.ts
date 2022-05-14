import { Pokemon } from "../api-types/pokemons";

export type AppState = {
  bag: {
    items: Pokemon[];
  };
  user: {
    name: string;
  };
};
