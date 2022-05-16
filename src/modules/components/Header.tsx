import React, { ReactElement } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { ProfileMenu } from "../elements";

import "../../App.css";

type HeaderProps = {
  search?: ReactElement;
};

export const Header: React.FC<HeaderProps> = ({ search }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={2}
      px={2}
    >
      <Box width={250} textAlign={"left"}>
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
      <Box width={250} textAlign={"right"}>
        {search}
      </Box>
    </Box>
  );
};
