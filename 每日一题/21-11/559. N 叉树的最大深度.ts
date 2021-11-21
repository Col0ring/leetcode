/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

class Node {
  val: number
  children: Node[]
  constructor(val?: number, children?: Node[]) {
    this.val = val === undefined ? 0 : val
    this.children = children === undefined ? [] : children
  }
}

export function maxDepth(root: Node) {
  if (!root) {
    return 0
  }
  let max = 0
  const dfs = (node: Node, level: number) => {
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
