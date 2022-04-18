import { assertEquals } from "../deps.ts";

const TOKEN = Deno.env.get("A6_BASIC_TOKEN") || null;
const ID = Deno.env.get("A6_ORG_ID") || null;
const API_TOKEN = Deno.env.get("API_TOKEN") || null;

Deno.test("test", async () => {
  if (!TOKEN) throw "missing token";
  if (!ID) throw "missing id";
  if (!API_TOKEN) throw "missing api token";
  const actual = await fetch(
    `http://localhost:4000/organizations/${ID}/permissions`,
    {
      headers: {
        authorization: API_TOKEN,
      },
    },
  );
  const expected = await fetch(
    `https://www.atos6.com/api/v1/organizations/${ID}/permissions`,
    {
      headers: {
        authorization: TOKEN,
      },
    },
  );
  const actualPermissions = await actual.json();
  const expectedBody = await expected.json();

  const expectedPermissions = {
    ...expectedBody.permissions,
  };

  assertEquals(actualPermissions, expectedPermissions);
});
