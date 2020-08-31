// // 递归
// export function PredictTheWinner(nums: number[]): boolean {
//   const total = (start: number, end: number, turn: number): number => {
//     if (start === end) {
//       return nums[start] * turn
//     }
//     const scoreStart = nums[start] * turn + total(start + 1, end, -turn)
//     const scoreEnd = nums[end] * turn + total(start, end - 1, -turn)
//     return Math.max(scoreStart * turn, scoreEnd * turn) * turn
//   }
//   // turn 为 1 和 -1，1是玩家1
//   return total(0, nums.length - 1, 1) >= 0
// }

// 动态规划

// 二维数组
// export function PredictTheWinner(nums: number[]): boolean {
//   const length = nums.length
//   const dp: number[][] = new Array(length).fill(
//     JSON.parse(JSON.stringify(new Array(length)))
//   )
//   for (let i = 0; i < length; i++) {
//     dp[i][i] = nums[i]
//   }
//   // 先依次判断前面的能否得分，再最后判断 0 - length -1
//   for (let i = length - 2; i >= 0; i--) {
//     for (let j = i + 1; j < length; j++) {
//       dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1])
//     }
//   }
//   return dp[0][length - 1] >= 0
// }

// // 一维数组
export function PredictTheWinner(nums: number[]): boolean {
  const length = nums.length
  const dp: number[] = new Array(nums.length)
  for (let i = 0; i < length; i++) {
    dp[i] = nums[i]
  }
  for (let i = length - 2; i >= 0; i--) {
    for (let j = i + 1; j < length; j++) {
      dp[j] = Math.max(nums[i] - dp[j], nums[j] - dp[j - 1])
    }
  }
  return dp[length - 1] >= 0
}
