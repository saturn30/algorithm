export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  let index1 = 0;
  let index2 = 0;
  let totalCount = 0;
  let mid = (nums1.length + nums2.length + 1) / 2 - 1;
  let sum = 0;

  while (totalCount < mid + 1) {
    if (
      nums2[index2] === undefined ||
      (index1 < nums1.length && nums1[index1] <= nums2[index2])
    ) {
      if (isMedian(mid, totalCount)) sum += nums1[index1];
      index1++;
    } else {
      if (isMedian(mid, totalCount)) sum += nums2[index2];
      index2++;
    }
    totalCount++;
  }

  return (nums1.length + nums2.length) % 2 === 0 ? sum / 2 : sum;
}

function isMedian(mid: number, target: number) {
  return Math.abs(mid - target) < 1;
}
