export function generateParenthesis(n: number): string[] {
  const ans: string[] = [];

  const track = (s: string, l: number, r: number) => {
    if (s.length === 2 * n) {
      ans.push(s);
      return;
    }

    if (l < n) track(s + '(', l + 1, r);
    if (r < l) track(s + ')', l, r + 1);
  };

  track('', 0, 0);

  return ans;
}

// 정답 보고 품.. 처음에 dp로 접근했는데 백트래킹 문제였다.
