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

  it("renders a full-bleed cinematic hero with dates and venue", () => {
    const { container } = render(<Home />);
    const hero = container.querySelector("section.hero");
    expect(hero).not.toBeNull();
    expect(hero!.querySelector(".kicker")).toHaveTextContent(
      "International conference",
    );
    expect(hero!.querySelector("hr")).not.toBeNull();
    expect(hero!.querySelector(".hero-collage")).not.toBeNull();
    expect(hero!.querySelector(".hero-short")).toHaveTextContent(
      site.conference.shortName,
    );
    expect(
      screen.getByText(site.conference.affiliationLine),
    ).toBeInTheDocument();
    expect(hero).toHaveTextContent(
      conferenceDatesLabel(site.importantDates) ?? "",
    );
    expect(hero).toHaveTextContent(`Venue: ${site.conference.venue}`);
  });

  it("lists important dates from site only", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Important Dates" }),
    ).toBeInTheDocument();
    for (const row of site.importantDates) {
      expect(
        screen.getByRole("heading", { name: row.label }),
      ).toBeInTheDocument();
      expect(screen.getAllByText(row.date).length).toBeGreaterThan(0);
    }
  });

  it("renders about copy, track teasers, and a Call for Papers link", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Theme of Conference" }),
    ).toBeInTheDocument();
    for (const paragraph of site.conference.about) {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    }

    for (const track of site.tracks) {
      expect(
        screen.getByRole("heading", { name: track.title }),
      ).toBeInTheDocument();
    }

    expect(
      screen.getByAltText("DHA Suffa University DCK Campus"),
    ).toHaveAttribute("src", "/media/dsu-dck.png");

    expect(
      screen.getByRole("link", { name: "Call for Papers" }),
    ).toHaveAttribute("href", "/call-for-papers");
  });

  it("renders mock speakers, programme highlights, and a committee preview", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Agenda Highlights" }),
    ).toBeInTheDocument();
    for (const item of site.programme) {
      expect(
        screen.getByRole("heading", { name: item.title }),
      ).toBeInTheDocument();
    }
    expect(
      screen.getAllByRole("heading", { name: site.speakers[0].name }).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("heading", { name: site.people[0].name }).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getByRole("heading", { level: 2, name: "Host University" }),
    ).toBeInTheDocument();
    for (const faculty of site.faculties) {
      expect(
        screen.getByRole("heading", { name: faculty.title }),
      ).toBeInTheDocument();
    }
  });

  it("renders Submit a Paper and Learn More CTAs", () => {
    render(<Home />);
    expect(
      screen.getByRole("button", {
        name: "Submit a Paper — link to be announced",
      }),
    ).toBeDisabled();
    expect(screen.getByRole("link", { name: "Learn More" })).toHaveAttribute(
      "href",
      "/call-for-papers",
    );
    expect(screen.queryByRole("link", { name: "Submit a Paper" })).toBeNull();
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
