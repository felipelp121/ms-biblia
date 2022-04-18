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

const createDirs = () => {
  Deno.run({ cmd: ["mkdir", "./books"] });
  for (const index in versions) {
    Deno.run({ cmd: ["mkdir", `./books/${versions[index]}`] });
    for (const book in books) {
      Deno.run({ cmd: ["mkdir", `./books/${versions[index]}/${books[book]}`] });
    }
  }
};

const download = async () => {
  for (const version of versions) {
    for await (const book of books) {
      const downloaded = await fetch(
        `https://www.abibliadigital.com.br/api/books/${book}`,
        {
          headers: {
            "Authorization": token,
          },
        },
      );

      const body = await downloaded.json();
      await Deno.writeTextFile(
        `./books/${version}/${book}/comment.json`,
        JSON.stringify(body),
      ).then(() => {
        console.log(`Downloaded: ${version}/${book}/comment.json`);
      });

      const chaptersAmount = body.chapters;
      for (let index = 1; index <= chaptersAmount; index++) {
        const chapter = await fetch(
          `https://www.abibliadigital.com.br/api/verses/${version}/${book}/${index}`,
          {
            headers: {
              "Authorization": token,
            },
          },
        );

        const bodyChapter = await chapter.json();

        await Deno.writeTextFile(
          `./books/${version}/${book}/chapter_${index}.json`,
          JSON.stringify(bodyChapter),
        ).then(() => {
          console.log(`Downloaded: ${version}/${book}/chapter_${index}.json`);
        });
      }
    }
  }
};

const booksInfo = async () => {
  const info = await fetch(
    "https://www.abibliadigital.com.br/api/books",
    {
      headers: {
        "Authorization": token,
      },
    },
  );

  const body = await info.json();

  await Deno.writeTextFile("./books/books.json", JSON.stringify(body)).then(
    () => {
      console.log("Downloaded: books.json");
    },
  );
};

createDirs();
await download();
await booksInfo();
