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

// 双指针
export function getKthFromEnd(
  head: ListNode | null,
  k: number
): ListNode | null {
  if (!head) {
    return null
  }
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  for (let i = 0; i < k; i++) {
    fast = fast!.next
  }
  while (fast) {
    slow = slow!.next
    fast = fast.next
  }
  return slow
}
