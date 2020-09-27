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
