import { assertEquals } from "../deps.ts";
import { BASE_URL } from "./env.test.ts";
import { readMock } from "../utils/readMock.ts";

Deno.test("cellWeeklyReportsSentOnWeek: found", async () => {
  const expected = await readMock(
    "./mock/tests/organization/CellWeeklyReportsSentOnWeek.test.json"
  );
  const actual = await fetch(
    `${BASE_URL}/v2/organizations/v1/organizations/1/cell_weekly_reports_sent`
  );

  assertEquals(expected, await actual.json());
});

Deno.test("cellWeeklyReportsSentOnWeek: not found", async () => {
  const actual = await fetch(
    `${BASE_URL}/v2/organizations/v1/organizations/-1/cell_weekly_reports_sent`
  );
  const actualStatus = actual.status;
  await actual?.body?.cancel();
  assertEquals(actualStatus, 404);
});
