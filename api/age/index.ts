import type { APIContext, APIHandler } from "aleph/types.d.ts";

export const handler: APIHandler = (context: APIContext) => {
  throw new Error("GET on /api/birthdate not implemented");
};
