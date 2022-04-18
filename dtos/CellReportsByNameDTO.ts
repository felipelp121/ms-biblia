import { OptionString, OptionNumber } from "./Options.ts";

export type CellReportsByNameDTO = {
  default_week: OptionString;
  current_week: OptionString;
  available_weeks: {
    week: OptionString;
    week_number_text: OptionString;
    week_days_interval: OptionString;
    year: OptionNumber;
    report_id: OptionNumber;
    sent: boolean;
  }[];
};
