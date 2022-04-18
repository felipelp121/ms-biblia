import { OptionNumber, OptionString } from "./Options.ts";

export type CellVisitorExpandedDTO = {
  id: number;
  full_name: OptionString;
  email: null;
  sub_organization_level_one_id: OptionNumber;
  sub_organization_level_one_name: OptionString;
  marital_status: OptionString;
  gender_type: OptionString;
  cell_phone_code: OptionString;
  cell_phone: OptionString;
  last_visit: OptionString;
  user_organization_connection_id: number;
};
