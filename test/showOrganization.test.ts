import { assertEquals } from "../deps.ts";

const TOKEN = Deno.env.get("A6_BASIC_TOKEN") || null;
const ID = Deno.env.get("A6_ORG_ID") || null;

Deno.test("test", async () => {
  if (!ID) throw "missing id";
  const actual = await fetch(
    `http://localhost:4000/organizations/${ID}/show`,
  );
  const expected = await fetch(
    `https://www.atos6.com/api/v2/organizations/${ID}/show`,
  );
  const actualBody = await actual.json();
  const expectedBody = await expected.json();

  const { organization_terms, ...tail } = expectedBody;
  const { main_organization_term, ...terms } = organization_terms;
  const compare = { ...tail, organization_terms: terms };

  assertEquals(actualBody, compare);
});
