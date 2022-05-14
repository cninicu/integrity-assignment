import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useScopedDowngradedStateValue } from "./useScopedDowngradedStateValue";
import { useUser } from "../../state/hooks";

export const useSignInRedirect = () => {
  const { name } = useScopedDowngradedStateValue(useUser());
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      navigate("/all");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);
};
