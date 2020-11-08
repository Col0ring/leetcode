export function maxProfit(prices: number[]): number {
  let total = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      total += prices[i + 1] - prices[i]
    }
  }
  return total
}
