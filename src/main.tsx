import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
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
      dark: true,
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Route />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

createRoot(document.getElementById("root") as Container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
