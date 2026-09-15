import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CommitteePage from "./page";

describe("Committee page", () => {
  it("redirects to the committee section on the home page", () => {
    render(<CommitteePage />);
    expect(screen.getByRole("link", { name: "home" })).toHaveAttribute(
      "href",
      "/#committee",
    );
  });
});
