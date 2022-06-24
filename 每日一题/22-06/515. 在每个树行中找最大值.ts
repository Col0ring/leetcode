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

export function largestValues(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }
  const res: number[] = []
  const dfs = (root: TreeNode, curHeight: number) => {
    if (curHeight === res.length) {
      res.push(root.val)
    } else {
      res.splice(curHeight, 1, Math.max(res[curHeight], root.val))
    }
    if (root.left) {
      dfs(root.left, curHeight + 1)
    }
    if (root.right) {
      dfs(root.right, curHeight + 1)
    }
  }
  dfs(root, 0)
  return res
}
