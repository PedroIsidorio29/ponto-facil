import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { Route } from "@/routes/index";
import { StrictMode } from "react";
import "@/style/tailwind.css";
import "@/style/index.scss";


function App() {
  const theme = createTheme({
    colorSchemes: {
      light: { palette: { mode: "light", primary: { main: "#019b18ff" } } },
      dark: true
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
