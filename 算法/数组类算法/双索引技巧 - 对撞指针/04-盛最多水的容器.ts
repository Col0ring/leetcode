// 双指针
export function maxArea(height: number[]): number {
  let left = 0
  let right = height.length - 1
  let max = 0
  while (left < right) {
    if (height[left] <= height[right]) {
      max = Math.max((right - left) * height[left], max)
      left++
    } else {
      max = Math.max((right - left) * height[right], max)
      right--
    }
  }
  return max
}
