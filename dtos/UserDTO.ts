import { StatusMinisterialsDTO } from "./StatusMinisterialsDTO.ts";
import { ProfessionDTO } from "./ProfessionDTO.ts";
import { OptionNumber, OptionString } from "./Options.ts";

export type UserDTO = {
  id: number;
  full_name: OptionString;
  auth_token: OptionString;
  avatar: OptionString;
  avatar_cloudinary: OptionString;
  email: OptionString;
  document_type: OptionString;
  document_value: OptionString;
  phone_code: OptionString;
  phone: OptionString;
  cell_phone_code: OptionString;
  other_phone_code: OptionString;
  other_phone: OptionString;
  gender_type: OptionString;
  birthdate: Date;
  nickname_value: OptionString;
  age: OptionNumber;
  country: OptionString;
  country_phone_code: OptionString;
  state: OptionString;
  city: OptionString;
  street_address: OptionString;
  street_number: OptionString;
  street_extra: OptionString;
  district: OptionString;
  zipcode: OptionString;
  working: OptionString;
  work_position: OptionString;
  cover_picture_cloudinary: OptionString;
  marital_status: OptionString;
  profession_id: OptionNumber;
  profession_name: OptionString;
};

export type UserOrganizationConnectionsDTO = {
  id: number;
  kind: OptionString;
  organization_id: OptionNumber;
  identifier: OptionNumber;
  sub_organization_level_one_id: OptionNumber;
  sub_organization_level_two_id: OptionNumber;
};

export type UserStatusMinisterialsDTO = {
  name: OptionString;
  status_ministerial_id: number;
};

export type UserIdDTO = {
  id: number;
};

export type MockUser = {
  rows: UserDTO[];
};
