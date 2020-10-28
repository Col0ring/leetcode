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

// 递归
// export function preorderTraversal(root: TreeNode | null): number[] {
//   if (!root) {
//     return []
//   }
//   const ans: number[] = []
//   const helper = (root: TreeNode | null) => {
//     if (!root) {
//       return
//     }
//     ans.push(root.val)
//     if (root.left) {
//       helper(root.left)
//     }
//     if (root.right) {
//       helper(root.right)
//     }
//   }
//   helper(root)
//   return ans
// }

// 迭代
export function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }
  const ans: number[] = []
  const stack: TreeNode[] = [root]
  while (stack.length) {
    const cur = stack.pop()!
    ans.push(cur.val)
    if (cur.right) {
      stack.push(cur.right)
    }
    if (cur.left) {
      stack.push(cur.left)
    }
  }
  return ans
}
