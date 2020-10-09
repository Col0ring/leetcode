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
// 哈希
// function detectCycle(head: ListNode | null) {
//   const setHelper = new Set<ListNode>()
//   while (head) {
//     if (setHelper.has(head)) {
//       return head
//     } else {
//       setHelper.add(head)
//     }
//     head = head.next
//   }
//   return null
// }

// 双指针
export function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null
  }
  const getIntersect = (head: ListNode) => {
    let tortoise = head
    let hare = head
    while (hare !== null && hare.next !== null) {
      tortoise = tortoise.next!
      hare = hare.next.next!
      if (tortoise === hare) {
        return tortoise
      }
    }

    return null
  }
  const intersect = getIntersect(head)

  if (!intersect) {
    return null
  }
  let ptr1 = head
  let ptr2 = intersect
  while (ptr1 !== ptr2) {
    ptr1 = ptr1.next!
    ptr2 = ptr2.next!
  }
  return ptr2
}
