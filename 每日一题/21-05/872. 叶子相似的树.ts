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
export function leafSimilar(
  root1: TreeNode | null,
  root2: TreeNode | null
): boolean {
  const seq1: number[] = []
  if (root1) {
    dfs(root1, seq1)
  }

  const seq2: number[] = []
  if (root2) {
    dfs(root2, seq2)
  }
  // 因为是按照顺序推入的，所以可以直接转为字符串比较
  return seq1.toString() === seq2.toString()
}

const dfs = (node: TreeNode, seq: number[]) => {
  if (!node.left && !node.right) {
    seq.push(node.val)
  } else {
    if (node.left) {
      dfs(node.left, seq)
    }
    if (node.right) {
      dfs(node.right, seq)
    }
  }
}
