import { createState } from "@hookstate/core";
import { AppState } from "./types";
import { Persistence } from "@hookstate/persistence";

export const state = createState<AppState>({
  bag: {
    items: [],
  },
  user: {
    name: "",
  },
}).attach(Persistence("pokemons-app"));
