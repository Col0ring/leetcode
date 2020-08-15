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

// 迭代
// function reverseList(head: ListNode | null): ListNode | null {
//   let current = head
//   let pre = null
//   while (current) {
//     let temp = current.next
//     current.next = pre
//     pre = current
//     current = temp
//   }
//   return current
// }

// 递归
export function reverseList(head: ListNode | null): ListNode | null {
  // 首先时最后一个返回 head
  if (!head || !head.next) return head
  const p = reverseList(head.next)
  head.next.next = head
  head.next = null
  return p
}
