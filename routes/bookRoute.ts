import { ParamsDTO } from "../dtos/ParamsDTO.ts";
import { jsonResponse } from "../utils/jsonResponse.ts";
export const bookRoute = async (_request: Request, params: ParamsDTO) => {
  const abbrev = params.abbrev;
  const book = JSON.parse(
    Deno.readTextFileSync(`./books/${abbrev}/comment.json`),
  );
  return jsonResponse({ body: book || "Deu ruim", status: 200 });
};
