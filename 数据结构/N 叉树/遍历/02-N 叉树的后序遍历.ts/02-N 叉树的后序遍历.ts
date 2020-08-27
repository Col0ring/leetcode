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

// export function postorder(root: Node | null): number[] {
//   if (!root) {
//     return []
//   }
//   const ans: number[] = []
//   const helper = (root: Node) => {
//     if (root.children) {
//       root.children.forEach((child) => helper(child))
//     }
//     ans.push(root.val)
//   }
//   helper(root)
//   return ans
// }

// 迭代
export function postorder(root: Node | null) {
  if (!root) {
    return []
  }
  const ans = []
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()!
    ans.unshift(node.val)
    if (node.children) {
      stack.push(...node.children)
    }
  }
  return ans
}
