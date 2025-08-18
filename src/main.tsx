import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { StrictMode } from "react";
import {Route} from "./routes/index";

import "./index.scss";

function App() {
  const theme = createTheme({
    colorSchemes: {
      dark: true,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Route />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root") as Container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
