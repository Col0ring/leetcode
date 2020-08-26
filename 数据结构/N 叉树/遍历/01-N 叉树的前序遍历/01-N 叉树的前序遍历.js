/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// 递归
var preorder = function (root) {
  if (!root) {
    return []
  }
  const ans = []
  const helper = (root) => {
    ans.push(root.val)
    if (root.children) {
      root.children.forEach((child) => helper(child))
    }
  }
  helper(root)
  return ans
}
// 迭代
var preorder = function (root) {
  if (!root) {
    return []
  }
  const ans = []
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    ans.push(node.val)
    if (node.children) {
      node.children.reverse()
      stack.push(...node.children)
    }
  }
  return ans
}
