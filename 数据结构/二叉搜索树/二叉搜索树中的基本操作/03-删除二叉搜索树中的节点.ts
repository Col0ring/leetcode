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

const successor = (root: TreeNode) => {
  root = root.right!
  while (root.left) {
    root = root.left
  }
  return root.val
}

const predecessor = (root: TreeNode) => {
  root = root.left!
  while (root.right) {
    root = root.right
  }
  return root.val
}

export function deleteNode(
  root: TreeNode | null,
  key: number
): TreeNode | null {
  if (!root) return null
  // delete from the right subtree
  if (key > root.val) root.right = deleteNode(root.right, key)
  // delete from the left subtree
  else if (key < root.val) root.left = deleteNode(root.left, key)
  // delete the current node
  else {
    // the node is a leaf
    if (!root.left && !root.right) root = null
    // the node is not a leaf and has a right child
    else if (root.right) {
      // 当前节点的值为右子树中较小的值
      root.val = successor(root)
      // 因为赋值了，那么原来那个节点需要被删除
      root.right = deleteNode(root.right, root.val)
    }
    // the node is not a leaf, has no right child, and has a left child
    else {
      // 后续节点应该是上一个根节点，但是我们并不想返回。所以使用前驱节点代替
      root.val = predecessor(root)
      root.left = deleteNode(root.left, root.val)
    }
  }
  return root
}
