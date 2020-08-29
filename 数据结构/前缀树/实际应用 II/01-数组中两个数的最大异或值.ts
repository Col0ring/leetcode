// 暴力解法
export function findMaximumXOR(nums: number[]): number {
  if (nums.length <= 1) return 0
  let res = -Infinity
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      res = Math.max(res, nums[i] ^ nums[j])
    }
  }
  return res
}
