import React, { useCallback } from "react";
import { Fade, Menu, MenuItem } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useScopedDowngradedStateValue } from "../hooks";
import { useBag, useUser } from "../../state/hooks";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Box, IconButton, Typography } from "@mui/material";

type ProfileMenuProps = {};

export const ProfileMenu: React.FC<ProfileMenuProps> = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { name } = useScopedDowngradedStateValue(useUser());

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleClick = useCallback((event: any) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const setBag = useBag().set;
  const setUser = useUser().set;

  const logout = useCallback(() => {
    setUser({ name: "" });
    setBag({ items: [] });
  }, [setBag, setUser]);

  return (
    <React.Fragment>
      <Box display="flex" alignItems="center" columnGap={1}>
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
        <IconButton onClick={handleClick}>
          <ExpandMoreIcon />
        </IconButton>
      </Box>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={logout}>
          <Box display="flex" alignItems="center" columnGap={1}>
            <Typography variant="subtitle2" component="span">
              Logout
            </Typography>
            <ExitToAppIcon fontSize="small" />
          </Box>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};
