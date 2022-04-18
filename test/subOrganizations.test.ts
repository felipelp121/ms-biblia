import { readMock } from "../utils/readMock.ts";
import { assertEquals } from "../deps.ts";

Deno.test("/organizations/:id/sub_organizations", async () => {
  const ID = Deno.env.get("A6_ORG_ID");
  if (!ID) throw "missing id";

  const expected = await fetch(
    `https://www.atos6.com/api/v2/organizations/${ID}/sub_organizations`,
  );

  const actual = await fetch(
    `http://localhost:4000/organizations/${ID}/sub_organizations`,
  );
  const actualBody = await actual.json();
  const expectedBody = await expected.json();

  assertEquals(
    actualBody.sort((a: any, b: any) => a.id - b.id),
    expectedBody.sub_organizations.sort((a: any, b: any) => a.id - b.id),
  );
});
