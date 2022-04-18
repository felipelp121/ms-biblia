import { emptyDir, emptyDirSync } from "https://deno.land/std@0.78.0/fs/mod.ts";

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBBcHIgMTQgMjAyMiAxNDo0OToxMCBHTVQrMDAwMC5mZWxpcGVsb3Blc2RldjE0QGdtYWlsLmNvbSIsImlhdCI6MTY0OTk0Nzc1MH0.fj80ocHCRf7qVKUqMTluBNeC5TPMC_oGLxh8vw1k0uw";

const books = [
  "gn",
  "ex",
  "lv",
  "nm",
  "dt",
  "js",
  "jz",
  "rt",
  "1sm",
  "2sm",
  "1rs",
  "2rs",
  "1cr",
  "2cr",
  "ed",
  "ne",
  "et",
  "job",
  "sl",
  "pv",
  "ec",
  "ct",
  "is",
  "jr",
  "lm",
  "ez",
  "dn",
  "os",
  "jl",
  "am",
  "ob",
  "jn",
  "mq",
  "na",
  "hc",
  "sf",
  "ag",
  "zc",
  "ml",
  "mt",
  "mc",
  "lc",
  "jo",
  "at",
  "rm",
  "1co",
  "2co",
  "gl",
  "ef",
  "fp",
  "cl",
  "1ts",
  "2ts",
  "1tm",
  "2tm",
  "tt",
  "fm",
  "hb",
  "tg",
  "1pe",
  "2pe",
  "1jo",
  "2jo",
  "3jo",
  "jd",
  "ap",
];

const versions = [
  "acf",
  "apee",
  "bbe",
  "kjv",
  "nvi",
  "ra",
  "rvr",
];

// emptyDir("./foo"); // returns a promise
// emptyDirSync("./foo"); // void

async function script() {
  //create folders
  //   for (let index in books) {
  //     emptyDir(`./books/${books[index]}`);
  //   }

  //create book comment and chapters

  //   for (let i in books) {
  //     (async function (index) {
  //       setTimeout(async () => {
  //         let responseBook = await fetch(
  //           `https://www.abibliadigital.com.br/api/books/${books[index]}`,
  //           {
  //             headers: {
  //               "Authorization": token,
  //             },
  //           },
  //         );
  //         let bookJson = await responseBook.json();
  //         let abbrev = books[index];
  //         await Deno.writeTextFile(
  //           `./books/${abbrev}/comment.json`,
  //           JSON.stringify(bookJson),
  //         );
  //         let bookChapter = bookJson.chapters;
  //         console.log("Capitulo:", bookChapter);
  //         console.log("Name: ", bookJson.name);
  //         console.log("INDEX: ", index, " de 43");
  //         for (let version in versions) {
  //           for (let i2 = 1; i2 <= bookChapter; i2++) {
  //             (async function (index2) {
  //               setTimeout(async () => {
  //                 let responseChapter = await fetch(
  //                   `https://www.abibliadigital.com.br/api/verses/${
  //                     versions[version]
  //                   }/${abbrev}/${index2}`,
  //                   {
  //                     headers: {
  //                       "Authorization": token,
  //                     },
  //                   },
  //                 );
  //                 let chapterJson = await responseChapter.json();
  //                 await Deno.writeTextFile(
  //                   `./books/${abbrev}/chapter-${index2}-version-${
  //                     versions[version]
  //                   }.json`,
  //                   JSON.stringify(chapterJson),
  //                 );
  //                 console.log("INDEX DENTRO: ", index2);
  //                 console.log("Version: ", versions[version]);
  //               }, i2 * 2500);
  //             })(i2);
  //           }
  //         }
  //       }, i * 100000);
  //     })(i);
  //   }

  //all books

  //   let responseAllBooks = await fetch(
  //     "https://www.abibliadigital.com.br/api/books",
  //     {
  //       headers: {
  //         "Authorization": token,
  //       },
  //     },
  //   );
  //   let allBooksJson = await responseAllBooks.json();
  //   await Deno.writeTextFile(
  //     `./books.json`,
  //     JSON.stringify(allBooksJson),
  //   );

  const data = JSON.parse(await Deno.readTextFile("./books.json"));
  console.log(data[1].name);
}

script();
