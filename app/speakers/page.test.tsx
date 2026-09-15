import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SpeakersPage from "./page";

describe("Speakers page", () => {
  it("redirects to the speakers section on the home page", () => {
    render(<SpeakersPage />);
    expect(screen.getByRole("link", { name: "home" })).toHaveAttribute(
      "href",
      "/#speakers",
    );
  });
});
