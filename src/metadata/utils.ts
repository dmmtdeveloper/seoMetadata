import { headers } from "next/headers";

export const getPathnameHeader = (): string => {
  const headersList = headers();
  const pathname = headersList.get("next-url") || "";
  return pathname;
};
