// 模拟
export function construct2DArray(
  original: number[],
  m: number,
  n: number
): number[][] {
  if (original.length !== m * n) {
    return []
  }
  const ans: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < original.length; i += n) {
    ans[Math.floor(i / n)].splice(0, n, ...original.slice(i, i + n))
  }
  return ans
}
