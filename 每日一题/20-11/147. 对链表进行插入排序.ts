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

export function insertionSortList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head
  }
  const dummyHead = new ListNode(0)
  dummyHead.next = head
  let lastSorted = head,
    curr = head.next
  while (curr !== null) {
    if (lastSorted.val <= curr.val) {
      lastSorted = lastSorted.next!
    } else {
      let prev = dummyHead
      while (prev.next!.val <= curr.val) {
        prev = prev.next!
      }
      lastSorted.next = curr.next
      curr.next = prev.next
      prev.next = curr
    }
    curr = lastSorted.next
  }
  return dummyHead.next
}
