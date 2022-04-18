import * as routes from "../routes/mod.ts";
import { MiddlewareApp } from "../middlewareLib/mod.ts";

export const router = MiddlewareApp.init();

router.config({
  notFoundHandler: routes.notFoundRoute,
});

router.options("/*", routes.optionsRoute); // CORS
router.get("/", routes.listRoutes);

//books
router.get("/books", routes.booksRoute);
router.get("/books/:abbrev", routes.bookRoute);

//chapter
router.get("/chapter/verses/:version/:abbrev/:chapter", routes.chapterRoute);

//verse
router.get(
  "/verses/:version/:abbrev/:chapter/:number",
  routes.verseRoute,
);
router.get("/verses/random/:version/:abbrev", routes.randomVerseBookRoute);
router.get("/verses/random/:version", routes.randomVerseRoute);

//versions
router.get("/versions", routes.versionsRoute);
