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

export function tree2str(root: TreeNode | null): string {
  if (!root) {
    return ''
  }
  if (!root.left && !root.right) {
    return '' + root.val
  }
  if (!root.right) {
    return root.val + '(' + tree2str(root.left) + ')'
  }
  return (
    root.val + '(' + tree2str(root.left) + ')(' + tree2str(root.right) + ')'
  )
}
