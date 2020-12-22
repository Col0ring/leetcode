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

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }

  const ans: number[][] = []
  const nodeQueue: TreeNode[] = [root]

  let isOrderLeft = true

  while (nodeQueue.length) {
    const levelList: number[] = []
    const size = nodeQueue.length
    for (let i = 0; i < size; ++i) {
      const node = nodeQueue.shift()!
      if (isOrderLeft) {
        levelList.push(node.val)
      } else {
        levelList.unshift(node.val)
      }
      if (node.left !== null) {
        nodeQueue.push(node.left)
      }
      if (node.right !== null) {
        nodeQueue.push(node.right)
      }
    }
    ans.push(levelList)
    isOrderLeft = !isOrderLeft
  }
  return ans
}
