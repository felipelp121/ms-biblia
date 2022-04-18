import { LogResponseType } from "./LogResponseType"
import { LogRequestType } from "./LogRequestType"

export type LogDataType = {
  request: LogRequestType
  response: LogResponseType
  sourceKey: string
}
