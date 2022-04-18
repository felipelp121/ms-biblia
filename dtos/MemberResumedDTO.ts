import { OptionString } from "./Options.ts";

export type MemberResumedDTO = {
  id: number;
  user_id: number;
  email: OptionString;
  cell_phone: OptionString;
  full_name: OptionString;
  birthdate: string;
  avatar: OptionString;
  marital_status: OptionString;
  street_address: OptionString;
  state: OptionString;
};
