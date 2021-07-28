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

export function distanceK(
  root: TreeNode | null,
  target: TreeNode | null,
  k: number
): number[] {
  if (!root) {
    return []
  }
  const parents = new Map<number, TreeNode>()
  const ans: number[] = []

  const findParents = (node: TreeNode) => {
    if (node.left) {
      parents.set(node.left.val, node)
      findParents(node.left)
    }
    if (node.right) {
      parents.set(node.right.val, node)
      findParents(node.right)
    }
  }

  // 从 root 出发 DFS，记录每个结点的父结点
  findParents(root)

  const findAns = (
    node: TreeNode | null,
    from: TreeNode | null,
    depth: number,
    k: number
  ) => {
    if (!node) {
      return
    }
    if (depth === k) {
      ans.push(node.val)
      return
    }
    if (node.left !== from) {
      findAns(node.left, node, depth + 1, k)
    }
    if (node.right !== from) {
      findAns(node.right, node, depth + 1, k)
    }
    if (parents.get(node.val) !== from) {
      findAns(parents.get(node.val)!, node, depth + 1, k)
    }
  }
  // 从 target 出发 DFS，寻找所有深度为 k 的结点
  findAns(target, null, 0, k)

  return ans
}
