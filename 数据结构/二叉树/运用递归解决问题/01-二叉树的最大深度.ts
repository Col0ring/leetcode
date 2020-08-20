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
// export function maxDepth(root: TreeNode | null): number {
//   if (!root) {
//     return 0
//   }
//   let ans = 0
//   const queue: TreeNode[] = []
//   queue.push(root)
//   while (queue.length) {
//     let size = queue.length
//     // 每层都重新遍历
//     while (size > 0) {
//       const node = queue.shift()!
//       if (node.left) {
//         queue.push(node.left)
//       }
//       if (node.right) {
//         queue.push(node.right)
//       }
//       size--
//     }
//     ans++
//   }
//   return ans
// }

// 递归
export function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0
  } else {
    const leftHeight = maxDepth(root.left)
    const rightHeight = maxDepth(root.right)
    return Math.max(leftHeight, rightHeight) + 1
  }
}
