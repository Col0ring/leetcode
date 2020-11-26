export function maximumGap(nums: number[]): number {
  let max = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 1; i++) {
    let val = nums[i + 1] - nums[i]
    if (val > max) {
      max = val
    }
  }
  return max < 2 ? 0 : max
}
