import { describe, expect, it } from "vitest";
import {
  conferenceDatesLabel,
  groupPeople,
  hasAnnouncement,
  pageTitle,
} from "./site";
import type { CommitteeSection } from "@/content/types";

describe("hasAnnouncement", () => {
  it("is false for null and blank strings", () => {
    expect(hasAnnouncement(null)).toBe(false);
    expect(hasAnnouncement("")).toBe(false);
    expect(hasAnnouncement("   ")).toBe(false);
  });

  it("is true for real text", () => {
    expect(
      hasAnnouncement("Abstract submission deadline: 30 September 2026"),
    ).toBe(true);
  });
});

describe("pageTitle", () => {
  it("uses default title on home", () => {
    expect(
      pageTitle(
        null,
        "ICESF-2026 | International Conference on Engineering a Sustainable Future",
        "%s | ICESF-2026",
      ),
    ).toBe(
      "ICESF-2026 | International Conference on Engineering a Sustainable Future",
    );
  });

  it("applies the template for inner pages", () => {
    expect(
      pageTitle("Call for Papers", "DEFAULT", "%s | ICESF-2026"),
    ).toBe("Call for Papers | ICESF-2026");
  });
});

describe("groupPeople", () => {
  it("groups by section and leaves empty sections empty", () => {
    const grouped = groupPeople([
      {
        id: "1",
        name: "Example Chair",
        role: "Conference Chair",
        section: "chair" satisfies CommitteeSection,
        affiliation: "DHA Suffa University",
      },
    ]);
    expect(grouped.chair).toHaveLength(1);
    expect(grouped.patron).toHaveLength(0);
  });
});

describe("conferenceDatesLabel", () => {
  it("returns the conference date row", () => {
    expect(
      conferenceDatesLabel([
        { id: "abstract", label: "Abstract Submission", date: "30 September 2026" },
        { id: "conference", label: "Conference", date: "9–10 December 2026" },
      ]),
    ).toBe("9–10 December 2026");
  });
});
