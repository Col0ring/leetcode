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

// dfs + 回溯
export function pathSum(root: TreeNode | null, sum: number): number[][] {
  const ans: number[][] = []
  if (!root) {
    return ans
  }
  const arr: number[] = []
  const dfs = (node: TreeNode, sum: number): void => {
    // // sum并不一定是负数
    // if (sum < 0) {
    //   return
    // }
    arr.push(node.val)
    sum -= node.val
    if (!node.left && !node.right && sum === 0) {
      ans.push([...arr])
    }
    if (node.left) {
      dfs(node.left, sum)
    }
    if (node.right) {
      dfs(node.right, sum)
    }
    arr.pop()
  }

  dfs(root, sum)

  return ans
}
