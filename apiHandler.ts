import { router } from "./config/mod.ts";
import { MiddlewareApp } from "./middlewareLib/mod.ts";
import { jsonResponse } from "./utils/jsonResponse.ts";
import { notFoundRoute } from "./routes/mod.ts";
import { errorMessages } from "./config/errorMessages.ts";

export async function apiHandler(request: Request) {
  try {
    return await MiddlewareApp.run(router, request);
  } catch (err) {
    if (err === 404) {
      return notFoundRoute(request);
    } else if (typeof err === "number") {
      const body = errorMessages[`${err}`] || null;
      return jsonResponse({ body, status: err });
    }
    console.log(err);
    return jsonResponse({ body: errorMessages["500"], status: 500 });
  }
}
