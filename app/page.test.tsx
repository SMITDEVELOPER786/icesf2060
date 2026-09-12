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

  it("renders one h1 with the full conference title and subtitle", () => {
    render(<Home />);
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(site.conference.fullTitle);
    expect(screen.getByText(site.conference.subtitle)).toBeInTheDocument();
  });

  it("renders a full-bleed cinematic hero with dates and venue", () => {
    const { container } = render(<Home />);
    const hero = container.querySelector("section.hero");
    expect(hero).not.toBeNull();
    expect(hero!.querySelector(".kicker")).toHaveTextContent("Get Ready");
    expect(hero!.querySelector("hr")).toBeNull();
    expect(hero!.querySelector(".hero-collage")).not.toBeNull();
    expect(hero!.querySelector(".hero-short")).toBeNull();
    expect(hero).toHaveTextContent(
      conferenceDatesLabel(site.importantDates) ?? "",
    );
    expect(hero).toHaveTextContent(`Venue: ${site.conference.venue}`);
    expect(hero).toHaveTextContent(site.conference.organizedBy);
  });

  it("renders partner logos below Submit an Abstract in the hero", () => {
    const { container } = render(<Home />);
    const hero = container.querySelector("section.hero");
    const banner = hero!.querySelector(".partner-banner");
    expect(banner).not.toBeNull();
    expect(
      screen.getByRole("region", { name: "Partner institutions" }),
    ).toBeInTheDocument();
    for (const partner of site.partners) {
      expect(
        screen.getByRole("img", { name: partner.name }),
      ).toHaveAttribute("src", partner.logoSrc);
    }
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

  it("places About Us, aims, then Theme of Conference, with no stats banner", () => {
    const { container } = render(<Home />);
    const headings = screen
      .getAllByRole("heading", { level: 2 })
      .map((heading) => heading.textContent);
    expect(headings.slice(0, 3)).toEqual([
      "About Us",
      "Conference Aims and Objectives",
      "Theme of Conference",
    ]);
    expect(container.querySelector(".stats")).toBeNull();
    expect(screen.queryByText("Conference days")).toBeNull();
    expect(
      screen.queryByRole("heading", { name: "Host University" }),
    ).toBeNull();
    for (const paragraph of site.conference.about) {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    }
    expect(screen.getByText(site.conference.aims.intro)).toBeInTheDocument();
    expect(screen.getByText(site.conference.aims.leadIn)).toBeInTheDocument();
    for (const objective of site.conference.aims.objectives) {
      expect(screen.getByText(objective)).toBeInTheDocument();
    }
    expect(screen.getByText(site.conference.themeIntro)).toBeInTheDocument();
    const themeGrid = container.querySelector(".theme-grid");
    expect(themeGrid).not.toBeNull();
    expect(themeGrid!.querySelectorAll(".theme-card")).toHaveLength(
      site.themes.length,
    );
    for (const theme of site.themes) {
      expect(
        screen.getByRole("heading", { name: theme.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(theme.blurb)).toBeInTheDocument();
    }
  });

  it("renders mock speakers and a committee preview", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Keynote Speakers" }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", { name: site.speakers[0].name }).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("heading", { name: site.people[0].name }).length,
    ).toBeGreaterThan(0);
  });

  it("renders Submit an Abstract and Learn More CTAs", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: "Submit an Abstract" })).toHaveAttribute(
      "href",
      site.links.easychair,
    );
    expect(screen.getByRole("link", { name: "Learn More" })).toHaveAttribute(
      "href",
      "/call-for-papers",
    );
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
