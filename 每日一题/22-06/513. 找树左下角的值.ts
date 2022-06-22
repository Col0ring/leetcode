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

export function findBottomLeftValue(root: TreeNode | null): number {
  let curVal = 0
  const dfs = (root: TreeNode | null, height: number) => {
    if (!root) {
      return
    }
    height++
    dfs(root.left, height)
    dfs(root.right, height)
    if (height > curHeight) {
      curHeight = height
      curVal = root.val
    }
  }

  let curHeight = 0
  dfs(root, 0)
  return curVal
}
