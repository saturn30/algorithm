export function runningSum(nums: number[]): number[] {
  return nums.reduce<number[]>((acc, num) => {
    if (!acc.length) return [num];
    return [...acc, acc.slice(-1)[0] + num];
  }, []);
}
