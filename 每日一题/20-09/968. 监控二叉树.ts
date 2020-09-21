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

// 有三个状态:
// 0=>这个结点待覆盖
// 1=>这个结点已经覆盖
// 2=>这个结点上安装了相机

export function minCameraCover(root: TreeNode | null): number {
  let ans = 0
  const dfs = (node: TreeNode | null) => {
    if (node === null) {
      return 1
    }
    const left = dfs(node.left)
    const right = dfs(node.right)
    // 左右有一个没有被覆盖，那么这个就为监控
    if (left === 0 || right === 0) {
      ans++
      return 2
    }
    // 左右都被覆盖了，那么这个节点待覆盖，返回出去后第一次调用的最外层就加一
    if (left === 1 && right === 1) {
      return 0
    }
    // 子节点有一个为监控并且另一个节点要被覆盖
    if (left + right >= 3) {
      return 1
    }

    return -1
  }
  if (dfs(root) === 0) {
    ans++
  }
  return ans
}
