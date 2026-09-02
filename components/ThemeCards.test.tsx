import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeCards } from "./ThemeCards";

describe("ThemeCards", () => {
  it("renders each theme as a centered icon card", () => {
    const { container } = render(
      <ThemeCards
        themes={[
          {
            id: "ai-smart-systems",
            title: "AI & Smart Systems",
            blurb: "Intelligent systems supporting sustainable communities.",
          },
        ]}
      />,
    );

    const list = container.querySelector(".theme-grid");
    expect(list).not.toBeNull();
    expect(list!.querySelector(".theme-icon")).not.toBeNull();
    expect(screen.getByRole("listitem")).toHaveClass("theme-card");
    expect(
      screen.getByRole("heading", { name: "AI & Smart Systems" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Intelligent systems supporting sustainable communities."),
    ).toBeInTheDocument();
  });
});
