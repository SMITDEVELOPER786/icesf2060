import { describe, expect, it } from "vitest";
import { NAV_ITEMS } from "@/lib/nav";
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("lists the six nav routes on https://icesf2026.example", () => {
    const entries = sitemap();
    const expected = NAV_ITEMS.map(
      (item) =>
        `https://icesf2026.example${item.href === "/" ? "" : item.href}`,
    );

    expect(entries).toHaveLength(6);
    expect(entries.map((entry) => entry.url)).toEqual(expected);
    expect(JSON.stringify(entries)).not.toMatch(/icisct\.com/);

    const stamp = new Date("2026-08-31").getTime();
    for (const entry of entries) {
      expect(entry.lastModified).toBeInstanceOf(Date);
      expect((entry.lastModified as Date).getTime()).toBe(stamp);
    }
  });
});
