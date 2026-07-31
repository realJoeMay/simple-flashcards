import { describe, expect, it } from "vitest";

import { multiply } from "./math";

describe("multiply", () => {
  it("multiplies two positive integers", () => {
    expect(multiply(7, 8)).toBe(56);
  });
});
