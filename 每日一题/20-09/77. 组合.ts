export function combine(n: number, k: number): number[][] {
  const ans: number[][] = []
  const helper = (start: number, arr: number[]) => {
    if (arr.length === k) {
      ans.push([...arr])
      return
    }

    for (let i = start; i <= n; i++) {
      arr.push(i)
      helper(i + 1, arr)
      arr.pop()
    }
  }

  helper(1, [])

  return ans
}
