import { assertEquals } from "../deps.ts";
import { BASE_URL } from "./env.test.ts";
import { readMock } from "../utils/readMock.ts";

Deno.test("cellWeeklyReportsByNameAvailable: found", async () => {
  const expected = await readMock(
    "./mock/tests/organization/CellWeeklyReportsByNameAvailable.test.json"
  );
  const actual = await fetch(
    `${BASE_URL}/v2/organizations/1/cells/1/cell_weekly_reports_by_name_available_weeks`
  );

  assertEquals(expected, await actual.json());
});

Deno.test("cellWeeklyReportsByNameAvailable: not found", async () => {
  const actual = await fetch(
    `${BASE_URL}/v2/organizations/-1/cells/-1/cell_weekly_reports_by_name_available_weeks`
  );
  const actualStatus = actual.status;
  await actual?.body?.cancel();
  assertEquals(actualStatus, 404);
});
