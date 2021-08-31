// 递归：超时。因为会重复计算 f(4) f(3) 这种
// export function fib(n: number): number {
//   if (n === 0) {
//     return 0
//   }
//   if (n === 1) {
//     return 1
//   }
//   return (fib(n - 1) + fib(n - 2)) % 1000000007;
// }

// 迭代,维护一个哈希表
export function fib(n: number): number {
  const dp: number[] = []
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      dp.push(0)
    } else if (i === 1) {
      dp.push(1)
    } else {
      dp.push((dp[i - 1] + dp[i - 2]) % 1000000007)
    }
  }
  return dp[n]
}
