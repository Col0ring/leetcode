/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
// bfs
var levelOrder = function (root) {
  if (!root) {
    return []
  }
  const queue = []
  const ans = []
  queue.push(root)
  while (queue.length) {
    let len = queue.length
    const arr = []
    while (len) {
      const node = queue.shift()
      arr.push(node.val)
      if (node.children) {
        queue.push(...node.children)
      }
      len--
    }
    ans.push(arr)
  }
  return ans
}

// dfs
var levelOrder = function (root) {
  if (!root) {
    return []
  }
  const ans = []
  const dfs = (node, level) => {
    ans[level] = ans[level] ?? []
    ans[level].push(node.val)
    if (node.children) {
      node.children.forEach((child) => {
        dfs(child, level + 1)
      })
    }
  }
  dfs(root, 0)
  return ans
}
