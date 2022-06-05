// https://leetcode.com/problems/3sum/discuss/1118957/Clean-typescript-two-pointer-solution
// two pointer 문제
// anchor 정하고 left와 right로 좁혀가면 2중 루프보다 빠르게 탐색가능

export function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];

  const sortedNums = nums.sort((a, b) => a - b);
  const result: number[][] = [];

  console.log(sortedNums);

  for (
    let anchorIndex = 0;
    anchorIndex < sortedNums.length - 2;
    anchorIndex++
  ) {
    if (sortedNums[anchorIndex] === sortedNums[anchorIndex - 1]) continue;
    let left = anchorIndex + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      const [anchorValue, leftValue, rightValue] = [
        sortedNums[anchorIndex],
        sortedNums[left],
        sortedNums[right],
      ];

      const sum = anchorValue + leftValue + rightValue;
      if (sum === 0) {
        result.push([anchorValue, leftValue, rightValue]);
        while (sortedNums[left] === sortedNums[left + 1]) left++;
        left++;
      } else if (sum > 0) right--;
      else if (sum < 0) left++;
    }
  }

  return result;
}
