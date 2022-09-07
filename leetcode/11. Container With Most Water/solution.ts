class Point {
  index: number;
  height: number;

  constructor(index: number, height: number) {
    this.index = index;
    this.height = height;
  }
}

function getArea(left: Point, right: Point) {
  return (right.index - left.index) * Math.min(left.height, right.height);
}

export function maxArea(height: number[]): number {
  let left = new Point(0, height[0]),
    right = new Point(height.length - 1, height[height.length - 1]),
    maxArea = getArea(left, right);

  while (left.index < right.index) {
    if (left.height > right.height) {
      right = new Point(right.index - 1, height[right.index - 1]);
    } else {
      left = new Point(left.index + 1, height[left.index + 1]);
    }
    if (getArea(left, right) > maxArea) maxArea = getArea(left, right);
  }

  return maxArea;
}

/**
 탐욕법 문제. 양끝에서 시작해서 왼쪽 점의 높이가 오른쪽 점의 높이보다 크다면 
 오른쪽 점을 왼쪽으로 한칸, 반대면 왼쪽으로 오른쪽 점으로 한칸씩 옮기면서 영역 계산.
 투포인터 문제
 */
