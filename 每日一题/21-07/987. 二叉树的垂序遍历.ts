/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export function verticalTraversal(root: TreeNode | null): number[][] {
  const nodes: [col: number, row: number, val: number][] = []
  dfs(root, 0, 0, nodes)
  nodes.sort((tuple1, tuple2) => {
    if (tuple1[0] !== tuple2[0]) {
      return tuple1[0] - tuple2[0]
    } else if (tuple1[1] !== tuple2[1]) {
      return tuple1[1] - tuple2[1]
    } else {
      return tuple1[2] - tuple2[2]
    }
  })

  const ans: number[][] = []
  let lastcol = -Number.MAX_VALUE
  for (const tuple of nodes) {
    let col = tuple[0],
      value = tuple[2]
    if (col !== lastcol) {
      lastcol = col
      ans.push([])
    }
    ans[ans.length - 1].push(value)
  }
  return ans
}

const dfs = (
  node: TreeNode | null,
  row: number,
  col: number,
  nodes: [col: number, row: number, val: number][]
) => {
  if (!node) {
    return
  }
  nodes.push([col, row, node.val])
  dfs(node.left, row + 1, col - 1, nodes)
  dfs(node.right, row + 1, col + 1, nodes)
}
