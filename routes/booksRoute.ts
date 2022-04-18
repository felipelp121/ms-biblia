import { ParamsDTO } from "../dtos/ParamsDTO.ts";
import { jsonResponse } from "../utils/jsonResponse.ts";
export const booksRoute = async (_request: Request, _params: ParamsDTO) => {
  const books = JSON.parse(Deno.readTextFileSync("./books/books.json"));
  return jsonResponse({ body: books || "Deu ruim", status: 200 });
};
