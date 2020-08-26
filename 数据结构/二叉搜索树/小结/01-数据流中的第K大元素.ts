// 数组
// class KthLargest {
//   k: number
//   nums: number[]
//   constructor(k: number, nums: number[]) {
//     this.k = k
//     nums.sort((a, b) => b - a)
//     this.nums = nums
//   }

//   add(val: number): number {
//     let pos = this.nums.length
//     for (let i = 0; i < pos; i++) {
//       if (val >= this.nums[i]) {
//         pos = i
//         break
//       }
//     }
//     this.nums.splice(pos, 0, val)
//     return this.nums[this.k - 1]
//   }
// }

// 二叉搜索树
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  cnt: number
  constructor(
    val?: number,
    left?: TreeNode | null,
    right?: TreeNode | null,
    cnt: number = 1
  ) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.cnt = cnt
  }
}

function addToTree(root: TreeNode, val: number) {
  root.cnt++
  if (val < root.val) {
    if (!root.left) {
      root.left = new TreeNode(val)
    } else {
      addToTree(root.left, val)
    }
  } else {
    if (!root.right) {
      root.right = new TreeNode(val)
    } else {
      addToTree(root.right, val)
    }
  }

  return root
}

function getKthLargest(root: TreeNode, k: number): TreeNode {
  // 因为要加上当前的节点。所以要加一
  const rightSumVal = (root.right ? root.right.cnt : 0) + 1

  if (rightSumVal === k) {
    return root
    // 大于0在左边
  } else if (rightSumVal < k) {
    // 在左边
    // 如果左边为空，而右边的数量又小于k
    if (!root.left) {
      return root
    }
    //找到左子树的第 k - rightSumVal 大的数
    return getKthLargest(root.left, k - rightSumVal)
  } else {
    // 在右边
    // 只能是rightSumVal = 1,k = 0
    if (!root.right) {
      return root
    } else {
      //继续往右边，右边的肯定都更大
      return getKthLargest(root.right, k)
    }
  }
}
export class KthLargest {
  root: TreeNode | null = null
  k: number
  constructor(k: number, nums: number[]) {
    this.k = k
    // 初始化树
    for (let i = 0; i < nums.length; i++) {
      if (!this.root) {
        this.root = new TreeNode(nums[i])
      } else {
        addToTree(this.root, nums[i])
      }
    }
  }

  add(val: number): number {
    if (!this.root) {
      this.root = new TreeNode(val)
    } else {
      addToTree(this.root, val)
    }
    return getKthLargest(this.root, this.k).val
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
