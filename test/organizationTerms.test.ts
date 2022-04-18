import { assertEquals } from "../deps.ts";
import { BASE_URL } from "./env.test.ts";
import { readMock } from "../utils/readMock.ts";

Deno.test("Getting Organization Terms: organization terms found", async () => {
  const origin = readMock(
    "./mock/tests/organization/organizationTerms.test.json",
  );
  const data = await fetch(`${BASE_URL}/organization/6277/organization_terms`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "authorization": "Basic cGF0aWRvYmlsbHlAZ21haWwuY29tOmNuYTg2ODg=",
    },
  });
  const actual = await data.json();
  console.log(
    "🚀 ~ file: organizationTerms.test.ts ~ line 17 ~ Deno.test ~ actual",
    actual,
  );
  const expected = origin;
  console.log(
    "🚀 ~ file: organizationTerms.test.ts ~ line 19 ~ Deno.test ~ expected",
    expected,
  );

  assertEquals(actual, expected);
});

Deno.test("Getting Organization Terms: organization terms not found", async () => {
  const actual = await fetch(
    `${BASE_URL}/organization/99999999999999/organization_terms`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "authorization": "Basic cGF0aWRvYmlsbzl2Z21hcWwuP29tOmNuYTg2ODg=",
      },
    },
  );
  const actualStatus = actual.status;
  await actual?.body?.cancel();
  assertEquals(actualStatus, 500);
});
