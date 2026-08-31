import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PersonGrid } from "./PersonGrid";

describe("PersonGrid", () => {
  it("renders the empty label when there are no people", () => {
    render(
      <PersonGrid people={[]} emptyLabel="Keynote speakers to be announced." />,
    );
    expect(
      screen.getByText("Keynote speakers to be announced."),
    ).toHaveClass("empty");
    expect(screen.queryByRole("list")).toBeNull();
  });

  it("renders committee people with name, role, and affiliation", () => {
    render(
      <PersonGrid
        people={[
          {
            id: "1",
            name: "Example Chair",
            role: "Conference Chair",
            section: "chair",
            affiliation: "DHA Suffa University",
          },
        ]}
        emptyLabel="To be announced"
      />,
    );

    expect(screen.getByRole("heading", { name: "Example Chair" })).toBeInTheDocument();
    expect(screen.getByText("Conference Chair")).toBeInTheDocument();
    expect(screen.getByText("DHA Suffa University")).toBeInTheDocument();
    expect(screen.queryByRole("img")).toBeNull();
  });

  it("renders a speaker photo when photoSrc is set", () => {
    render(
      <PersonGrid
        people={[
          {
            id: "s1",
            name: "Keynote Speaker",
            affiliation: "Example University",
            bio: "Works on sustainable systems.",
            photoSrc: "/speakers/keynote.jpg",
          },
        ]}
        emptyLabel="To be announced"
      />,
    );

    const photo = screen.getByRole("img", { name: "Keynote Speaker" });
    expect(photo).toHaveAttribute("src", "/speakers/keynote.jpg");
    expect(screen.getByText("Works on sustainable systems.")).toBeInTheDocument();
  });
});
