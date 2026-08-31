import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TrackList } from "./TrackList";

describe("TrackList", () => {
  it("renders each track title and blurb as a card", () => {
    render(
      <TrackList
        tracks={[
          {
            id: "technology",
            title: "Technology and Engineering for a Sustainable Future",
            blurb: "Engineering methods for resilient infrastructure.",
          },
        ]}
      />,
    );

    expect(
      screen.getByRole("heading", {
        name: "Technology and Engineering for a Sustainable Future",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Engineering methods for resilient infrastructure."),
    ).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toHaveClass("card");
  });
});
