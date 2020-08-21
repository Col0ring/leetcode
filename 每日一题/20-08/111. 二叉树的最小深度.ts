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

export function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0
  } else {
    if (root.left && root.right) {
      const leftHeight = minDepth(root.left)
      const rightHeight = minDepth(root.right)
      return Math.min(leftHeight, rightHeight) + 1
    }
    if (root.left) {
      return minDepth(root.left) + 1
    }
    if (root.right) {
      return minDepth(root.right) + 1
    }
    return 1
  }
}
