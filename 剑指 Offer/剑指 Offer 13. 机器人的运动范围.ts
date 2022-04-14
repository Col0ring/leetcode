//  bfs
export function movingCount(m: number, n: number, k: number): number {
  let ans = 0
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false))
  const queue: number[][] = []
  queue.push([0, 0])
  while (queue.length) {
    const [row, col] = queue.pop()!
    if (
      row >= m ||
      row < 0 ||
      col >= n ||
      col < 0 ||
      visited[row][col] ||
      getNum(row) + getNum(col) > k
    ) {
      continue
    }
    queue.push([row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1])
    visited[row][col] = true
    ans++
  }
  return ans
}

function getNum(x: number) {
  let res = 0
  while (x) {
    res += x % 10
    x = Math.floor(x / 10)
  }
  return res
}
