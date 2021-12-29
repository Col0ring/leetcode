export function countQuadruplets(nums: number[]): number {
  const len = nums.length
  let ans = 0
  const map: Record<string, number> = {}
  for (let c = len - 2; c >= 2; c--) {
    map[nums[c + 1]] = (map[nums[c + 1]] || 0) + 1
    for (let a = 0; a < c; a++) {
      for (let b = a + 1; b < c; b++) {
        ans += map[nums[a] + nums[b] + nums[c]] || 0
      }
    }
  }
  return ans
}
