/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
/*
每个 node 左子树的 next , 就是 node 的右子树
每个 node 右子树的 next, 就是 node next 的 左子树
*/
var connect = function (root) {
  const dfs = (node, next) => {
    if (node) {
      node.next = next
      dfs(node.left, node.right)
      dfs(node.right, node.next ? node.next.left : null)
    }
  }
  dfs(root, null)
  return root
}

// bfs
var connect = function (root) {
  if (!root) {
    return null
  }
  const queue = [root]
  while (queue.length > 0) {
    let n = queue.length
    while (n > 0) {
      n--
      const node = queue.shift()
      if (n === 0) {
        node.next = null
      } else {
        node.next = queue[0]
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }
  return root
}
