import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DatesTable } from "./DatesTable";

describe("DatesTable", () => {
  it("renders important dates as a two-column table", () => {
    render(
      <DatesTable
        dates={[
          {
            id: "abstract",
            label: "Abstract Submission",
            date: "30 September 2026",
          },
          {
            id: "conference",
            label: "Conference",
            date: "9–10 December 2026",
          },
        ]}
      />,
    );

    expect(
      screen.getByRole("table", { name: "Important dates" }),
    ).toHaveClass("dates");
    expect(
      screen.getByRole("rowheader", { name: "Abstract Submission" }),
    ).toBeInTheDocument();
    expect(screen.getByText("30 September 2026")).toBeInTheDocument();
    expect(screen.getByText("9–10 December 2026")).toBeInTheDocument();
  });
});
