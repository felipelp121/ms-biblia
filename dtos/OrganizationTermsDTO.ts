import { OptionNumber, OptionString } from "./Options.ts";

export type OrganizationTermsDTO = {
  id: number;
  sub_organization_level_one: OptionString;
  sub_organization_level_two: OptionString;
  sub_organization_level_one_plural: OptionString;
  sub_organization_level_two_plural: OptionString;
  cell_singular: OptionString;
  cell_plural: OptionString;
  gender: OptionString;
  contribution_singular: OptionString;
  contribution_plural: OptionString;
  member_contributions: OptionString;
  expense_singular: OptionString;
  expense_plural: OptionString;
  super_cell_singular: OptionString;
  super_cell_plural: OptionString;
  super_cell_gender: OptionString;
};
