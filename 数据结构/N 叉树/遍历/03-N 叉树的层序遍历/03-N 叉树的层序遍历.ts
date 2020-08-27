/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Node {
  constructor(public val: number, public children: Node[]) {}
}

// // bfs
// export function levelOrder(root: Node | null): number[][] {
//   if (!root) {
//     return []
//   }
//   const queue: Node[] = []
//   const ans: number[][] = []
//   queue.push(root)
//   while (queue.length) {
//     let len = queue.length
//     const arr: number[] = []
//     while (len) {
//       const node = queue.shift()!
//       arr.push(node.val)
//       if (node.children) {
//         queue.push(...node.children)
//       }
//       len--
//     }
//     ans.push(arr)
//   }
//   return ans
// }

// dfs
export function levelOrder(root: Node | null): number[][] {
  if (!root) {
    return []
  }
  const ans: number[][] = []
  const dfs = (node: Node, level: number) => {
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
