/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
class Node {
  constructor(public value: number, public children: Node[]) {}
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
