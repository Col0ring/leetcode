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

// 非负，中序遍历
// 树中至少有 2 个节点
// 因为是升序排列，所以一定是邻近的两个节点
export function getMinimumDifference(root: TreeNode | null): number {
  let ans = Number.MAX_SAFE_INTEGER,
    pre = -1
  const dfs = (root: TreeNode | null) => {
    if (!root) {
      return
    }
    dfs(root.left)
    if (pre === -1) {
      pre = root.val
    } else {
      // 中序遍历
      ans = Math.min(ans, root.val - pre)
      pre = root.val
    }
    dfs(root.right)
  }
  dfs(root)
  return ans
}
