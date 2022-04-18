import { ParamsDTO } from "../dtos/ParamsDTO.ts";
import { jsonResponse } from "../utils/jsonResponse.ts";
export const versionsRoute = async (_request: Request, _params: ParamsDTO) => {
  const versions = JSON.parse(Deno.readTextFileSync("./books/versions.json"));
  return jsonResponse({ body: versions || "Deu ruim", status: 200 });
};
