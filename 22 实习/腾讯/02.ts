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
export function countLongest(root: TreeNode) {
  let max = 0
  function dfs(root: TreeNode | null): number {
    if (!root) {
      return 0
    }
    const left = dfs(root.left)
    const right = dfs(root.right)
    // 经过的节点最大个数
    // max = Math.max(max, left + right + 1)
    // 直接不 + 1 就是长度
    max = Math.max(max, left + right)
    // 深度
    return Math.max(left, right) + 1
  }
  dfs(root)
  // 节点的个数 - 1 就是长度
  //   return max - 1

  return max
}

var tree1 = {
  value: 1,
  left: {
    value: 2
  },
  right: {
    value: 3
  }
}
console.log(countLongest(tree1 as any)) // 2

var tree2 = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: {
        value: 6
      }
    },
    right: {
      value: 4
    }
  },
  right: {
    value: 5
  }
}
console.log(countLongest(tree2 as any)) // 4
