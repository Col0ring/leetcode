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
// 迭代
// export function insertIntoBST(
//   root: TreeNode | null,
//   val: number
// ): TreeNode | null {
//   let res = root
//   while (res) {
//     if (res.val >= val) {
//       if (res.left) {
//         res = res.left
//       } else {
//         res.left = new TreeNode(val)
//         return root
//       }
//     } else {
//       if (res.right) {
//         res = res.right
//       } else {
//         res.right = new TreeNode(val)
//         return root
//       }
//     }
//   }
//   // root === null
//   return new TreeNode(val)
// }

// 递归
export function insertIntoBST(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  if (!root) {
    return new TreeNode(val)
  }

  if (val > root.val) {
    root.right = insertIntoBST(root.right, val)
  } else {
    root.left = insertIntoBST(root.left, val)
  }
  return root
}
