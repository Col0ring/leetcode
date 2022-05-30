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

export function sumRootToLeaf(root: TreeNode | null): number {
  const dfs = (root: TreeNode | null, val: number): number => {
    if (!root) {
      return 0
    }
    val = (val << 1) | root.val
    if (!root.left && !root.right) {
      return val
    }
    return dfs(root.left, val) + dfs(root.right, val)
  }
  return dfs(root, 0)
}
