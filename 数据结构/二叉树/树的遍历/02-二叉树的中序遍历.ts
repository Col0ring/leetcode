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
// export function inorderTraversal(root: TreeNode | null): number[] {
//   const ans: number[] = []
//   const helper = (root: TreeNode | null) => {
//   // 左中右的推入
//     if (root) {
//       if (root.left) {
//         helper(root.left)
//       }
//       ans.push(root.val)
//       if (root.right) {
//         helper(root.right)
//       }
//     }
//   }
//   helper(root)
//   return ans
// }

// 栈的遍历
export function inorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  const stack: (TreeNode | null)[] = []
  let curr = root
  while (curr || stack.length) {
    // 一直将最左边的推入
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()!
    ans.push(curr.val)
    curr = curr.right
  }
  return ans
}
