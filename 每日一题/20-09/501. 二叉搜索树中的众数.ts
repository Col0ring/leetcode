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
// 使用了额外空间
// export function findMode(root: TreeNode | null): number[] {
//   if (!root) {
//     return []
//   }
//   let max = 1
//   const mapHelper: Record<string, number> = {}
//   const dfs = (node: TreeNode) => {
//     if (mapHelper[node.val]) {
//       mapHelper[node.val]++
//       max = Math.max(max, mapHelper[node.val])
//     } else {
//       mapHelper[node.val] = 1
//     }
//     if (node.left) {
//       dfs(node.left)
//     }
//     if (node.right) {
//       dfs(node.right)
//     }
//   }
//   dfs(root)
//   return Object.keys(mapHelper)
//     .filter((key) => mapHelper[key] === max)
//     .map(Number)
// }

// 不使用额外空间 Morris 中序遍历
// 一棵 BST 的中序遍历序列是一个非递减的有序序列
export function findMode(root: TreeNode | null): number[] {
  let base = 0,
    count = 0,
    maxCount = 0
  let answer: number[] = []

  const update = (x: number) => {
    if (x === base) {
      ++count
    } else {
      count = 1
      base = x
    }
    if (count === maxCount) {
      answer.push(base)
    }
    if (count > maxCount) {
      maxCount = count
      answer = [base]
    }
  }

  let cur = root,
    pre = null
  while (cur !== null) {
    if (cur.left === null) {
      update(cur.val)
      cur = cur.right
      continue
    }
    pre = cur.left
    while (pre.right !== null && pre.right !== cur) {
      pre = pre.right
    }
    if (pre.right === null) {
      pre.right = cur
      cur = cur.left
    } else {
      pre.right = null
      update(cur.val)
      cur = cur.right
    }
  }
  return answer
}
