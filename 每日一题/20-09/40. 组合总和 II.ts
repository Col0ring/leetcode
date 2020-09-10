export function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  // 排序
  candidates.sort((a, b) => a - b)
  let res: number[][] = []
  let n = candidates.length
  const dfs = (k: number, arr: number[], sum: number): void => {
    if (sum === target) res.push([...arr])
    if (sum > target) return
    for (let i = k; i < n; i++) {
      let item = candidates[i]
      // 去重，比如同一个数只能要一个
      if (i > k && candidates[i - 1] === item) {
        continue
      }
      // 回溯算法
      arr.push(item)
      dfs(i + 1, arr, sum + item)
      arr.pop()
    }
  }
  dfs(0, [], 0)
  return res
}
