export function wiggleMaxLength(nums: number[]): number {
  const n = nums.length
  if (n < 2) return n
  const up = new Array(n).fill(0)
  const down = new Array(n).fill(0)
  up[0] = down[0] = 1
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      up[i] = Math.max(up[i - 1], down[i - 1] + 1)
      down[i] = down[i - 1]
    } else if (nums[i] < nums[i - 1]) {
      up[i] = up[i - 1]
      down[i] = Math.max(up[i - 1] + 1, down[i - 1])
    } else {
      up[i] = up[i - 1]
      down[i] = down[i - 1]
    }
  }
  return Math.max(up[n - 1], down[n - 1])
}
