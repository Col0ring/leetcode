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
// dfs
// export function sumNumbers(root: TreeNode | null): number {
//   const dfs = (root: TreeNode | null, prevSum: number): number => {
//     if (root === null) {
//       return 0
//     }
//     const sum = prevSum * 10 + root.val
//     if (root.left == null && root.right == null) {
//       return sum
//     } else {
//       return dfs(root.left, sum) + dfs(root.right, sum)
//     }
//   }
//   return dfs(root, 0)
// }

// bfs
export function sumNumbers(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }
  let sum = 0
  const nodeQueue: TreeNode[] = []
  const numQueue: number[] = []
  nodeQueue.push(root)
  numQueue.push(root.val)
  while (nodeQueue.length) {
    const node = nodeQueue.shift()!
    const num = numQueue.shift()!
    const left = node.left,
      right = node.right
    if (left === null && right === null) {
      sum += num
    } else {
      if (left !== null) {
        nodeQueue.push(left)
        numQueue.push(num * 10 + left.val)
      }
      if (right !== null) {
        nodeQueue.push(right)
        numQueue.push(num * 10 + right.val)
      }
    }
  }
  return sum
}
