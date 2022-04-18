import { assertEquals } from "../deps.ts";
import { BASE_URL } from "./env.test.ts";

Deno.test("Getting Organization Connections: organization connections found", async () => {
  const API_TOKEN = Deno.env.get("API_TOKEN");
  if (!API_TOKEN) throw "missing token";
  const TOKEN_V2 = Deno.env.get("TOKEN_V2");
  if (!TOKEN_V2) throw "missing token_v2";
  const origin = await fetch(
    `https://www.atos6.com/api/v2/user_organization_connections/autocomplete?organization_id=6277&term=Test`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "authorization": TOKEN_V2,
      },
    },
  );
  console.log(
    "🚀 ~ file: userOrganizationConnections.test.ts ~ line 19 ~ Deno.test ~ origin",
    origin,
  );

  const data = await fetch(
    `${BASE_URL}/user_organization_connections/6277/Test`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "authorization": API_TOKEN,
      },
    },
  );
  console.log(
    "🚀 ~ file: userOrganizationConnections.test.ts ~ line 31 ~ Deno.test ~ data",
    data,
  );
  const actual = await data.json();
  const expected = await origin.json();

  assertEquals(
    actual.sort((a: any, b: any) => a.id - b.id),
    expected.sort((a: any, b: any) => a.id - b.id),
  );
});

Deno.test("Getting Organization Connections: organization connections not found", async () => {
  const API_TOKEN = Deno.env.get("API_TOKEN");
  if (!API_TOKEN) throw "missing token";
  const actual = await fetch(
    `${BASE_URL}/user_organization_connections/9999999999/Test`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "authorization": API_TOKEN,
      },
    },
  );
  const actualStatus = actual.status;
  await actual?.body?.cancel();
  assertEquals(actualStatus, 404);
});
