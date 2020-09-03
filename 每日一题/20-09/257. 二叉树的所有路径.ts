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
// export function binaryTreePaths(root: TreeNode | null): string[] {
//   if (!root) {
//     return []
//   }
//   const ans: string[] = []
//   const dfs = (node: TreeNode, str: string): void => {
//     if (!node.left && !node.right) {
//       ans.push(str + node.val)
//       return
//     }
//     if (node.left) {
//       dfs(node.left, str + node.val + '->')
//     }
//     if (node.right) {
//       dfs(node.right, str + node.val + '->')
//     }
//   }
//   dfs(root, '')
//   return ans
// }

// bfs
export function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) {
    return []
  }
  const ans: string[] = []
  const queue = [root]
  const pathQueue = [root.val.toString()]
  while (queue.length) {
    const node = queue.shift()!
    const path = pathQueue.shift()!
    if (!node.left && !node.right) {
      ans.push(path)
    } else {
      if (node.left) {
        queue.push(node.left)
        pathQueue.push(path + '->' + node.left.val.toString())
      }
      if (node.right) {
        queue.push(node.right)
        pathQueue.push(path + '->' + node.right.val.toString())
      }
    }
  }
  return ans
}
