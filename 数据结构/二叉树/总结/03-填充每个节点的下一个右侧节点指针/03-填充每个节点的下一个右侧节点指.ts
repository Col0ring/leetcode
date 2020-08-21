class Node {
  val: number
  next: Node | null
  left: Node | null
  right: Node | null
  constructor(
    val?: number,
    left?: Node | null,
    right?: Node | null,
    next?: Node | null
  ) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

/*
每个 node 左子树的 next , 就是 node 的右子树
每个 node 右子树的 next, 就是 node next 的 左子树
*/
// export function connect(root: Node | null): Node | null {
//   const dfs = (node: Node | null, next: Node | null) => {
//     if (node) {
//       node.next = next
//       dfs(node.left, node.right)
//       dfs(node.right, node.next ? node.next.left : null)
//     }
//   }
//   dfs(root, null)
//   return root
// }

// bfs
export function connect(root: Node | null): Node | null {
  if (!root) {
    return null
  }
  const queue = [root]
  while (queue.length > 0) {
    let n = queue.length
    while (n > 0) {
      const node = queue.shift()!
      n--
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
