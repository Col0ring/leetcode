export function findTargetSumWays(nums: number[], S: number): number {
  let ans = 0
  const len = nums.length
  let index = 0
  const dfs = (target: number, index: number) => {
    if (index === len) {
      if (target === 0) {
        ans++
      }
      return
    }
    dfs(target - nums[index], index + 1)
    dfs(target + nums[index], index + 1)
  }
  dfs(S - nums[index], 1)
  dfs(S + nums[index], 1)
  return ans
}
