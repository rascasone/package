import { describe, it, expect } from "vitest";
import { add } from "../src";

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(1, 1)).toBe(2);
  });

  it("should throw error if 'a' is not a number", () => {
    expect(() => add("1" as any, 1)).toThrow();
  });

  it("should throw error if 'b' is not a number", () => {
    expect(() => add(1, "1" as any)).toThrow();
  });
});
