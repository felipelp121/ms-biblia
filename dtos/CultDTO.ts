import { OptionNumber, OptionString } from "./Options.ts";

export type CultDTO = {
  id: number;
  description: OptionString;
  week_day: OptionString;
  timetable: OptionString;
};
