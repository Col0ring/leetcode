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

export function findTarget(root: TreeNode | null, k: number): boolean {
  const set = new Set<number>()
  const dfs = (root: TreeNode | null, k: number): boolean => {
    if (!root) {
      return false
    }
    if (set.has(k - root.val)) {
      return true
    }
    set.add(root.val)
    return dfs(root.left, k) || dfs(root.right, k)
  }
  return dfs(root, k)
}
