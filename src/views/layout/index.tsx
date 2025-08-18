import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./header/Header";

const isLoggedIn = () => true;

export default function Layout() {
  const loginPath = "/login";
  const location = useLocation();
  const logged = isLoggedIn();

  if (!logged && location.pathname !== loginPath)
    return <Navigate to={loginPath} replace />;

  if (logged && location.pathname === loginPath)
    return <Navigate to={"/home"} replace />;

  return (
    <Box>
      <Header />
      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
