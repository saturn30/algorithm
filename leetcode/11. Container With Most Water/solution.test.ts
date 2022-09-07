import { maxArea } from './solution';

test('example 1', () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});

test('example 2', () => {
  expect(maxArea([1, 1])).toBe(1);
});

test('wrong 1', () => {
  expect(maxArea([2, 3, 10, 5, 7, 8, 9])).toBe(36);
});
