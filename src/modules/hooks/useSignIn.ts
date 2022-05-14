import { useCallback } from "react";
import { useUser } from "../../state/hooks";

export const useSignIn = () => {
  const setUser = useUser().set;

  return useCallback(
    (name: string) => {
      setUser({ name });
    },
    [setUser]
  );
};
