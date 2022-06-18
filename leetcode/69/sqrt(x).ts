export function mySqrt(x: number): number {
  if (x === 1) return 1;

  let left = 0;
  let right = x;
  let mid = 0;

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (mid * mid === x) break;
    else if (mid * mid > x) {
      right = mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    }
  }

  if (mid * mid > x) return mid - 1;
  return mid;
}
