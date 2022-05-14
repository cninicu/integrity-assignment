import React from "react";
import "./App.css";
import { Router } from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Box } from "@mui/material";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Box className="App" px={10}>
        <Router />
      </Box>
    </QueryClientProvider>
  );
}

export default App;
