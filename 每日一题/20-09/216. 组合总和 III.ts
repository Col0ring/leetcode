export function combinationSum3(k: number, n: number): number[][] {
  const temp: number[] = []
  const res: number[][] = []
  const dfs = (
    cur: number,
    n: number,
    k: number,
    sum: number,
    res: number[][]
  ) => {
    if (temp.length + (n - cur + 1) < k || temp.length > k) {
      return
    }
    if (
      temp.length === k &&
      temp.reduce((previous, value) => previous + value, 0) === sum
    ) {
      res.push(temp.slice())
      return
    }
    temp.push(cur)
    dfs(cur + 1, n, k, sum, res)
    temp.pop()
    dfs(cur + 1, n, k, sum, res)
  }

  dfs(1, 9, k, n, res)
  return res
}
