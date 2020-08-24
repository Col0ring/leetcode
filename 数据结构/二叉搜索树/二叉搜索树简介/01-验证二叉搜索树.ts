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
// export function isValidBST(root: TreeNode | null): boolean {
//   const helper = (
//     root: TreeNode | null,
//     lower: number,
//     upper: number
//   ): boolean => {
//     if (!root) return true
//     if (root.val <= lower || root.val >= upper) return false
//     return (
//       helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
//     )
//   }

//   return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
// }

// 中序遍历
export function isValidBST(root: TreeNode | null): boolean {
  let stack: (TreeNode | null)[] = []
  let inorder = Number.MIN_SAFE_INTEGER

  while (stack.length || root) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()!
    // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
    if (root.val <= inorder) return false
    inorder = root.val
    root = root.right
  }
  return true
}
