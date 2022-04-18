import { ParamsDTO } from "../dtos/ParamsDTO.ts";
import { importKey } from "../services/importKey.ts";
import { JWK_SECRET } from "../const.ts";
import { jwt } from "../deps.ts";

export const checkLogin = async (request: Request, _params: ParamsDTO) => {
  try {
    const token = request.headers.get("authorization");
    if (!token) throw new Error();

    const key = await importKey(JWK_SECRET);
    const payload = await jwt.verify(token, key);
    if (!payload) throw new Error();
  } catch (_) {
    throw 401;
  }
};
