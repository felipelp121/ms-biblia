import { query } from "../pg/query.ts";

console.log(await query("SELECT version()"));

alert("press [ENTER] to finish");
