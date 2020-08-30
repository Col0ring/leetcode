// // 暴力  超时
// export function kthGrammar(N: number, K: number): number {
//   const helper = (N: number): string => {
//     if (N === 1) {
//       return '0'
//     }
//     const str = helper(N - 1)
//     let ans = ''
//     for (let i = 0; i < str.length; ++i) {
//       if (str[i] == '0') {
//         ans += '01'
//       }
//       if (str[i] === '1') {
//         ans += '10'
//       }
//     }
//     return ans
//   }
//   return +helper(N)[K - 1]
// }

// export function kthGrammar(N: number, K: number): number {
//   if (N == 1) return 0
//   if (K <= 1 << (N - 2)) return kthGrammar(N - 1, K)
//   return kthGrammar(N - 1, K - (1 << (N - 2))) ^ 1
// }

export function kthGrammar(N: number, K: number): number {
  if (N == 1) return 0
  const k = kthGrammar(N - 1, (K + 1) >> 1)
  if (k === 0) {
    // 奇数 & 1 为1，偶数为0
    // 0转为01
    return (K & 1) === 0 ? 1 : 0
  }
  // 0转为10
  else {
    return (K & 1) === 0 ? 0 : 1 // 判断K的奇偶
  }
}
