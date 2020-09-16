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
// export function invertTree(root: TreeNode | null): TreeNode | null {
//   if (!root) {
//     return null
//   }
//   const queue = [root]
//   while (queue.length) {
//     let len = queue.length
//     while (len) {
//       const cur = queue.shift()!
//       const temp = cur.left
//       cur.left = cur.right
//       cur.right = temp
//       if (cur.left) {
//         queue.push(cur.left)
//       }
//       if (cur.right) {
//         queue.push(cur.right)
//       }
//       len--
//     }
//   }
//   return root
// }

// dfs
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null
  }
  const dfs = (node: TreeNode) => {
    const temp = node.left
    node.left = node.right
    node.right = temp
    if (node.left) {
      dfs(node.left)
    }
    if (node.right) {
      dfs(node.right)
    }
  }

  dfs(root)
  return root
}
