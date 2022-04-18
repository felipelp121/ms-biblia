import { router } from "./routes/mod.ts";

// deno run --allow-write --allow-run docs.ts ./path/to/output.json

let file = Deno.args[0] || "./docs.json";
const arr = file.split(".");

if (arr[arr.length - 1] !== "json") {
  file += ".json";
}

Deno.writeTextFileSync(file, JSON.stringify(router.listAll()));

const child = Deno.run({ cmd: ["deno", "fmt", file] });

await child.status();
