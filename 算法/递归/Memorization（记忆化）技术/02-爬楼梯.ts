export function climbStairs(n: number): number {
  const memo: number[] = new Array(n + 1).fill(0)
  const climb = (i: number, n: number, memo: number[]): number => {
    if (i > n) {
      return 0
    }
    if (i == n) {
      return 1
    }
    if (memo[i] > 0) {
      return memo[i]
    }
    memo[i] = climb(i + 1, n, memo) + climb(i + 2, n, memo)
    return memo[i]
  }
  return climb(0, n, memo)
}

// // 斐波那契数
// export function climbStairs(n: number): number {
//   if (n == 1) {
//     return 1
//   }
//   let first = 1
//   let second = 2
//   for (let i = 3; i <= n; i++) {
//     const third = first + second
//     first = second
//     second = third
//   }
//   return second
// }
