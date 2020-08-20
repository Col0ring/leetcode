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
// export function isSymmetric(root: TreeNode | null): boolean {
//   const helper = (p: TreeNode | null, q: TreeNode | null): boolean => {
//     if (!p && !q) return true
//     if (!p || !q) return false
//     // 镜像对称比较
//     return p.val === q.val && helper(p.left, q.right) && helper(p.right, q.left)
//   }
//   return helper(root, root)
// }

// 迭代  bfs
export function isSymmetric(root: TreeNode | null): boolean {
  const q: (TreeNode | null)[] = []
  let u = root
  let v = root
  q.push(u)
  q.push(v)
  while (q.length) {
    u = q.shift()!
    v = q.shift()!
    if (!u && !v) {
      continue
    }
    if (!u || !v || u.val !== v.val) {
      return false
    }

    q.push(u.left)
    q.push(v.right)

    q.push(u.right)
    q.push(v.left)
  }
  return true
}
