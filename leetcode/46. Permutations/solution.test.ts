function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  track([], nums);

  return result;

  function track(now: number[], rest: number[]) {
    if (!rest.length) result.push(now);

    rest.forEach((num) =>
      track(
        [...now, num],
        rest.filter((restItem) => restItem !== num)
      )
    );
  }
}

test('example 1', () => {
  expect(permute([1, 2, 3])).toEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ]);
});

test('example 2', () => {
  expect(permute([0, 1])).toEqual([
    [0, 1],
    [1, 0],
  ]);
});

test('example 3', () => {
  expect(permute([1])).toEqual([[1]]);
});
