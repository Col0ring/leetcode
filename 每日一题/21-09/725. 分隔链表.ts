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

export function splitListToParts(
  head: ListNode | null,
  k: number
): Array<ListNode | null> {
  let n = 0
  let temp = head
  while (temp !== null) {
    n++
    temp = temp.next
  }
  let quotient = Math.floor(n / k),
    remainder = n % k

  const parts: (ListNode | null)[] = new Array(k).fill(null)
  let curr = head
  for (let i = 0; i < k && curr !== null; i++) {
    parts[i] = curr
    let partSize = quotient + (i < remainder ? 1 : 0)
    for (let j = 1; j < partSize; j++) {
      curr = curr!.next
    }
    const next = curr!.next
    curr!.next = null
    curr = next
  }
  return parts
}
