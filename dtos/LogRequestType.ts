export type LogRequestType = {
  method: string
  url: string
  userAgent: string | null
  host: string | null
  cfRay: string | null
  cfConnnectingIp: string | null
  cf: IncomingRequestCfProperties
  metadata: object
  body?: unknown
}
