import React, { ReactElement } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { ProfileMenu } from "../elements";

type HeaderProps = {
  children?: ReactElement;
};

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      <Box width={400} textAlign="left">
        <ProfileMenu />
      </Box>
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
      <Box width={400} textAlign="right">
        {children}
      </Box>
    </Box>
  );
};
