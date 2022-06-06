export function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (right - left <= 1) {
      if (target <= nums[left]) {
        return left;
      } else if (target <= nums[right]) {
        return right;
      } else return right + 1;
    }

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }

  return -1;
}
