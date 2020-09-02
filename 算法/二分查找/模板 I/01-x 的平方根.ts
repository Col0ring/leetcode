// 普通循环
// export function mySqrt(x: number): number {
//   for (let i = 0; i <= x; i++) {
//     if (i * i <= x && (i + 1) * (i + 1) > x) {
//       return i
//     }
//   }
//   return 0
// }

// 袖珍计算器算法
// export function mySqrt(x: number): number {
//   if (x === 0) {
//     return 0
//   }
//   const ans = Math.floor(Math.exp(0.5 * Math.log(x)))
//   return (ans + 1) * (ans + 1) <= x ? ans + 1 : ans
// }

// 二分
export function mySqrt(x: number): number {
  let l = 0,
    r = x,
    ans = -1
  while (l <= r) {
    const mid = Math.floor((r + l) / 2)
    if (mid * mid <= x) {
      ans = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return ans
}
