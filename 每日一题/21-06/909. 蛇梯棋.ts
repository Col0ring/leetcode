export function snakesAndLadders(board: number[][]): number {
  const n = board.length
  const vis: boolean[] = new Array(n * n + 1).fill(false)
  const queue = [[1, 0]]
  while (queue.length) {
    const p = queue.shift()!
    for (let i = 1; i <= 6; ++i) {
      let nxt = p[0] + i
      if (nxt > n * n) {
        // 超出边界
        break
      }
      const rc = id2rc(nxt, n) // 得到下一步的行列
      if (board[rc[0]][rc[1]] > 0) {
        // 存在蛇或梯子
        nxt = board[rc[0]][rc[1]]
      }
      if (nxt === n * n) {
        // 到达终点
        return p[1] + 1
      }
      if (!vis[nxt]) {
        vis[nxt] = true
        queue.push([nxt, p[1] + 1]) // 扩展新状态
      }
    }
  }
  return -1
}

const id2rc = (id: number, n: number) => {
  let r = Math.floor((id - 1) / n),
    c = (id - 1) % n
  if (r % 2 === 1) {
    c = n - 1 - c
  }
  return [n - 1 - r, c]
}
