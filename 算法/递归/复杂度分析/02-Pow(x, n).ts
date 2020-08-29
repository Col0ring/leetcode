// 内置函数
// export function myPow(x: number, n: number): number {
//   // 或者 x ** n
//   return Math.pow(x, n)
// }

// 暴力
// export function myPow(x: number, n: number): number {
//   let N = n
//   if (N < 0) {
//     x = 1 / x
//     N = -N
//   }
//   let ans = 1
//   for (let i = 0; i < N; i++) ans = ans * x
//   return ans
// }

// 递归快速幂算法
export function myPow(x: number, n: number): number {
  const helper = (x: number, n: number): number => {
    if (n === 0) {
      return 1.0
    }
    // 先求 x ** n/2 ，然后直接乘以本身
    const half = helper(x, Math.floor(n / 2))
    // 判断奇偶
    if (n % 2 == 0) {
      return half * half
    } else {
      return half * half * x
    }
  }
  let N = n
  if (N < 0) {
    x = 1 / x
    N = -N
  }

  return helper(x, N)
}
