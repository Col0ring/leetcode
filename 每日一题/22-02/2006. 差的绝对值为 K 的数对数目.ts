export function countKDifference(nums: number[], k: number): number {
  let res = 0,
    n = nums.length
  const cnt = new Map<number, number>()
  for (let j = 0; j < n; ++j) {
    res += (cnt.get(nums[j] - k) || 0) + (cnt.get(nums[j] + k) || 0)
    cnt.set(nums[j], (cnt.get(nums[j]) || 0) + 1)
  }
  return res
}
