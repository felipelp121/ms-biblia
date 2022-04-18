import { assertEquals } from "../deps.ts";
import { BASE_URL } from "./env.test.ts";

const TOKEN = Deno.env.get("A6_BASIC_TOKEN") || null;
const ID = Deno.env.get("A6_ORG_ID") || null;

Deno.test("cellTemplateFields: found", async () => {
  if (!TOKEN) throw "missing token";
  if (!ID) throw "missing id";

  const expected = await fetch(
    `https://www.atos6.com/api/v1/organizations/${ID}/cell_template_fields`,
    {
      headers: {
        authorization: TOKEN,
      },
    }
  );

  const actual = await fetch(
    `${BASE_URL}/organizations/${ID}/cell_template_fields`
  );

  assertEquals(await actual.json(), await expected.json());
});

Deno.test("cellTemplateFields: not found", async () => {
  const actual = await fetch(
    `${BASE_URL}/v1/organizations/-1/cell_template_fields`
  );
  const actualStatus = actual.status;
  await actual?.body?.cancel();
  assertEquals(actualStatus, 404);
});
