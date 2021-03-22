// // 循环检查二进制位
// export function hammingWeight(n: number): number {
//   let ret = 0
//   // 分别检查第 i 位
//   for (let i = 0; i < 32; i++) {
//     // n & 2**i, 当且仅当 n 的第 i 位为 1 时，运算结果不为 0。
//     if ((n & (1 << i)) !== 0) {
//       ret++
//     }
//   }
//   return ret
// }

// 位运算优化
export function hammingWeight(n: number): number {
  let ret = 0
  while (n) {
    // n & (n−1)，其预算结果恰为把 n 的二进制位中的最低位的 1 变为 0 之后的结果，以此不断重复，直到 n 为 0 就没有 1了
    n &= n - 1
    ret++
  }
  return ret
}
