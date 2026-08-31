import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import * as pageModule from "./page";
import CommitteePage from "./page";
import { site } from "@/content/site";
import { COMMITTEE_SECTIONS } from "@/lib/site";

describe("Committee page", () => {
  it("exports metadata title Committee", () => {
    expect(pageModule.metadata).toEqual({ title: "Committee" });
  });

  it("renders PageHero with conference kicker", () => {
    render(<CommitteePage />);
    expect(screen.getByText(site.conference.shortName)).toHaveClass("kicker");
    expect(
      screen.getByRole("heading", { level: 1, name: "Committee" }),
    ).toBeInTheDocument();
  });

  it("shows a single announcement when people are empty and invents no names", () => {
    expect(site.people).toHaveLength(0);
    render(<CommitteePage />);

    expect(
      screen.getAllByText("Committee members to be announced."),
    ).toHaveLength(1);

    for (const section of COMMITTEE_SECTIONS) {
      expect(
        screen.queryByRole("heading", { level: 2, name: section.heading }),
      ).toBeNull();
    }

    expect(screen.queryByRole("list")).toBeNull();
  });
});
