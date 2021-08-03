export function findUnsortedSubarray(nums: number[]): number {
  if (isSorted(nums)) {
    return 0
  }
  const numsSorted = [...nums].sort((a, b) => a - b)
  let left = 0
  while (nums[left] === numsSorted[left]) {
    left++
  }
  let right = nums.length - 1
  while (nums[right] == numsSorted[right]) {
    right--
  }
  return right - left + 1
}

const isSorted = (nums: number[]) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return false
    }
  }
  return true
}
