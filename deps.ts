// equivalente ao package.json do Node
export { serve } from "https://deno.land/std@0.122.0/http/server.ts";
export { Pool } from "https://deno.land/x/postgres@v0.15.0/mod.ts";
export * as bcrypt from "https://deno.land/x/bcrypt@v0.3.0/mod.ts";
export * as jwt from "https://deno.land/x/djwt@v2.4/mod.ts";
// Test deps
export { assertEquals } from "https://deno.land/std@0.122.0/testing/asserts.ts";
