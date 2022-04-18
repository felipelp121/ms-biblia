import { ParamsDTO } from "../dtos/ParamsDTO.ts";

export const optionsRoute = async (request: Request, params: ParamsDTO) => {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods":
        "GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD, CONNECT, TRACE",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Max-Age": "86400",
      "Content-Length": "0",
    },
  });
};
