import { router } from "../config/router.ts";
import { jsonResponse } from "../utils/jsonResponse.ts";
import { ParamsDTO } from "../dtos/ParamsDTO.ts";

export const listRoutes = async (_req: Request, _params: ParamsDTO) => {
  return jsonResponse({ body: router.listAll(), status: 200 });
};
