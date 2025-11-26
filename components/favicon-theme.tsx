"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

/**
 * Keeps the favicon in sync with the active theme.
 *
 * - Light mode  -> /favicon/dark.svg
 * - Dark mode   -> /favicon/light.svg
 *
 * We toggle the `media` attribute on the existing <link rel="icon" ...> tags
 * that are declared in app/layout.tsx so that browsers always pick the
 * correct icon regardless of system preference.
 */
export function FaviconTheme() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Derive the actual active theme: use resolvedTheme when it's "light"/"dark",
    // otherwise fall back to the <html> class applied by next-themes.
    let theme = resolvedTheme;
    if (!theme || theme === "system") {
      const root = document.documentElement;
      theme = root.classList.contains("dark") ? "dark" : "light";
    }

    const existingDynamic = document.querySelector<HTMLLinkElement>('link[rel="icon"][data-theme-favicon="true"]');

    const href = theme === "dark" ? "/favicon/light.svg" : "/favicon/dark.svg";

    if (existingDynamic) {
      if (existingDynamic.href.endsWith(href)) return;
      existingDynamic.href = href;
      return;
    }

    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href = href;
    link.setAttribute("data-theme-favicon", "true");
    document.head.appendChild(link);
  }, [resolvedTheme]);

  return null;
}
