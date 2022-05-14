import React, { ReactElement } from "react";
import { Box, CircularProgress, Icon, Typography } from "@mui/material";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

type SectionProps = {
  isLoading?: boolean;
  errorMessage?: string | ReactElement;
  sectionProps?: any;
  color?: "primary" | "secondary" | "inherit";
  children?: any;
};

export const Section: React.FC<SectionProps> = ({
  isLoading = false,
  errorMessage,
  sectionProps,
  color = "primary",
  children,
}) => {
  if (isLoading)
    return (
      <Box
        {...sectionProps}
        display="flex"
        height="100%"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress color={color} size={24} />
      </Box>
    );

  if (errorMessage)
    return (
      <Box
        {...sectionProps}
        display="flex"
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Icon>
          <ErrorOutlineIcon fontSize="small" color="primary" />
        </Icon>
        <Typography variant="subtitle1">{errorMessage}</Typography>
      </Box>
    );

  return (
    <Box {...sectionProps} height="100%">
      {children}
    </Box>
  );
};
