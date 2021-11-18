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
export function findTilt(root: TreeNode | null): number {
  let ans = 0

  const dfs = (node: TreeNode | null): number => {
    if (!node) {
      return 0
    }
    const sumLeft = dfs(node.left)
    const sumRight = dfs(node.right)
    ans += Math.abs(sumLeft - sumRight)
    return sumLeft + sumRight + node.val
  }

  dfs(root)
  return ans
}
