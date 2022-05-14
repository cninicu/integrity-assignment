import { useState } from "@hookstate/core";
import { state } from "./state";

export const useBag = () => {
  return useState(state.bag);
};

export const useUser = () => {
  return useState(state.user);
};
