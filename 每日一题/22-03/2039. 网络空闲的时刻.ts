export function networkBecomesIdle(
  edges: number[][],
  patience: number[]
): number {
  const grah = new Map<number, number[]>() // 构造无向图
  for (const [x, y] of edges) {
    grah.has(x) ? grah.get(x)!.push(y) : grah.set(x, [y])
    grah.has(y) ? grah.get(y)!.push(x) : grah.set(y, [x])
  }
  const queue = [0],
    visited = new Set([0])
  let index = 0,
    distance = 0,
    maxIdleTime = 0
  while (index < queue.length) {
    // 广度优先搜索，移动 index 指针，提高性能
    distance++
    const length = queue.length
    while (index < length) {
      const tmp = grah.get(queue[index++])!
      for (const child of tmp) {
        if (visited.has(child)) continue // 记录已访问过的节点，避免重复遍历
        visited.add(child)
        const idleTime =
          (((2 * distance - 1) / patience[child]) | 0) * patience[child] +
          2 * distance +
          1
        if (idleTime > maxIdleTime) maxIdleTime = idleTime // 计算空闲时间，更新最大值
        queue.push(child)
      }
    }
  }
  return maxIdleTime
}
