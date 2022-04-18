import { assertEquals } from "../deps.ts";
import { BASE_URL } from "./env.test.ts";
import { readMock } from "../utils/readMock.ts";

const path = `${BASE_URL}/v2/organizations/1/cells/1/cell_visitors`;
const data = {
  visitor: {
    id: 806885,
    full_name: "Visitante Teste",
    sub_organization_level_one_id: 7893,
    email: null,
    marital_status: "not_informed",
    gender_type: "none",
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

Deno.test("createCellVisitors: found", async () => {
  const expected = await readMock(
    "./mock/tests/organization/CellVisitors.test.json"
  );

  const actual = await newRequest(path, data);

  assertEquals(expected, actual);
});
