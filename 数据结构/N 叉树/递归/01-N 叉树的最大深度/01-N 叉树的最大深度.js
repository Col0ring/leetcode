/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0
  }
  let max = 0
  const dfs = (node, level) => {
    if (node.children) {
      node.children.forEach((child) => {
        dfs(child, level + 1)
      })
    }
    max = Math.max(max, level)
  }
  dfs(root, 1)
  return max
}
