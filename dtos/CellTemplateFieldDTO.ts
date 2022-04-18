import { OptionNumber, OptionString } from "./Options.ts";
import { TemplateOptionsDTO } from "./TemplateOptionsDTO.ts";

export type CellTemplateFieldDTO = {
  id: OptionNumber;
  name: OptionString;
  placeholder: OptionString;
  active: boolean;
  organization_id: OptionNumber;
  kind: OptionString;
  required: boolean;
  options: TemplateOptionsDTO[];
};
