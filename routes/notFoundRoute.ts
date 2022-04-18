export const notFoundRoute = async (request: Request) => {
  const body = `NOT FOUND: ${request.method} ${request.url}`;

  return new Response(body, { status: 404 });
};
