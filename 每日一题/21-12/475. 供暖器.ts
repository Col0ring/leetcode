export function findRadius(houses: number[], heaters: number[]): number {
  let ans = 0
  heaters.sort((a, b) => a - b)
  for (const house of houses) {
    const i = binarySearch(heaters, house)
    const j = i + 1
    const leftDistance = i < 0 ? Number.MAX_VALUE : house - heaters[i]
    const rightDistance =
      j >= heaters.length ? Number.MAX_VALUE : heaters[j] - house
    const curDistance = Math.min(leftDistance, rightDistance)
    ans = Math.max(ans, curDistance)
  }
  return ans
}

const binarySearch = (nums: number[], target: number) => {
  let left = 0,
    right = nums.length - 1
  if (nums[left] > target) {
    return -1
  }
  while (left < right) {
    const mid = Math.floor((right - left + 1) / 2) + left
    if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid
    }
  }
  return left
}
