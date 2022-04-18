import { serve } from "./deps.ts";
import { serverHandler } from "./serverHandler.ts";

const port = +(Deno.env.get("PORT") || 4000);
console.log(port);
serve(serverHandler, { port });
