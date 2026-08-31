import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";
import * as homeModule from "./page";
import { site } from "@/content/site";
import { conferenceDatesLabel } from "@/lib/site";

describe("Home", () => {
  it("does not export a custom metadata title", () => {
    expect(homeModule).not.toHaveProperty("metadata");
  });

  it("renders one h1 with the full conference title", () => {
    render(<Home />);
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(site.conference.fullTitle);
  });

  it("renders a split hero with kicker, gold rule, affiliation, and date plate", () => {
    const { container } = render(<Home />);
    const hero = container.querySelector("section.hero");
    expect(hero).not.toBeNull();
    expect(hero!.querySelector(".kicker")).toHaveTextContent(
      site.conference.shortName,
    );
    expect(hero!.querySelector("hr")).not.toBeNull();
    expect(
      screen.getByText(site.conference.affiliationLine),
    ).toBeInTheDocument();

    const plate = hero!.querySelector(".plate");
    expect(plate).not.toBeNull();
    expect(plate).toHaveTextContent(
      conferenceDatesLabel(site.importantDates) ?? "",
    );
    expect(plate).toHaveTextContent(site.conference.venue);
    expect(plate).toHaveTextContent(site.conference.city);
  });

  it("lists important dates from site only", () => {
    render(<Home />);
    expect(
      screen.getByRole("table", { name: "Important dates" }),
    ).toBeInTheDocument();
    for (const row of site.importantDates) {
      expect(screen.getByText(row.label)).toBeInTheDocument();
      expect(screen.getAllByText(row.date).length).toBeGreaterThan(0);
    }
  });

  it("renders about copy, track teasers, and a Call for Papers link", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 2, name: "About the conference" }),
    ).toBeInTheDocument();
    for (const paragraph of site.conference.about) {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    }

    expect(
      screen.getByRole("heading", { level: 2, name: "Themes" }),
    ).toBeInTheDocument();
    for (const track of site.tracks) {
      expect(
        screen.getByRole("heading", { name: track.title }),
      ).toBeInTheDocument();
    }

    expect(
      screen.getByRole("link", { name: "Call for Papers" }),
    ).toHaveAttribute("href", "/call-for-papers");
  });

  it("renders Submit abstract and Register CTAs", () => {
    render(<Home />);
    expect(
      screen.getByRole("button", {
        name: "Submit abstract — link to be announced",
      }),
    ).toBeDisabled();
    expect(
      screen.getByRole("button", { name: "Register — link to be announced" }),
    ).toBeDisabled();
    expect(screen.queryByRole("link", { name: "Submit abstract" })).toBeNull();
    expect(screen.queryByRole("link", { name: "Register" })).toBeNull();
  });

  it("embeds Event JSON-LD without IEEE as organizer", () => {
    render(<Home />);
    const script = document.querySelector('script[type="application/ld+json"]');
    expect(script).not.toBeNull();
    const data = JSON.parse(script!.innerHTML) as {
      organizer: { name: string };
    };
    expect(data.organizer.name).toBe("DHA Suffa University");
    expect(JSON.stringify(data.organizer)).not.toMatch(/IEEE/i);
  });
});
