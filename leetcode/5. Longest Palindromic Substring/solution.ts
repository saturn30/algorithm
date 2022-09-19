export function longestPalindrome(s: string): string {
  let result = s[0];
  const dp = new Array(s.length)
    .fill(null)
    .map(() => new Array(s.length).fill(false));

  dp.forEach((_, index) => (dp[index][index] = true));

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      result = s.slice(i, i + 2);
    }
  }

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 2; j < s.length; j++) {
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        if (j - i + 1 > result.length) result = s.slice(i, j + 1);
      }
    }
  }

  return result;
}
