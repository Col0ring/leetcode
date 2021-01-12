export function sortItems(
  n: number,
  m: number,
  group: number[],
  beforeItems: number[][]
): number[] {
  const topSort = (deg: number[], graph: number[][], items: number[]) => {
    const Q: number[] = []
    for (const item of items) {
      if (deg[item] === 0) {
        Q.push(item)
      }
    }
    const res = []
    while (Q.length) {
      const u = Q.shift()!
      res.push(u)
      for (let i = 0; i < graph[u].length; ++i) {
        const v = graph[u][i]
        if (--deg[v] === 0) {
          Q.push(v)
        }
      }
    }
    return res.length == items.length ? res : []
  }

  const groupItem: number[][] = new Array(n + m).fill(0).map(() => [])

  // 组间和组内依赖图
  const groupGraph: number[][] = new Array(n + m).fill(0).map(() => [])
  const itemGraph: number[][] = new Array(n).fill(0).map(() => [])

  // 组间和组内入度数组
  const groupDegree: number[] = new Array(n + m).fill(0)
  const itemDegree: number[] = new Array(n).fill(0)

  const id = new Array(n + m).fill(0).map((v, index) => index)

  let leftId = m
  // 给未分配的 item 分配一个 groupId
  for (let i = 0; i < n; ++i) {
    if (group[i] === -1) {
      group[i] = leftId
      leftId += 1
    }
    groupItem[group[i]].push(i)
  }
  // 依赖关系建图
  for (let i = 0; i < n; ++i) {
    const curGroupId = group[i]
    for (const item of beforeItems[i]) {
      const beforeGroupId = group[item]
      if (beforeGroupId === curGroupId) {
        itemDegree[i] += 1
        itemGraph[item].push(i)
      } else {
        groupDegree[curGroupId] += 1
        groupGraph[beforeGroupId].push(curGroupId)
      }
    }
  }

  // 组间拓扑关系排序
  const groupTopSort = topSort(groupDegree, groupGraph, id)
  if (groupTopSort.length == 0) {
    return []
  }
  const ans: number[] = []
  // 组内拓扑关系排序
  for (const curGroupId of groupTopSort) {
    const size = groupItem[curGroupId].length
    if (size == 0) {
      continue
    }
    const res = topSort(itemDegree, itemGraph, groupItem[curGroupId])
    if (res.length === 0) {
      return []
    }
    for (const item of res) {
      ans.push(item)
    }
  }
  return ans
}
