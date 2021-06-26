// bfs
export function slidingPuzzle(board: number[][]): number {
  const neighbors = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [1, 3, 5],
    [2, 4]
  ]

  const sb = []
  for (let i = 0; i < 2; ++i) {
    for (let j = 0; j < 3; ++j) {
      sb.push(board[i][j])
    }
  }
  const initial = sb.join('')
  if ('123450' === initial) {
    return 0
  }

  let step = 0
  const queue: string[] = []
  queue.push(initial)
  const seen = new Set()
  seen.add(initial)

  // 枚举 status 通过一次交换操作得到的状态
  const get = (status: string) => {
    const ret = []
    const array = Array.from(status)
    const x = status.indexOf('0')
    for (const y of neighbors[x]) {
      ;[array[x], array[y]] = [array[y], array[x]]
      ret.push(array.join(''))
      ;[array[x], array[y]] = [array[y], array[x]]
    }
    return ret
  }

  while (queue.length) {
    ++step
    const size = queue.length
    for (let i = 0; i < size; ++i) {
      const status = queue.shift()!
      for (const nextStatus of get(status)) {
        if (!seen.has(nextStatus)) {
          if ('123450' === nextStatus) {
            return step
          }
          queue.push(nextStatus)
          seen.add(nextStatus)
        }
      }
    }
  }

  return -1
}
