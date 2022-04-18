import { assertEquals } from "../deps.ts";
import { BASE_URL } from "./env.test.ts";

Deno.test("Getting User: user found", async () => {
  const TOKEN = Deno.env.get("A6_BASIC_TOKEN");
  const API_TOKEN = Deno.env.get("API_TOKEN");
  if (!API_TOKEN) throw "missing api token";
  if (!TOKEN) throw "missing token";
  const origin = await fetch(`https://www.atos6.com/api/v1/user`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "authorization": TOKEN,
    },
  });

  const data = await fetch(`${BASE_URL}/user`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "authorization": API_TOKEN,
    },
  });

  const actual = await data.json();
  const expected = await origin.json();

  assertEquals(actual, expected);
});

Deno.test("Getting User: user not found or not authorized", async () => {
  const actual = await fetch(
    `${BASE_URL}/user`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "authorization": "Basic ZmVsb3Blc4NlcnJhQGlkLnVmZi5icjpmZWxpcGUxMjM=",
      },
    },
  );
  const actualStatus = actual.status;
  await actual?.body?.cancel();
  assertEquals(actualStatus, 401);
});
