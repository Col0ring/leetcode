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

// export function isBalanced(root: TreeNode | null): boolean {
//   const height = (root: TreeNode | null): number => {
//     if (!root) {
//       return 0
//     } else {
//       return Math.max(height(root.left), height(root.right)) + 1
//     }
//   }
//   if (!root) {
//     return true
//   } else {
//     return (
//       Math.abs(height(root.left) - height(root.right)) <= 1 &&
//       isBalanced(root.left) &&
//       isBalanced(root.right)
//     )
//   }
// }

// 减少重复
const mapHelper = new Map<TreeNode | null, number>()
const height = (root: TreeNode | null): number => {
  if (!root) {
    return 0
  } else {
    if (mapHelper.has(root)) {
      return mapHelper.get(root)!
    }
    const treeHeight = Math.max(height(root.left), height(root.right)) + 1
    mapHelper.set(root, treeHeight)
    return treeHeight
  }
}
// 自上而下递归
export function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true
  } else {
    return (
      Math.abs(height(root.left) - height(root.right)) <= 1 &&
      isBalanced(root.left) &&
      isBalanced(root.right)
    )
  }
}
