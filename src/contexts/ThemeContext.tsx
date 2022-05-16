import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React, { ReactElement } from "react";
import { theme } from "../themes";

const APP_KEY = "integrity-assignment";

const cache = createCache({ key: APP_KEY });

type ThemeContextProps = {
  children?: ReactElement;
};

export const ThemeContext: React.FC<ThemeContextProps> = ({ children }) => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </CacheProvider>
);
