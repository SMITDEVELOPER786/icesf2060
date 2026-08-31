import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeroCollage } from "./HeroCollage";

describe("HeroCollage", () => {
  it("renders DHA Suffa campus photos hidden from assistive tech", () => {
    const { container } = render(<HeroCollage />);
    const collage = container.querySelector(".hero-collage");
    expect(collage).toHaveAttribute("aria-hidden", "true");
    const images = container.querySelectorAll("img");
    expect(images).toHaveLength(3);
    expect(images[0]).toHaveAttribute("src", "/media/dsu-campus.png");
    expect(images[1]).toHaveAttribute("src", "/media/dsu-dck.png");
    expect(images[2]).toHaveAttribute("src", "/media/dsu-career.png");
  });
});
