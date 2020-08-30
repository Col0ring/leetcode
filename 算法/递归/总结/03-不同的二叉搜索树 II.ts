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

export function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) return []
  const helper = (left: number, right: number): Array<TreeNode | null> => {
    if (left > right) return [null] //这里子树为的null很重要，二叉树最重要一点就是右子树的值一定比左子树的值大，所以 if(left>right) return [null];
    const res = []
    for (let i = left; i <= right; i++) {
      //当父节点从1到n的情况
      let leftBst = helper(left, i - 1) //这里左子树的值肯定比父节点小，所以范围是 [1,i-1]
      let rightBst = helper(i + 1, right) //这里右子树的值肯定比父节点大，所以范围是 [i+1,n]   这里主要就是构建递归二叉树
      // 左右都分别有不同种可能，所以需要嵌套遍历
      for (let leftKey of leftBst) {
        for (let rightKey of rightBst) {
          let root = new TreeNode(i)
          root.left = leftKey
          root.right = rightKey
          res.push(root)
        }
      }
    }
    return res
  }
  return helper(1, n)
}
