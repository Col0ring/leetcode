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

export function insertionSortList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head
  }
  const dummyHead = new ListNode(0)
  dummyHead.next = head
  // 已经排好序的最后一个节点
  let lastSorted = head,
    // 要排序的节点
    curr = head.next
  while (curr !== null) {
    if (lastSorted.val <= curr.val) {
      // 直接更新已排序节点
      lastSorted = lastSorted.next!
    } else {
      // 找到最后一个小于它的
      let prev = dummyHead
      while (prev.next!.val <= curr.val) {
        prev = prev.next!
      }
      lastSorted.next = curr.next
      curr.next = prev.next
      prev.next = curr
    }
    // 要排序的节点永远是最后一个已排序节点后面一个
    curr = lastSorted.next
  }
  return dummyHead.next
}
