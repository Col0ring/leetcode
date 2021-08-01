export function maxFrequency(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let total = 0,
    res = 1,
    l = 0

  for (let r = 1; r < n; r++) {
    total += (nums[r] - nums[r - 1]) * (r - l)
    while (total > k) {
      total -= nums[r] - nums[l]
      l += 1
    }
    res = Math.max(res, r - l + 1)
  }
  return res
}
