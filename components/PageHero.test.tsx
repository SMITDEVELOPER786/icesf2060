import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PageHero } from "./PageHero";

describe("PageHero", () => {
  it("renders kicker, title, and optional lede", () => {
    render(
      <PageHero
        kicker="ICESF-2026"
        title="Call for Papers"
        lede="Original work across four tracks."
      />,
    );

    expect(screen.getByText("ICESF-2026")).toHaveClass("kicker");
    expect(
      screen.getByRole("heading", { level: 1, name: "Call for Papers" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Original work across four tracks.")).toBeInTheDocument();
  });

  it("uses the kicker prop instead of a hardcoded short name", () => {
    render(<PageHero kicker="CONF-TEST" title="Committee" />);
    expect(screen.getByText("CONF-TEST")).toBeInTheDocument();
    expect(screen.queryByText("ICESF-2026")).toBeNull();
    expect(screen.queryByText("Original work across four tracks.")).toBeNull();
  });
});
