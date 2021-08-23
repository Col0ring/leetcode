export function getMaximumGenerated(n: number): number {
  if (n === 0) {
    return 0
  }
  const nums: number[] = new Array(n + 1).fill(0)
  nums[1] = 1
  for (let i = 2; i <= n; ++i) {
    nums[i] = nums[Math.floor(i / 2)] + (i % 2) * nums[Math.floor(i / 2) + 1]
  }
  return Math.max(...nums)
}
