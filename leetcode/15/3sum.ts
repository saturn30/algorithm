// 첫 시도. 성공은 했는데 엄청 느리다.
export function threeSum(nums: number[]): number[][] {
  const combinations = getAllCombination(nums.sort());

  return combinations;
}

function getAllCombination(nums: number[]) {
  const numCount = getNumCount(nums);
  const combinations: number[][] = [];

  let prevValue1, prevValue2;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === prevValue1 && nums[j] === prevValue2) continue;
      prevValue1 = nums[i];
      prevValue2 = nums[j];

      const sum = nums[i] + nums[j];
      const useCount = getUseCount(-sum, nums[i], nums[j]);

      const nowCombination = createCombination([nums[i], nums[j], -sum]);
      if (
        numCount[-sum] > useCount &&
        !isDuplicateCombination(combinations, nowCombination)
      ) {
        combinations.push(nowCombination);
      }

      if (nums[i] > 0) break;
    }
  }

  return combinations;
}

function getNumCount(nums: number[]) {
  return nums.reduce<{ [key: string]: number }>((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }

    return acc;
  }, {});
}

function getUseCount(target: number, value1: number, value2: number) {
  let result = 0;
  if (target === value1) result++;
  if (target === value2) result++;

  return result;
}

function createCombination(nums: number[]) {
  return nums
    .map((num) => {
      if (num === 0) return 0;
      return num;
    })
    .sort();
}

function isDuplicateCombination(combinations: number[][], target: number[]) {
  return combinations.some((combination) => {
    return combination.every((num, index) => num === target[index]);
  });
}
