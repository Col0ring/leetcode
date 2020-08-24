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

//中序遍历递归
// export class BSTIterator {
//   arr: number[] = []
//   constructor(root: TreeNode | null) {
//     this.dfs(root)
//   }
//   dfs(root: TreeNode | null) {
//     if (!root) return
//     this.dfs(root.left)
//     this.arr.push(root.val)
//     this.dfs(root.right)
//   }

//   next(): number {
//     return this.arr.shift()!
//   }

//   hasNext(): boolean {
//     return this.arr.length !== 0
//   }
// }

// 中序遍历迭代
// 注意这是一个二叉搜索树
export class BSTIterator {
  stack: (TreeNode | null)[] = []
  constructor(root: TreeNode | null) {
    // 推入左边
    while (root) {
      this.stack.push(root)
      root = root.left
    }
  }

  next(): number {
    //先弹出左子树
    let p = this.stack.pop()
    //保存当前弹出的值
    const res = p!.val
    // 左叶子 p.right 是 null
    p = p!.right
    while (p) {
      this.stack.push(p)
      p = p.left
    }
    return res
  }

  hasNext(): boolean {
    return this.stack.length !== 0
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
