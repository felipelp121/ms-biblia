import { apiHandler } from "./apiHandler.ts";

export async function serverHandler(request: Request) {
  try {
    return apiHandler(request);
  } catch (e) {
    console.error(e);
    return new Response(e.message, { status: 500 });
  }
}
