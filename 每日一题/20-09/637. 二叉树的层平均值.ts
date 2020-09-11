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

// bfs
export function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }
  const ans: number[] = []
  const queue: TreeNode[] = [root]
  while (queue.length) {
    let len = queue.length
    const n = len
    let sum = 0
    while (len) {
      const node = queue.shift()!
      sum += node.val
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      len--
    }
    ans.push(sum / n)
  }
  return ans
}
