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

// export function swapPairs(head: ListNode | null): ListNode | null {
//   const res = new ListNode(0)
//   let h = res
//   h.next = head
//   while (h.next && h.next.next) {
//     let start = h.next // 1
//     let end = h.next.next // 2
//     start.next = end.next
//     end.next = start
//     h.next = end
//     h = start
//   }
//   return res.next
// }

// 递归
export function swapPairs(head: ListNode | null): ListNode | null {
  // If the list has no node or has only one node left.
  if (!head || !head.next) {
    return head
  }

  // Nodes to be swapped
  const firstNode = head
  const secondNode = head.next

  // Swapping
  firstNode.next = swapPairs(secondNode.next)
  secondNode.next = firstNode

  // Now the head is the second node
  return secondNode
}
