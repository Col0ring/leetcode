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
  // 计算长度
  let len = 1
  let copy = head
  while (copy && copy.next) {
    len++
    copy = copy.next
  }
  const steps = k % len
  // 如果还是 0 就没动
  if (!steps) {
    return head
  }
  // 指针位置
  let ptr = head
  for (let i = 0; i < len - steps - 1; i++) {
    ptr = ptr.next!
  }
  // 新头
  const newHead = ptr.next
  ptr.next = null
  // 最后的后一个是第一
  copy.next = head
  return newHead
}
