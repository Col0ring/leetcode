/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 递归
var lowestCommonAncestor = function (root, p, q) {
  // Value of current node or parent node.
  const parentVal = root.val

  // Value of p
  const pVal = p.val

  // Value of q;
  const qVal = q.val

  if (pVal > parentVal && qVal > parentVal) {
    // If both p and q are greater than parent
    return lowestCommonAncestor(root.right, p, q)
  } else if (pVal < parentVal && qVal < parentVal) {
    // If both p and q are lesser than parent
    return lowestCommonAncestor(root.left, p, q)
  } else {
    // We have found the split point, i.e. the LCA node.
    return root
  }
}

// 迭代
var lowestCommonAncestor = function (root, p, q) {
  // Value of p
  const pVal = p.val

  // Value of q;
  const qVal = q.val

  // Start from the root node of the tree
  let node = root

  // Traverse the tree
  while (node) {
    // Value of ancestor/parent node.
    const parentVal = node.val

    if (pVal > parentVal && qVal > parentVal) {
      // If both p and q are greater than parent
      node = node.right
    } else if (pVal < parentVal && qVal < parentVal) {
      // If both p and q are lesser than parent
      node = node.left
    } else {
      // We have found the split point, i.e. the LCA node.
      return node
    }
  }
  return null
}
