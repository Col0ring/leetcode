// 相同长度
export function fourSumCount(
  A: number[],
  B: number[],
  C: number[],
  D: number[]
): number {
  const mapHelper = new Map()
  let ans = 0
  const n = A.length

  // 两者想加比较
  for (let i = 0; i < n; i++) {
    let a = A[i]
    for (let j = 0; j < n; j++) {
      let b = B[j]
      if (!mapHelper.has(a + b)) {
        mapHelper.set(a + b, 1)
      } else {
        mapHelper.set(a + b, mapHelper.get(a + b) + 1)
      }
    }
  }

  for (let k = 0; k < n; k++) {
    let c = C[k]
    for (let l = 0; l < n; l++) {
      let d = D[l]
      // 映射为0
      let sum = -(c + d)
      if (mapHelper.has(sum)) {
        ans += mapHelper.get(sum)
      }
    }
  }

  return ans
}
