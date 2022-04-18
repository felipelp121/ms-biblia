import { CellReportDTO } from "./CellReportDTO.ts";
import { OptionString } from "./Options.ts";

export type CellReportExpanded = {
  id: number;
  name: OptionString;
  reference: OptionString;
  leader_avatar: OptionString;
  report: CellReportDTO;
};
