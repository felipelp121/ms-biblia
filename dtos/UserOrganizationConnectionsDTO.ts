import { OptionNumber, OptionString } from "./Options.ts";

export type UserOrganizationConnectionsDTO = {
  id: OptionNumber;
  full_name: OptionString;
  avatar_url: OptionString;
  user_id: OptionNumber;
};

export type MockUserOrganizationConnections = {
  rows: UserOrganizationConnectionsDTO[];
};
