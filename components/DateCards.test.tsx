import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DateCards } from "./DateCards";

describe("DateCards", () => {
  it("renders each important date as a card", () => {
    render(
      <DateCards
        dates={[
          {
            id: "abstract",
            label: "Abstract Submission",
            date: "30 September 2026",
          },
        ]}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Abstract Submission" }),
    ).toBeInTheDocument();
    expect(screen.getByText("30 September 2026")).toBeInTheDocument();
  });
});
