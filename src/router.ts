import { useEffect, useState } from "react";

const PROJECT_PREFIX = "#/projects/";

export const HOME_HREF = "#/";

export const projectHref = (id: string) =>
  `${PROJECT_PREFIX}${encodeURIComponent(id)}`;

export type Route =
  | { name: "home"; section: string | null }
  | { name: "project"; id: string };

function parse(hash: string): Route {
  if (hash.startsWith(PROJECT_PREFIX)) {
    return {
      name: "project",
      id: decodeURIComponent(hash.slice(PROJECT_PREFIX.length)),
    };
  }
  const section = hash.replace(/^#\/?/, "");
  return { name: "home", section: section || null };
}

let homeScrollY: number | null = null;

/** Scroll position of the home page when the visitor last left it for a project page. */
export const getHomeScrollY = () => homeScrollY;

export function useHashRoute() {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash));

  useEffect(() => {
    let current = parse(window.location.hash);
    const onChange = () => {
      const next = parse(window.location.hash);
      // The home page is still in the DOM here, so its scroll position is accurate.
      if (current.name === "home" && next.name === "project") {
        homeScrollY = window.scrollY;
      }
      current = next;
      setRoute(next);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}
