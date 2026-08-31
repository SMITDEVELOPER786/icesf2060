import type { MetadataRoute } from "next";
import { NAV_ITEMS } from "@/lib/nav";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://icesf2026.example";
  return NAV_ITEMS.map((item) => ({
    url: `${base}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date("2026-08-31"),
  }));
}
