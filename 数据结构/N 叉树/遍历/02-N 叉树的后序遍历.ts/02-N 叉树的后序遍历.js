/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// 递归
var postorder = function (root) {
  if (!root) {
    return []
  }
  const ans = []
  const helper = (root) => {
    if (root.children) {
      root.children.forEach((child) => helper(child))
    }
    ans.push(root.val)
  }
  helper(root)
  return ans
}

// 迭代
var postorder = function (root) {
  if (!root) {
    return []
  }
  const ans = []
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    ans.unshift(node.val)
    if (node.children) {
      stack.push(...node.children)
    }
  }
  return ans
}
