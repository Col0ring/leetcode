// 暴力
export function fallingSquares(positions: number[][]): number[] {
  const n = positions.length
  const heights: number[] = []
  for (let i = 0; i < n; i++) {
    let left1 = positions[i][0],
      right1 = positions[i][0] + positions[i][1] - 1
    let height = positions[i][1]
    for (let j = 0; j < i; j++) {
      let left2 = positions[j][0],
        right2 = positions[j][0] + positions[j][1] - 1
      if (right1 >= left2 && right2 >= left1) {
        height = Math.max(height, heights[j] + positions[i][1])
      }
    }
    heights.push(height)
  }
  for (let i = 1; i < n; i++) {
    heights.splice(i, 1, Math.max(heights[i], heights[i - 1]))
  }
  return heights
}
