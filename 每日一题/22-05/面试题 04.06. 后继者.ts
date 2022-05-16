/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
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

export function inorderSuccessor(root: TreeNode | null, p: TreeNode) {
  const stack: TreeNode[] = []
  let prev = null,
    curr = root
  while (stack.length || curr) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()!
    if (prev === p) {
      return curr
    }
    prev = curr
    curr = curr.right
  }
  return null
}
