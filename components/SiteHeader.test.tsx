import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "./SiteHeader";
import { site } from "@/content/site";

describe("SiteHeader", () => {
  it("typesets organizer and affiliation and links the short name home", () => {
    render(<SiteHeader />);

    expect(screen.getByText("DHA Suffa University")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "ISRC-STM 2026" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(document.querySelector("svg")).toBeNull();
  });

  it("lists primary single-page nav items and a submit-paper CTA", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/#home",
    );
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "/#about",
    );
    expect(
      screen.getByRole("link", { name: "Aims & Objectives" }),
    ).toHaveAttribute("href", "/#aims");
    expect(screen.getByRole("link", { name: "Theme" })).toHaveAttribute(
      "href",
      "/#theme",
    );
    expect(screen.getByRole("link", { name: "Speakers" })).toHaveAttribute(
      "href",
      "/#speakers",
    );
    expect(screen.getByRole("link", { name: "Committee" })).toHaveAttribute(
      "href",
      "/#committee",
    );
    expect(screen.getByRole("link", { name: "Registration" })).toHaveAttribute(
      "href",
      "/#registration",
    );
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "/#contact",
    );
    expect(screen.getByRole("link", { name: "Submit paper" })).toHaveAttribute(
      "href",
      site.links.easychair,
    );
  });

  it("toggles the overlay menu and returns focus on Escape", () => {
    render(<SiteHeader />);

    const menuButton = screen.getByRole("button", { name: "Menu" });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(menuButton).toHaveAttribute("aria-controls", "site-menu");
    expect(document.getElementById("site-menu")).toBeTruthy();

    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    menuButton.focus();
    fireEvent.keyDown(document, { key: "Escape" });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(menuButton).toHaveFocus();
  });
});
