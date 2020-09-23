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

export function mergeTrees(
  t1: TreeNode | null,
  t2: TreeNode | null
): TreeNode | null {
  if (t1 === null) {
    return t2
  }
  if (t2 === null) {
    return t1
  }
  const merged = new TreeNode(t1.val + t2.val)
  merged.left = mergeTrees(t1.left, t2.left)
  merged.right = mergeTrees(t1.right, t2.right)
  return merged
}
