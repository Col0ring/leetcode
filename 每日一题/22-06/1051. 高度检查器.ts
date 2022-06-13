export function heightChecker(heights: number[]): number {
  let n = heights.length,
    ans = 0
  const expected: number[] = new Array(n).fill(0)
  expected.splice(0, n, ...heights)
  expected.sort((a, b) => a - b)
  for (let i = 0; i < n; ++i) {
    if (heights[i] !== expected[i]) {
      ++ans
    }
  }
  return ans
}
