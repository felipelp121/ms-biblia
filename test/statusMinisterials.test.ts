import { assertEquals } from "../deps.ts";
import { BASE_URL } from "./env.test.ts";

Deno.test("/status_ministerials", async () => {
  const TOKEN = Deno.env.get("A6_BASIC_TOKEN");
  const API_TOKEN = Deno.env.get("API_TOKEN");
  if (!API_TOKEN) throw "missing api token";
  if (!TOKEN) throw "missing token";
  const actual = await fetch(`${BASE_URL}/status_ministerials`, {
    headers: { authorization: API_TOKEN },
  });
  const actualBody = await actual.json();

  const expected = await fetch(
    `https://www.atos6.com/api/v2/status_ministerials`,
    { headers: { authorization: TOKEN } },
  );
  const expectedBody = await expected.json();

  assertEquals(actualBody, expectedBody);
});
