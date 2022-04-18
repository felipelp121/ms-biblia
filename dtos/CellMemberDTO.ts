import { OptionString } from "./Options.ts";

export type CellMemberDTO = {
  id: number;
  user_id?: number
  full_name: OptionString;
  user_organization_connection_id: number;
  avatar_url: OptionString;
  present: boolean;
  last_four_presents: [boolean, boolean, boolean, boolean];
};
