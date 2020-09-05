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
// export function levelOrderBottom(root: TreeNode | null): number[][] {
//   if (!root) {
//     return []
//   }
//   const ans: number[][] = []
//   const dfs = (node: TreeNode, level: number) => {
//     if (ans[level]) {
//       ans[level].push(node.val)
//     } else {
//       ans[level] = [node.val]
//     }
//     if (node.left) {
//       dfs(node.left, level + 1)
//     }
//     if (node.right) {
//       dfs(node.right, level + 1)
//     }
//   }
//   dfs(root, 0)
//   ans.reverse()
//   return ans
// }

// bfs
export function levelOrderBottom(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }
  const ans: number[][] = []
  const queue: TreeNode[] = [root]
  while (queue.length) {
    let len = queue.length
    ans.push(new Array(0))
    while (len) {
      const node = queue.shift()!
      ans[ans.length - 1].push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      len--
    }
  }
  ans.reverse()
  return ans
}
