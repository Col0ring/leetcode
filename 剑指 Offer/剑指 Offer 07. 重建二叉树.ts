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

export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  const dfs = (
    preorder: number[],
    l1: number,
    r1: number,
    inorder: number[],
    l2: number,
    r2: number
  ) => {
    if (l1 > r1 || l2 > r2) return null //这个很重要
    let i = l2
    // 可以用 map 做个记录
    while (inorder[i] != preorder[l1]) {
      //在中序数组中去寻找根节点
      i++
    }
    const root = new TreeNode(preorder[l1])
    root.left = dfs(preorder, l1 + 1, l1 + i - l2, inorder, l2, i - 1)
    root.right = dfs(preorder, l1 + i - l2 + 1, r1, inorder, i + 1, r2)
    return root
  }

  return dfs(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
}
