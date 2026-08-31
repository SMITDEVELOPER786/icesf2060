import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import * as pageModule from "./page";
import SpeakersPage from "./page";
import { site } from "@/content/site";

describe("Speakers page", () => {
  it("exports metadata title Speakers", () => {
    expect(pageModule.metadata).toEqual({ title: "Speakers" });
  });

  it("renders PageHero and keynote speakers from site content", () => {
    expect(site.speakers.length).toBeGreaterThan(0);
    render(<SpeakersPage />);

    expect(screen.getByText(site.conference.shortName)).toHaveClass("kicker");
    expect(
      screen.getByRole("heading", { level: 1, name: "Speakers" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Keynote speakers" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: site.speakers[0].name }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Keynote speakers to be announced."),
    ).toBeNull();
  });
});
