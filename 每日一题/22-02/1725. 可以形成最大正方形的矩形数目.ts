export function countGoodRectangles(rectangles: number[][]): number {
  let res = 0,
    maxLen = 0
  for (const rectangle of rectangles) {
    const k = Math.min(rectangle[0], rectangle[1])
    if (k === maxLen) {
      ++res
    } else if (k > maxLen) {
      res = 1
      maxLen = k
    }
  }
  return res
}
