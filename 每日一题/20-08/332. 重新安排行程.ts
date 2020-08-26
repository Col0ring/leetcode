// 就是一次遍历完所有的路程
export function findItinerary(tickets: string[][]): string[] {
  const map: { [key: string]: string[] } = {}
  const ans: string[] = []
  const dfs = (curr: string) => {
    // 如果有值是会一直递归，如果没有值就是死胡同了
    while (map[curr] && map[curr].length > 0) {
      // 把已经走过的节点删除，如果是在递归里面删除的外层同样会减少
      dfs(map[curr].shift()!)
    }
    // 当前节点的死胡同分支将会优先于其他非「死胡同」分支入栈。
    ans.push(curr)
  }
  // 将所有的一对多的映射推入
  for (let ticket of tickets) {
    const src = ticket[0]
    const dst = ticket[1]
    if (!map[src]) {
      map[src] = []
    }
    map[src].push(dst)
  }
  // 自然排序
  Object.keys(map).forEach((key) => map[key].sort())
  dfs('JFK')
  // 倒序排列的
  ans.reverse()
  return ans
}
