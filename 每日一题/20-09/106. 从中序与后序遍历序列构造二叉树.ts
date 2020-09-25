/*
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
  inorder: number[],
  postorder: number[]
): TreeNode | null {
  if (!inorder.length) {
    return null
  }
  const node = postorder.pop()!
  const mid = inorder.indexOf(node)
  let root = new TreeNode(node)
  root.right = buildTree(inorder.slice(mid + 1), postorder)
  root.left = buildTree(inorder.slice(0, mid), postorder)
  return root
}
