import React, { ReactElement, useCallback } from "react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { useScopedDowngradedStateValue } from "../hooks";
import { useBag, useUser } from "../../state/hooks";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "../../App.css";

type HeaderProps = {
  search?: ReactElement;
};

export const Header: React.FC<HeaderProps> = ({ search }) => {
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
      py={2}
      px={2}
    >
      <Typography variant="subtitle1">
        {" "}
        Hello,{" "}
        <Typography
          component="span"
          style={{
            fontWeight: 600,
          }}
        >
          {name}
        </Typography>{" "}
      </Typography>
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
      {search}
      <Button size="small" onClick={logout} endIcon={<ExitToAppIcon />}>
        {" "}
        Logout{" "}
      </Button>
    </Box>
  );
};
