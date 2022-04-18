import { assertEquals } from "../deps.ts";
import { BASE_URL } from "./env.test.ts";

Deno.test("/professions", async () => {
  const TOKEN = Deno.env.get("A6_BASIC_TOKEN");
  const API_TOKEN = Deno.env.get("API_TOKEN");
  if (!API_TOKEN) throw "missing api token";
  if (!TOKEN) throw "missing token";

  const actual = await fetch(`${BASE_URL}/professions`, {
    headers: { authorization: API_TOKEN },
  });
  const expected = await fetch("https://www.atos6.com/api/v2/professions", {
    headers: { authorization: TOKEN },
  });

  assertEquals(await actual.json(), await expected.json());
});
