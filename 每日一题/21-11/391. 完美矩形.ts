export function isRectangleCover(rectangles: number[][]): boolean {
  let x1 = Number.MAX_VALUE,
    y1 = Number.MAX_VALUE,
    x2 = Number.MIN_VALUE,
    y2 = Number.MIN_VALUE
  let areas = 0,
    set1 = new Set<string>(),
    set2 = new Set<string>(),
    flag = true
  // 一次遍历，算出小矩形的面积和，并把不能两两拼接的顶点找出来放入集合1
  // 如果能够精确拼接，集合1中应该有且只有大矩形的四个顶点
  for (const rec of rectangles) {
    const vertex = [
      [rec[0], rec[1]],
      [rec[2], rec[3]],
      [rec[0], rec[3]],
      [rec[2], rec[1]]
    ]
    x1 = Math.min(x1, rec[0])
    y1 = Math.min(y1, rec[1])
    x2 = Math.max(x2, rec[2])
    y2 = Math.max(y2, rec[3])
    areas += (rec[2] - rec[0]) * (rec[3] - rec[1])
    for (const v of vertex) {
      if (!set1.has(v.join(' '))) {
        set1.add(v.join(' '))
      } else {
        set1.delete(v.join(' '))
      }
    }
  }
  // 把大矩形的四个顶点放入集合2，比较集合1和集合2是否全等
  const vertex = [
    [x1, y1],
    [x2, y2],
    [x1, y2],
    [x2, y1]
  ]
  for (const v of vertex) {
    set2.add(v.join(' '))
  }
  if (set1.size !== set2.size) {
    flag = false
  } else {
    for (let el of set1) {
      if (!set2.has(el)) {
        flag = false
        break
      }
    }
  }
  return areas === (x2 - x1) * (y2 - y1) && flag
}
