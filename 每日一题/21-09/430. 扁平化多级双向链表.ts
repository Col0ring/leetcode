/**
 * Definition for node.
 * class Node {
 *     val: number
 *     prev: Node | null
 *     next: Node | null
 *     child: Node | null
 *     constructor(val?: number, prev? : Node, next? : Node, child? : Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.prev = (prev===undefined ? null : prev);
 *         this.next = (next===undefined ? null : next);
 *         this.child = (child===undefined ? null : child);
 *     }
 * }
 */

class Node {
  val: number
  prev: Node | null
  next: Node | null
  child: Node | null
  constructor(val?: number, prev?: Node, next?: Node, child?: Node) {
    this.val = val === undefined ? 0 : val
    this.prev = prev === undefined ? null : prev
    this.next = next === undefined ? null : next
    this.child = child === undefined ? null : child
  }
}
export function flatten(head: Node): Node {
  let copy: Node | null = head
  while (copy) {
    const next: Node | null = copy.next
    if (copy.child) {
      const node = flatten(copy.child)
      copy.child = null
      copy.next = node
      node.prev = copy

      let end = node
      while (end.next) {
        end = end.next
      }
      end.next = next
      if (next) {
        next.prev = end
      }
    }
    copy = next
  }
  return head
}
