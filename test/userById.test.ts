import { assertEquals } from "../deps.ts";
import { BASE_URL } from "./env.test.ts";

Deno.test("/users/:id", async () => {
  const TOKEN = Deno.env.get("TOKEN_V2");
  const ID = Deno.env.get("A6_USER_ID");
  const API_TOKEN = Deno.env.get("API_TOKEN");
  if (!API_TOKEN) throw "missing api token";
  if (!ID) throw "missing user id";
  if (!TOKEN) throw "missing token";
  const origin = await fetch(`https://www.atos6.com/api/v2/users/${ID}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "authorization": TOKEN,
    },
  });

  const data = await fetch(`${BASE_URL}/users/${ID}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "authorization": API_TOKEN,
    },
  });
  const actual = await data.json();
  const expected = await origin.json();
  assertEquals(actual, expected);
});
