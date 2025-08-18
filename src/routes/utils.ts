import { useNavigate } from "react-router-dom";
import { AppRouteObject, routeList } from "./routeList";
import { TRouter } from "./enum";

export function useRedirect() {
  const navigate = useNavigate();

  const redirectTo = (name: TRouter, params?: Record<string, string>) => {
    const findPath = (routes: AppRouteObject[]): string | undefined => {
      for (const route of routes) {
        if (route.name === name) return route.path;
        if (route.children) {
          const childPath = findPath(route.children);
          if (childPath) return childPath;
        }
      }
    };

    let path = findPath(routeList);
    if (!path) return console.warn(`Rota "${name}" não encontrada`);

    if (params) {
      Object.keys(params).forEach((key) => {
        path = path!.replace(`:${key}`, params[key]);
      });
    }

    navigate(path);
  };

  return redirectTo;
}
