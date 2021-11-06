export function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b)
  const n: number = nums.length
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i) {
      return i
    }
  }
  return n
}
