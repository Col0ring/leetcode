// 双指针
export function sortArrayByParityII(A: number[]): number[] {
  const n = A.length
  // i 初始是0，j 初始是1，刚好完全覆盖
  let j = 1
  // 双指针
  for (let i = 0; i < n; i += 2) {
    // 判断是否是奇数
    if (A[i] & 1) {
      while (A[j] & 1) {
        j += 2
      }

      ;[A[j], A[i]] = [A[i], A[j]]
    }
  }
  return A
}
