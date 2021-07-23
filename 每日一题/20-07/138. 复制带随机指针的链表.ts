/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

class Node {
  val: number
  next: Node | null
  random: Node | null
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.random = random === undefined ? null : random
  }
}
const cachedNode = new Map<Node, Node | null>()
export function copyRandomList(head: Node | null): Node | null {
  if (head === null) {
    return null
  }
  const newNode = new Node(head.val)
  cachedNode.set(head, newNode)
  if (head.next) newNode.next = copyRandomList(head.next)
  if (head.random) newNode.random = cachedNode.get(head.random)!
  return newNode
}
