import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useScopedDowngradedStateValue } from "./useScopedDowngradedStateValue";
import { useBag, useUser } from "../../state/hooks";

export const useSignInRedirect = () => {
  const { name } = useScopedDowngradedStateValue(useUser());
  const { items } = useScopedDowngradedStateValue(useBag());
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      navigate(items.length ? "/bag" : "/all");
    }
  }, [items.length, name, navigate]);
};
