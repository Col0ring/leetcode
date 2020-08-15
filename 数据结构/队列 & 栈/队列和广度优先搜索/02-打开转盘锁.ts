// bfs
export function openLock(deadends: string[], target: string): number {
  const queue = []
  queue.push('0000')
  // 加入 null 每一层的隔离
  queue.push(null)

  const seen = new Set<string>()
  seen.add('0000')

  let depth = 0
  while (queue.length) {
    const node = queue.shift()
    // node 为 null，代表下一层开始
    if (!node) {
      depth++
      // 只能在这里加，如果在下面加会有重复的，层数会变多
      if (queue[0]) {
        queue.push(null)
      }
    } else if (node === target) {
      return depth
    } else if (!deadends.includes(node)) {
      // 进入这里就是下一层了 8**(depth + 1)个了
      // 从 0000 开始搜索。对于每一个状态，它可以扩展到最多 8 个状态
      for (let i = 0; i < 4; ++i) {
        for (let d = -1; d <= 1; d += 2) {
          // 8种状态
          // 因为值只能是 0-9 所以要进行换算
          const y = (+node[i] + d + 10) % 10
          // 将原来的值替换掉
          const nei: string = node.substring(0, i) + y + node.substring(i + 1)
          if (!seen.has(nei)) {
            seen.add(nei)
            queue.push(nei)
          }
        }
      }
    }
  }
  return -1
}
