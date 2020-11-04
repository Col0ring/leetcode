export function insert(
  intervals: number[][],
  newInterval: number[]
): number[][] {
  let [a, b] = newInterval
  let flag = false
  const res: number[][] = []
  for (const item of intervals) {
    const [c, d] = item
    if (c > b) {
      // 当前左边比插入的右边大, 说明要在当前左边插入
      if (!flag) {
        res.push([a, b])
        flag = true
      }
      res.push(item)
    } else if (d < a) {
      // 当前右边比要插入的左边小, 说明要在当前的右边插入
      res.push(item)
    } else {
      // 说明有相交
      a = Math.min(a, c)
      b = Math.max(b, d)
    }
  }
  if (!flag) {
    res.push([a, b])
  }

  return res
}
