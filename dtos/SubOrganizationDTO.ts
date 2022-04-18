import { OptionNumber, OptionString } from "./Options.ts";

export type SubOrganizationDTO = {
  id: number;
  name: OptionString;
  country: OptionString;
  state: OptionString;
  city: OptionString;
  zipcode: OptionString;
  street_address: OptionString;
  street_number: OptionString;
  street_extra: OptionString;
  district: OptionString;
  category: OptionString;
  phone_code: OptionString;
  phone: OptionString;
  cell_phone_code: OptionString;
  cell_phone: OptionString;
  website: OptionString;
  latitude: OptionNumber;
  longitude: OptionNumber;
  text: OptionString;
  cover_picture: OptionString;
  avatar_url: OptionString;
  leader_member_full_name: OptionString;
  sub_organizations_number: BigInt;
};
