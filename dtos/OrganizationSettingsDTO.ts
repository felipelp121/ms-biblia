import { OptionNumber, OptionString } from "./Options.ts";

export type OrganizationSettingsDTO = {
  id: OptionNumber;
  organization_id: OptionNumber;
  cell_report_type: OptionString;
  site_active: boolean;
  site_address: OptionString;
  external_accounting_manager: OptionString;
  self_registration: boolean;
  cell_report_notification_active: boolean;
};
