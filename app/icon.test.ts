import { describe, expect, it } from "vitest";
import * as icon from "./icon";

describe("icon", () => {
  it("exports a 32×32 PNG favicon", () => {
    expect(icon.size).toEqual({ width: 32, height: 32 });
    expect(icon.contentType).toBe("image/png");
  });
});
