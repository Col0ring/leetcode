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
// export function postorderTraversal(root: TreeNode | null): number[] {
//   const ans: number[] = []
//   const helper = (root: TreeNode | null) => {
//     if (root) {
//       if (root.left) {
//         helper(root.left)
//       }
//       if (root.right) {
//         helper(root.right)
//       }
//       ans.push(root.val)
//     }
//   }
//   helper(root)
//   return ans
// }

// 迭代
export function postorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  const stack: (TreeNode | null)[] = []
  if (!root) {
    return []
  }
  stack.push(root)
  while (stack.length) {
    const node = stack.pop()!
    // 倒着添加
    ans.unshift(node.val)
    if (node.left) {
      stack.push(node.left)
    }
    // 因为是倒着添加，所以要先弹右边
    if (node.right) {
      stack.push(node.right)
    }
  }
  return ans
}
