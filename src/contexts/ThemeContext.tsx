import createCache from "@emotion/cache";
import { CacheProvider, Global } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React, { ReactElement } from "react";
import { theme } from "../themes";
import { AppStyles } from "../themes/app-styles";

const APP_KEY = "integrity-assignment";

const cache = createCache({ key: APP_KEY });

type ThemeContextProps = {
  children?: ReactElement;
};

export const ThemeContext: React.FC<ThemeContextProps> = ({ children }) => (
  <CacheProvider value={cache}>
    <Global styles={AppStyles} />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </CacheProvider>
);
