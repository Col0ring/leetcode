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
export function findFrequentTreeSum(root: TreeNode | null): number[] {
  const cnt = new Map<number, number>()
  let maxCnt = 0

  const dfs = (node: TreeNode | null): number => {
    if (!node) {
      return 0
    }
    const sum = node.val + dfs(node.left) + dfs(node.right)
    cnt.set(sum, (cnt.get(sum) || 0) + 1)
    maxCnt = Math.max(maxCnt, cnt.get(sum)!)
    return sum
  }

  dfs(root)
  const list = []
  for (const [s, c] of cnt.entries()) {
    if (c === maxCnt) {
      list.push(s)
    }
  }
  const ans = new Array(list.length)
  for (let i = 0; i < list.length; ++i) {
    ans[i] = list[i]
  }
  return ans
}
