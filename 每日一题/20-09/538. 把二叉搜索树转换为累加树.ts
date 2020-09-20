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

// 反序中序遍历
export function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0
  const helper = (node: TreeNode | null) => {
    if (node) {
      // 因为是二叉搜索树，所以顺序是右，中，左，sum 依次变大
      helper(node.right)
      sum += node.val
      node.val = sum
      helper(node.left)
    }
  }
  helper(root)
  return root
}
