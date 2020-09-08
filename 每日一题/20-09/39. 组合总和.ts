// export function combinationSum(
//   candidates: number[],
//   target: number
// ): number[][] {
//   const ans: number[][] = []
//   const dfs = (index: number, target: number, arr: number[]): void => {
//     if (target < 0) {
//       return
//     }
//     arr.push(candidates[index])
//     if (target === 0) {
//       ans.push(arr)
//       return
//     }
//     for (let i = index; i < candidates.length; i++) {
//       dfs(i, target - candidates[i], [...arr])
//     }
//   }
//   for (let i = 0; i < candidates.length; i++) {
//     dfs(i, target - candidates[i], [])
//   }
//   return ans
// }

// 官方内存优化
export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const ans: number[][] = []
  const dfs = (target: number, combine: number[], idx: number) => {
    if (idx === candidates.length) {
      return
    }
    if (target === 0) {
      ans.push(combine)
      return
    }
    // 直接跳过
    dfs(target, combine, idx + 1)
    // 选择当前数
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx)
    }
  }

  dfs(target, [], 0)
  return ans
}
