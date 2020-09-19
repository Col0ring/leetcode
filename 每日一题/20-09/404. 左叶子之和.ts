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

export function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  const dfs = (node: TreeNode, flag: boolean) => {
    if (flag && !node.left && !node.right) {
      ans += node.val
    }
    if (node.left) {
      dfs(node.left, true)
    }
    if (node.right) {
      dfs(node.right, false)
    }
  }
  let ans = 0
  dfs(root, false)
  return ans
}
