/**
 * Definition for node.
 * class Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: Node | null
 *     topRight: Node | null
 *     bottomLeft: Node | null
 *     bottomRight: Node | null
 *     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *     }
 * }
 */
class Node {
  val: boolean
  isLeaf: boolean
  topLeft: Node | null
  topRight: Node | null
  bottomLeft: Node | null
  bottomRight: Node | null
  constructor(
    val?: boolean,
    isLeaf?: boolean,
    topLeft?: Node,
    topRight?: Node,
    bottomLeft?: Node,
    bottomRight?: Node
  ) {
    this.val = val === undefined ? false : val
    this.isLeaf = isLeaf === undefined ? false : isLeaf
    this.topLeft = topLeft === undefined ? null : topLeft
    this.topRight = topRight === undefined ? null : topRight
    this.bottomLeft = bottomLeft === undefined ? null : bottomLeft
    this.bottomRight = bottomRight === undefined ? null : bottomRight
  }
}

export function construct(grid: number[][]): Node | null {
  const dfs = (
    grid: number[][],
    r0: number,
    c0: number,
    r1: number,
    c1: number
  ): Node => {
    let same = true
    for (let i = r0; i < r1; ++i) {
      for (let j = c0; j < c1; ++j) {
        if (grid[i][j] !== grid[r0][c0]) {
          same = false
          break
        }
      }
      if (!same) {
        break
      }
    }

    if (same) {
      return new Node(grid[r0][c0] === 1, true)
    }

    const ret = new Node(
      true,
      false,
      dfs(grid, r0, c0, Math.floor((r0 + r1) / 2), Math.floor((c0 + c1) / 2)),
      dfs(grid, r0, Math.floor((c0 + c1) / 2), Math.floor((r0 + r1) / 2), c1),
      dfs(grid, Math.floor((r0 + r1) / 2), c0, r1, Math.floor((c0 + c1) / 2)),
      dfs(grid, Math.floor((r0 + r1) / 2), Math.floor((c0 + c1) / 2), r1, c1)
    )
    return ret
  }
  return dfs(grid, 0, 0, grid.length, grid.length)
}
