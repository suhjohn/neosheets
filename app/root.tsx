import { cn } from "@/lib/utils";
import "@fontsource/inter/100-italic.css";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200-italic.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300-italic.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500-italic.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600-italic.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700-italic.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800-italic.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900-italic.css";
import "@fontsource/inter/900.css";
import '@fontsource-variable/jetbrains-mono';
import { cssBundleHref } from "@remix-run/css-bundle";
import { type LinksFunction, type LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ThemeProvider, useTheme } from "remix-themes";
import stylesheet from "~/globals.css?url";
import { themeSessionResolver } from "./sessions.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: cssBundleHref! },
  { rel: "stylesheet", href: stylesheet },
];

// Return the theme from the session storage using the loader
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );
  const [theme] = useTheme();
  return (
    <html lang="en" className={cn(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script src="https://unpkg.com/typescript@latest/lib/typescript.js" />
      </head>
      <body className="overscroll-none">
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
