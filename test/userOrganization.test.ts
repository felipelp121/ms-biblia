import { assertEquals } from "../deps.ts";

Deno.test("/user/organizations/", async () => {
  const TOKEN = Deno.env.get("A6_BASIC_TOKEN");
  const USER_ID = Deno.env.get("A6_USER_ID");
  const API_TOKEN = Deno.env.get("API_TOKEN") || null;
  if (!TOKEN) throw "missing token";
  if (!USER_ID) throw "missing user id";
  if (!API_TOKEN) throw "missing api token";

  const actual = await fetch(`http://localhost:4000/user/organizations/`, {
    headers: {
      authorization: API_TOKEN,
    },
  });

  const expected = await fetch(
    `https://www.atos6.com/api/v1/user/organizations/`,
    {
      headers: {
        Authorization: TOKEN,
      },
    },
  );

  const expectedBody = await expected.json();

  const compare = expectedBody.organizations.map((org: any) => {
    const { organization_terms, ...tail } = org;
    const { main_organization_term, ...terms } = organization_terms;
    return { ...tail, organization_terms: terms };
  });
  assertEquals(await actual.json(), compare);
});
