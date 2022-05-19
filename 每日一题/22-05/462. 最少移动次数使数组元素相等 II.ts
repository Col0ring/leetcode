export function minMoves2(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let n = nums.length,
    ret = 0,
    x = nums[Math.floor(n / 2)]
  for (let i = 0; i < n; i++) {
    ret += Math.abs(nums[i] - x)
  }
  return ret
}
