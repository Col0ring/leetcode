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

export function countNodes(root: TreeNode | null): number {
  if (root == null) {
    return 0
  }
  let lH = 0,
    rH = 0
  let lNode = root,
    rNode = root

  while (lNode) {
    lH++
    lNode = lNode.left!
  }
  while (rNode) {
    rH++
    rNode = rNode.right!
  }
  if (lH == rH) {
    return 2 ** lH - 1
  }
  return 1 + countNodes(root.left) + countNodes(root.right)
}
