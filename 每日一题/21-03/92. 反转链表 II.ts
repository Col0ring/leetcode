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

export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  // 设置 dummyNode 是这一类问题的一般做法
  const dummy_node = new ListNode(-1)
  dummy_node.next = head
  let pre = dummy_node
  for (let i = 0; i < left - 1; ++i) {
    pre = pre.next!
  }

  let cur = pre.next!
  for (let i = 0; i < right - left; ++i) {
    const next = cur.next!
    cur.next = next.next
    next.next = pre.next
    pre.next = next
  }
  return dummy_node.next
}
