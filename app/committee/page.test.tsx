import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import * as pageModule from "./page";
import CommitteePage from "./page";
import { site } from "@/content/site";

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

  it("renders committee sections and people from site content", () => {
    expect(site.people.length).toBeGreaterThan(0);
    render(<CommitteePage />);

    expect(
      screen.queryByText("Committee members to be announced."),
    ).toBeNull();

    for (const person of site.people) {
      expect(
        screen.getAllByRole("heading", { name: person.name }).length,
      ).toBeGreaterThan(0);
    }
  });
});
