import { Downgraded, State, useHookstate } from "@hookstate/core";

export const useScopedDowngradedStateValue = <T>(s: State<T>): T => {
  return useHookstate(s).attach(Downgraded).value;
};
