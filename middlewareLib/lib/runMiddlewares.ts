import type { Route } from "./Router.ts";

export const runMiddlewares = async (
  route: Route,
  req: Request,
  params: Record<string, string>,
) => {
  const routeHandler = route.handlers.slice(route.handlers.length - 1)[0];
  const middlewares = route.handlers.slice(0, route.handlers.length - 1);

  try {
    for (const middleware of middlewares) {
      await middleware(req, params);
    }
  } catch (err) {
    throw err;
  }

  return routeHandler;
};
