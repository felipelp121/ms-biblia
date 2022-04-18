import { assertEquals } from "../deps.ts";
import { BASE_URL } from "./env.test.ts";
import { readMock } from "../utils/readMock.ts";

const path = `${BASE_URL}/v2/organizations/1/cells/1/weekly_reports_by_name`;
const data = {
  cell_weekly_reports_by_name_create: {
    present_members: [93512, 93513],
    week: "2022-01-17",
    visitors: [806885],
    cell_weekly_report_template_field_3405: "2",
    cell_weekly_report_template_field_3406: 0.02,
    cell_weekly_report_template_field_3407: "2",
    cell_weekly_report_template_field_3408: "2",
    cell_weekly_report_template_field_3592: 551,
    cell_weekly_report_template_field_3593: "2",
    comments: "2",
    no_meeting: false,
  },
};

const newRequest = async (path: string, data: object) => {
  const init = {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(data),
  };

  const myRequest = new Request(path, init);
  const response = await fetch(myRequest);

  return response.json();
};

Deno.test("createCellWeeklyReportsByNameOnWeek: found", async () => {
  const expected = await readMock(
    "./mock/tests/organization/CellWeeklyReportsByNameOnWeek.test.json"
  );

  const actual = await newRequest(path, data);

  assertEquals(expected, actual);
});
