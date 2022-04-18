export const getParams = (pattern: URLPattern, url: string) =>
  pattern.exec(url)?.pathname.groups || {};
