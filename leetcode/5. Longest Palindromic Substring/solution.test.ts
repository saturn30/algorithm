import { longestPalindrome } from './solution';

// test('example 1', () => {
//   expect(longestPalindrome('babad')).toBe('aba');
// });

// test('example2', () => {
//   expect(longestPalindrome('cbbd')).toBe('bb');
// });

test('wrong example 1', () => {
  expect(longestPalindrome('abbcccbbbcaaccbababcbcabca')).toBe('cbababc');
});
