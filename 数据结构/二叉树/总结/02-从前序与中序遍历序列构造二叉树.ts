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
export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (!inorder.length) {
    return null
  }
  const node = preorder.shift()!
  const mid = inorder.indexOf(node)
  let root = new TreeNode(node)
  root.left = buildTree(preorder, inorder.slice(0, mid))
  root.right = buildTree(preorder, inorder.slice(mid + 1))
  return root
}
