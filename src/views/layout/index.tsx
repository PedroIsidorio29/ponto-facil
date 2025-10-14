import { Outlet, useNavigate } from "react-router-dom";
import Header from "./header/Header";
import { Box } from "@mui/material";
import { useEffect } from "react";

export default function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <Box>
      <Header />
      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
