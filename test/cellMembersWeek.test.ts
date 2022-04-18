import { assertEquals } from "../deps.ts";
import { BASE_URL } from "./env.test.ts";

const TOKEN = Deno.env.get("TOKEN_V2") || null;
const ID = Deno.env.get("A6_ORG_ID") || null;
const IDCELL = Deno.env.get("A6_CELL_ID") || null;

Deno.test("cellMembersWeek: found", async () => {
  if (!TOKEN) throw "missing token";
  if (!ID) throw "missing id";
  if (!IDCELL) throw "missing id cell";

  const expected = await fetch(
    `https://www.atos6.com/api/v2/organizations/${ID}/cells/${IDCELL}/cell_members.json?week=2022-01-17`,
    {
      headers: {
        authorization: TOKEN,
      },
    }
  );

  const actual = await fetch(
    `${BASE_URL}/organizations/${ID}/cells/${IDCELL}/cell_members?week=2022-01-17`
  );

  assertEquals(await actual.json(), await expected.json());
});

Deno.test("cellMembersWeek: not found", async () => {
  const actual = await fetch(
    `${BASE_URL}/v2/organizations/-1/cells/-1/cell_members`
  );
  const actualStatus = actual.status;
  await actual?.body?.cancel();
  assertEquals(actualStatus, 404);
});
