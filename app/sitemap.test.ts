import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("lists the single home route on https://icesf2026.example", () => {
    const entries = sitemap();

    expect(entries).toHaveLength(1);
    expect(entries[0].url).toBe("https://icesf2026.example");
    expect(JSON.stringify(entries)).not.toMatch(/icisct\.com/);

    const stamp = new Date("2026-08-31").getTime();
    expect(entries[0].lastModified).toBeInstanceOf(Date);
    expect((entries[0].lastModified as Date).getTime()).toBe(stamp);
  });
});
