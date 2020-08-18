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
export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }
  const ans: number[][] = []
  const queue: (TreeNode | null)[] = []
  let arr: number[] = []
  queue.push(root)
  queue.push(null)
  let pre: TreeNode | null = null
  while (queue.length) {
    const node = queue.shift()!
    if (!node) {
      if (pre) {
        queue.push(null)
        ans.push(arr)
        arr = []
      }
    } else {
      arr.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    pre = node
  }
  return ans
}
