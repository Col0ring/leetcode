// 迭代法实现子集枚举
// export function subsets(nums: number[]): number[][] {
//   const ans: number[][] = []
//   const n = nums.length
//   // 1 << n => 2**n
//   // 二进制最小项
//   for (let mask = 0; mask < 1 << n; ++mask) {
//     const t: number[] = []
//     for (let i = 0; i < n; ++i) {
//       if (mask & (1 << i)) {
//         t.push(nums[i])
//       }
//     }
//     ans.push(t)
//   }
//   return ans
// }

export function subsets(nums: number[]): number[][] {
  const t: number[] = []
  const ans: number[][] = []
  const n = nums.length
  const dfs = (cur: number, nums: number[]) => {
    if (cur === n) {
      ans.push([...t])
      return
    }
    // 考虑选择当前位置
    t.push(nums[cur])
    dfs(cur + 1, nums)
    t.pop()
    // 考虑不选择当前位置
    dfs(cur + 1, nums)
  }
  dfs(0, nums)
  return ans
}
