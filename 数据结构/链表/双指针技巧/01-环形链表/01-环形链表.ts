class ListNode {
  val = 0
  next: ListNode | null = null
  constructor(val: number) {
    this.val = val
  }
}
// 哈希

// function hasCycle(head: ListNode | null): boolean {
//   const setHelper = new Set<ListNode>()
//   while (head) {
//     if (setHelper.has(head)) {
//       return true
//     } else {
//       setHelper.add(head)
//     }
//     head = head.next
//   }
//   return false
// }

// 双指针
export function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return false
  }
  // 如果是环，快指针最终会追上慢指针
  let slow: ListNode = head
  let fast: ListNode | null = head.next
  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false
    }
    slow = slow.next!
    fast = fast.next.next
  }
  return true
}
