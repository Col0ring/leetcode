export function maxRotateFunction(nums: number[]): number {
  let f = 0,
    n = nums.length,
    numSum = nums.reduce((a, b) => a + b, 0)
  for (let i = 0; i < n; i++) {
    f += i * nums[i]
  }
  let res = f
  for (let i = n - 1; i > 0; i--) {
    f += numSum - n * nums[i]
    res = Math.max(res, f)
  }
  return res
}
