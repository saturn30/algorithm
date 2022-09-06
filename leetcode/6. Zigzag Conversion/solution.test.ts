import { convert } from './solution';

test('example 1', () => {
  expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
});

test('example 2', () => {
  expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
});

test('example 3', () => {
  expect(convert('A', 1)).toBe('A');
});

test('wrong example 1', () => {
  expect(convert('ABC', 1)).toBe('ABC');
});
