import { search } from "./binary_search";

describe("704. Binary Search", () => {
  test("example 1", () => {
    const result = search([-1, 0, 3, 5, 9, 12], 9);
    expect(result).toBe(4);
  });

  test("example 2", () => {
    const result = search([-1, 0, 3, 5, 9, 12], 2);
    expect(result).toBe(-1);
  });

  test("example 3", () => {
    const result = search([5], 5);
    expect(result).toBe(0);
  });
});
