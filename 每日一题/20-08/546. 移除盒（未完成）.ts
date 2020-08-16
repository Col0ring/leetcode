export function removeBoxes(boxes: number[]): number {
  const dp: number[][][] = JSON.parse(
    JSON.stringify(
      new Array(100).fill(new Array(100).fill(new Array(100).fill(0)))
    )
  )
  const calculatePoints = (
    boxes: number[],
    dp: number[][][],
    l: number,
    r: number,
    k: number
  ) => {
    if (l > r) return 0
    if (dp[l][r][k] !== 0) return dp[l][r][k]
    while (r > l && boxes[r] == boxes[r - 1]) {
      r--
      k++
    }
    dp[l][r][k] = calculatePoints(boxes, dp, l, r - 1, 0) + (k + 1) * (k + 1)
    for (let i = l; i < r; i++) {
      if (boxes[i] === boxes[r]) {
        dp[l][r][k] = Math.max(
          dp[l][r][k],
          calculatePoints(boxes, dp, l, i, k + 1) +
            calculatePoints(boxes, dp, i + 1, r - 1, 0)
        )
      }
    }
    return dp[l][r][k]
  }
  return calculatePoints(boxes, dp, 0, boxes.length - 1, 0)
}
