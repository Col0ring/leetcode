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
// 两次遍历
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   const dummy = new ListNode(0)
//   dummy.next = head
//   let length = 0
//   let first = head
//   // 先计算长度
//   while (first) {
//     length++
//     first = first.next
//   }
//   length -= n
//   first = dummy
//   while (length > 0) {
//     length--
//     first = first!.next
//   }
//   first!.next = first!.next!.next
//   return dummy.next
// }

// 一次遍历，双指针
export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  const dummy = new ListNode(0)
  dummy.next = head
  let first: ListNode | null = dummy
  let second: ListNode | null = dummy
  // 第一个指针先移动 n+1,这样等第一个指针到达 n 时，第二个指针正好时 n - 1
  for (let i = 0; i <= n; i++) {
    first = first!.next
  }
  while (first) {
    first = first.next
    second = second!.next
  }
  second!.next = second!.next!.next
  return dummy.next
}
