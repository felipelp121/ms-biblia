import { ParamsDTO } from "../dtos/ParamsDTO.ts";
import { jsonResponse } from "../utils/jsonResponse.ts";
export const verseRoute = async (_request: Request, params: ParamsDTO) => {
  const version = params.version;
  const abbrev = params.abbrev;
  const chapter = params.chapter;
  const number = parseInt(params.number) - 1;
  const book = JSON.parse(
    Deno.readTextFileSync(
      `./books/${abbrev}/chapter-${chapter}-version-${version}.json`,
    ),
  );
  const verse = book.verses[number];
  return jsonResponse({ body: verse || "Deu ruim", status: 200 });
};
