import { generateParenthesis } from './solution';

test('example 1', () => {
  expect(generateParenthesis(3).sort()).toEqual(
    ['((()))', '(()())', '(())()', '()(())', '()()()'].sort()
  );
});

test('example 2', () => {
  expect(generateParenthesis(1)).toEqual(['()']);
});

test('wrong 1', () => {
  expect(generateParenthesis(4).sort()).toEqual(
    [
      '(((())))',
      '((()()))',
      '((())())',
      '((()))()',
      '(()(()))',
      '(()()())',
      '(()())()',
      '(())(())',
      '(())()()',
      '()((()))',
      '()(()())',
      '()(())()',
      '()()(())',
      '()()()()',
    ].sort()
  );
});
