import { describe, expect, it } from "vitest";
import robots from "./robots";

describe("robots", () => {
  it("allows all user agents at /", () => {
    expect(robots()).toEqual({
      rules: { userAgent: "*", allow: "/" },
    });
  });
});
