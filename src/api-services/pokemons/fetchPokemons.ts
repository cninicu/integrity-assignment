import axios from "axios";
import { POKEMONS_URL } from "../utils";
import { QueryParams } from "../../api-types/pagination";

export const fetchPokemons = (params?: QueryParams) => {
  return axios.get(POKEMONS_URL, { params });
};
