type CallbackHandler = (
  request: Request,
  params: Record<string, string>,
) => Promise<any>;

export type Route = { pattern: URLPattern; handlers: CallbackHandler[] };

type routerConfig = {
  notFoundHandler?: (request: Request) => Promise<Response>;
};

const METHODS: Record<string, string> = {
  GET: "GET",
  HEAD: "HEAD",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  OPTIONS: "OPTIONS",
  TRACE: "TRACE",
  PATCH: "PATCH",
};

export class Router {
  private routes: Record<
    string,
    Array<{ pattern: URLPattern; handlers: CallbackHandler[] }>
  > = {};
  settings: routerConfig = {};
  constructor() {
    for (const m in METHODS) {
      this.routes[METHODS[m]] = [];
    }
  }

  listAll() {
    return Object.keys(this.routes)
      .map((method) =>
        this.routes[method].map((route) => ({
          method,
          pathname: route.pattern.pathname.replace(/\(.*?\)/g, ""),
        }))
      )
      .filter((array) => array.length > 0)
      .flat()
      .filter((route) => route.method !== "OPTIONS");
  }

  private add(method: string, pathname: string, handlers: CallbackHandler[]) {
    this.routes[method].push({
      pattern: new URLPattern({ pathname }),
      handlers,
    });
  }

  config(settings: routerConfig) {
    if (settings.notFoundHandler) {
      this.settings.notFoundHandler = settings.notFoundHandler;
    }
  }

  get(pathname: string, ...handlers: CallbackHandler[]) {
    this.add(METHODS.GET, pathname, handlers);
  }

  head(pathname: string, ...handlers: CallbackHandler[]) {
    this.add(METHODS.HEAD, pathname, handlers);
  }

  post(pathname: string, ...handlers: CallbackHandler[]) {
    this.add(METHODS.POST, pathname, handlers);
  }

  put(pathname: string, ...handlers: CallbackHandler[]) {
    this.add(METHODS.PUT, pathname, handlers);
  }

  delete(pathname: string, ...handlers: CallbackHandler[]) {
    this.add(METHODS.DELETE, pathname, handlers);
  }

  options(pathname: string, ...handlers: CallbackHandler[]) {
    this.add(METHODS.OPTIONS, pathname, handlers);
  }

  trace(pathname: string, ...handlers: CallbackHandler[]) {
    this.add(METHODS.TRACE, pathname, handlers);
  }

  patch(pathname: string, ...handlers: CallbackHandler[]) {
    this.add(METHODS.PATCH, pathname, handlers);
  }

  route(req: Request): Route | null {
    for (const r of this.routes[req.method]) {
      if (r.pattern.test(req.url)) {
        return r;
      }
    }
    return null;
  }
}
