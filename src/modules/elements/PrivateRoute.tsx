import { Navigate } from "react-router-dom";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useUser } from "../../state/hooks";
import { useScopedDowngradedStateValue } from "../hooks";
import { useMemo } from "react";

type PrivateRouteProps = {
  component: ReactJSXElement;
};

export const PrivateRoute = ({ component }: PrivateRouteProps) => {
  const { name } = useScopedDowngradedStateValue(useUser());

  const isAuthed = useMemo(() => Boolean(name), [name]);

  if (!isAuthed) return <Navigate to="/" replace />;

  return component;
};
