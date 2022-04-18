import { ParamsDTO } from "../dtos/ParamsDTO.ts";
import { jsonResponse } from "../utils/jsonResponse.ts";
export const chapterRoute = async (_request: Request, params: ParamsDTO) => {
  const version = params.version;
  const abbrev = params.abbrev;
  const chapter = params.chapter;
  const book = JSON.parse(
    Deno.readTextFileSync(
      `./books/${abbrev}/chapter-${chapter}-version-${version}.json`,
    ),
  );
  return jsonResponse({ body: book || "Deu ruim", status: 200 });
};
