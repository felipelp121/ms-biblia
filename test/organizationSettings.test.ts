import { assertEquals } from "../deps.ts";
import { BASE_URL } from "./env.test.ts";

Deno.test("/organizations/:id/organization_settings", async () => {
  const ID = Deno.env.get("A6_ORG_ID") || null;
  const TOKEN_V2 = Deno.env.get("TOKEN_V2") || null;
  const API_TOKEN = Deno.env.get("API_TOKEN");
  if (!API_TOKEN) throw "missing api token";
  if (!TOKEN_V2) throw "missing token_v2";
  if (!ID) throw "missing id";
  const expected_data = await fetch(
    `https://www.atos6.com/api/v2/organizations/${ID}/organization_settings`,
    {
      headers: {
        authorization: TOKEN_V2,
      },
    },
  );
  const actual_data = await fetch(
    `${BASE_URL}/organizations/${ID}/organization_settings`,
    {
      headers: {
        authorization: API_TOKEN,
      },
    },
  );
  const actual = await actual_data.json();
  const expected = await expected_data.json();
  assertEquals(actual, expected);
});
