import axios from "axios";
import { TYPES_URL } from "../utils";
import { QueryParams } from "../../api-types/pagination";

export const fetchTypes = (params?: QueryParams) => {
  return axios.get(TYPES_URL, { params });
};
