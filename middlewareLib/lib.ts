import { Router } from "./lib/Router.ts";
import { getParams } from "./lib/getParams.ts";
import { runMiddlewares } from "./lib/runMiddlewares.ts";

export const init = () => new Router();

export const run = async (router: Router, req: Request) => {
  const route = router.route(req);
  if (!route) {
    return router.settings.notFoundHandler
      ? router.settings.notFoundHandler(req)
      : new Response(null, { status: 404 });
  }
  const params = getParams(route.pattern, req.url);

  const routeHandler = await runMiddlewares(route, req, params);
  return routeHandler(req, params);
};
