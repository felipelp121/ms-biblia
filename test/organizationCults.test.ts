import { assertEquals } from "../deps.ts";
import { BASE_URL } from "./env.test.ts";

Deno.test("/organizations/:id/cults/page/:page", async () => {
  const ID = Deno.env.get("A6_ORG_ID") || null;
  if (!ID) throw "missing id";
  const actual = await fetch(
    `https://www.atos6.com/api/v2/organizations/${ID}/cults/page/1`,
  );
  const expected = await fetch(`${BASE_URL}/organizations/${ID}/cults/page/1`);

  const actualBody = await actual.json();
  const expectedBody = await expected.json();
  assertEquals(
    actualBody.cults.sort((a: any, b: any) => a.id - b.id),
    expectedBody.cults.sort((a: any, b: any) => a.id - b.id),
  );
});
