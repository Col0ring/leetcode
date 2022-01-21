// 双向 bfs
export function minJumps(arr: number[]): number {
  if (arr.length <= 1) return 0
  const Len = arr.length
  const map = new Map<number, number[]>()
  //arr的value为key
  //相同arr的value的index存储为数组
  for (let i = 0; i < Len; i++) {
    if (!map.has(arr[i])) map.set(arr[i], [])
    if (i > 0 && arr[i - 1] === arr[i] && arr[i] === arr[i + 1]) continue
    map.get(arr[i])!.push(i)
  }
  //如果首尾值相同，直接返回
  if (arr[0] === arr[Len - 1]) return 1

  let beginSet = new Set<number>([0])
  let endSet = new Set<number>([Len - 1])

  let level = 1
  //存储所有出现的index，避免重复使用，剪枝
  const all = new Set([...beginSet, ...endSet])

  while (beginSet.size > 0) {
    //存储beginSet能到到所有index
    const newSet = new Set<number>()
    for (const item of beginSet) {
      if (endSet.has(item)) {
        return level
      }
      //遍历arr[item]能到到所有index
      for (const index of map.get(arr[item])!) {
        if (endSet.has(index)) {
          return level
        }
        if (all.has(index)) continue
        newSet.add(index)
        all.add(index)
      }
      const add = item + 1
      const del = item - 1

      if (endSet.has(add) || endSet.has(del)) {
        return level
      }
      if (add < Len && !all.has(add)) {
        newSet.add(add)
        all.add(add)
      }
      if (del >= 0 && !all.has(del)) {
        newSet.add(del)
        all.add(del)
      }
    }
    beginSet = newSet
    level++
    //每次使用较少的index集合
    if (beginSet.size > endSet.size) {
      ;[beginSet, endSet] = [endSet, beginSet]
    }
  }
  return 0
}
