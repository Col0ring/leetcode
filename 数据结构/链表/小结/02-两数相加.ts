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
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const add = (l1: ListNode | null, l2: ListNode | null, added: number) => {
    let n = new ListNode()
    !l1 && (l1 = new ListNode())
    !l2 && (l2 = new ListNode())
    let sum = l1.val + l2.val + added
    if (sum < 10) {
      added = 0
      n.val = sum
    } else {
      n.val = sum - 10
      added = 1
    }

    if (l1.next || l2.next || added) {
      n.next = add(l1.next, l2.next, added)
    }
    return n
  }
  return add(l1, l2, 0)
}
