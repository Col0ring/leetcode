/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
// 递归
// var cloneGraph = function (node) {
//   const clone = (node, map) => {
//     if (!node) return null
//     let newNode = map.get(node)
//     if (newNode) {
//       return newNode
//     }
//     newNode = new Node(node.val)
//     map.set(node, newNode)
//     node.neighbors.forEach((neighbor) => {
//       newNode.neighbors.push(clone(neighbor, map))
//     })
//     return newNode
//   }
//   return clone(node, new Map())
// }

// dfs
var cloneGraph = function (node) {
  if (!node) return null
  const map = new Map()
  const stack = [node]
  const newNode = new Node(node.val)
  map.set(node.val, newNode)
  while (stack.length) {
    // 在第一次的时候。currentNode 就是传入的 node，currentNewNode 就是 上面的 newNode
    let currentNode = stack.pop()
    let currentNewNode = map.get(currentNode.val)
    currentNode.neighbors.forEach((neighbor) => {
      let newNB = map.get(neighbor.val)
      if (!newNB) {
        stack.push(neighbor)
        newNB = new Node(neighbor.val)
        map.set(neighbor.val, newNB)
      }
      currentNewNode.neighbors.push(newNB)
    })
  }
  return newNode
}
