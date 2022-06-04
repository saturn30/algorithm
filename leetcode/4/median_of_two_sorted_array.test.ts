import { findMedianSortedArrays } from "./median_of_two_sorted_array";

describe("4. Median of Two Sorted Arrays", () => {
  test("example 1", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0);
  });

  test("example 2", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  test("wrongCase 1", () => {
    expect(findMedianSortedArrays([0, 0], [0, 0])).toBe(0);
  });

  test("wrongCase 2", () => {
    expect(findMedianSortedArrays([2], [])).toBe(2.0);
  });
});
