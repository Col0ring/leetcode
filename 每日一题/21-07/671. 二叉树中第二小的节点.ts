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

export function findSecondMinimumValue(root: TreeNode | null): number {
  if (!root) {
    return -1
  }
  let ans = -1
  const rootValue = root.val

  const dfs = (node: TreeNode | null) => {
    if (node === null) {
      return
    }
    if (ans !== -1 && node.val >= ans) {
      return
    }
    if (node.val > rootValue) {
      ans = node.val
    }
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)
  return ans
}
