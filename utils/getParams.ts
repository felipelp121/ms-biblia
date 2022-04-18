type RequestDTO = {
  url: string;
};

export function getParams({ url }: RequestDTO) {
  const urlService = new URL(url);

  const paramsService = new URLSearchParams(urlService.search);

  const returnObject: any = {};

  for (const pair of paramsService.entries()) {
    returnObject[pair[0]] = pair[1];
  }

  return returnObject;
}
