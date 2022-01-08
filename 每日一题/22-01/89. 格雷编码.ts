// 对称生成
export function grayCode(n: number): number[] {
  const ret = [0]
  for (let i = 1; i <= n; i++) {
    const m = ret.length
    for (let j = m - 1; j >= 0; j--) {
      ret.push(ret[j] | (1 << (i - 1)))
    }
  }
  return ret
}
