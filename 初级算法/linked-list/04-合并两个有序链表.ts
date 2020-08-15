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

// 递归
// export function mergeTwoLists(
//   l1: ListNode | null,
//   l2: ListNode | null
// ): ListNode | null {
//   if (l1 === null) {
//     return l2
//   } else if (l2 === null) {
//     return l1
//   } else if (l1.val < l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2)
//     return l1
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next)
//     return l2
//   }
// }

// 迭代
export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }
  let cur = new ListNode()
  let ans = cur
  while (l1 && l2) {
    if (l1.val > l2.val) {
      cur.next = l2
      l2 = l2.next
    } else {
      cur.next = l1
      l1 = l1.next
    }
    cur = cur.next
  }
  cur.next = l1 ? l1 : l2
  return ans.next
}
