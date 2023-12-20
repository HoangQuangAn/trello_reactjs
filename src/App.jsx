import "./App.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import Typography from "@mui/material/Typography";
import {
  useColorScheme,
} from "@mui/material/styles";

function App() {
  return (
    <>
      <ModeToggle/>
        <Typography variant="h1" component="h2">
          SCBX
        </Typography>

        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <AddAlertIcon></AddAlertIcon>
        </Stack>
    </>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}
export default App;
