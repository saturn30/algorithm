const MATCH: { [key: string]: string[] } = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};

function letterCombinations(digits: string): string[] {
  const result: string[] = [];

  const track = (str: string) => {
    if (str.length && str.length === digits.length) {
      return result.push(str);
    }

    MATCH[digits[str.length]]?.map((digit) => {
      track(str + digit);
    });
  };

  track('');

  return result;
}

test('example 1', () => {
  expect(letterCombinations('23')).toEqual([
    'ad',
    'ae',
    'af',
    'bd',
    'be',
    'bf',
    'cd',
    'ce',
    'cf',
  ]);
});

test('example 2', () => {
  expect(letterCombinations('')).toEqual([]);
});

test('example 3', () => {
  expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
});
