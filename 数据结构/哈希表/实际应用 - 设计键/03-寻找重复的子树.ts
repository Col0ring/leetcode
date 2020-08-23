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
// 序列化
export function findDuplicateSubtrees(
  root: TreeNode | null
): Array<TreeNode | null> {
  const ans: Array<TreeNode | null> = []
  const mapHelper = new Map<string, number>()
  const helper = (node: TreeNode | null): string => {
    if (!node) {
      return '#'
    }
    const serial = node.val + ',' + helper(node.left) + ',' + helper(node.right)
    mapHelper.set(serial, (mapHelper.get(serial) || 0) + 1)
    if (mapHelper.get(serial) === 2) {
      ans.push(node)
    }
    return serial
  }
  helper(root)
  return ans
}
