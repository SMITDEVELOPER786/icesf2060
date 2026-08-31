import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import * as pageModule from "./page";
import CallForPapersPage from "./page";
import { site } from "@/content/site";

describe("Call for Papers page", () => {
  it("exports metadata title Call for Papers", () => {
    expect(pageModule.metadata).toEqual({ title: "Call for Papers" });
  });

  it("renders PageHero with conference kicker and Call for Papers heading", () => {
    render(<CallForPapersPage />);
    expect(screen.getByText(site.conference.shortName)).toHaveClass("kicker");
    expect(
      screen.getByRole("heading", { level: 1, name: "Call for Papers" }),
    ).toBeInTheDocument();
  });

  it("lists tracks, guidelines, IEEE template note, dates, and submit CTA", () => {
    render(<CallForPapersPage />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Tracks" }),
    ).toBeInTheDocument();

    for (const track of site.tracks) {
      expect(
        screen.getByRole("heading", { name: track.title }),
      ).toBeInTheDocument();
    }

    expect(
      screen.getByRole("heading", { level: 2, name: "Guidelines" }),
    ).toBeInTheDocument();
    for (const item of site.conference.guidelines) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }

    expect(site.links.template).toBeNull();
    expect(
      screen.getByText(
        "The IEEE paper template will be posted here when available.",
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("table", { name: "Important dates" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Submit abstract — link to be announced",
      }),
    ).toBeDisabled();
    expect(screen.queryByRole("link", { name: "Submit abstract" })).toBeNull();
  });
});
