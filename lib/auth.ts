import { z } from "zod";

const roleSchema = z.enum(["ADMIN", "STUDENT"]);

export type AppRole = z.infer<typeof roleSchema>;

export function getRoleFromHeaders(headers: Headers): AppRole {
  const headerRole = headers.get("x-role") ?? "STUDENT";
  return roleSchema.parse(headerRole);
}

export function assertRole(allowed: AppRole[], headers: Headers) {
  const role = getRoleFromHeaders(headers);

  if (!allowed.includes(role)) {
    throw new Error("Unauthorized role for this resource.");
  }

  return role;
}
