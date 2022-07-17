// 图
export function arrayNesting(nums: number[]): number {
  let ans = 0,
    n = nums.length
  const vis: Record<number, boolean> = {}
  for (let i = 0; i < n; ++i) {
    let cnt = 0
    while (!vis[i]) {
      vis[i] = true
      i = nums[i]
      ++cnt
    }
    ans = Math.max(ans, cnt)
  }
  return ans
}
