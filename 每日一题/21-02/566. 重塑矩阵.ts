export function matrixReshape(
  nums: number[][],
  r: number,
  c: number
): number[][] {
  const m = nums.length
  const n = nums[0].length
  if (m * n != r * c) {
    return nums
  }

  const ans: number[][] = new Array(r).fill(0).map(() => new Array(c).fill(0))
  for (let x = 0; x < m * n; ++x) {
    ans[Math.floor(x / c)][x % c] = nums[Math.floor(x / n)][x % n]
  }
  return ans
}
