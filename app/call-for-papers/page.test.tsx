import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CallForPapersPage from "./page";

describe("Call for Papers page", () => {
  it("redirects to the theme section on the home page", () => {
    render(<CallForPapersPage />);
    expect(screen.getByRole("link", { name: "home" })).toHaveAttribute(
      "href",
      "/#theme",
    );
  });
});
