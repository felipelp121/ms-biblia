type CallbackHandler = (
  request: Request,
  params: Record<string, string>
) => Promise<Response>;

type ErrorHandler = (
  request: Request,
  params: Record<string, string>,
  error: Error
) => Promise<Response>;

type routerConfig = {
  errorHandler?: ErrorHandler;
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
  private routes: Record<string, Array<any>> = {};
  private settings: routerConfig = {};
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

  private add(method: string, pathname: string, handler: CallbackHandler) {
    this.routes[method].push({
      pattern: new URLPattern({ pathname }),
      handler,
    });
  }

  config(settings: routerConfig) {
    if (settings.errorHandler) {
      this.settings.errorHandler = settings.errorHandler;
    }
    if (settings.notFoundHandler) {
      this.settings.notFoundHandler = settings.notFoundHandler;
    }
  }

  get(pathname: string, handler: CallbackHandler) {
    this.add(METHODS.GET, pathname, handler);
  }

  head(pathname: string, handler: CallbackHandler) {
    this.add(METHODS.HEAD, pathname, handler);
  }

  post(pathname: string, handler: CallbackHandler) {
    this.add(METHODS.POST, pathname, handler);
  }

  put(pathname: string, handler: CallbackHandler) {
    this.add(METHODS.PUT, pathname, handler);
  }

  delete(pathname: string, handler: CallbackHandler) {
    this.add(METHODS.DELETE, pathname, handler);
  }

  options(pathname: string, handler: CallbackHandler) {
    this.add(METHODS.OPTIONS, pathname, handler);
  }

  trace(pathname: string, handler: CallbackHandler) {
    this.add(METHODS.TRACE, pathname, handler);
  }

  patch(pathname: string, handler: CallbackHandler) {
    this.add(METHODS.PATCH, pathname, handler);
  }

  async route(req: Request): Promise<Response> {
    for (const r of this.routes[req.method]) {
      if (r.pattern.test(req.url)) {
        const params = r.pattern.exec(req.url).pathname.groups;
        try {
          return r["handler"](req, params);
        } catch (err) {
          if (this.settings.errorHandler) {
            return this.settings.errorHandler(req, params, err);
          }
          return new Response(null, { status: 500 });
        }
      }
    }
    if (this.settings.notFoundHandler) {
      return this.settings.notFoundHandler(req);
    }
    return new Response(null, { status: 404 });
  }
}
