import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AgendaTimeline } from "./AgendaTimeline";

describe("AgendaTimeline", () => {
  it("renders each programme item with day, time, and title", () => {
    render(
      <AgendaTimeline
        items={[
          {
            id: "open",
            day: "Day 1",
            time: "09:00 AM – 11:00 AM",
            title: "Opening Session",
          },
          {
            id: "close",
            day: "Day 2",
            time: "04:00 PM – 05:00 PM",
            title: "Closing Session",
          },
        ]}
      />,
    );

    expect(screen.getByRole("list")).toHaveClass("timeline");
    expect(
      screen.getByRole("heading", { name: "Opening Session" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Day 1: 09:00 AM – 11:00 AM")).toBeInTheDocument();
    expect(screen.getByText("Day 2: 04:00 PM – 05:00 PM")).toBeInTheDocument();
  });
});
