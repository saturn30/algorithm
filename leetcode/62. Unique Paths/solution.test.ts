function uniquePaths(m: number, n: number): number {
  const dp = Array.from(Array(m), () => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) dp[i][j] = 1;
      else {
        const top = i - 1 >= 0 ? dp[i - 1][j] : 0;
        const left = j - 1 >= 0 ? dp[i][j - 1] : 0;
        dp[i][j] = top + left;
      }
    }
  }

  return dp[m - 1][n - 1];
}

test('example 1', () => {
  expect(uniquePaths(3, 7)).toBe(28);
});

test('example 2', () => {
  expect(uniquePaths(3, 2)).toBe(3);
});
