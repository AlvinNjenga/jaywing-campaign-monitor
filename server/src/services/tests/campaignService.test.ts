import { describe, it, expect } from "@jest/globals";
import { calculateRoasIndex } from "../campaignService";

describe("calculateRoasIndex", () => {
  it("returns null when cost is null", () => {
    expect(calculateRoasIndex(1000, null, 100)).toBeNull();
  });

  it("returns null when cost is zero", () => {
    expect(calculateRoasIndex(1000, 0, 100)).toBeNull();
  });

  it("calculates correctly for valid inputs", () => {
    const result = calculateRoasIndex(5000, 200, 500);
    expect(result).toBeCloseTo((5000 - 200) / 501);
  });
});

