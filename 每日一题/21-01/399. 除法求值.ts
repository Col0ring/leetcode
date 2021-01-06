/**
 * 参考例子
 * equations = [["a","b"],["b","c"]],
 * values = [2.0,3.0],
 * queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
 */

export function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  const grapf: Record<string, any> = Object.create(null)

  // 生成图
  for (let i: number = 0; i < values.length; i++) {
    const x: string = equations[i][0]
    const y: string = equations[i][1]
    const value = values[i]
    if (!grapf[x]) grapf[x] = Object.create(null)
    grapf[x][y] = value
    if (!grapf[y]) grapf[y] = Object.create(null)
    grapf[y][x] = 1 / value
  }
  /**
   * 图结构
   * [Object: null prototype] {
   *   a: [Object: null prototype] { b: 2 },
   *   b: [Object: null prototype] { a: 0.5, c: 3 },
   *   c: [Object: null prototype] { b: 0.3333333333333333 }
   * }
   */

  // visited 这个set结构是记录是否 "见过" 是否 "参观过"
  // 避免 🚀🚀🚀 广度优先搜索 🚀🚀🚀 时死循环无限递归
  const visited: Set<string> = new Set()
  const d = (x: string, y: string): number => {
    // 没有被除数 直接返回 - 1
    if (!grapf[x]) return -1
    // 都有，就直接返回该值
    if (grapf[x][y]) return grapf[x][y]

    // 其他除数 'c' 的数组
    const k: string[] = Object.keys(grapf[x])
    for (let i: number = 0; i < values.length; i++) {
      // 如果有 c 这个除数
      // 说明 c 正在被调教中，我们就不需要再调教啦～～👯
      if (!visited.has(k[i])) {
        visited.add(k[i])
        // 🚀🚀🚀 广度优先搜索 🚀🚀🚀 寻找另一个 c / y 的值
        const t: number = d(k[i], y)
        visited.delete(k[i])
        // 如果 c / y 的值 是有值的，返回 x / c * (c / y) = x / y。
        // 🤡c: 小丑竟是我自己！！！！ 我哭了QAQ 嘤嘤嘤
        if (t !== -1) return grapf[x][k[i]] * t
      }
    }
    return -1
  }
  return queries.map(([x, y]) => d(x, y))
}
