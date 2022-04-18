import { ParamsDTO } from "../dtos/ParamsDTO.ts";
import { jsonResponse } from "../utils/jsonResponse.ts";
export const randomVerseBookRoute = async (
  _request: Request,
  params: ParamsDTO,
) => {
  const version = params.version;
  const abbrev = params.abbrev;
  const numberChapters = JSON.parse(
    Deno.readTextFileSync(
      `./books/${abbrev}/comment.json`,
    ),
  );
  const chapter = Math.floor(Math.random() * parseInt(numberChapters.chapters))
    .toString();

  const query = `./books/${abbrev}/chapter-${chapter}-version-${version}.json`;
  const book = JSON.parse(
    Deno.readTextFileSync(
      query,
    ),
  );
  const size = book.verses.length;
  const number = Math.floor(Math.random() * size);
  const verse = book.verses[number];
  return jsonResponse({ body: verse || "Deu ruim", status: 200 });
};
