import { readMock } from "../utils/readMock.ts";
import { assertEquals } from "../deps.ts";
import { BASE_URL } from "./env.test.ts";

Deno.test("Unread: org found", async () => {
  const expected = readMock(
    "./mock/tests/organization/UnreadMessages.test.json"
  );
  const data = await fetch(
    `${BASE_URL}/v2/organizations/1/messages/total_unread`
  );
  const actual = await data.json();

  assertEquals(actual, expected);
});

Deno.test("Unread: org not found", async () => {
  const actual = await fetch(
    `${BASE_URL}/v2/organizations/1000/messages/total_unread`
  );
  const actualStatus = actual.status;
  await actual?.body?.cancel();
  assertEquals(actualStatus, 404);
});
