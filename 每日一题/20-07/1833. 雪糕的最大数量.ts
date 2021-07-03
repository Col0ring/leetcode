// 排序 + 贪心
export function maxIceCream(costs: number[], coins: number): number {
  costs.sort((a, b) => a - b)
  let count = 0
  const n = costs.length
  for (let i = 0; i < n; i++) {
    const cost = costs[i]
    if (coins >= cost) {
      coins -= cost
      count++
    } else {
      break
    }
  }
  return count
}
