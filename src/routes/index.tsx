import { BrowserRouter, useRoutes } from "react-router-dom";
import { routeList } from "@/routes/routeList";

function AppRoutes() {
  return useRoutes(routeList);
}

export function Route() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}
export default Route;
