import React, { useCallback } from "react";
import { Box, ButtonBase, Tab, Tabs, Typography } from "@mui/material";
import { useScopedDowngradedStateValue } from "../hooks";
import { useBag, useUser } from "../../state/hooks";

import "../../App.css";

export const Header: React.FC = () => {
  const { name } = useScopedDowngradedStateValue(useUser());
  const setBag = useBag().set;
  const setUser = useUser().set;

  const logout = useCallback(() => {
    setUser({ name: "" });
    setBag({ items: [] });
  }, [setBag, setUser]);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={10}
      py={2}
    >
      <Typography variant="subtitle1"> Hello, {name} </Typography>
      <Box>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={window.location.pathname.replace("/", "")}
          onChange={(event, value) => {
            window.location.replace(value);
          }}
        >
          <Tab label="All" value="all" />
          <Tab label="My bag" value="bag" />
        </Tabs>
      </Box>
      <ButtonBase onClick={logout}> Logout </ButtonBase>
    </Box>
  );
};
