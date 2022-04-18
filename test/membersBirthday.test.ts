import { assertEquals } from "../deps.ts";
import { BASE_URL } from "./env.test.ts";

Deno.test("/organizations/:id/members_birthdays", async () => {
  const TOKEN = Deno.env.get("A6_BASIC_TOKEN") || null;
  const ID = Deno.env.get("A6_ORG_ID") || null;
  const API_TOKEN = Deno.env.get("API_TOKEN");
  if (!API_TOKEN) throw "missing api token";
  if (!TOKEN) throw "missing token";
  if (!ID) throw "missing id";
  const expected_data = await fetch(
    `https://www.atos6.com/api/v1/organizations/${ID}/members_birthdays`,
    {
      headers: {
        authorization: TOKEN,
      },
    },
  );
  const acutal_data = await fetch(
    `${BASE_URL}/organizations/${ID}/members_birthdays`,
    {
      headers: {
        authorization: API_TOKEN,
      },
    },
  );
  const actual = await acutal_data.json();
  const expected = await expected_data.json();

  assertEquals(actual, expected.members_birthdays);
});
