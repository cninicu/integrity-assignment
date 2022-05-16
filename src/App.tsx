import React from "react";
import { Router } from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Box } from "@mui/material";
import { ThemeContext } from "./contexts";

export const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeContext>
      <QueryClientProvider client={queryClient}>
        <Box px={10} height="100%">
          <Router />
        </Box>
      </QueryClientProvider>
    </ThemeContext>
  );
};
