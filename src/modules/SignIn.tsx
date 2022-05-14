import React from "react";
import "../App.css";
import { Box, Button, TextField, Typography } from "@mui/material";

function App() {
  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column" rowGap={2}>
        <Box alignSelf="start">
          <Typography
            style={{
              fontSize: 21,
              fontWeight: 600,
            }}
          >
            Please enter your name
          </Typography>
        </Box>
        <Box width={400}>
          <TextField placeholder="name" fullWidth />
        </Box>
        <Box width={400} alignSelf="center">
          <Button variant="outlined" fullWidth>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
