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
