// 暴力
export function totalMoney(n: number): number {
  let week = 1,
    day = 1
  let res = 0
  for (let i = 0; i < n; ++i) {
    res += week + day - 1
    ++day
    if (day === 8) {
      day = 1
      ++week
    }
  }
  return res
}
