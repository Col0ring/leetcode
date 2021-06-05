/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
export function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  let newNode = new ListNode()
  newNode.next = head
  let current = head
  let pre = newNode
  while (current) {
    if (current.val === val) {
      pre.next = current.next
    } else {
      pre = current
    }
    current = current.next
  }
  return newNode.next
}
