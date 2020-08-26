/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Node {
  constructor(public val: number, public children: Node[]) {}
}

// export function preorder(root: Node | null): number[] {
//   if (!root) {
//     return []
//   }
//   const ans: number[] = []
//   const helper = (root: Node) => {
//     ans.push(root.val)
//     if (root.children) {
//       root.children.forEach((child) => helper(child))
//     }
//   }
//   helper(root)
//   return ans
// }

// 迭代
export function preorder(root: Node | null) {
  if (!root) {
    return []
  }
  const ans = []
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()!
    ans.push(node.val)
    if (node.children) {
      node.children.reverse()
      stack.push(...node.children)
    }
  }
  return ans
}
