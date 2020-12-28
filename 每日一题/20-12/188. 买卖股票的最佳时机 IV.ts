// 二维
// export function maxProfit(k: number, prices: number[]): number {
//   if (!prices.length) {
//     return 0
//   }

//   const n = prices.length
//   k = Math.min(k, Math.floor(n / 2))
//   const buy: number[][] = new Array(n)
//     .fill(0)
//     .map(() => new Array(k + 1).fill(0))
//   const sell: number[][] = new Array(n)
//     .fill(0)
//     .map(() => new Array(k + 1).fill(0))

//   buy[0][0] = -prices[0]
//   sell[0][0] = 0
//   for (let i = 1; i <= k; ++i) {
//     buy[0][i] = sell[0][i] = -Number.MAX_VALUE
//   }

//   for (let i = 1; i < n; ++i) {
//     buy[i][0] = Math.max(buy[i - 1][0], sell[i - 1][0] - prices[i])
//     for (let j = 1; j <= k; ++j) {
//       buy[i][j] = Math.max(buy[i - 1][j], sell[i - 1][j] - prices[i])
//       sell[i][j] = Math.max(sell[i - 1][j], buy[i - 1][j - 1] + prices[i])
//     }
//   }

//   return Math.max(...sell[n - 1])
// }

// 一维
export function maxProfit(k: number, prices: number[]): number {
  if (!prices.length) {
    return 0
  }

  const n = prices.length
  k = Math.min(k, Math.floor(n / 2))
  const buy: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(k + 1).fill(0))
  const sell: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(k + 1).fill(0))

  buy[0][0] = -prices[0]
  sell[0][0] = 0
  for (let i = 1; i <= k; ++i) {
    buy[0][i] = sell[0][i] = -Number.MAX_VALUE
  }

  for (let i = 1; i < n; ++i) {
    buy[i][0] = Math.max(buy[i - 1][0], sell[i - 1][0] - prices[i])
    for (let j = 1; j <= k; ++j) {
      buy[i][j] = Math.max(buy[i - 1][j], sell[i - 1][j] - prices[i])
      sell[i][j] = Math.max(sell[i - 1][j], buy[i - 1][j - 1] + prices[i])
    }
  }

  return Math.max(...sell[n - 1])
}
