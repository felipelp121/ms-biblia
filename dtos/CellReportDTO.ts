// check struct mutability before using
import { OptionNumber, OptionString } from "./Options.ts";

export type CellReportDTO = {
  id: OptionNumber;
  week: OptionString;
  members: OptionNumber;
  visits: OptionNumber;
  comments: OptionString;
  cell_id: OptionNumber;
  created_at: OptionString;
  updated_at: OptionString;
  report_metadata: {
    "3405": OptionString;
    "3406": OptionString;
    "3407": OptionString;
    "3408": OptionString;
    "3592": OptionString;
    "3593": OptionString;
  };
  member_name: OptionString;
  no_meeting: boolean;
};
