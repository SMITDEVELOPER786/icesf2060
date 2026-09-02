import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteFooter } from "./SiteFooter";

describe("SiteFooter", () => {
  it("typesets short name, conference dates, organizer, and affiliation", () => {
    render(<SiteFooter />);

    expect(screen.getByText("ISRC-STM 2026")).toBeInTheDocument();
    expect(screen.getByText("9–10 December 2026")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Organized by DHA Suffa University",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("© 2026 DHA Suffa University")).toBeInTheDocument();
  });
});
