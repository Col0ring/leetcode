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

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return head
  }
  // 用做保存表头
  const dummy = new ListNode(0, head)

  let cur = dummy
  // 如果没有了
  while (cur.next && cur.next.next) {
    // 因为是升序，所以直接挨着比较就行了
    if (cur.next.val === cur.next.next.val) {
      const val = cur.next.val
      // 如果相等就移位
      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next
      }
    } else {
      // 不然直接下一个
      cur = cur.next
    }
  }
  return dummy.next
}
