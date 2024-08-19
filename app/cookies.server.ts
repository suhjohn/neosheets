import { createCookie } from "@remix-run/node"; // or cloudflare/deno

export const themeCookie = createCookie("theme");

export const getTheme = async (request: Request) => {
  const cookieHeader = request.headers.get("Cookie");
  const theme = await themeCookie.parse(cookieHeader);
  return theme || "light";
};

export const setTheme = (theme: string) => {
  return themeCookie.serialize(theme);
};
