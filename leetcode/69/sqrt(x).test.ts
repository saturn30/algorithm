import { mySqrt } from "./sqrt(x)";

describe("69. Sqrt(x)", () => {
  test("example 1", () => {
    expect(mySqrt(4)).toBe(2);
  });

  test("example 2", () => {
    expect(mySqrt(8)).toBe(2);
  });

  test("wrong 1", () => {
    expect(mySqrt(2)).toBe(1);
  });

  test("wrong 2", () => {
    expect(mySqrt(1)).toBe(1);
  });
});
