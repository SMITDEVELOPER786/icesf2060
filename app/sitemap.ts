import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://icesf2026.example";
  return [
    {
      url: base,
      lastModified: new Date("2026-08-31"),
    },
  ];
}
