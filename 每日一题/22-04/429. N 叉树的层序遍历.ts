/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

class Node {
  val: number
  children: Node[]
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val
    this.children = []
  }
}

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
