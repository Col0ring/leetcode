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

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || !k) {
    return head
  }
  let len = 1
  let copy: ListNode | null = head
  while (copy && copy.next) {
    len++
    copy = copy.next
  }
  const steps = k % len
  if (!steps) {
    return head
  }
  let ptr: ListNode = head
  for (let i = 0; i < len - steps - 1; i++) {
    ptr = ptr.next!
  }
  const newHead = ptr.next
  ptr.next = null
  copy.next = head
  return newHead
}
