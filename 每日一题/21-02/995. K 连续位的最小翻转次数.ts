export function minKBitFlips(A: number[], K: number): number {
  const n = A.length
  const diff = new Array(n + 1).fill(0)
  let ans = 0,
    revCnt = 0
  for (let i = 0; i < n; i++) {
    revCnt += diff[i]
    if ((A[i] + revCnt) % 2 === 0) {
      if (i + K > n) {
        return -1
      }
      ++ans
      ++revCnt
      --diff[i + K]
    }
  }
  return ans
}
