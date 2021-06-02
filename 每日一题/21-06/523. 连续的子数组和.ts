export function checkSubarraySum(nums: number[], k: number): boolean {
  const m = nums.length
  if (m < 2) {
    return false
  }
  const map = new Map<number, number>()
  map.set(0, -1)
  let remainder = 0
  for (let i = 0; i < m; i++) {
    remainder = (remainder + nums[i]) % k
    if (map.has(remainder)) {
      const prevIndex = map.get(remainder)!
      if (i - prevIndex >= 2) {
        return true
      }
    } else {
      map.set(remainder, i)
    }
  }
  return false
}
